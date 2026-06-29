import { initStoryblok } from '$lib/cms/client';
import { getHomePage, getSiteSettings } from '$lib/cms/queries';
import { fallbackHomePage, fallbackSiteSettings } from '$lib/cms/fallback';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params, url }) => {
	try {
		initStoryblok();

		const locale = params.lang;
		const preview = url.searchParams.has('_storyblok');

		const [home, settings] = await Promise.all([
			getHomePage(locale, preview),
			getSiteSettings(locale, preview)
		]);

		return { home, settings, locale };
	} catch (e) {
		console.error('Home page load error:', e);
		return {
			home: fallbackHomePage,
			settings: fallbackSiteSettings,
			locale: params.lang || 'en'
		};
	}
};
