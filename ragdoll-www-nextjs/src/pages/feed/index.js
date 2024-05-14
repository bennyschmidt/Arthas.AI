'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Outfit } from 'next/font/google';
import { useState } from 'react';

import { Header } from '@/components';

import '@/app/globals.css';

const outfit = Outfit({ subsets: ['latin'] });

const IMAGE_SIZE = 512;
const NO_DATA = "There are no posts.";

const Feed = () => {
  const [posts] = useState([
    {
      title: "24 Free Fantasy Icons",
      href: "https://bennyschmidt.itch.io/24-free-fantasy-icons",
      src: "https://img.itch.zone/aW1nLzE2MTM1OTg5LnBuZw==/original/0dX9pE.png",
      author: "@benny",
      date: "Posted on May 13, 2024",
      dolls: [
        "Gandalf"
      ],
      model: {
        instruction: "mistral",
        image: "stable diffusion"
      }
    },
    {
      title: "10 Free Futuristic & Alien Images",
      href: "https://bennyschmidt.itch.io/10-free-futuristic-alien-images",
      src: "https://img.itch.zone/aW1nLzE2MTI3MDY0LnBuZw==/original/6zikSe.png",
      author: "@benny",
      date: "Posted on May 12, 2024",
      dolls: [
        "Cloud Strife",
        "The Alien"
      ],
      model: {
        instruction: "mistral",
        image: "stable diffusion"
      }
    },
    {
      title: "16 Free Cyberpunk Images",
      href: "https://bennyschmidt.itch.io/16-free-cyberpunk-images",
      src: "https://img.itch.zone/aW1nLzE2MTEyMzE2LnBuZw==/original/pnNjF8.png",
      author: "@benny",
      date: "Posted on May 12, 2024",
      dolls: [
        "Cloud Strife"
      ],
      model: {
        instruction: "mistral",
        image: "stable diffusion"
      }
    }
  ]);

  return (
    <div className={outfit.className}>
      <main className="flex min-h-screen flex-col items-center p-12 lg:p-24">
        <Header />
        <section className="max-w-3xl w-full mt-4">
          <h3 className="my-4">Ragdoll Creations</h3>
          <p className="opacity-40 mb-4">A curated feed of content created using Ragdoll including doll and model information.</p>
          {!posts?.length && <h3 className="text-center m-4 p-0 opacity-40">{NO_DATA}</h3>}
          <ul className="flex flex-col justify-center gap-4 w-full mt-8">
            {posts.map(({
              title,
              href,
              src,
              author,
              date,
              dolls,
              model
            }) => (
              <li key={href} className="flex-1 rounded-lg border border-solid border-slate-900 m-0 p-4">
                <h3 className="text-lg my-2">{title}</h3>
                <Link
                  href={href}
                  target="_blank"
                  className="relative block w-100 h-100"
                >
                  <Image
                    src={src}
                    alt="itch.io"
                    width={IMAGE_SIZE}
                    height={IMAGE_SIZE}
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </Link>
                <div className="flex justify-between items-center my-2 opacity-40 text-sm">
                  <p>{author}</p>
                  <p>{date}</p>
                </div>
                <div className="flex justify-between items-center my-2 text-xs">
                  <p className="flex justify-between items-center gap-2">{dolls.map(element => (
                    <span key={element} className="bg-slate-600 text-[white] px-3 py-1 rounded-full">{element.trim()}</span>)
                  )}</p>
                  <p className="flex justify-between items-center gap-2">
                    <span className="bg-[dodgerblue] text-[white] px-3 py-1 rounded-lg">
                      {model.instruction}
                    </span>
                    <span className="bg-[dodgerblue] text-[white] px-3 py-1 rounded-lg">
                      {model.image}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
};

export default Feed;
