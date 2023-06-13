import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

const production = !process.env.ROLLUP_WATCH;

export default defineConfig({
	plugins: [
		sveltekit()
		// svelte({
		// 	preprocess: sveltePreprocess({
		// 		sourceMap: !production
		// 	})
		// })
	]
});
