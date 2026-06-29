export type LocaleValue<T> = { fr: T; en: T };

export interface LocalAsset {
	filename: string;
	alt: string;
}

export interface HeroContentStorage {
	eyebrow: LocaleValue<string>;
	title: LocaleValue<string>;
	description: LocaleValue<string>;
	primary_button_label: LocaleValue<string>;
	primary_button_link: LocaleValue<string>;
	secondary_button_label: LocaleValue<string>;
	secondary_button_link: LocaleValue<string>;
	primary_image: LocalAsset;
	secondary_image: LocalAsset;
	trust_text: LocaleValue<string>;
	client_count: LocaleValue<string>;
}

export interface ServiceItemStorage {
	id: string;
	title: LocaleValue<string>;
	short_description: LocaleValue<string>;
	image: LocalAsset;
	icon: string;
	slug: string;
	is_visible: boolean;
}

export interface WhyUsItemStorage {
	id: string;
	title: LocaleValue<string>;
	description: LocaleValue<string>;
	icon: string;
}

export interface WhyUsSectionStorage {
	eyebrow: LocaleValue<string>;
	title: LocaleValue<string>;
	description: LocaleValue<string>;
	items: WhyUsItemStorage[];
}

export interface StatItemStorage {
	id: string;
	value: string;
	suffix: string;
	label: LocaleValue<string>;
}

export interface AboutContentStorage {
	eyebrow: LocaleValue<string>;
	title: LocaleValue<string>;
	description: LocaleValue<string>;
	primary_button: { label: LocaleValue<string>; link: string };
	secondary_button: { label: LocaleValue<string>; link: string };
	mission: LocaleValue<string>;
	vision: LocaleValue<string>;
	values: LocaleValue<string>;
}

export interface RecentWorkItemStorage {
	id: string;
	title: LocaleValue<string>;
	image: LocalAsset;
	category: LocaleValue<string>;
	short_description: LocaleValue<string>;
	is_visible: boolean;
}

export interface RecentWorkSectionStorage {
	eyebrow: LocaleValue<string>;
	title: LocaleValue<string>;
	description: LocaleValue<string>;
	items: RecentWorkItemStorage[];
}

export interface FaqItemStorage {
	id: string;
	question: LocaleValue<string>;
	answer: LocaleValue<string>;
	is_visible: boolean;
}

export interface FaqSectionStorage {
	eyebrow: LocaleValue<string>;
	title: LocaleValue<string>;
	description: LocaleValue<string>;
	items: FaqItemStorage[];
}

export interface CtaContentStorage {
	title: LocaleValue<string>;
	description: LocaleValue<string>;
	button_label: LocaleValue<string>;
	button_link: string;
	secondary_note: LocaleValue<string>;
}

export interface TeamMemberStorage {
	id: string;
	name: LocaleValue<string>;
	job_title: LocaleValue<string>;
	short_bio: LocaleValue<string>;
	photo: LocalAsset;
	linkedin_url: string;
	email: string;
	is_visible: boolean;
}

export interface TeamSectionStorage {
	eyebrow: LocaleValue<string>;
	title: LocaleValue<string>;
	description: LocaleValue<string>;
	members: TeamMemberStorage[];
}

export interface HomePageContentStorage {
	hero: HeroContentStorage;
	services: ServiceItemStorage[];
	whyUs: WhyUsSectionStorage;
	stats: { items: StatItemStorage[] };
	about: AboutContentStorage;
	recentWork: RecentWorkSectionStorage;
	faq: FaqSectionStorage;
	cta: CtaContentStorage;
	team: TeamSectionStorage;
}

export interface SiteSettingsStorage {
	firm_name: string;
	logo: LocalAsset;
	logo_light: LocalAsset;
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
	footer_description: LocaleValue<string>;
	copyright: LocaleValue<string>;
	default_meta_title: LocaleValue<string>;
	default_meta_description: LocaleValue<string>;
}

export interface ArticleStorage {
	slug: string;
	published: boolean;
	cover_image: LocalAsset;
	fr: {
		title: string;
		summary: string;
		body: string;
		meta_title?: string;
		meta_description?: string;
	};
	en: {
		title: string;
		summary: string;
		body: string;
		meta_title?: string;
		meta_description?: string;
	};
	publication_date: string;
	author: string;
	category: string;
	featured: boolean;
}
