import { useEffect, useId, useRef, useState } from "react";
import {
  FaBath,
  FaBed,
  FaRulerCombined,
  FaTimes,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import imgAika from "../assets/imoveis/aika.webp";
import imgMahrak from "../assets/imoveis/mahrak.webp";
import imgTahre from "../assets/imoveis/tahre.webp";
import imgUmahre from "../assets/imoveis/umahre.webp";

const WHATSAPP_NUMBER = "558198498446";

export type Imovel = {
  id: string;
  nome: string;
  localizacao: string;
  precoApartirDe: string;
  metragem: string;
  quartos: number;
  banheiros: number;
  destaque: string;
  imagem: string;
};

const imoveis: Imovel[] = [
  {
    id: "aika-vila-tamandare",
    nome: "Aikã Vila Tamandaré",
    localizacao: "Tamandaré- PE",
    precoApartirDe: "R$ 419.050,00",
    metragem: "36,93 m²",
    quartos: 1,
    banheiros: 1,
    destaque: "Litoral Sul",
    imagem: imgAika,
  },
  {
    id: "mahrak-villa-maracaipe",
    nome: "Mahrak Villa Maracaípe",
    localizacao: "Maracaípe- PE",
    precoApartirDe: "R$ 279.994,82",
    metragem: "21.77 m²",
    quartos: 1,
    banheiros: 1,
    destaque: "Litoral Sul",
    imagem: imgMahrak,
  },
  {
    id: "tahre-villa-tamandare",
    nome: "Tahré villa Tamandaré",
    localizacao: "Tamandaré - PE",
    precoApartirDe: "R$ 277.018,75",
    metragem: "20,23 m²",
    quartos: 1,
    banheiros: 1,
    destaque: "Litoral Sul",
    imagem: imgTahre,
  },
  {
    id: "umahre-villa-carneiros",
    nome: "Umahré Villa Carneiros",
    localizacao: "Carneiros - PE",
    precoApartirDe: "R$ 113.407,50",
    metragem: "29,55 m²",
    quartos: 1,
    banheiros: 1,
    destaque: "Litoral Sul",
    imagem: imgUmahre,
  },
];

function whatsappUrl(imovel: Imovel) {
  const mensagem = `Olá, Jonathas! Tenho interesse no empreendimento *${imovel.nome}* (${imovel.localizacao}), com valores a partir de ${imovel.precoApartirDe}. Gostaria de mais informações.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

function Imoveis() {
  const [selecionado, setSelecionado] = useState<Imovel | null>(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(true);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const tituloId = useId();

  const atualizarSetas = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setPodeVoltar(el.scrollLeft > 4);
    setPodeAvancar(el.scrollLeft < maxScroll - 4);
  };

  const rolar = (direcao: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = 24;
    const passo = card ? card.getBoundingClientRect().width + gap : 320;
    el.scrollBy({ left: direcao * passo, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    atualizarSetas();
    el.addEventListener("scroll", atualizarSetas, { passive: true });
    window.addEventListener("resize", atualizarSetas);

    return () => {
      el.removeEventListener("scroll", atualizarSetas);
      window.removeEventListener("resize", atualizarSetas);
    };
  }, []);

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
        <div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          data-reveal
        >
          <div className="max-w-2xl">
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

          <div className="flex items-center gap-3 self-start sm:self-end">
            <span className="text-sm font-medium text-bg-dark/55">
              Para ver mais imóveis
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => rolar(-1)}
                disabled={!podeVoltar}
                className="flex size-10 items-center justify-center border border-bg-dark/15 text-bg-dark transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-bg-dark/15 disabled:hover:text-bg-dark"
                aria-label="Imóveis anteriores"
              >
                <FaChevronLeft aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => rolar(1)}
                disabled={!podeAvancar}
                className="flex size-10 items-center justify-center border border-bg-dark/15 text-bg-dark transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-bg-dark/15 disabled:hover:text-bg-dark"
                aria-label="Próximos imóveis"
              >
                <FaChevronRight aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <ul
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {imoveis.map((imovel, index) => (
            <li
              key={imovel.id}
              className="w-[min(85%,calc((100%-3rem)/3.25))] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2.15)] md:w-[calc((100%-3rem)/3.25)]"
            >
              <button
                type="button"
                onClick={() => setSelecionado(imovel)}
                className="group flex h-full w-full flex-col overflow-hidden border border-bg-dark/10 bg-white text-left shadow-sm transition-colors hover:border-accent"
              >
                <div className="aspect-16/10 w-full overflow-hidden bg-bg-dark/5">
                  <img
                    src={imovel.imagem}
                    alt={imovel.nome}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                    fetchPriority={index < 2 ? "high" : "auto"}
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
