import { useEffect, type RefObject } from "react";

/** Contain focus and disable background interaction while an overlay is open. */
export function useDialogFocus(active: boolean, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const dialog = ref.current;
    if (!active || !dialog) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    const background = [...document.querySelectorAll<HTMLElement>("main, footer, [data-mobile-actions]")]
      .filter((element) => !element.contains(dialog));
    const inert = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });
    document.body.style.overflow = "hidden";
    const focusable = () => [...dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select, textarea, summary, [tabindex="0"]',
    )].filter((element) => element.getClientRects().length && !element.closest("[inert]"));
    (dialog.querySelector<HTMLElement>("[data-dialog-close]") ?? focusable()[0])?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements.at(-1);
      if (!first || !last) { event.preventDefault(); return; }
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    dialog.addEventListener("keydown", onKey);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      background.forEach((element, index) => { element.inert = inert[index] ?? false; });
      if (previous?.isConnected) previous.focus({ preventScroll: true });
    };
  }, [active, ref]);
}