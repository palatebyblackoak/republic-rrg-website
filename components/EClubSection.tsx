"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";

export default function EClubSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="eclub" className="bg-surface py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <SectionLabel label="Stay Connected" centered />
        <h2 className="font-serif text-cream text-[40px] md:text-[48px] leading-tight">
          Join the Republic eClub.
        </h2>
        <p className="mt-5 text-muted text-[16px] max-w-lg">
          Be the first to know about promotions, events, and exclusive offers.
        </p>

        <ul className="mt-10 text-cream text-[14px] md:text-[15px] flex flex-col gap-3">
          {[
            "Discounts & Promotions",
            "Exclusive Newsletters",
            "Event Announcements",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent shrink-0"
                aria-hidden
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {submitted ? (
          <p className="mt-10 text-accent text-[14px] uppercase tracking-widest-2">
            Thanks. Welcome to the Republic.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mt-10 w-full max-w-lg flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-bg border border-cream/30 text-cream placeholder:text-muted px-4 py-4 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[12px] px-8 py-4 transition-colors"
            >
              Join Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
