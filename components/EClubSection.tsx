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

        <ul className="mt-8 text-cream text-[14px] space-y-2">
          <li>✓ Discounts &amp; Promotions</li>
          <li>✓ Exclusive Newsletters</li>
          <li>✓ Event Announcements</li>
        </ul>

        {submitted ? (
          <p className="mt-10 text-accent text-[14px] uppercase tracking-widest-2">
            Thanks — welcome to the Republic.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mt-10 w-full max-w-lg flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-bg border border-cream/30 text-cream placeholder:text-muted px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[12px] px-6 py-3 transition-colors"
            >
              Join Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
