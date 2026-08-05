import { FaWhatsapp, FaStar } from "react-icons/fa";
import fundoHero from "../assets/hero-fundo.webp";

const WHATSAPP_URL = "https://wa.me/558198498446";
const GOOGLE_PERFIL_URL =
  "https://www.google.com/maps?cid=2445636624228145203";

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
          className="h-full w-full scale-105 object-cover object-center animate-hero-image blur-[0.4px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(21_24_30/0.82)_0%,rgb(21_24_30/0.68)_35%,rgb(21_24_30/0.45)_65%,rgb(21_24_30/0.35)_100%)] max-md:bg-[linear-gradient(180deg,rgb(21_24_30/0.5)_0%,rgb(21_24_30/0.65)_40%,rgb(21_24_30/0.85)_100%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl justify-start px-5 py-16 pb-28 lg:px-8 lg:py-24 lg:pb-32">
        <div className="flex w-full max-w-4xl flex-col items-start text-left max-md:max-w-none">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase animate-hero-fade lg:mb-5 lg:text-sm [animation-delay:0.15s]">
            Imóveis em Recife-PE
          </p>

          <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.1] tracking-tight text-text-light animate-hero-fade [animation-delay:0.3s]">
            Encontre o imóvel{" "}
            <em className="font-[Georgia,serif] italic font-semibold text-accent">ideal</em>
            <br />
            para viver ou investir.
          </h1>

          <p className="mt-5 max-w-2xl text-[clamp(0.95rem,1.6vw,1.2rem)] leading-relaxed text-text-muted animate-hero-fade lg:mt-6 [animation-delay:0.45s]">
            Apartamentos, coberturas e oportunidades de investimento
            cuidadosamente selecionados em Recife. Um portfólio curado para quem
            busca localização, arquitetura e valorização.
          </p>

          <a
            href={GOOGLE_PERFIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex max-w-full items-stretch gap-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-text-light backdrop-blur-md transition-colors hover:border-white/20 hover:bg-black/55 animate-hero-fade sm:gap-5 sm:px-10 sm:py-5 [animation-delay:0.55s]"
            aria-label="5,0 de 64 avaliações no Google — Boa Viagem, Recife PE"
          >
            <div className="flex min-w-0 flex-col justify-center gap-1">
              <div className="flex items-center gap-2">
                <span className="flex shrink-0 gap-0.5 text-[#2dd4bf]" aria-hidden>
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} className="text-[0.7rem] sm:text-xs" />
                  ))}
                </span>
                <span className="text-lg font-bold leading-none sm:text-xl">
                  5,0
                </span>
              </div>
              <span className="text-[0.7rem] leading-tight text-white/85 sm:text-sm">
                64 avaliações no Google
              </span>
            </div>

            <span className="w-px shrink-0 self-stretch bg-white/35" aria-hidden />

            <div className="flex min-w-0 flex-col justify-center gap-0.5">
              <span className="text-sm font-bold leading-tight sm:text-base">
                Boa Viagem
              </span>
              <span className="text-[0.7rem] leading-tight text-white/85 sm:text-xs">
                Recife — PE
              </span>
            </div>
          </a>

          <div className="mt-5 flex flex-wrap gap-3 animate-hero-fade max-sm:w-full max-sm:flex-col lg:mt-6 lg:gap-4 [animation-delay:0.7s]">
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
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        aria-hidden
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#3d5a7c] to-transparent" />
        <div className="absolute inset-x-[8%] -bottom-3 h-6 bg-[radial-gradient(ellipse_at_center,rgb(61_90_124/0.7)_0%,transparent_70%)] blur-md" />
      </div>
    </section>
  );
}

export default Hero;
