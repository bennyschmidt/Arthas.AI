/**
 * Topic
 * Post a new topic
 */

const { randomUUID } = require('crypto');

const {
  DEFAULT_NAME: ragdollName,
  DEFAULT_KNOWLEDGE_URI: ragdollKnowledgeURI,
  DEFAULT_WRITING_STYLE: ragdollWritingStyle,
  DEFAULT_WRITING_TONE: ragdollWritingTone
} = require('ragdoll-core/src/utils/strings');

const RAGDOLL_URI = 'http://localhost:8000';

module.exports = asyncCache => async (req, res) => {
  let body = [];

  req
    .on('data', chunk => {
      body.push(chunk);
    })
    .on('end', async () => {
      body = Buffer.concat(body).toString();

      const {
        topic = '',
        text = ''
      } = JSON.parse(body || '{}');

      if (!(/[a-zA-Z0-9-_.~%]{1,900}/).test(topic) || !(/[a-zA-Z0-9-_.~%]{1,8000}/).test(text)) {
        res.end(JSON.stringify({
          error: {
            message: 'Bad request.'
          }
        }));

        return;
      }

      const comments = await asyncCache.getItem('comments');

      const topicId = randomUUID();
      const createdAt = new Date().toISOString();

      await asyncCache.setItem('comments', {
        ...comments,

        [topicId]: {
          id: topicId,
          authorName: 'Anonymous User',
          topic,
          text,
          comments: {},
          createdAt
        }
      });

      res.end(JSON.stringify({
        success: true
      }));

      // The bot should parse the question if its name is
      // mentioned in the topic or supporting text

      let query;

      if (topic.toLowerCase().split(' ').includes(ragdollName.toLowerCase())) {
        query = topic;
      } else if (text.toLowerCase().split(' ').includes(ragdollName.toLowerCase())) {
        query = text;
      }

      if (query) {
        const ragdollConfig = {
          name: ragdollName,
          knowledgeURI: ragdollKnowledgeURI,
          avatarURL: '',
          artStyle: null,
          writingStyle: ragdollWritingStyle,
          writingTone: ragdollWritingTone
        };

        const configResponse = await fetch(`${RAGDOLL_URI}/v1/configure`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ragdollConfig)
        });

        if (configResponse?.ok) {
          const { error } = await configResponse.json();

          if (error) return;

          const promptResponse = await fetch(`${RAGDOLL_URI}/v1/prompt`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              key: ragdollKnowledgeURI,
              input: query
            })
          });

          if (promptResponse?.ok) {
            const { error, answer = {} } = await promptResponse.json();

            if (error || answer.pending) return;

            // Post bot comment

            await fetch(`${RAGDOLL_URI}/v1/comment`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                authorName: ragdollName,
                topicId,
                text: answer.text
              })
            });
          }
        }
      }
    });
};
