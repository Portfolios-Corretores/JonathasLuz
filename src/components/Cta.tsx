import { FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/558198498446";
const WHATSAPP_REUNIAO_URL = `https://wa.me/558198498446?text=${encodeURIComponent(
  "Olá, Jonathas! Gostaria de agendar uma reunião para uma consultoria personalizada sobre imóveis no litoral.",
)}`;

function Cta() {
  return (
    <section
      id="contato"
      className="bg-bg-dark py-16 lg:py-24"
      aria-labelledby="cta-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="rounded-2xl border border-border-dark bg-card-dark px-6 py-12 text-center shadow-[0_12px_40px_rgb(0_0_0/0.3)] sm:px-10 lg:px-16 lg:py-16"
          data-reveal="scale"
        >
          <h2
            id="cta-titulo"
            className="mx-auto max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-text-light"
          >
            Vamos encontrar seu imóvel ideal?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted">
            Fale diretamente comigo e receba uma consultoria personalizada para
            comprar seu imóvel no litoral com total segurança.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              <FaWhatsapp className="text-lg" aria-hidden />
              WhatsApp
            </a>
            <a
              href={WHATSAPP_REUNIAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-text-light/30 px-5 py-3.5 text-sm font-semibold text-text-light transition-colors hover:border-text-light hover:bg-text-light/5"
            >
              <FaCalendarAlt className="text-base" aria-hidden />
              Agendar reunião
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
