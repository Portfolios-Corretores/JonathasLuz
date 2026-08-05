import { FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const PERFIL_GOOGLE_URL =
  "https://www.google.com/maps?cid=2445636624228145203";

const depoimentos = [
  {
    id: "1",
    nome: "Cliente Google",
    url: "https://share.google/zaoUJFYs9lOrZ8u0e",
    texto:
      "Excelente atendimento do início ao fim. Jonathas acompanhou toda a jornada com transparência e dedicação, tornando a compra do imóvel muito mais segura e tranquilizante.",
  },
  {
    id: "2",
    nome: "Cliente Google",
    url: "https://share.google/O93UPenKlEJtenmzN",
    texto:
      "Profissionalismo e atenção em cada detalhe. Indico o Jonathas para quem busca imóveis no litoral e um atendimento realmente humanizado.",
  },
  {
    id: "3",
    nome: "Cliente Google",
    url: "https://share.google/ZVg49wlDMzxZidZO6",
    texto:
      "Fui muito bem orientado durante todo o processo. Clareza, agilidade e compromisso — sem dúvida um corretor de confiança.",
  },
] as const;

function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="bg-bg-dark py-16 lg:py-24"
      aria-labelledby="depoimentos-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          data-reveal
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Depoimentos
            </p>
            <h2
              id="depoimentos-titulo"
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-text-light"
            >
              O que dizem no Google
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Avaliações reais de clientes no perfil do Google de Jonathas Luz.
            </p>
          </div>

          <a
            href={PERFIL_GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
          >
            Ver perfil no Google
            <FaExternalLinkAlt className="text-xs" aria-hidden />
          </a>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {depoimentos.map((item, index) => (
            <li
              key={item.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${index * 100}ms` }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border-dark bg-card-dark p-6 shadow-[0_8px_28px_rgb(0_0_0/0.25)] transition-colors hover:border-accent/40 sm:p-7"
              >
                <div
                  className="flex gap-1 text-accent"
                  aria-label="5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-[0.95rem]" />
                  ))}
                </div>

                <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-text-light">
                  “{item.texto}”
                </p>

                <div className="mt-6 border-t border-border-dark pt-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-text-light">
                      <FcGoogle className="text-xl" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-text-light">
                        {item.nome}
                      </p>
                      <p className="text-sm text-text-muted">Avaliação Google</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Depoimentos;
