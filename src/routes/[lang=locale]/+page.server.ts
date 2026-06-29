import { getHomeContent, getSiteSettings } from '$lib/content/loaders';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const locale = params.lang;

	const home = getHomeContent(locale);
	const settings = getSiteSettings(locale);

	return { home, settings, locale };
};
