// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // Enable React to support React JSX components.
    site: 'https://xhide341.netlify.app/',
    integrations: [
        sitemap(),
        react({
         include: ['**/react/*', '**/magicui/*']
        }), icon({
            svgoOptions: {
                plugins: [
                  "preset-default",
                  {
                    name: "convertColors",
                    params: { currentColor: true },
                  },
                ],
              },
        })],
    vite: {
        plugins: [tailwindcss()],
    },
});