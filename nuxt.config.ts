import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // Server side rendering
    ssr: false,
    // App mode
    mode: 'spa',
    // Source folder
    srcDir: 'src/',
    // Stylesheets
    css: [
        'primevue/resources/themes/bootstrap4-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
        'prismjs/themes/prism-coy.css',
        '~/assets/scss/app.scss',
    ],
    // Build
    build: {
        transpile: [
            'primevue',
        ],
        extractCSS: true,
        splitChunks: {
            layouts: true
        }
    },
    // Build modules
    buildModules: [
    ],
    // Runtime config
    runtimeConfig: {
        public: {
        }
    },

    // Vite
    vite: {
        plugins: [
        ],
        // optimizeDeps: {
        //     include: ['vue', '@vueuse/core', 'd3-zoom', 'd3-selection'],
        // },
    }
})
