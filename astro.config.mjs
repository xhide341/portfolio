// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react({
		 include: ['**/react/*'],
		 experimentalReactChildren: true,
		 experimentalDisableStreaming: true,
		})],
	vite: {
		plugins: [tailwindcss()],
	},
});