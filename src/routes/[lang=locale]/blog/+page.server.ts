import { initStoryblok } from '$lib/cms/client';
import { getArticles } from '$lib/cms/queries';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	initStoryblok();

	const articles = await getArticles(params.lang);

	return { articles, locale: params.lang };
};
