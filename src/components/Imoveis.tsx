import { useEffect, useId, useState } from "react";
import {
  FaBath,
  FaBed,
  FaRulerCombined,
  FaTimes,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import imgPontal from "../assets/imoveis/pontal.webp";
import imgCostaDourada from "../assets/imoveis/costa.webp";
import imgOlinda from "../assets/imoveis/olinda.webp";

const WHATSAPP_NUMBER = "558198498446";

export type Imovel = {
  id: string;
  nome: string;
  localizacao: string;
  precoApartirDe: string;
  metragem: string;
  quartos: number;
  banheiros: number;
  descricao: string;
  destaque: string;
  imagem: string;
};

const imoveis: Imovel[] = [
  {
    id: "pontal-maracaipe",
    nome: "Pontal Maracaipe",
    localizacao: "Fragoso, Paulista - PE",
    precoApartirDe: "R$ 189.000",
    metragem: "42,15 m²",
    quartos: 2,
    banheiros: 1,
    destaque: "Litoral Norte",
    imagem: imgPontal,
    descricao:
      "Empreendimento no litoral de Paulista, com localização estratégica e tipologias pensadas para moradia ou investimento. Ideal para quem busca proximidade com o mar, praticidade e valorização na região.",
  },
  {
    id: "start-costa-dourada",
    nome: "Start Costa Dourada",
    localizacao: "Garapu, Cabo de Santo Agostinho - PE",
    precoApartirDe: "R$ 210.000",
    metragem: "47,38 m²",
    quartos: 2,
    banheiros: 1,
    destaque: "Litoral Sul",
    imagem: imgCostaDourada,
    descricao:
      "Apartamentos no litoral sul de Pernambuco, em região de forte crescimento. Uma opção equilibrada entre qualidade de vida, acesso às praias e potencial de valorização para quem deseja investir com segurança.",
  },
  {
    id: "rooftop-olinda-prime",
    nome: "Rooftop Olinda Prime",
    localizacao: "Jardim Atlântico, Olinda - PE",
    precoApartirDe: "R$ 245.000",
    metragem: "39,78 m²",
    quartos: 2,
    banheiros: 1,
    destaque: "Costa de Olinda",
    imagem: imgOlinda,
    descricao:
      "Empreendimento em Jardim Atlântico, uma das áreas mais desejadas de Olinda. Combina localização privilegiada perto do litoral com um projeto contemporâneo e tipologias eficientes para morar ou investir.",
  },
];

function whatsappUrl(imovel: Imovel) {
  const mensagem = `Olá, Jonathas! Tenho interesse no empreendimento *${imovel.nome}* (${imovel.localizacao}), com valores a partir de ${imovel.precoApartirDe}. Gostaria de mais informações.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

function Imoveis() {
  const [selecionado, setSelecionado] = useState<Imovel | null>(null);
  const tituloId = useId();

  useEffect(() => {
    if (!selecionado) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelecionado(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selecionado]);

  return (
    <section
      id="imoveis"
      className="bg-bg-light py-16 lg:py-24"
      aria-labelledby="imoveis-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl" data-reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-bg-dark/45 uppercase">
            Portfólio
          </p>
          <h2
            id="imoveis-titulo"
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-bg-dark"
          >
            Imóveis no litoral
          </h2>
          <p className="mt-4 text-base leading-relaxed text-bg-dark/65">
            Seleção de empreendimentos no litoral de Pernambuco. Clique para
            conhecer detalhes e solicitar informações.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {imoveis.map((imovel, index) => (
            <li
              key={imovel.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${index * 100}ms` }}
            >
              <button
                type="button"
                onClick={() => setSelecionado(imovel)}
                className="group flex h-full w-full flex-col overflow-hidden border border-bg-dark/10 bg-white text-left shadow-sm transition-colors hover:border-accent"
              >
                <div className="aspect-16/10 w-full overflow-hidden">
                  <img
                    src={imovel.imagem}
                    alt={imovel.nome}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold tracking-[0.16em] text-bg-dark/45 uppercase">
                    {imovel.destaque}
                  </span>
                  <span className="mt-3 text-xl font-semibold tracking-tight text-bg-dark transition-colors group-hover:text-bg-dark/80">
                    {imovel.nome}
                  </span>
                  <span className="mt-2 flex items-start gap-2 text-sm text-bg-dark/55">
                    <FaMapMarkerAlt
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    {imovel.localizacao}
                  </span>

                  <span className="mt-6 text-sm text-bg-dark/45">
                    A partir de
                  </span>
                  <span className="text-2xl font-semibold tracking-tight text-bg-dark">
                    {imovel.precoApartirDe}
                  </span>

                  <span className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-bg-dark/10 pt-5 text-sm text-bg-dark/65">
                    <span className="inline-flex items-center gap-1.5">
                      <FaRulerCombined className="text-accent" aria-hidden />
                      {imovel.metragem}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FaBed className="text-accent" aria-hidden />
                      {imovel.quartos} quartos
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FaBath className="text-accent" aria-hidden />
                      {imovel.banheiros}{" "}
                      {imovel.banheiros === 1 ? "banheiro" : "banheiros"}
                    </span>
                  </span>

                  <span className="mt-auto cursor-pointer pt-6 text-sm font-semibold text-bg-dark transition-colors group-hover:text-accent">
                    Ver detalhes
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selecionado && (
        <div
          className="fixed inset-0 z-60 flex items-end justify-center bg-bg-dark/70 p-4 sm:items-center"
          role="presentation"
          onClick={() => setSelecionado(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={tituloId}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 text-bg-dark/60 transition-colors hover:text-bg-dark"
              aria-label="Fechar"
              onClick={() => setSelecionado(null)}
            >
              <FaTimes size={18} />
            </button>

            <div className="aspect-16/10 w-full overflow-hidden">
              <img
                src={selecionado.imagem}
                alt={selecionado.nome}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-bg-dark/45 uppercase">
                {selecionado.destaque}
              </p>
              <h3
                id={tituloId}
                className="mt-2 pr-8 text-2xl font-semibold tracking-tight text-bg-dark"
              >
                {selecionado.nome}
              </h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-bg-dark/55">
                <FaMapMarkerAlt
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden
                />
                {selecionado.localizacao}
              </p>

              <p className="mt-5 text-sm text-bg-dark/45">A partir de</p>
              <p className="text-3xl font-semibold tracking-tight text-bg-dark">
                {selecionado.precoApartirDe}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-bg-dark/65">
                <span className="inline-flex items-center gap-1.5">
                  <FaRulerCombined className="text-accent" aria-hidden />
                  {selecionado.metragem}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaBed className="text-accent" aria-hidden />
                  {selecionado.quartos} quartos
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaBath className="text-accent" aria-hidden />
                  {selecionado.banheiros}{" "}
                  {selecionado.banheiros === 1 ? "banheiro" : "banheiros"}
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-bg-dark/65">
                {selecionado.descricao}
              </p>

              <a
                href={whatsappUrl(selecionado)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-accent px-5 py-3.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
              >
                <FaWhatsapp className="text-lg" aria-hidden />
                Quero mais informações
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Imoveis;
