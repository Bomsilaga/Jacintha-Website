"use client";

import { useMemo, useState } from "react";
import { services, site } from "@/lib/site";

const initial = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const field =
  "w-full border border-line bg-mist px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-3/60 transition-colors focus:border-petrol focus:outline-none";

/**
 * Composes a structured enquiry and hands it to the visitor's mail client.
 * No server or third-party form service is required for this to work; swap the
 * submit handler for a route handler once an email provider is connected.
 */
export default function EnquiryForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof initial) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const mailto = useMemo(() => {
    const subject = `Enquiry — ${form.service || "General"}${
      form.business ? ` — ${form.business}` : ""
    }`;
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service of interest: ${form.service}`,
      "",
      form.message,
    ].join("\n");
    return `${site.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="label text-ink-3">Your name *</span>
          <input
            required
            value={form.name}
            onChange={set("name")}
            className={`${field} mt-2.5`}
            placeholder="Jane Citizen"
            autoComplete="name"
          />
        </label>

        <label className="block">
          <span className="label text-ink-3">Business</span>
          <input
            value={form.business}
            onChange={set("business")}
            className={`${field} mt-2.5`}
            placeholder="Company or trading name"
            autoComplete="organization"
          />
        </label>

        <label className="block">
          <span className="label text-ink-3">Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            className={`${field} mt-2.5`}
            placeholder="you@business.com.au"
            autoComplete="email"
          />
        </label>

        <label className="block">
          <span className="label text-ink-3">Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className={`${field} mt-2.5`}
            placeholder="04XX XXX XXX"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="block">
        <span className="label text-ink-3">What do you need?</span>
        <select
          value={form.service}
          onChange={set("service")}
          className={`${field} mt-2.5 appearance-none`}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>

      <label className="block">
        <span className="label text-ink-3">Tell us about your product *</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={set("message")}
          className={`${field} mt-2.5 resize-y`}
          placeholder="What you make, where it is sold, what standard you are being held to, and any deadline you are working toward."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button type="submit" className="btn btn-solid">
          Send enquiry
        </button>
        <p className="label text-ink-3">Opens in your email app</p>
      </div>

      {sent ? (
        <p
          role="status"
          className="border border-petrol bg-aqua/20 px-4 py-3.5 text-sm text-petrol"
        >
          Your email app should now be open with the enquiry drafted. If nothing
          happened, email us directly at{" "}
          <a href={site.emailHref} className="link-draw font-medium">
            {site.email}
          </a>{" "}
          or call{" "}
          <a href={site.phoneHref} className="link-draw font-medium">
            {site.phoneDisplay}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
