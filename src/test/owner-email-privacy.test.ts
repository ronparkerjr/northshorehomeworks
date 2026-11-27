import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// Built from parts so this file never holds the address itself.
const OWNER_INBOX = ["rongraham", "1956", "@yahoo", ".com"].join("");

function filesIn(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...filesIn(full));
    else if (/\.(ts|tsx|js|jsx|css|json|xml|txt|html)$/.test(entry)) out.push(full);
  }
  return out;
}

// The owner asked that their inbox address never be shown to customers. It lives only in
// the FORMSUBMIT_TO secret, which the browser cannot read, so no source file may hold it.
describe("Owner inbox address stays private", () => {
  it("is not published anywhere in the site's source", () => {
    const root = process.cwd();
    const hits = ["src", "public"]
      .flatMap((d) => filesIn(join(root, d)))
      .filter((f) => readFileSync(f, "utf8").includes(OWNER_INBOX))
      .map((f) => f.replace(`${root}/`, ""));

    expect(hits).toEqual([]);
  });
});
