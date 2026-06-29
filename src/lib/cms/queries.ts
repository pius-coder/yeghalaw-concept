import { getApi } from './client';
import { mapHomeStory, mapSiteSettings, mapArticle, mapLegalPage } from './mappers';
import type { HomePageContent, SiteSettings, Article, LegalPage } from './types';
import { fallbackHomePage, fallbackSiteSettings } from './fallback';

function getClient(preview: boolean) {
	const api = getApi();
	if (!api) return null;
	return api;
}

export async function getHomePage(locale: string, preview = false): Promise<HomePageContent> {
	const api = getClient(preview);
	if (!api) return fallbackHomePage;

	try {
		const res = await api.get('cdn/stories/home', {
			version: preview ? 'draft' : 'published',
			language: locale,
			resolve_relations: []
		});
		return mapHomeStory(res.data.story);
	} catch {
		return fallbackHomePage;
	}
}

export async function getSiteSettings(locale: string, preview = false): Promise<SiteSettings> {
	const api = getClient(preview);
	if (!api) return fallbackSiteSettings;

	try {
		const res = await api.get('cdn/stories/settings', {
			version: preview ? 'draft' : 'published',
			language: locale
		});
		return mapSiteSettings(res.data.story);
	} catch {
		return fallbackSiteSettings;
	}
}

export async function getArticles(locale: string): Promise<Article[]> {
	const api = getClient(false);
	if (!api) return [];

	try {
		const res = await api.get('cdn/stories', {
			content_type: 'article',
			version: 'published',
			language: locale,
			sort_by: 'published_at:desc'
		});
		return (res.data.stories || []).map(mapArticle);
	} catch {
		return [];
	}
}

export async function getArticleBySlug(
	locale: string,
	slug: string,
	preview = false
): Promise<Article | null> {
	const api = getClient(preview);
	if (!api) return null;

	try {
		const res = await api.get(`cdn/stories/blog/${slug}`, {
			version: preview ? 'draft' : 'published',
			language: locale
		});
		return mapArticle(res.data.story);
	} catch {
		return null;
	}
}

export async function getLegalPage(
	locale: string,
	type: string,
	preview = false
): Promise<LegalPage | null> {
	const api = getClient(preview);
	if (!api) return null;

	try {
		const res = await api.get(`cdn/stories/legal/${type}`, {
			version: preview ? 'draft' : 'published',
			language: locale
		});
		return mapLegalPage(res.data.story);
	} catch {
		return null;
	}
}
