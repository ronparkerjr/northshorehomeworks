import { business } from "@/content/site";

/** Link the confirmed business number inside shared plain-text content. */
export function PhoneText({ children }: { children: string }) {
  const parts = children.split(business.phone);
  return <>{parts.map((part, index) => <span key={index}>{index > 0 && <a href={business.phoneHref} className="underline">{business.phone}</a>}{part}</span>)}</>;
}