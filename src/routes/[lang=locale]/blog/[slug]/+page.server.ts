import { error } from '@sveltejs/kit';
import { initStoryblok } from '$lib/cms/client';
import { getArticleBySlug } from '$lib/cms/queries';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';

export const load: PageServerLoad = async ({ params, url }) => {
	initStoryblok();

	const preview = url.searchParams.has('_storyblok');
	const article = await getArticleBySlug(params.lang, params.slug, preview);

	if (!article) error(404, 'Article not found');

	return { article, locale: params.lang };
};
