import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/558198498446";
const INSTAGRAM_URL = "https://www.instagram.com/jonathasluz__/";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-dark bg-bg-dark">
      <div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:flex-row sm:text-left lg:px-8"
        data-reveal
      >
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-text-muted sm:justify-start">
            <span className="font-semibold text-text-light">Jonathas Luz</span>
            <span className="text-text-muted/40" aria-hidden>
              |
            </span>
            <span>CRECI 14939</span>
          </p>
          <p className="text-xs text-text-muted/70">
            © {year} Jonathas Luz. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex size-10 items-center justify-center bg-accent text-on-accent transition-opacity hover:opacity-90"
          >
            <FaWhatsapp className="text-lg" aria-hidden />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex size-10 items-center justify-center border border-text-light/25 text-text-light transition-colors hover:border-text-light hover:bg-text-light/5"
          >
            <FaInstagram className="text-lg" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
