"use client";

import React, { useState } from "react";

const Contact = () => {
  const email = "ruocake.pod@emailhub.kr";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      const temp = document.createElement("input");
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "RU O’Cake — Listener Message"
  )}&body=${encodeURIComponent(
    "Hi RU O’Cake team,\n\nI wanted to share...\n\n— Your Name"
  )}`;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20" id="contact">
      {/* Heading (kept) */}
      <header className="mb-10 md:mb-16">
        <p className="text-sm md:text-base text-zinc-500">Let’s,</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900">
          Contact to Us
        </h2>
      </header>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: actions */}
        <div className="flex flex-col gap-6">
          {/* Email card */}
          <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-zinc-500">
              Our email
            </p>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <code className="w-full sm:w-auto rounded-md bg-zinc-50 px-3 py-2 text-zinc-800 text-sm ring-1 ring-zinc-200 break-all">
                {email}
              </code>
              <button
                onClick={handleCopy}
                className="button-55 px-4 py-2 text-sm w-full sm:w-auto"
                aria-label="Copy email address"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Message card */}
          <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-zinc-500">
              Leave us message
            </p>
            <p className="mt-2 text-zinc-600 text-sm">
              We read every note. Tap the button below to open your email with a
              pre-filled subject and message.
            </p>
            <div className="mt-4">
              <a href={mailto} className="button-55 px-4 py-2 text-sm w-fit sm:w-fit inline-flex justify-center">
                Leave us message
              </a>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative">
          <div className="relative">
            {/* nicer mobile aspect; grows a bit wider on larger screens */}
            <div className="aspect-[3/3] sm:aspect-[10/10]">
              <img
                src="/mail.png"
                alt="Contact Us"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
