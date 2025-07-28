import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://paketwisatadieng.netlify.app',  // Pastikan ini domain yang benar
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify()
});
