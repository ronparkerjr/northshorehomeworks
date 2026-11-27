import type { ImgHTMLAttributes } from "react";
import imageSources from "@/assets/responsive/images.json";

type ImageSource = { width: number; height: number; variants: { src: string; width: number }[] };
const sources: Record<string, ImageSource> = imageSources;

export function SiteImage({ src, sizes = "(min-width: 1440px) 1328px, (min-width: 1024px) calc(100vw - 96px), calc(100vw - 32px)", loading = "lazy", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const source = typeof src === "string" ? sources[src] : undefined;
  if (!source) return <img src={src} loading={loading} decoding="async" {...props} />;
  return <img {...props} src={source.variants.at(-1)?.src ?? src} srcSet={source.variants.map((variant) => `${variant.src} ${variant.width}w`).join(", ")} sizes={sizes} width={source.width} height={source.height} loading={loading} decoding="async" />;
}