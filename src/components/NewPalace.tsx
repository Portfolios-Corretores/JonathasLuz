import { FaInstagram, FaGlobe } from "react-icons/fa";
import { cloudinaryUrl } from "../lib/cloudinary";

const INSTAGRAM_IMOBILIARIA_URL =
  "https://www.instagram.com/imobiliarianewpalace/";
const SITE_IMOBILIARIA_URL = "https://www.imobiliarianewpalace.com.br/";
const FACHADA_IMAGE = cloudinaryUrl(
  "v1786108093/fachadaNewPalace_zjk0df.webp",
);

function NewPalace() {
  return (
    <section
      id="imobiliaria"
      className="bg-bg-dark pb-16 lg:pb-24"
      aria-labelledby="imobiliaria-titulo"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-xl lg:order-1" data-reveal="left">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            A imobiliária
          </p>
          <h2
            id="imobiliaria-titulo"
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-text-light"
          >
            New Palace Imobiliária
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
            <p>
              A New Palace Imobiliária é especializada em transformar o sonho da
              casa própria em realidade.
            </p>
            <p>
              Com atuação em Minha Casa Minha Vida, imóveis de médio e alto
              padrão e empreendimentos no litoral, oferece um atendimento
              completo, acompanhando o cliente desde a análise de crédito até a
              entrega das chaves.
            </p>
            <p>
              Nossa missão é proporcionar uma experiência segura, transparente e
              humanizada, tornando todo o processo de compra simples e
              confiável.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_IMOBILIARIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              <FaInstagram className="text-base" aria-hidden />
              @imobiliarianewpalace
            </a>
            <a
              href={SITE_IMOBILIARIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-text-light/25 px-4 py-2.5 text-sm font-semibold text-text-light transition-colors hover:border-text-light hover:bg-text-light/5"
            >
              <FaGlobe className="text-base" aria-hidden />
              Visitar o site
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl shadow-[0_12px_40px_rgb(0_0_0/0.35)] lg:mx-0 lg:max-w-none lg:order-2"
          data-reveal="right"
        >
          <img
            src={FACHADA_IMAGE}
            alt="Fachada da New Palace Imobiliária"
            className="aspect-4/3 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default NewPalace;
