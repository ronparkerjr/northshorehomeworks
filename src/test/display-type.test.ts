import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync("src/styles.css", "utf8");
const root = readFileSync("src/routes/__root.tsx", "utf8");

describe("display type letterforms", () => {
  it("turns off Fraunces' wonky alternates so the italic l stays plain", () => {
    expect(css).toMatch(/font-variation-settings:\s*"WONK"\s+0/);
  });

  it("still requests the WONK axis so the setting has something to control", () => {
    expect(root).toMatch(/Fraunces:ital,opsz,wght,WONK@/);
    expect(root).toMatch(/300\.\.600,0\.\.1/);
  });
});
