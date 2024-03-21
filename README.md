# Arthas.AI

A web app for interacting with [ArthasGPT](https://github.com/bennyschmidt/ArthasGPT).

https://github.com/bennyschmidt/Arthas.AI/assets/45407493/dcfdbb68-3d3c-4bfe-8190-fa47db2e55ca

## Installation

1. Configure the [API](https://github.com/bennyschmidt/Arthas.AI/tree/master/arthas-api)

`cd arthas-api`

See the API `README.md`. You will need an OpenAI API key to get started.

2. Install dependencies

`nvm use && npm i`

3. Start the server

`npm start`

You should see something like this:

```
A worker has spawned.
A worker has spawned.
A worker has spawned.
A worker has spawned.
A worker has spawned.
A worker has spawned.
A worker has spawned.
A worker has spawned.
Cluster is online at http://localhost:8000
Worker online (#1).
Worker online (#2).
Worker online (#3).
Worker online (#4).
Worker online (#5).
Worker (#1) is listening for messages.
Worker (#3) is listening for messages.
Worker (#2) is listening for messages.
Worker (#5) is listening for messages.
Worker online (#6).
Worker online (#8).
Worker (#4) is listening for messages.
Worker online (#7).
Worker (#6) is listening for messages.
Worker (#8) is listening for messages.
Worker (#7) is listening for messages.
```

This means the server is running and handling concurrent requests on all CPU cores

4. Set up the [front-end](https://github.com/bennyschmidt/Arthas.AI/tree/master/arthas-react)

`cd ../arthas-react`

See the React `README.md`.

`nvm use && npm i`

5. Start the front-end

`npm start`

You should see the default UI:

![image](https://github.com/bennyschmidt/Arthas.AI/assets/45407493/d1980924-7a50-408e-b5c6-aa586743d1d5)

-----

## Usage

#### Using text models other than GPT-3.5

[How to change models](https://github.com/bennyschmidt/ArthasGPT/?tab=readme-ov-file#important-environment-variables)

#### Using image models other than DALL-E

[How to change models](https://github.com/bennyschmidt/ArthasGPT/?tab=readme-ov-file#important-environment-variables)

#### Arthas app

[How to use the app](https://github.com/bennyschmidt/Arthas.AI/blob/master/arthas-react/README.md)

#### API documentation

[How to run the API](https://github.com/bennyschmidt/Arthas.AI/blob/master/arthas-api/README.md)

-----

## Comparing Arthas.AI to other products

See [TolkienTest.md](./TolkienTest.md).

-----

## Case studies

- [**AI characters**](https://github.com/bennyschmidt/Arthas.AI/tree/master/arthas-react) (default) - Create personas and chat with them.

- [**Instant shopping assistants (by shop URL)**](https://github.com/bennyschmidt/Arthas.AI/tree/master/examples/instant-salesperson/arthas-react): Instantly create a shopping assistant for the e-commerce website or online catalog you're looking at to help you find the right products, confirm details like shipping costs, inventory, and discounts and to make purchasing decisions.

- **Comment bots**: Create persona users that participate in your app or website comment sections, forum posts, etc. to answer users' questions that they know the answer to.

- **Game NPCs**: Create NPCs capable of dynamic conversations scoped to their knowledge with unique mechanics like:
    - **Gatekeeping**: The player has to ask the right questions to learn a specific knowledge detail in order to advance in the game
    - **Progression**: The player has to have already asked about topics A, B, and C before knowledge D will be given
    - **Clue Following**: The player has to talk to several different personas to get the complete set of knowledge details in order to advance 
    - **Dynamic Vendors**: The player and vendor get more flexibility in how they negotiate, and the conversation is unique whether the vendor is flexible on price or not
    - **General Lore & Dialogue**: The player gets to have realistic and unique conversations with the characters of the story
    
- **Expert knowledge communities**: Ask questions in a Slack- or Discord-like chatroom full of dozens/thousands/millions of experts from throughout history, modern day, and all sourceable fiction - including made-up personas based on a subject like a "Mr. Calculus" or "Dr. Economics". Only the personas that know the answer to your question will respond in the chatroom.

- **Writing & storyboarding tools**: Instead of writing a story from beginning to end, design the story's characters in Arthas and create the story using these storyboarding tools. Even create a "narrator" persona with its own style and knowledge that you can prompt to come up with the narrative between dialogue. Accept/reject results, decide if pages should have corresponding images, re-order or edit pages, and choose themes like: Novel, Game Cinematic, Children's Book, Comic Strip, etc.

- **Customer support / salespeople**: The same UI as the [instant shopping assistant](https://github.com/bennyschmidt/Arthas.AI/tree/master/examples/instant-salesperson/arthas-react) but the persona is based on a larger body of fixed knowledge. This persona typically knows more about a company or process than the shopping assistant, but might not have details like live inventory or shipping rates on a specific item.
