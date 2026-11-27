import { describe, expect, it } from "vitest";

import { business } from "@/content/site";
import { businessJsonLd } from "@/lib/seo";

// The owner confirmed this NAP on Nov 1, 2026. Search engines and directories compare
// every copy, so a single edit in one place must not be allowed to drift.
describe("Owner-confirmed NAP", () => {
  it("uses the confirmed address and phone", () => {
    expect(`${business.address} ${business.cityLine}`).toBe("1654 Mission Hills Rd. Northfield, IL 60062");
    expect(business.phone).toBe("847-409-5507");
    expect(business.phoneHref).toBe("tel:8474095507");
  });

  it("publishes the same NAP in the business listing data", () => {
    expect(businessJsonLd.telephone).toBe("+1-847-409-5507");
    expect(businessJsonLd.address).toMatchObject({
      streetAddress: "1654 Mission Hills Rd.",
      addressLocality: "Northfield",
      addressRegion: "IL",
      postalCode: "60062",
      addressCountry: "US",
    });
  });
});
