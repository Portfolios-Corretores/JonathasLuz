import { useEffect, useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const WHATSAPP_URL = "https://wa.me/558198498446";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const atTop = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ${
        atTop
          ? "border-b border-transparent bg-transparent"
          : "border-b border-bg-dark/10 bg-bg-light/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <a href="#inicio" className="group flex shrink-0 items-baseline gap-x-2">
          <span
            className={`text-lg font-semibold tracking-tight transition-colors sm:text-xl ${
              atTop
                ? "text-text-light group-hover:text-text-light/80"
                : "text-bg-dark group-hover:text-bg-dark/80"
            }`}
          >
            Jonathas Luz
          </span>
          <span
            className={`hidden sm:inline ${atTop ? "text-text-light/40" : "text-bg-dark/30"}`}
            aria-hidden
          >
            |
          </span>
          <span
            className={`hidden text-xs font-medium tracking-wide sm:inline ${
              atTop ? "text-text-muted" : "text-bg-dark/55"
            }`}
          >
            CRECI 14939
          </span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  atTop
                    ? "text-text-light/80 hover:text-text-light"
                    : "text-bg-dark/75 hover:text-bg-dark"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FaWhatsapp className="text-base" aria-hidden />
            Falar no Whatsapp
          </a>

          <button
            type="button"
            className={`inline-flex items-center justify-center p-2 md:hidden ${
              atTop ? "text-text-light" : "text-bg-dark"
            }`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-bg-dark/10 bg-bg-light/95 px-5 py-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2.5 text-sm font-medium text-bg-dark/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-bg-dark/50">CRECI 14939</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-accent px-4 py-3 text-sm font-semibold text-on-accent"
            onClick={() => setMenuOpen(false)}
          >
            <FaWhatsapp className="text-base" aria-hidden />
            Falar no Whatsapp
          </a>
        </div>
      )}
    </header>
  );
}

export default Nav;
