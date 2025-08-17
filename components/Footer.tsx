"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm sm:gap-10">
          <a
            href="#about"
            className="text-zinc-600 hover:text-zinc-900 transition"
          >
            About
          </a>
          <a
            href="#the-team"
            className="text-zinc-600 hover:text-zinc-900 transition"
          >
            The Team
          </a>
          <a
            href="#connect"
            className="text-zinc-600 hover:text-zinc-900 transition"
          >
            Connect with Us
          </a>
          <a
            href="#contact"
            className="text-zinc-600 hover:text-zinc-900 transition"
          >
            Contact
          </a>
          <a
            href="#faq"
            className="text-zinc-600 hover:text-zinc-900 transition"
          >
            FAQ
          </a>
        </nav>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} R U O’Cake? — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
