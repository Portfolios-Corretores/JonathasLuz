import { ImoveisSection, type Imovel } from "./Imoveis";
import { cloudinaryUrl } from "../lib/cloudinary";

const imoveisMedioPadrao: Imovel[] = [
  {
    id: "boulevard-ilha-do-retiro",
    nome: "Boulevard",
    localizacao: "Ilha do Retiro, Recife - PE",
    precoApartirDe: "R$ 393.008,09",
    metragem: "73 m²",
    quartos: 3,
    banheiros: 2,
    destaque: "Médio Padrão",
    imagem: cloudinaryUrl("v1786035755/boulevard_hm8wqu.webp"),
  },
  {
    id: "botanik-torre",
    nome: "Botanik Torre",
    localizacao: "Torre, Recife - PE",
    precoApartirDe: "R$ 779.000,00",
    metragem: "76 m²",
    quartos: 3,
    banheiros: 3,
    destaque: "Médio Padrão",
    imagem: cloudinaryUrl("v1786033695/botanikTorre_s2m18w.jpg"),
  },
  {
    id: "patio-hori",
    nome: "Pátio Horí",
    localizacao: "Caxangá, Recife - PE",
    precoApartirDe: "R$ 314.000,00",
    metragem: "52,28 m²",
    quartos: 2,
    banheiros: 2,
    destaque: "Médio Padrão",
    imagem: cloudinaryUrl("v1786033693/patioHori_o2ypsg.webp"),
  },
  {
    id: "patio-camino",
    nome: "Pátio Camino",
    localizacao: "Iputinga, Recife - PE",
    precoApartirDe: "R$ 359.000,00",
    metragem: "45,68 m²",
    quartos: 2,
    banheiros: 2,
    destaque: "Médio Padrão",
    imagem: cloudinaryUrl("v1786033693/patioCamino_sxxhk3.webp"),
  },
  {
    id: "mada-studios",
    nome: "Madá Studios",
    localizacao: "Madalena, Recife - PE",
    precoApartirDe: "R$ 305.000,00",
    metragem: "26 m²",
    quartos: 1,
    banheiros: 1,
    destaque: "Médio Padrão",
    imagem: cloudinaryUrl("v1786033692/madaStudio_jc5ykr.webp"),
  },
  {
    id: "patio-solare",
    nome: "Pátio Solare",
    localizacao: "Imbiribeira, Recife - PE",
    precoApartirDe: "R$ 400.000,00",
    metragem: "49,11 m²",
    quartos: 2,
    banheiros: 2,
    destaque: "Médio Padrão",
    imagem: cloudinaryUrl("v1786033682/patioSolare_ovjtim.webp"),
  },
  {
    id: "tivo-studios",
    nome: "Tivo Studios",
    localizacao: "Aflitos, Recife - PE",
    precoApartirDe: "R$ 260.000,00",
    metragem: "20,74 m²",
    quartos: 1,
    banheiros: 1,
    destaque: "Médio Padrão",
    imagem: cloudinaryUrl("v1786033610/tivoStudio2_xbuovi.webp"),
  },
  {
    id: "verdan",
    nome: "Verdan",
    localizacao: "Recife - PE",
    precoApartirDe: "R$ 226.000,00",
    destaque: "Médio Padrão",
    imagem: cloudinaryUrl("v1786033593/verdan_pcyt0d.webp"),
  },
];

function MedioPadrao() {
  return (
    <ImoveisSection
      id="medio-padrao"
      eyebrow="Portfólio"
      titulo="Imóveis de médio padrão"
      descricao="Empreendimentos urbanos em Recife com lazer completo e localização estratégica. Clique para conhecer detalhes e solicitar informações."
      imoveis={imoveisMedioPadrao}
      className="bg-white py-16 lg:py-24"
    />
  );
}

export default MedioPadrao;
