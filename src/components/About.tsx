import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/558198498446";
const INSTAGRAM_URL = "https://www.instagram.com/jonathasluz__/";
const INSTAGRAM_IMOBILIARIA_URL =
  "https://www.instagram.com/imobiliarianewpalace/";

const metrics = [
  { value: "10+", label: "Anos de experiência" },
  { value: "1000+", label: "Clientes atendidos" },
  { value: "100%", label: "Atendimento personalizado" },
] as const;

function About() {
  return (
    <section
      id="sobre"
      className="bg-bg-dark py-16 lg:py-24"
      aria-labelledby="sobre-titulo"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div
          className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-[0_12px_40px_rgb(0_0_0/0.35)] lg:mx-0"
          data-reveal="left"
        >
          <img
            src="/fotoJonathas.png"
            alt="Jonathas Luz, corretor de imóveis em Recife"
            className="block aspect-3/4 w-full object-cover object-top"
          />
        </div>

        <div className="max-w-xl" data-reveal="right">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Sobre mim
          </p>
          <h2
            id="sobre-titulo"
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-text-light"
          >
            Jonathas Luz
          </h2>
          <p className="mt-2 text-base font-medium text-text-muted">
            Corretor de Imóveis · Recife-PE
          </p>

          <ul className="mt-8 grid grid-cols-3 gap-4 border-y border-border-dark py-6 max-sm:grid-cols-1 max-sm:gap-5">
            {metrics.map((metric) => (
              <li key={metric.label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold tracking-tight text-accent lg:text-3xl">
                  {metric.value}
                </span>
                <span className="text-xs font-medium leading-snug text-text-muted lg:text-sm">
                  {metric.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
            <p>
              Sou CEO da{" "}
              <a
                href={INSTAGRAM_IMOBILIARIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
              >
                New Palace Imobiliária
              </a>{" "}
              e atuo há mais de 10 anos no mercado imobiliário. Ao longo dessa
              trajetória participei da realização de mais de 1.000 sonhos,
              ajudando famílias a conquistarem seu primeiro imóvel e
              investidores a encontrarem excelentes oportunidades.
            </p>
            <p>
              Sou especialista em Minha Casa Minha Vida, imóveis de médio e alto
              padrão e empreendimentos no litoral, oferecendo um atendimento
              estratégico, transparente e totalmente personalizado.
            </p>
            <p>
              Minha missão é proporcionar segurança durante toda a jornada de
              compra, transformando sonhos em realidade por meio de um
              atendimento humanizado.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              <FaWhatsapp className="text-base" aria-hidden />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-text-light/25 px-4 py-2.5 text-sm font-semibold text-text-light transition-colors hover:border-text-light hover:bg-text-light/5"
            >
              <FaInstagram className="text-base" aria-hidden />
              @jonathasluz__
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
