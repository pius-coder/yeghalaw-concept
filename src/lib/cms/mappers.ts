import type { ISbStoryData } from '@storyblok/js';
import type { HomePageContent, SiteSettings, Article, LegalPage } from './types';

function extractContent(story: ISbStoryData) {
	return story.content as Record<string, unknown>;
}

export function mapHomeStory(story: ISbStoryData): HomePageContent {
	const c = extractContent(story);
	return {
		hero: c.hero as HomePageContent['hero'],
		services: ((c.services as { services?: unknown[] })?.services ||
			[]) as HomePageContent['services'],
		whyUs: c.whyUs as HomePageContent['whyUs'],
		stats: c.stats as HomePageContent['stats'],
		about: c.about as HomePageContent['about'],
		recentWork: c.recentWork as HomePageContent['recentWork'],
		faq: c.faq as HomePageContent['faq'],
		cta: c.cta as HomePageContent['cta'],
		team: c.team as HomePageContent['team']
	};
}

export function mapSiteSettings(story: ISbStoryData): SiteSettings {
	const c = extractContent(story);
	return {
		firm_name: c.firm_name as string,
		logo: c.logo as SiteSettings['logo'],
		logo_light: c.logo_light as SiteSettings['logo_light'],
		email: c.email as string,
		phone_primary: c.phone_primary as string,
		phone_secondary: c.phone_secondary as string,
		whatsapp: c.whatsapp as string,
		address: c.address as string,
		business_hours: c.business_hours as string,
		google_maps_url: c.google_maps_url as string,
		linkedin_url: c.linkedin_url as string,
		facebook_url: c.facebook_url as string,
		instagram_url: c.instagram_url as string,
		footer_description: c.footer_description as string,
		copyright: c.copyright as string,
		default_meta_title: c.default_meta_title as string,
		default_meta_description: c.default_meta_description as string,
		default_og_image: c.default_og_image as SiteSettings['default_og_image']
	};
}

export function mapArticle(story: ISbStoryData): Article {
	const c = extractContent(story);
	return {
		_uid: story.id?.toString() || '',
		title: c.title as string,
		slug: (c.slug as string) || story.slug || '',
		summary: c.summary as string,
		content: c.content,
		cover_image: c.cover_image as Article['cover_image'],
		author: c.author as string,
		category: c.category as string,
		publication_date: (c.publication_date as string) || story.published_at || '',
		featured: (c.featured as boolean) || false,
		meta_title: c.meta_title as string,
		meta_description: c.meta_description as string,
		og_image: c.og_image as Article['og_image']
	};
}

export function mapLegalPage(story: ISbStoryData): LegalPage {
	const c = extractContent(story);
	return {
		_uid: story.id?.toString() || '',
		page_type: c.page_type as LegalPage['page_type'],
		title: c.title as string,
		content: c.content,
		last_updated: c.last_updated as string,
		meta_title: c.meta_title as string,
		meta_description: c.meta_description as string
	};
}
