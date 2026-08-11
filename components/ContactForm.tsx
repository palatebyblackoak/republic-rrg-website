"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { site } from "@/lib/site";
import { submitForm } from "@/lib/submitForm";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const inputCls =
  "mt-2 w-full bg-bg border border-divider text-cream px-4 py-3 text-[15px] focus:outline-none focus:border-accent placeholder:text-muted/60";
const labelCls = "text-[11px] uppercase tracking-widest-2 text-muted";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canSubmit =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || sending) return;
    setSending(true);
    setError(null);
    try {
      await submitForm("contact", form);
      setSubmitted(true);
    } catch {
      setError(
        `Something went wrong sending your message. Please email us directly at ${site.email}.`
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-divider bg-surface p-10 md:p-14 text-center">
        <SectionLabel label="Message Sent" centered />
        <h3 className="font-serif text-cream text-[26px] md:text-[32px] leading-tight">
          Thank you, {form.name}.
        </h3>
        <p className="mt-6 text-muted text-[15px] leading-[1.8] max-w-md mx-auto">
          Your message has been received. We&apos;ll be in touch shortly. For
          anything urgent, reach us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-accent hover:text-accent-hover"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-divider bg-surface p-8 md:p-12"
    >
      <h3 className="font-serif text-cream text-[24px] md:text-[30px] leading-tight">
        Send a Message
      </h3>
      <p className="mt-3 text-muted text-[14px]">
        Fields marked * are required.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <label className="block md:col-span-2">
          <span className={labelCls}>Name *</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Email *</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block md:col-span-2">
          <span className={labelCls}>Subject</span>
          <input
            type="text"
            placeholder="Question, feedback, media inquiry…"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block md:col-span-2">
          <span className={labelCls}>Message *</span>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${inputCls} resize-y min-h-[140px]`}
          />
        </label>
      </div>

      {error && (
        <p className="mt-8 text-[13px] text-accent" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit || sending}
        className={`mt-10 w-full md:w-auto inline-block uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors ${
          canSubmit && !sending
            ? "bg-accent hover:bg-accent-hover text-white"
            : "bg-divider text-muted cursor-not-allowed"
        }`}
      >
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
