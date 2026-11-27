import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileCheck2 } from "lucide-react";
import { warranties } from "@/content/site";

export function Guarantees() {
  return <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
    {warranties.map((warranty) => <article key={warranty.service} className="border-t-2 border-primary pt-6">
      <FileCheck2 className="h-7 w-7 text-primary" aria-hidden />
      <p className="mt-4 text-sm font-semibold text-primary">{warranty.provider}</p>
      <h3 className="mt-2 font-display text-2xl">{warranty.title}</h3>
      <p className="mt-4 leading-relaxed text-muted-foreground">{warranty.text}</p>
      <Link to="/services/$slug" params={{ slug: warranty.service }} className="link-arrow mt-5">View service <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
    </article>)}
  </div>;
}