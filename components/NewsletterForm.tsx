"use client";

import { FormEvent, useState } from "react";
import { MailCheck, Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          source: "hoteldealsflorida.org"
        })
      });

      if (!response.ok) {
        throw new Error("Unable to subscribe");
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row">
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
          className="min-h-12 flex-1 rounded-full border border-white/30 bg-white px-5 text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-4 focus:ring-amber-300/30"
      />
      <button
        type="submit"
          disabled={status === "loading"}
          className="btn btn-gold disabled:cursor-not-allowed disabled:opacity-70"
      >
          {status === "success" ? (
            <MailCheck className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Send className="h-5 w-5" aria-hidden="true" />
          )}
          {status === "loading" ? "Sending..." : "Send Me Deals"}
      </button>
      </div>
      {status === "success" ? (
        <p className="mt-3 text-sm font-bold text-white">
          You&apos;re in. Fresh Florida hotel deals will be saved for this list.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-sm font-bold text-amber-200">
          Something went wrong. Please try again in a moment.
        </p>
      ) : null}
    </form>
  );
}
