"use client";

import React, { useState } from "react";

const Contact = () => {
  const toEmail = "ruocake.pod@emailhub.kr";
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(toEmail);
      setCopied(true);
    } catch {
      const temp = document.createElement("input");
      temp.value = toEmail;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      setCopied(true);
    } finally {
      setTimeout(() => setCopied(false), 1600);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    if (!name || !email || !message) {
      setStatus({ ok: false, msg: "All fields are required." });
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to send message");
      }

      setStatus({ ok: true, msg: "Message sent successfully!" });
      form.reset();
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message ?? "Failed to send message" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20" id="contact">
      <header className="mb-10 md:mb-16">
        <p className="text-sm md:text-base text-zinc-500">Let’s,</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900">
          Contact Us
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6">
            <p className="text-xs sm:text-sm tracking-wide text-zinc-500">
              Email us at
            </p>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <code className="w-full sm:w-auto rounded-md bg-zinc-50 px-3 py-2 text-zinc-800 text-sm ring-1 ring-zinc-200 break-all">
                {toEmail}
              </code>
              <button
                onClick={handleCopy}
                type="button"
                className="button-55 px-4 py-2 text-sm w-full sm:w-auto"
                aria-label="Copy email address"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-zinc-900">Or send a message</h3>

          <form className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-8">
              <label className="block">
                <span>Your name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fcda74]"
                />
              </label>

              <label className="block">
                <span>Your email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-1 px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fcda74]"
                />
              </label>

              <label className="block">
                <span>Your message</span>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  className="w-full mt-1 px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fcda74]"
                  rows={4}
                />
              </label>
            </div>

            <button
              className="button-55 px-4 py-2 text-sm inline-flex justify-center disabled:opacity-50"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Leave us a message"}
            </button>

            {status && (
              <p className={`mt-3 text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>
                {status.msg}
              </p>
            )}
          </form>
        </div>

        <div className="relative">
          <div className="aspect-[3/3] sm:aspect-[10/10]">
            <img src="/mail.png" alt="Contact Us" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
