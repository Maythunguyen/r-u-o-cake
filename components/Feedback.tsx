"use client";

import React, { useState } from "react";

const StarRow = () => (
  <div className="text-[#C58A00] text-xl" aria-label="5 out of 5 stars">
    <span>★ ★ ★ ★ ★</span>
  </div>
);

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);

  const feedbacks = [
    {
      name: "Imani",
      jobtitle: "Designer",
      feedback: (
        <>
          “Super has transformed how I use{" "}
          <span className="underline decoration-[4px] decoration-[#f8b4bf]">
            Notion
          </span>
          .”
        </>
      ),
      img: "/l1.webp",
    },
    {
      name: "Dave",
      jobtitle: "Entrepreneur",
      feedback: (
        <>
          “No-code with Super has given me so much{" "}
          <span className="underline decoration-[4px] decoration-[#f8b4bf]">
            value
          </span>
          .”
        </>
      ),
      img: "/l2.webp",
    },
    {
      name: "Henry",
      jobtitle: "Editor",
      feedback: (
        <>
          “I love how simple and easy it is to create a{" "}
          <span className="underline decoration-[4px] decoration-[#f8b4bf]">
            site
          </span>
          .”
        </>
      ),
      img: "/l3.webp",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 mb-10">
      {/* Header */}
      <header className="mb-8 md:mb-10">
        <p className="text-sm md:text-base text-zinc-500">What's our,</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900">
          Listeners think?
        </h2>
      </header>

      {/* Feedback cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-32 lg:gap-16">
        {feedbacks.map((f) => (
          <article key={f.name} className="flex flex-col gap-5">
            <img
              src={f.img}
              alt={`${f.name} avatar`}
              className="h-16 w-16 rounded-full object-cover ring-1 ring-zinc-200"
            />
            <StarRow />
            <p className="text-sm md:text-base leading-8 text-zinc-900">{f.feedback}</p>
            <p className="text-lg">
              <strong>{f.name}</strong>
              <span className="text-zinc-500"> — {f.jobtitle}</span>
            </p>
          </article>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-3 button-55 transition"
        >
          <span className="text-lg">Leave us a review!</span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6">
            <h3 className="text-xl font-semibold text-zinc-900 mb-4">
              Leave a Review
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-600">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border border-zinc-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-600">Role</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border border-zinc-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-600">Feedback</label>
                <textarea
                  rows={4}
                  className="w-full mt-1 px-3 py-2 border border-zinc-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="button-55"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button-55"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
