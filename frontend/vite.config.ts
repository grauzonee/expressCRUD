import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    // change port for dev
    server: {
        host: true,
        port: 8080,
        watch: {
            usePolling: true
        }
    },
    plugins: [
        vue(),
        vueDevTools(),
    ],
    base: '/',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
