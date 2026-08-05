import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const ENDERECO =
  "Av. Caxangá, 5405 - Várzea, Recife - PE, 50740-000";

const GOOGLE_MAPS_PERFIL_URL =
  "https://www.google.com/maps?cid=2445636624228145203";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Caxang%C3%A1,+5405+-+V%C3%A1rzea,+Recife+-+PE,+50740-000&output=embed";

function Localizacao() {
  return (
    <section
      id="localizacao"
      className="bg-bg-dark py-16 lg:py-24"
      aria-labelledby="localizacao-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl" data-reveal="left">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Localização
            </p>
            <h2
              id="localizacao-titulo"
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-text-light"
            >
              Onde me encontrar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Atendimento presencial no escritório da New Palace Imobiliária, em
              localização estratégica na Av. Caxangá.
            </p>

            <div className="mt-8 flex items-start gap-3 text-text-light">
              <FaMapMarkerAlt
                className="mt-1 shrink-0 text-accent"
                aria-hidden
              />
              <address className="not-italic text-base leading-relaxed text-text-muted">
                {ENDERECO}
              </address>
            </div>

            <a
              href={GOOGLE_MAPS_PERFIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              Ir para o Google Maps
              <FaExternalLinkAlt className="text-xs" aria-hidden />
            </a>
          </div>

          <div
            className="overflow-hidden rounded-2xl border border-border-dark shadow-[0_12px_40px_rgb(0_0_0/0.35)]"
            data-reveal="right"
          >
            <iframe
              title="Localização no Google Maps — Av. Caxangá, 5405, Recife"
              src={GOOGLE_MAPS_EMBED_URL}
              className="aspect-4/3 w-full border-0 lg:aspect-auto lg:min-h-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Localizacao;
