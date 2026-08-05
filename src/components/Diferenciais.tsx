import { FaCheck } from "react-icons/fa";

const diferenciais = [
  "Mais de 10 anos de experiência no mercado imobiliário.",
  "Mais de 1.000 sonhos realizados.",
  "Especialistas em Minha Casa Minha Vida.",
  "Consultoria para imóveis de médio e alto padrão.",
  "Especialistas em empreendimentos no litoral.",
  "Atendimento humanizado e personalizado.",
  "Suporte completo do início ao fim da compra.",
  "Equipe altamente treinada.",
  "Transparência, segurança e compromisso em todas as etapas.",
] as const;

function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="bg-bg-dark py-16 lg:py-24"
      aria-labelledby="diferenciais-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Por que escolher
          </p>
          <h2
            id="diferenciais-titulo"
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-text-light"
          >
            Meus diferenciais
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            O que torna o meu atendimento único em cada etapa da jornada.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, index) => (
            <li
              key={item}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
              className="flex items-start gap-3 border-t border-border-dark pt-5 text-base leading-snug text-text-muted"
            >
              <span
                className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center bg-accent text-[0.65rem] text-on-accent"
                aria-hidden
              >
                <FaCheck />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Diferenciais;
