import { error } from '@sveltejs/kit';
import { getArticleBySlug } from '$lib/content/loaders';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';

export const load: PageServerLoad = async ({ params }) => {
	const article = await getArticleBySlug(params.lang, params.slug);

	if (!article) error(404, 'Article not found');

	return { article, locale: params.lang };
};
