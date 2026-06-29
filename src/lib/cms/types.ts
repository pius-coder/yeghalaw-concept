export interface StoryblokAsset {
	id: number;
	alt: string | null;
	name: string;
	focus: string | null;
	source: string | null;
	title: string | null;
	filename: string;
	copyright: string | null;
	fieldtype: string;
	meta_data: Record<string, unknown>;
	is_external_url: boolean;
}

export interface SeoFields {
	meta_title?: string;
	meta_description?: string;
	og_title?: string;
	og_description?: string;
	og_image?: StoryblokAsset;
	canonical_url?: string;
	allow_indexing?: boolean;
}

export interface HeroContent {
	_uid: string;
	eyebrow: string;
	title: string;
	description: string;
	primary_button_label: string;
	primary_button_link: string;
	secondary_button_label: string;
	secondary_button_link: string;
	primary_image: StoryblokAsset;
	secondary_image: StoryblokAsset;
	trust_text: string;
	client_count: string;
}

export interface ServiceItem {
	_uid: string;
	title: string;
	short_description: string;
	image: StoryblokAsset;
	icon: string;
	slug: string;
	is_visible: boolean;
}

export interface WhyUsItem {
	_uid: string;
	title: string;
	description: string;
	icon: string;
}

export interface StatItem {
	_uid: string;
	value: string;
	suffix: string;
	label: string;
}

export interface AboutContent {
	_uid: string;
	eyebrow: string;
	title: string;
	description: string;
	primary_button: Record<string, string>;
	secondary_button: Record<string, string>;
	mission: string;
	vision: string;
	values: string;
}

export interface RecentWorkItem {
	_uid: string;
	title: string;
	image: StoryblokAsset;
	category: string;
	short_description: string;
	is_visible: boolean;
}

export interface FaqItem {
	_uid: string;
	question: string;
	answer: string;
	is_visible: boolean;
}

export interface CtaContent {
	_uid: string;
	title: string;
	description: string;
	button_label: string;
	button_link: string;
	secondary_note: string;
}

export interface TeamMember {
	_uid: string;
	name: string;
	job_title: string;
	short_bio: string;
	photo: StoryblokAsset;
	linkedin_url?: string;
	email?: string;
	is_visible: boolean;
}

export interface HomePageContent {
	hero: HeroContent;
	services: ServiceItem[];
	whyUs: {
		_uid: string;
		eyebrow: string;
		title: string;
		description: string;
		items: WhyUsItem[];
	};
	stats: {
		_uid: string;
		items: StatItem[];
	};
	about: AboutContent;
	recentWork: {
		_uid: string;
		eyebrow: string;
		title: string;
		description: string;
		items: RecentWorkItem[];
	};
	faq: {
		_uid: string;
		eyebrow: string;
		title: string;
		description: string;
		items: FaqItem[];
	};
	cta: CtaContent;
	team: {
		_uid: string;
		eyebrow: string;
		title: string;
		description: string;
		members: TeamMember[];
	};
}

export interface SiteSettings {
	firm_name: string;
	logo: StoryblokAsset;
	logo_light: StoryblokAsset;
	email: string;
	phone_primary: string;
	phone_secondary: string;
	whatsapp: string;
	address: string;
	business_hours: string;
	google_maps_url: string;
	linkedin_url: string;
	facebook_url: string;
	instagram_url: string;
	footer_description: string;
	copyright: string;
	default_meta_title: string;
	default_meta_description: string;
	default_og_image: StoryblokAsset;
}

export interface Article {
	_uid: string;
	title: string;
	slug: string;
	summary: string;
	content: unknown;
	cover_image: StoryblokAsset;
	author: string;
	category: string;
	publication_date: string;
	featured: boolean;
	meta_title?: string;
	meta_description?: string;
	og_image?: StoryblokAsset;
	content_html?: string;
}

export interface LegalPage {
	_uid: string;
	page_type: 'privacy' | 'legal-notice' | 'cookies' | 'terms';
	title: string;
	content: unknown;
	last_updated: string;
	meta_title?: string;
	meta_description?: string;
	content_html?: string;
}
