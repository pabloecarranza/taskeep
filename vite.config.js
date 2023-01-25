import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: '/src/test/setup.ts',
		css: true,
		coverage: {
			provider: 'c8',
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
	},
	build: {
		chunkSizeWarningLimit: 900,
	},
});
