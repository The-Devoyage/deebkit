"use client";

import { useState } from "react";
import { Callout } from "nextra/components";

export function EmailSignupForm({ callout }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg"
    >
      <div className="p-4 bg-white dark:bg-slate-900 rounded-xl space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          ✉ One email a week. Infinite side project fuel.
        </h1>
        {callout && <Callout type={callout.type}>{callout.text}</Callout>}
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 dark:border-slate-600 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="border-2 border-indigo-400 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-md shadow hover:opacity-90 transition min-w-auto md:min-w-48 cursor-pointer"
          >
            {status === "loading" ? "Joining..." : "Join the Dive"}
          </button>
        </div>
        {status === "success" && (
          <p className="text-green-600 dark:text-green-400">You're in! 🎉</p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400">Something went wrong. Try again.</p>
        )}
      </div>
    </form>
  );
}
