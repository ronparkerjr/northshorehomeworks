import { createFileRoute, redirect } from "@tanstack/react-router";

// Preserves the original site's URL for this service.
export const Route = createFileRoute("/heating-cable-installation")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$slug", params: { slug: "heating-cable-installation" }, statusCode: 301 });
  },
});
