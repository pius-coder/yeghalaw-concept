import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.BASE_PATH || ''
		},
		prerender: {
			entries: ['/', '/en/', '/fr/', '/en/blog', '/fr/blog', '/contact', '/privacy'],
			handleMissingId: 'warn',
			handleHttpError: 'warn'
		}
	}
};

export default config;
