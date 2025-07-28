import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astro/sitemap'; // Menambahkan plugin sitemap

// https://astro.build/config
export default defineConfig({
    site: 'https://paketwisatadieng.netlify.app',  // Pastikan ini domain yang benar
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), sitemap()], // Menambahkan sitemap sebagai integration
    adapter: netlify()
});
