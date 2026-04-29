import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://liorapendale.com",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
