import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.wholesomestreet.com',
  base: '/',
  integrations: [tailwind(), sitemap(), icon()],
});
