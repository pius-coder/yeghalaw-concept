import { storyblokInit, getStoryblokApi, apiPlugin } from '@storyblok/svelte';

let initialized = false;

export function initStoryblok() {
	if (initialized) return;
	initialized = true;

	const accessToken = import.meta.env.PUBLIC_STORYBLOK_TOKEN;
	if (!accessToken) return;

	storyblokInit({
		accessToken,
		use: [apiPlugin],
		apiOptions: {
			region: (import.meta.env.STORYBLOK_REGION as 'eu' | 'us' | 'ca' | 'ap') || 'eu'
		},
		bridge: false
	});
}

export function getApi() {
	initStoryblok();
	try {
		return getStoryblokApi();
	} catch {
		return null;
	}
}
