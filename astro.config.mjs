import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import solid from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [solid(), tailwind()]
});