import { defineConfig } from 'vite';
import reactSWC from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression';

export default defineConfig({
    base: '/portfolio/',
    plugins: [
        reactSWC(),
        compression({
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    server: {
        warmup: {
            clientFiles: [
                './src/main.tsx',
                './src/Contact.tsx',
                './src/Technologie.tsx',
                './src/Realisation.tsx',
                './src/Service.tsx',
                './src/Formation.tsx',
                './src/Header.tsx',
                './src/CubeDeco.tsx',
                './src/env.mjs',
                './src/Nav.tsx',
                './src/Cube.tsx',
                './src/Loader.tsx',
                './src/App.tsx',
            ],
        },
    },
});
