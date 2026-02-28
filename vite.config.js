import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
    base: './',
    plugins: [
        react(),
        {
            name: 'serve-set-valued-viz',
            configureServer(server) {
                // Set-valued-viz specific assets (hardcoded in bundle with absolute paths)
                const setValuedAssets = [
                    'henon_periodic_orbits-DckJEOkG.js',
                    'henon_periodic_orbits_bg-KzkShtZ1.wasm',
                    'videoEncoder.worker-7mA2J84V.js'
                ];

                server.middlewares.use((req, res, next) => {
                    const publicPath = path.join(process.cwd(), 'public');
                    const mimeTypes = {
                        '.html': 'text/html',
                        '.js': 'application/javascript',
                        '.css': 'text/css',
                        '.wasm': 'application/wasm',
                        '.svg': 'image/svg+xml',
                        '.png': 'image/png',
                        '.jpg': 'image/jpeg',
                        '.gif': 'image/gif',
                    };

                    // Check if requesting set-valued-viz specific assets from /assets/
                    if (req.url.startsWith('/assets/')) {
                        const fileName = req.url.replace('/assets/', '');
                        if (setValuedAssets.includes(fileName)) {
                            const fullPath = path.join(publicPath, 'set-valued-viz', 'assets', fileName);
                            if (fs.existsSync(fullPath)) {
                                const ext = path.extname(fullPath);
                                res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
                                res.end(fs.readFileSync(fullPath));
                                return;
                            }
                        }
                    }

                    // Serve set-valued-viz as a separate app
                    if (req.url.startsWith('/set-valued-viz')) {
                        let filePath = req.url;

                        if (filePath === '/set-valued-viz' || filePath === '/set-valued-viz/') {
                            filePath = '/set-valued-viz/index.html';
                        }

                        const fullPath = path.join(publicPath, filePath);

                        if (fs.existsSync(fullPath)) {
                            const ext = path.extname(fullPath);
                            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
                            res.end(fs.readFileSync(fullPath));
                            return;
                        }
                    }
                    next();
                });
            }
        }
    ],
    test: {
        testTimeout: 10_000
    },
    server: {
        // this ensures that the browser opens upon api start
        open: true,
        // this sets a default port to 3000
        port: 3000,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});