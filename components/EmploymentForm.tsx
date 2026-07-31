"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { site } from "@/lib/site";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  position: string;
};

const inputCls =
  "mt-2 w-full bg-bg border border-divider text-cream px-4 py-3 text-[15px] focus:outline-none focus:border-accent placeholder:text-muted/60";
const labelCls = "text-[11px] uppercase tracking-widest-2 text-muted";

export default function EmploymentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    position: "",
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canSubmit =
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const subject = `Employment Application — ${form.firstName} ${form.lastName}`;
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Position: ${form.position || "—"}`,
      "",
      `Address: ${form.address}`,
      `City: ${form.city}`,
      `State: ${form.state}`,
      `Zip: ${form.zip}`,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-divider bg-surface p-10 md:p-14 text-center">
        <SectionLabel label="Application Sent" centered />
        <h3 className="font-serif text-cream text-[26px] md:text-[32px] leading-tight">
          Thank you, {form.firstName}.
        </h3>
        <p className="mt-6 text-muted text-[15px] leading-[1.8] max-w-md mx-auto">
          Your application is on its way. Our team will be in touch shortly. If
          your mail app didn&apos;t open, email us directly at{" "}
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
        Apply Now
      </h3>
      <p className="mt-3 text-muted text-[14px]">
        Fields marked * are required.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className={labelCls}>First Name *</span>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Last Name *</span>
          <input
            type="text"
            required
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
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
          <span className={labelCls}>Phone *</span>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block md:col-span-2">
          <span className={labelCls}>Position of Interest</span>
          <input
            type="text"
            placeholder="Server, cook, bartender, host…"
            value={form.position}
            onChange={(e) => update("position", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block md:col-span-2">
          <span className={labelCls}>Address</span>
          <input
            type="text"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>City</span>
          <input
            type="text"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>State</span>
          <input
            type="text"
            value={form.state}
            onChange={(e) => update("state", e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Zip Code</span>
          <input
            type="text"
            value={form.zip}
            onChange={(e) => update("zip", e.target.value)}
            className={inputCls}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className={`mt-10 w-full md:w-auto inline-block uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors ${
          canSubmit
            ? "bg-accent hover:bg-accent-hover text-white"
            : "bg-divider text-muted cursor-not-allowed"
        }`}
      >
        Submit Application
      </button>
    </form>
  );
}
