"use client";

import React from "react";

const ConnectWithUs = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16" id="connect-with-us">
      {/* Heading */}
      <header className="mb-6 md:mb-10">
        <p className="text-sm md:text-base text-zinc-500">How to,</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900">
          Connect with Us
        </h2>
      </header>

      {/* Follow Button (left aligned under heading) */}
      <a
        href="https://www.instagram.com/ruocake.pod/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-50 transition"
      >
        <img
          src="/ruocake.webp"
          alt="RU O'Cake badge"
          width={26}
          height={26}
          className="rounded-full object-cover"
        />
        Follow us on Instagram
      </a>

      {/* Instagram Reel embed (centered) */}
      <div className="flex justify-center mt-10">
        <div className="relative w-full max-w-xl aspect-[8.5/16] md:aspect-[10.5/16] rounded-2xl overflow-hidden ring-1 ring-zinc-200">
          <iframe
            src="https://www.instagram.com/reel/DLL5rmloEHm/embed"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            scrolling="no"
            title="Instagram Reel"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
