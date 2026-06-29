import home from './home.json';
import settings from './settings.json';
import type {
	HomePageContent,
	SiteSettings,
	Article,
	HeroContent,
	ServiceItem,
	WhyUsItem,
	StatItem,
	AboutContent,
	RecentWorkItem,
	FaqItem,
	CtaContent,
	TeamMember
} from '$lib/cms/types';
import type { HomePageContentStorage, SiteSettingsStorage, LocaleValue } from './types';

type Locale = 'fr' | 'en';

function byLocale<T>(val: LocaleValue<T> | undefined, locale: Locale): T {
	if (!val) return '' as unknown as T;
	return val[locale];
}

function mapImage(img: { filename: string; alt: string }): { filename: string; alt: string } {
	return img;
}

export function getHomeContent(locale: string): HomePageContent {
	const l = locale as Locale;
	const data = home as unknown as HomePageContentStorage;

	return {
		hero: {
			_uid: 'hero',
			eyebrow: byLocale(data.hero.eyebrow, l),
			title: byLocale(data.hero.title, l),
			description: byLocale(data.hero.description, l),
			primary_button_label: byLocale(data.hero.primary_button_label, l),
			primary_button_link: data.hero.primary_button_link,
			secondary_button_label: byLocale(data.hero.secondary_button_label, l),
			secondary_button_link: data.hero.secondary_button_link,
			primary_image: mapImage(data.hero.primary_image),
			secondary_image: mapImage(data.hero.secondary_image),
			trust_text: byLocale(data.hero.trust_text, l),
			client_count: data.hero.client_count
		} as unknown as HeroContent,
		services: (data.services || [])
			.filter((s) => s.is_visible !== false)
			.map((s) => ({
				_uid: s.id,
				title: byLocale(s.title, l),
				short_description: byLocale(s.short_description, l),
				image: mapImage(s.image),
				icon: s.icon,
				slug: s.slug,
				is_visible: s.is_visible
			})) as unknown as ServiceItem[],
		whyUs: {
			_uid: 'why-us',
			eyebrow: byLocale(data.whyUs.eyebrow, l),
			title: byLocale(data.whyUs.title, l),
			description: byLocale(data.whyUs.description, l),
			items: (data.whyUs.items || []).map((i) => ({
				_uid: i.id,
				title: byLocale(i.title, l),
				description: byLocale(i.description, l),
				icon: i.icon
			})) as unknown as WhyUsItem[]
		},
		stats: {
			_uid: 'stats',
			items: (data.stats?.items || []).map((s) => ({
				_uid: s.id,
				value: s.value,
				suffix: s.suffix,
				label: byLocale(s.label, l)
			})) as unknown as StatItem[]
		},
		about: {
			_uid: 'about',
			eyebrow: byLocale(data.about.eyebrow, l),
			title: byLocale(data.about.title, l),
			description: byLocale(data.about.description, l),
			primary_button: {
				label: byLocale(data.about.primary_button.label, l),
				link: data.about.primary_button.link
			},
			secondary_button: {
				label: byLocale(data.about.secondary_button.label, l),
				link: data.about.secondary_button.link
			},
			mission: byLocale(data.about.mission, l),
			vision: byLocale(data.about.vision, l),
			values: byLocale(data.about.values, l)
		} as unknown as AboutContent,
		recentWork: {
			_uid: 'recent-work',
			eyebrow: byLocale(data.recentWork.eyebrow, l),
			title: byLocale(data.recentWork.title, l),
			description: byLocale(data.recentWork.description, l),
			items: (data.recentWork.items || [])
				.filter((i) => i.is_visible !== false)
				.map((i) => ({
					_uid: i.id,
					title: byLocale(i.title, l),
					image: mapImage(i.image),
					category: byLocale(i.category, l),
					short_description: byLocale(i.short_description, l),
					is_visible: i.is_visible
				})) as unknown as RecentWorkItem[]
		},
		faq: {
			_uid: 'faq',
			eyebrow: byLocale(data.faq.eyebrow, l),
			title: byLocale(data.faq.title, l),
			description: byLocale(data.faq.description, l),
			items: (data.faq.items || [])
				.filter((f) => f.is_visible !== false)
				.map((f) => ({
					_uid: f.id,
					question: byLocale(f.question, l),
					answer: byLocale(f.answer, l),
					is_visible: f.is_visible
				})) as unknown as FaqItem[]
		},
		cta: {
			_uid: 'cta',
			title: byLocale(data.cta.title, l),
			description: byLocale(data.cta.description, l),
			button_label: byLocale(data.cta.button_label, l),
			button_link: data.cta.button_link,
			secondary_note: byLocale(data.cta.secondary_note, l)
		} as unknown as CtaContent,
		team: {
			_uid: 'team',
			eyebrow: byLocale(data.team.eyebrow, l),
			title: byLocale(data.team.title, l),
			description: byLocale(data.team.description, l),
			members: (data.team.members || [])
				.filter((m) => m.is_visible !== false)
				.map((m) => ({
					_uid: m.id,
					name: byLocale(m.name, l),
					job_title: byLocale(m.job_title, l),
					short_bio: byLocale(m.short_bio, l),
					photo: mapImage(m.photo),
					linkedin_url: m.linkedin_url,
					email: m.email,
					is_visible: m.is_visible
				})) as unknown as TeamMember[]
		}
	};
}

export function getSiteSettings(locale: string): SiteSettings {
	const l = locale as Locale;
	const data = settings as unknown as SiteSettingsStorage;

	return {
		firm_name: data.firm_name,
		logo: mapImage(data.logo),
		logo_light: mapImage(data.logo_light),
		email: data.email,
		phone_primary: data.phone_primary,
		phone_secondary: data.phone_secondary,
		whatsapp: data.whatsapp,
		address: data.address,
		business_hours: data.business_hours,
		google_maps_url: data.google_maps_url,
		linkedin_url: data.linkedin_url,
		facebook_url: data.facebook_url,
		instagram_url: data.instagram_url,
		footer_description: byLocale(data.footer_description, l),
		copyright: byLocale(data.copyright, l),
		default_meta_title: byLocale(data.default_meta_title, l),
		default_meta_description: byLocale(data.default_meta_description, l),
		default_og_image: { filename: '', alt: '' }
	};
}

export async function getArticles(_locale: string): Promise<Article[]> {
	return [];
}

export async function getArticleBySlug(_locale: string, _slug: string): Promise<Article | null> {
	return null;
}
