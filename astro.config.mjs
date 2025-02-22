// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    // Enable React to support React JSX components.
    integrations: [react({
         include: ['**/react/*', '**/magicui/*']
        }), icon()],
    vite: {
        plugins: [tailwindcss()],
    },
});