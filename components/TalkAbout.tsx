"use client";

import React from "react";

const TalkAbout = () => {
  const themes = [
    {
      name: "Theme 1",
      title: "Dreams vs Reality",
      blurb:
        "A candid look at goals, expectations, and the plot twists of your twenties—how to dream big while staying grounded.",
    },
    {
      name: "Theme 2",
      title: "Lifelong Learning",
      blurb:
        "School’s out, learning’s not. From careers to curiosity, we unpack how to keep growing without burning out.",
    },
    {
      name: "Theme 3",
      title: "People and Places",
      blurb:
        "Friendships, family, romance, community—and the cities (or small towns) that shape who we’re becoming.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 lg:py-4 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12">
        {/* LEFT: What we talk about (card) */}
        <article className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
              What do we talk about?
            </h2>
          </header>

          <ul className="space-y-4 text-zinc-700 text-base leading-relaxed list-disc pl-5">
            <li>
              Episodes drop <span className="font-semibold">every Monday</span> and run in cycles of{" "}
              <span className="font-semibold">3</span> — a duo episode, plus a solo episode from both
              Ebony and May.
            </li>
            <li>
              Keep up to date with releases and get sneak peeks on our{" "}
              <a
                className="underline decoration-2 decoration-[#fcda74] underline-offset-4 hover:opacity-80"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              .
            </li>
            <li>
              Got an idea? Send us your{" "}
              <a
                className="underline decoration-2 decoration-[#f8dad8] underline-offset-4 hover:opacity-80"
                href="https://forms.gle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                episode suggestions
              </a>
              .
            </li>
          </ul>

          {/* Note / helper */}
          <div className="mt-6 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-600 w-fit">
            Start with the latest episode, or pick a theme below that matches your mood.
          </div>
        </article>

        {/* RIGHT: Theme cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((t) => (
            <div
              key={t.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-zinc-200 bg-white overflow-hidden">
                  <img
                    src="/ruocake.webp"
                    alt="RU O'Cake badge"
                    className="h-full w-full object-cover"
                  />
                </span>
                <div className="text-xs uppercase tracking-wide text-zinc-500">{t.name}</div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">{t.title}</h3>
              {/* <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">{t.blurb}</p> */}

              {/* Accent stripe */}
              <div className="mt-4 h-[6px] w-16 rounded-full bg-gradient-to-r from-[#f8dad8] to-[#fcda74]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalkAbout;
