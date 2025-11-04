import React, { useState, useEffect } from "react";

export default function WhatsAppWidget({
  phone = "+918177001081",               // your WhatsApp number
  brand = "City Law College",          // your brand name
  online = true,
  greeting = "Hi, Need help?",
  defaultMessage = "Hi, I have a question!",
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  useEffect(() => {
    const saved = localStorage.getItem("wa_widget_open");
    if (saved !== null) setOpen(saved === "true");
  }, []);
  useEffect(() => {
    localStorage.setItem("wa_widget_open", String(open));
  }, [open]);

  const launchWhatsApp = () => {
    const url =
      `https://wa.me/${phone.replace(/[^\d]/g, "")}?text=` +
      encodeURIComponent(message || defaultMessage);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-[9999] font-sans flex flex-col items-end"
      aria-label="WhatsApp support"
    >
      {/* Chat Panel */}
      <div
        className={`transition-all duration-300 ease-out origin-bottom mb-3 ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[320px] max-w-[90vw] overflow-hidden rounded-2xl bg-white shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-b from-emerald-800 to-emerald-900 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/20" />
              <div>
                <p className="text-sm font-semibold leading-none">College Support</p>
                <p className="mt-0.5 text-xs text-white/90">
                  {brand} •{" "}
                  <span className={online ? "text-emerald-300" : "text-amber-200"}>
                    {online ? "Online" : "Offline"}
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded p-1 text-white/90 transition hover:bg-white/10"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="space-y-3 bg-[#efeae2] px-4 py-4">
            <div className="inline-block max-w-[85%] rounded-2xl bg-white px-3 py-2 text-sm shadow">
              {greeting}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2">
              <span aria-hidden>😊</span>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={defaultMessage}
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
              <button
                onClick={launchWhatsApp}
                className="rounded-full bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              >
                ➤
              </button>
            </div>

            <p className="pt-1 text-center text-[11px] text-zinc-500">By {brand}</p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        title="Chat on WhatsApp"
        aria-expanded={open}
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path fill="currentColor" d="M19.1 17.1c-.3-.1-1.7-.9-2-.9s-.5-.1-.7.2-.8.9-.9 1-.3.2-.6.1a6.9 6.9 0 0 1-2-1.3 7.3 7.3 0 0 1-1.4-1.8c-.2-.3 0-.5.1-.7l.5-.6.2-.3c.1-.2 0-.4 0-.6s-.7-2-1-2.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4s-1.1 1-1.1 2.4 1.1 2.8 1.3 3.1a15.1 15.1 0 0 0 3.5 3.6 11.7 11.7 0 0 0 3.8 2.1c.4.2.8.2 1.1.1s1.7-.7 2-1.4.3-1.2.2-1.3-.2-.2-.5-.3z"/>
          <path fill="currentColor" d="M16 3a13 13 0 0 0-11 19.5L3.2 29 9.7 27A13 13 0 1 0 16 3Zm7.5 20.5a10.7 10.7 0 0 1-5.8 3l-1 .1a10.6 10.6 0 0 1-5.7-1.6l-.4-.2-3.4.9.9-3.3-.3-.4A10.7 10.7 0 1 1 23.5 23.5Z"/>
        </svg>
      </button>
    </div>
  );
}
