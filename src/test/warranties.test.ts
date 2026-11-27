import { describe, expect, it } from "vitest";
import { warranties } from "@/content/site";
import { getService } from "@/content/services";

describe("Service-specific warranty scope", () => {
  it("assigns the four-year labor warranty to remodeling only", () => {
    expect(warranties.find((w) => w.service === "remodeling-construction")).toMatchObject({ provider: "North Shore Home Works", years: 4, coverage: "labor" });
  });
  it("assigns the four-year workmanship and materials guarantee to painting", () => {
    expect(warranties.find((w) => w.service === "painting-decorating")).toMatchObject({ provider: "Menorah Painting & Decorating", years: 4, coverage: "workmanship and materials" });
  });
  it("limits the ten-year roofing warranty to new roofing labor", () => {
    expect(warranties.find((w) => w.service === "roofing-and-repairs")).toMatchObject({ provider: "Red's Roofing", years: 10, coverage: "new roofing labor" });
  });
  it("keeps five-year fence workmanship and one-year repair terms distinct", () => {
    expect(warranties.find((w) => w.service === "decks-fencing")).toMatchObject({ provider: "North Shore Fences", years: 5, repairYears: 1, coverage: "fence workmanship" });
  });
  it("does not assign a duration to gutters or heating cables", () => {
    expect(warranties.some((w) => ["gutters-downspouts", "heating-cable-installation"].includes(w.service))).toBe(false);
    expect(getService("gutters-downspouts")?.guarantee).toBeUndefined();
    expect(getService("heating-cable-installation")?.guarantee).toBeUndefined();
  });
  it("shares each warranty between the About and applicable service page", () => {
    for (const warranty of warranties) expect(getService(warranty.service)?.guarantee?.text).toBe(warranty.text);
  });
});