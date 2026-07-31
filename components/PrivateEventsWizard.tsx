"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";

type Occasion =
  | "Catering"
  | "Birthday"
  | "Anniversary"
  | "Corporate"
  | "Rehearsal Dinner"
  | "Other";

type FormState = {
  occasion: Occasion | "";
  date: string;
  guests: string;
  deliveryTime: string;
  venue: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

const OCCASIONS: Occasion[] = [
  "Catering",
  "Birthday",
  "Anniversary",
  "Corporate",
  "Rehearsal Dinner",
  "Other",
];

const STEPS = ["Occasion", "Details", "Contact"] as const;

const inputCls =
  "mt-2 w-full bg-bg border border-divider text-cream px-4 py-3 text-[15px] focus:outline-none focus:border-accent placeholder:text-muted/60";
const labelCls = "text-[11px] uppercase tracking-widest-2 text-muted";

export default function PrivateEventsWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    occasion: "",
    date: "",
    guests: "",
    deliveryTime: "",
    venue: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const isCatering = form.occasion === "Catering";

  const detailsComplete = isCatering
    ? form.date !== "" &&
      form.deliveryTime !== "" &&
      form.guests !== "" &&
      form.venue.trim() !== ""
    : form.date !== "" && form.guests !== "";

  const canAdvance =
    (step === 0 && form.occasion !== "") ||
    (step === 1 && detailsComplete) ||
    (step === 2 &&
      form.firstName.trim() !== "" &&
      form.lastName.trim() !== "" &&
      form.email.trim() !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAdvance) return;
    // TODO: wire submission destination (email, Formspree, or API route)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-divider bg-surface p-10 md:p-14 text-center">
        <SectionLabel label="Request Received" centered />
        <h3 className="font-serif text-cream text-[26px] md:text-[32px] leading-tight">
          Thank you, {form.firstName}.
        </h3>
        <p className="mt-6 text-muted text-[15px] leading-[1.8] max-w-md mx-auto">
          {isCatering
            ? `Our catering team will follow up within one business day about your ${form.guests}-guest event on ${form.date}.`
            : `Our events team will be in touch within one business day to plan your ${form.occasion.toLowerCase()} for ${form.guests} guests.`}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-divider bg-surface p-8 md:p-12"
    >
      <div className="flex items-center gap-3 mb-8">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-3 flex-1">
            <div className="flex items-center gap-3">
              <span
                className={`w-6 h-6 flex items-center justify-center text-[11px] font-medium border ${
                  i <= step
                    ? "border-accent text-accent"
                    : "border-divider text-muted"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`text-[11px] uppercase tracking-widest-2 ${
                  i <= step ? "text-cream" : "text-muted"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`h-px flex-1 ${
                  i < step ? "bg-accent" : "bg-divider"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div>
          <h3 className="font-serif text-cream text-[24px] md:text-[30px] leading-tight">
            What can we help with?
          </h3>
          <p className="mt-3 text-muted text-[14px]">
            Choose one — we'll ask a few tailored questions next.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {OCCASIONS.map((o) => {
              const active = form.occasion === o;
              return (
                <button
                  key={o}
                  type="button"
                  onClick={() => update("occasion", o)}
                  className={`text-left px-5 py-4 text-[14px] uppercase tracking-widest-2 border transition-colors ${
                    active
                      ? "border-accent text-cream bg-accent/10"
                      : "border-divider text-muted hover:border-accent hover:text-cream"
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 1 && !isCatering && (
        <div>
          <h3 className="font-serif text-cream text-[24px] md:text-[30px] leading-tight">
            When, and how many?
          </h3>
          <p className="mt-3 text-muted text-[14px]">
            An estimate is fine — we'll confirm details together.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className={labelCls}>Date of Event</span>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className={labelCls}>Number of Guests</span>
              <input
                type="number"
                min={1}
                required
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                placeholder="e.g. 25"
                className={inputCls}
              />
            </label>
          </div>
        </div>
      )}

      {step === 1 && isCatering && (
        <div>
          <h3 className="font-serif text-cream text-[24px] md:text-[30px] leading-tight">
            Tell us about the catering.
          </h3>
          <p className="mt-3 text-muted text-[14px]">
            These details help our team scope and quote your event.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className={labelCls}>Event Date</span>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className={labelCls}>Delivery / Setup Time</span>
              <input
                type="time"
                required
                value={form.deliveryTime}
                onChange={(e) => update("deliveryTime", e.target.value)}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className={labelCls}>Number of Guests</span>
              <input
                type="number"
                min={1}
                required
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                placeholder="e.g. 50"
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className={labelCls}>Venue / Delivery Address</span>
              <input
                type="text"
                required
                value={form.venue}
                onChange={(e) => update("venue", e.target.value)}
                placeholder="Address or venue name"
                className={inputCls}
              />
            </label>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-serif text-cream text-[24px] md:text-[30px] leading-tight">
            How can we reach you?
          </h3>
          <p className="mt-3 text-muted text-[14px]">
            Someone from our team will follow up within one business day.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className={labelCls}>First Name</span>
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className={labelCls}>Last Name</span>
              <input
                type="text"
                required
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className={labelCls}>Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className={labelCls}>
                Phone <span className="normal-case text-muted/60">(optional)</span>
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputCls}
              />
            </label>
          </div>
          <label className="block mt-6">
            <span className={labelCls}>
              Notes <span className="normal-case text-muted/60">(optional)</span>
            </span>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder={
                isCatering
                  ? "Menu preferences, dietary needs, staffing, or anything else we should know."
                  : "Menu preferences, dietary needs, anything we should know."
              }
              className={`${inputCls} resize-none`}
            />
          </label>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="text-[12px] uppercase tracking-widest-2 text-muted hover:text-cream disabled:opacity-0 disabled:pointer-events-none transition-colors"
        >
          ← Back
        </button>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={() => canAdvance && setStep((s) => s + 1)}
            disabled={!canAdvance}
            className="bg-accent hover:bg-accent-hover disabled:bg-divider disabled:text-muted text-white uppercase tracking-[0.15em] text-[12px] px-8 py-3 transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canAdvance}
            className="bg-accent hover:bg-accent-hover disabled:bg-divider disabled:text-muted text-white uppercase tracking-[0.15em] text-[12px] px-8 py-3 transition-colors"
          >
            Send Request
          </button>
        )}
      </div>
    </form>
  );
}
