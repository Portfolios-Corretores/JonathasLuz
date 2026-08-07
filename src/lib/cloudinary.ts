const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;

/** Monta URL pública de imagem no Cloudinary a partir do path (versão + public_id). */
export function cloudinaryUrl(path: string) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/${path}`;
}

/** Path do hero (sem cloud name) — espelhar no preload de index.html */
export const HERO_IMAGE_PATH = "f_auto,q_auto,w_1920/v1786107801/hero-fundo_qj3jqq.webp";

export const HERO_IMAGE_URL = cloudinaryUrl(HERO_IMAGE_PATH);
