import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			},
			format: {
				comments: false
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte', '@sveltejs/kit'],
					ui: ['$lib/components']
				}
			}
		}
	},
	optimizeDeps: {
		include: ['svelte']
	}
}); 