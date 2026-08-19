import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: { autoImport: true },
  css: ['~/assets/css/main.css'],
  components: [{ path: '~/components', pathPrefix: false, global: false }],
  vite: { plugins: [tailwindcss()] },
  modules: ['@nuxt/image', 'nuxt-svgo', '@nuxtjs/google-fonts', '@nuxt/eslint'],
  svgo: { dts: true },
  googleFonts: {
    families: { Inter: [200, 300, 400, 500, 600, 700] },
    display: 'swap',
    subsets: ['latin'],
    download: true,
    preload: true
  }
});
