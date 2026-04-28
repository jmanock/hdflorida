"use client";

import { FormEvent, useState } from "react";
import { MailCheck } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="min-h-12 flex-1 rounded border border-white/30 bg-white px-4 text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sun-400 focus:ring-4 focus:ring-sun-400/30"
      />
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-sun-400 px-5 font-black text-ink shadow-sm transition hover:bg-sun-500"
      >
        <MailCheck className="h-5 w-5" aria-hidden="true" />
        Sign Up
      </button>
      {submitted ? (
        <p className="sm:self-center text-sm font-bold text-white">
          You&apos;re on the mock alert list.
        </p>
      ) : null}
    </form>
  );
}
