"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#111111] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-4">Newsletter</p>
        <h2 className="text-2xl lg:text-3xl tracking-tight mb-4">Stay in Touch</h2>
        <p className="text-white/70 mb-8">Be the first to know about new arrivals and seasonal edits</p>
        {submitted ? (
          <p className="text-sm">Thank you for subscribing.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-[#111111] text-sm tracking-[0.2em] uppercase hover:bg-[#F4F4F2] transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
