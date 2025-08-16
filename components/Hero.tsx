"use client";

import React from "react";
import { Highlight } from "./ui/highlight";
import {
  IconBrandSpotify,
  IconBrandApplePodcast,
} from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="text-base sm:text-sm md:text-md mb-4">
            When was the last time you asked yourself...
          </p>

          <h1 className="relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight text-zinc-900">
            R U O’Cake?
            {/* underline curve */}
            <svg
              className="absolute left-0 right-0 -bottom-3 w-full h-6 md:h-8"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M 2 10 C 20 25, 80 -5, 98 10"
                fill="none"
                stroke="#1f1f1f"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </h1>

          <span className="block mt-10 text-zinc-700 text-lg md:text-2xl font-semibold">
            Maybe never, but let this be your first!
          </span>

          <p className="mt-6 text-base sm:text-sm md:text-base text-zinc-700 max-w-prose">
            Welcome to this brand new podcast hosted by{" "}
            <Highlight from="#f8dad8" to="#f8dad8" className="text-zinc-900">
              Ebony
            </Highlight>{" "}
            and{" "}
            <Highlight from="#fcda74" to="#fcda74" className="text-zinc-900">
              May
            </Highlight>
            , two primary school besties wanting to inspire the world, one
            conversation at a time. The only cake on this menu is a slice of{" "}
            <span className="font-bold">authentic chaos and comfort</span>. We
            invite you to try some! Join us for our weekly check-ins to unpack
            new insights and ideas as we navigate our twenty-somethings. Let’s
            go! :)
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-12">
            <a
                href="https://open.spotify.com/show/0OfapsCnZnRaXHgFDsC897?si=q-vwabLrTFmYTUTKWv6GUA&nd=1&dlsi=4af39e673dc443eb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen on Spotify"
                className="btn-pill w-full md:w-auto justify-center"
            >
                <IconBrandSpotify width={22} height={22} />
                <span>Listen on <strong>Spotify</strong></span>
            </a>

            <a
                href="https://podcasts.apple.com/us/podcast/r-u-ocake/id1821605191"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen on Apple Podcasts"
                className="btn-pill btn-apple w-full md:w-auto justify-center"
            >
                <IconBrandApplePodcast width={22} height={22} />
                <span>Listen on <strong>Apple Podcasts</strong></span>
            </a>

          </div>
          
        </div>

        {/* Image */}
        <div className="relative order-1 md:order-2">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-zinc-200">
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="/hero.webp"
                alt="R U O’Cake"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
