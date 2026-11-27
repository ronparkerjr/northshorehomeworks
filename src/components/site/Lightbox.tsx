import { SiteImage } from "@/components/site/SiteImage";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDialogFocus } from "@/hooks/use-dialog-focus";

export type LightboxItem = { src: string; alt: string; caption: string };

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  useDialogFocus(true, dialogRef);
  const item = items[index];
  const prev = () => onIndex((index - 1 + items.length) % items.length);
  const next = () => onIndex((index + 1) % items.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") { e.preventDefault(); onIndex((index - 1 + items.length) % items.length); }
      if (e.key === "ArrowRight") { e.preventDefault(); onIndex((index + 1) % items.length); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [index, items.length, onClose, onIndex]);

  if (!item) return null;
  return (
    <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const end = event.changedTouches[0]?.clientX; if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 50) { if (end > touchStart.current) prev(); else next(); } touchStart.current = null; }}>
      <Button variant="ghost" data-dialog-close className="lightbox-btn right-4 top-[max(1rem,env(safe-area-inset-top))]" onClick={onClose} aria-label="Close">
        <X className="h-6 w-6" />
      </Button>
      <Button variant="ghost" className="lightbox-btn bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo">
        <ChevronLeft className="h-7 w-7" />
      </Button>
      <Button variant="ghost" className="lightbox-btn bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo">
        <ChevronRight className="h-7 w-7" />
      </Button>
      <figure className="flex min-h-0 max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <SiteImage key={item.src} src={item.src} loading="eager" alt={item.alt} className="lightbox-img" />
        <figcaption aria-live="polite" className="mt-4 max-w-xl text-center text-sm text-muted-foreground">
          <span className="text-foreground">{item.caption}</span>
          <span className="ml-3">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
    </div>
  );
}
