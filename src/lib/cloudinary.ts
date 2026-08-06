const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;

/** Monta URL pública de imagem no Cloudinary a partir do path (versão + public_id). */
export function cloudinaryUrl(path: string) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/${path}`;
}
