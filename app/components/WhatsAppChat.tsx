import { useState } from "react";
import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "447781103864";

const WhatsAppChat = () => {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isExpanded = isOpen || isHovered;

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();
    const text = trimmedMessage.length > 0 ? trimmedMessage : "Hi, I need help with maternal, child, or community care.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <section
      className="fixed bottom-5 right-4 z-50 flex items-end sm:right-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`mr-3 w-[min(20rem,calc(100vw-5.5rem))] origin-bottom-right rounded-2xl border border-green-200 bg-white/95 p-3 shadow-xl backdrop-blur transition-all duration-200 ${
          isExpanded
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        <p className="text-sm font-semibold text-slate-900">WhatsApp Us</p>
        <form onSubmit={handleSend} className="mt-2 flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type your message..."
            className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
            aria-label="Message for WhatsApp"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition hover:brightness-95"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M21 3 3 10.5l6.9 2.6L12.5 20 21 3zM10.8 12.7 6.4 11 17 6.5l-6.2 6.2z" />
            </svg>
            Send
          </button>
        </form>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:brightness-95"
        aria-expanded={isExpanded}
        aria-label="Open WhatsApp chat"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M12 2C6.5 2 2 6.3 2 11.7c0 1.9.6 3.7 1.7 5.3L2.6 22l5.1-1.1c1.4.8 2.9 1.2 4.3 1.2 5.5 0 10-4.3 10-9.7S17.5 2 12 2zm0 18.4c-1.3 0-2.7-.4-3.8-1.1l-.3-.2-3 .7.7-2.9-.2-.3c-.9-1.3-1.4-2.9-1.4-4.6 0-4.5 3.7-8.1 8.2-8.1s8.2 3.6 8.2 8.1-3.7 8.4-8.4 8.4zm4.5-6.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.5-.7-2.4-1.2-3.4-2.8-.2-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.3-.4.1-.1.1-.3 0-.5-.1-.1-.5-1.3-.8-1.8-.3-.5-.5-.4-.7-.4h-.5c-.2 0-.5.1-.7.4-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.9 3 4.6 4.2.6.3 1.1.5 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z" />
        </svg>
      </button>
    </section>
  );
};

export default WhatsAppChat;
