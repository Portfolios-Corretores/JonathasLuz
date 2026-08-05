import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/558198498446";

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgb(0_0_0/0.35)] transition-transform hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:right-6 sm:bottom-6 sm:size-16"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" aria-hidden />
    </a>
  );
}

export default WhatsAppFloat;
