"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const AMOUNTS = [25, 50, 100, 200, "Custom"] as const;
type Amount = (typeof AMOUNTS)[number];

function GiftCardMock({ amount }: { amount: Amount }) {
  const display = typeof amount === "number" ? `$${amount}` : "$—";
  return (
    <div className="perspective-[1200px]">
      <div
        className="relative w-[320px] sm:w-[400px] md:w-[460px] aspect-[1.586] rounded-[22px] p-7 md:p-9 flex flex-col justify-between transition-transform duration-[900ms] ease-out hover:rotate-0 hover:scale-[1.02]"
        style={{
          background:
            "linear-gradient(140deg, #1c1c1c 0%, #101010 55%, #0a0a0a 100%)",
          transform: "rotate(-4deg)",
          boxShadow:
            "0 40px 80px -20px rgba(0,0,0,0.75), 0 20px 40px -15px rgba(165,32,32,0.15)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[22px] opacity-[0.35]"
          style={{
            background:
              "radial-gradient(circle at 80% 0%, rgba(165,32,32,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="relative flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-accent">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-current"
                aria-hidden
              >
                <path d="M12 2l2.35 7.24H22l-6.18 4.49L18.17 21 12 16.51 5.83 21l2.35-7.27L2 9.24h7.65z" />
              </svg>
              <span className="text-[9px] uppercase tracking-widest-2">
                Est. 1998
              </span>
            </div>
            <p className="mt-4 font-serif text-cream text-[26px] md:text-[32px] leading-none tracking-tight">
              Republic
            </p>
            <p className="text-cream/50 text-[8px] uppercase tracking-widest-2 mt-1">
              of the Rio Grande
            </p>
          </div>
        </div>

        <div className="relative flex items-end justify-between">
          <p className="text-cream/40 text-[9px] uppercase tracking-widest-2">
            Gift Card
          </p>
          <p className="font-serif text-cream text-[42px] md:text-[54px] leading-none">
            {display}
          </p>
        </div>
      </div>
    </div>
  );
}

function DollarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.25"
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12M9 8.5a2.5 2.5 0 015 0c0 1.4-1.5 2-3 2.3-1.5.3-3 .8-3 2.2a2.5 2.5 0 005 0"
      />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function NoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.25"
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
      />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.25"
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
      />
    </svg>
  );
}

export default function GiftCardConfigurator() {
  const [amount, setAmount] = useState<Amount>(100);

  return (
    <>
      {/* Beat 1: Hero — the card is the hero */}
      <section className="bg-bg pt-24 md:pt-32 pb-24 md:pb-40 flex flex-col items-center px-6">
        <GiftCardMock amount={amount} />
        <h1 className="mt-20 md:mt-28 font-serif text-cream text-[52px] sm:text-[72px] md:text-[104px] leading-[0.95] tracking-tight text-center max-w-4xl">
          A gift, well plated.
        </h1>
        <p className="mt-6 md:mt-8 text-muted text-[16px] md:text-[18px] max-w-md text-center leading-relaxed">
          Republic, in any amount. Delivered instantly.
        </p>
      </section>

      {/* Beat 2: Amount selector + CTA */}
      <section className="bg-bg py-24 md:py-40 flex flex-col items-center px-6">
        <p className="text-[10px] md:text-[11px] uppercase tracking-widest-3 text-muted">
          Choose an amount
        </p>
        <div className="mt-8 flex flex-wrap gap-2 md:gap-3 justify-center max-w-xl">
          {AMOUNTS.map((a) => {
            const active = amount === a;
            const label = typeof a === "number" ? `$${a}` : "Custom";
            return (
              <button
                key={String(a)}
                onClick={() => setAmount(a)}
                className={`px-6 md:px-7 py-3 rounded-full text-[13px] md:text-[14px] border transition-all ${
                  active
                    ? "bg-cream text-bg border-cream"
                    : "border-white/15 text-cream/70 hover:border-white/40 hover:text-cream"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <a
          href={site.giftCards}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 md:mt-16 inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-10 py-4 rounded-full transition-colors"
        >
          Buy a Gift Card
        </a>
        <a
          href={site.giftCards}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-muted hover:text-cream text-[13px] transition-colors"
        >
          Prefer a physical card?
        </a>
      </section>

      {/* Beat 3: How it works — icons only, minimal words */}
      <section className="bg-bg py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {[
            { Icon: DollarIcon, text: "Pick amount" },
            { Icon: NoteIcon, text: "Add a note" },
            { Icon: BoltIcon, text: "Delivered instantly" },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex flex-col items-center text-center">
              <Icon className="w-9 h-9 md:w-10 md:h-10 text-cream/80" />
              <p className="mt-5 text-cream text-[12px] md:text-[13px] uppercase tracking-widest-2">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Beat 4: Fine print */}
      <section className="bg-bg pb-32 md:pb-48 pt-6 text-center px-6">
        <p className="text-muted text-[11px] md:text-[12px] tracking-wide">
          Redeemable in-restaurant. Never expires.
        </p>
      </section>
    </>
  );
}
