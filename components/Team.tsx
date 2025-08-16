"use client";

import React from "react";

const Team = () => {
  return (
    <section id="the-team" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Heading */}
      <header className="mb-14 md:mb-20">
        <p className="text-sm md:text-base text-zinc-500">Let’s,</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900">Meet the Hosts</h2>
      </header>

      {/* Hosts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* May */}
        <article className="grid grid-cols-1 gap-6">
          <figure className="w-full">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none overflow-hidden rounded-2xl">
              <div className="aspect-[5/5]">
                <img
                  src="/may.png"
                  alt="May"
                  className="absolute inset-0 h-auto w-[70%] object-cover"
                />
              </div>
            </div>
          </figure>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">May</h3>
            <p className="text-zinc-500 text-sm">Co-host and founder</p>
          </div>

          <div className="space-y-3 text-zinc-700">
            <p>
              May is passionate about psychology, mental health, music, and exploring cultures and
              languages. She fears conflict and worries about her mental health getting in the way.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Psychology and mental health advocate</li>
              <li>Music – trained classical violinist &amp; singer/songwriter wannabe</li>
              <li>Went to a Steiner school (where she met Ebony)</li>
              <li>Proud Asian-Australian currently living in the Philippines</li>
            </ul>
          </div>

          <div className="mt-4">
            <a
              href="https://www.instagram.com/maymays.corner/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-39"
            >
              See more music by May!
            </a>
          </div>
        </article>

        {/* Ebony */}
        <article className="grid grid-cols-1 gap-6">
          <figure className="w-full">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none overflow-hidden">
              <div className="aspect-[5/5]">
                <img
                  src="/ebony.png"
                  alt="Ebony"
                  className="absolute inset-0 h-auto w-[65%] object-cover"
                />
              </div>
            </div>
          </figure>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Ebony</h3>
            <p className="text-zinc-500 text-sm">Co-host and founder</p>
          </div>

          <div className="space-y-3 text-zinc-700">
            <p>
              Ebony is a bubbly and loving soul with a passion for dancing, baking, singing,
              performing, travelling and inspiring communities. She’s a bit of a country bumpkin,
              has a severe case of FOMO and struggles with people-pleasing tendencies.
            </p>
            <p>You might recognise her from TikTok as <strong>EbonyMayBakes</strong>!</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Founded her cake business at 16</li>
              <li>Went to a Steiner school (where she met May)</li>
            </ul>
          </div>

          <div className="mt-4">
            <a
              href="https://www.tiktok.com/@ebonymaybakess?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="button-39"
            >
              EbonyMayBakes TikTok
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Team;
