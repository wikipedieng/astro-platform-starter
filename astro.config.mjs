import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://paketwisatadieng.netlify.app',  // Domain sudah benar
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()], // sitemap dihapus karena error
    adapter: netlify()
});
