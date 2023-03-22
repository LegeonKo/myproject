import {resolve} from 'path'
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [],
    resolve: {
        alias: {
            '~': '/assets/sass'
        }
    },
    rollupInputOptions: {
        input: resolve(__dirname, 'app.js') // custom main
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
});