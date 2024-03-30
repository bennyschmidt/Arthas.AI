import fs from 'fs';
import path from 'path';

import { slugify } from '@/utils';

export default async function (req, res) {
  let casts = [];

  const manifestPath = path.join(process.cwd(), '/src/data/cast.manifest.json');
  const manifestFile = fs.readFileSync(manifestPath);
  const manifest = JSON.parse(manifestFile);

  for (const author of Object.keys(manifest)) {
    const authorSlug = slugify(author);

    const files = manifest[author];

    for (const file of files) {
      const fileSlug = slugify(file);
      const castPath = path.join(process.cwd(), `/src/data/${authorSlug}/${fileSlug}/cast.json`);
      const castFile = fs.readFileSync(castPath);
      const cast = JSON.parse(castFile);

      casts = [
        ...casts,

        {
          name: cast.name,
          author: cast.author,
          description: cast.description,
          rating: 0,
          imageURL: cast.dolls[0].avatarURL,
          unitCount: cast.dolls.length,
          createdAt: cast.createdAt
        }
      ]
    }
  }

  res
    .status(200)
    .json({
      status: 200,
      ok: true,
      casts
    });
}
