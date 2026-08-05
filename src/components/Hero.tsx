import { FaWhatsapp } from "react-icons/fa";
import fundoHero from "../assets/fundo.webp";

const WHATSAPP_URL = "https://wa.me/558198498446";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-bg-dark"
      aria-label="Apresentação"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <img
          src={fundoHero}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-full w-full scale-105 object-cover object-center animate-hero-image blur-[2px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(21_24_30/0.82)_0%,rgb(21_24_30/0.68)_35%,rgb(21_24_30/0.45)_65%,rgb(21_24_30/0.35)_100%)] max-md:bg-[linear-gradient(180deg,rgb(21_24_30/0.5)_0%,rgb(21_24_30/0.65)_40%,rgb(21_24_30/0.85)_100%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl justify-start px-5 py-16 pb-28 lg:px-8 lg:py-24 lg:pb-32">
        <div className="flex w-full max-w-4xl flex-col items-start text-left max-md:max-w-none">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase animate-hero-fade lg:mb-5 lg:text-sm [animation-delay:0.15s]">
            Imóveis em Recife-PE
          </p>

          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.1] tracking-tight text-text-light animate-hero-fade [animation-delay:0.3s]">
            Transforme o sonho da casa própria em realidade.
          </h1>

          <p className="mt-5 max-w-2xl text-[clamp(0.95rem,1.6vw,1.2rem)] leading-relaxed text-text-muted animate-hero-fade lg:mt-6 [animation-delay:0.45s]">
            Descubra imóveis selecionados para quem valoriza localização,
            arquitetura, conforto e exclusividade. Um portfólio pensado para
            transformar a busca pelo imóvel ideal em uma experiência única.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-hero-fade max-sm:w-full max-sm:flex-col lg:mt-10 lg:gap-4 [animation-delay:0.6s]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-2 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 max-sm:w-full lg:px-6 lg:py-3 lg:text-base"
            >
              <FaWhatsapp className="text-base lg:text-lg" aria-hidden />
              Falar no Whatsapp
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center border border-text-light/35 px-5 py-2 text-sm font-semibold text-text-light transition-colors hover:border-text-light hover:bg-text-light/10 max-sm:w-full lg:px-6 lg:py-3 lg:text-base"
            >
              Conhecer meu trabalho
            </a>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 text-bg-dark"
        aria-hidden
      >
        <svg
          className="block h-10 w-full sm:h-14 lg:h-16"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0 64V28C240 8 480 0 720 0s480 8 720 28v36H0Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
