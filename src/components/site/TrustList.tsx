import { ShieldCheck, FileCheck2, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function TrustList() {
  return (
    <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
      <li className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-primary" /> Licensed and insured, serving North Shore homeowners for over 25 years</li>
      <li className="flex gap-3"><FileCheck2 className="h-5 w-5 shrink-0 text-primary" /><span>Warranty terms differ by service. <Link to="/about" hash="guarantees" className="underline">Review our written guarantees</Link>.</span></li>
      <li className="flex gap-3"><Star className="h-5 w-5 shrink-0 text-primary" /> Rated by real customers on Google</li>
    </ul>
  );
}
