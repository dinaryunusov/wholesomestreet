import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://dinaryunusov.github.io/wholesomestreet/',
  base: '/wholesomestreet/',
  integrations: [tailwind(), sitemap(), icon()],
});
