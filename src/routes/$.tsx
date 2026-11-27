import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { findLegacyRedirect } from "@/lib/redirects";

// Catch-all: permanently forwards old-site URLs, otherwise shows the 404 page.
export const Route = createFileRoute("/$")({
  beforeLoad: ({ location }) => {
    const to = findLegacyRedirect(location.pathname);
    if (to) throw redirect({ href: to, statusCode: 301 });
    throw notFound();
  },
});
