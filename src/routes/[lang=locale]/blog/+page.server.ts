import { getArticles } from '$lib/content/loaders';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const articles = await getArticles(params.lang);

	return { articles, locale: params.lang };
};
