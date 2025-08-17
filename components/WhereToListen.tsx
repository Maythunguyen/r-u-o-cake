"use client";

import React from "react";

const WhereToListen = () => {
  const channels = [
    {
      name: "Spotify",
      image:
        "https://m.media-amazon.com/images/I/51rttY7a+9L._h1_.png",
      link:
        "https://open.spotify.com/show/0OfapsCnZnRaXHgFDsC897?si=q-vwabLrTFmYTUTKWv6GUA&nd=1&dlsi=2581e863a8df406c",
    },
    {
      name: "Apple Podcasts",
      image:
        "https://www.pngall.com/wp-content/uploads/15/Apple-Podcast-Logo-PNG-Free-Image.png",
      link:
        "https://podcasts.apple.com/us/podcast/r-u-ocake/id1821605191",
    },
    {
      name: "Podcastle",
      image:
        "https://aifund.ai/wp-content/uploads/2021/08/aifund-podcastle-logo-01.1.svg",
      link:
        "https://shows.podcastle.ai/r-u-o-cake-dHGaWKbD",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <header className="mb-6 md:mb-10">
        <p className="text-sm md:text-base text-zinc-500">Where can I,</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900">
          Listen In?
        </h2>
      </header>

      {/* 1 col on mobile, 2 on md, 3 on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {channels.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-zinc-200 p-4 sm:p-5 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10"
            aria-label={`Listen on ${c.name}`}
          >
            <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden ring-1 ring-zinc-200 bg-white">
              {/* Use <Image> if you like; <img> works fine here */}
              <img
                src={c.image}
                alt={`${c.name} logo`}
                className="absolute inset-0 w-full h-full object-contain p-2"
                loading="lazy"
              />
            </div>

            <div className="flex-1">
              <div className="text-lg font-semibold text-zinc-900">
                Listen on {c.name}
              </div>
              <p className="text-sm text-zinc-500">
                Open in a new tab
              </p>
            </div>

            {/* subtle arrow */}
            <span className="ml-auto text-zinc-400 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WhereToListen;
