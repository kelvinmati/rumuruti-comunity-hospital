import type { Config } from "@react-router/dev/config";

export default {
  // Disable SSR to generate a static site
  ssr: true, 
  // Prerender the home page (and any other routes)
  prerender: ["/"], 
} satisfies Config;