import type { HomePageContent, SiteSettings } from './types';

export const fallbackHomePage: HomePageContent = {
	hero: {
		_uid: 'fallback-hero',
		eyebrow: 'YEGHA LAW FIRM',
		title: 'Votre partenaire juridique de confiance',
		description:
			"Cabinet d'avocats spécialisé en droit des affaires, droit immobilier, droit de la famille et droit du travail à Douala, Cameroun.",
		primary_button_label: 'Prendre rendez-vous',
		primary_button_link: '/fr/contact',
		secondary_button_label: 'Nos services',
		secondary_button_link: '/fr/#services',
		primary_image: { filename: '', alt: '' } as unknown as HomePageContent['hero']['primary_image'],
		secondary_image: {
			filename: '',
			alt: ''
		} as unknown as HomePageContent['hero']['secondary_image'],
		trust_text: 'Ils nous font confiance',
		client_count: '100+'
	},
	services: [
		{
			_uid: 'fallback-svc-1',
			title: 'Droit des affaires',
			short_description: 'Accompagnement juridique complet pour entreprises et commerçants.',
			image: { filename: '', alt: '' } as unknown as HomePageContent['services'][0]['image'],
			icon: 'building',
			slug: 'droit-des-affaires',
			is_visible: true
		},
		{
			_uid: 'fallback-svc-2',
			title: 'Droit immobilier',
			short_description: 'Conseil et assistance en matière foncière et immobilière.',
			image: { filename: '', alt: '' } as unknown as HomePageContent['services'][0]['image'],
			icon: 'house',
			slug: 'droit-immobilier',
			is_visible: true
		}
	],
	whyUs: {
		_uid: 'fallback-why',
		eyebrow: 'Pourquoi nous choisir',
		title: 'Une expertise juridique à votre service',
		description:
			'Nous mettons notre expérience et notre dévouement à votre service pour défendre vos intérêts.',
		items: [
			{
				_uid: 'fallback-why-1',
				title: 'Expertise reconnue',
				description: "Plus de 15 ans d'expérience dans divers domaines du droit.",
				icon: 'seal-check'
			},
			{
				_uid: 'fallback-why-2',
				title: 'Approche personnalisée',
				description: 'Chaque dossier est unique, chaque client mérite une attention particulière.',
				icon: 'heart'
			},
			{
				_uid: 'fallback-why-3',
				title: 'Cabinet bilingue',
				description: 'Services juridiques disponibles en français et en anglais.',
				icon: 'translate'
			}
		]
	},
	stats: {
		_uid: 'fallback-stats',
		items: [
			{ _uid: 'fs-1', value: '100', suffix: '+', label: 'Clients satisfaits' },
			{ _uid: 'fs-2', value: '15', suffix: '+', label: "Années d'expérience" },
			{ _uid: 'fs-3', value: '8', suffix: '', label: 'Domaines de compétence' }
		]
	},
	about: {
		_uid: 'fallback-about',
		eyebrow: 'À propos',
		title: 'Notre cabinet',
		description: "Le Cabinet YEGHA LAW FIRM est un cabinet d'avocats basé à Douala, Cameroun.",
		primary_button: { label: 'Contactez-nous', link: '/fr/contact' },
		secondary_button: { label: 'En savoir plus', link: '/fr/#about' },
		mission: 'Offrir des services juridiques de qualité supérieure.',
		vision: 'Devenir le cabinet de référence au Cameroun.',
		values: 'Intégrité, Excellence, Engagement.'
	},
	recentWork: {
		_uid: 'fallback-work',
		eyebrow: 'Réalisations',
		title: 'Nos récentes réalisations',
		description: 'Découvrez quelques-uns de nos dossiers récents.',
		items: []
	},
	faq: {
		_uid: 'fallback-faq',
		eyebrow: 'FAQ',
		title: 'Questions fréquentes',
		description: 'Trouvez rapidement une réponse à vos questions.',
		items: [
			{
				_uid: 'fallback-faq-1',
				question: 'Comment prendre rendez-vous ?',
				answer:
					'Vous pouvez nous contacter par téléphone ou via notre formulaire de contact en ligne.',
				is_visible: true
			},
			{
				_uid: 'fallback-faq-2',
				question: 'Quels sont vos honoraires ?',
				answer:
					"Nos honoraires sont déterminés en fonction de la nature et de la complexité du dossier lors d'un premier entretien.",
				is_visible: true
			}
		]
	},
	cta: {
		_uid: 'fallback-cta',
		title: "Besoin d'un conseil juridique ?",
		description: "Contactez-nous dès aujourd'hui pour une consultation.",
		button_label: 'Nous contacter',
		button_link: '/fr/contact',
		secondary_note: 'Réponse sous 24 heures'
	},
	team: {
		_uid: 'fallback-team',
		eyebrow: 'Notre équipe',
		title: 'Des avocats compétents et dévoués',
		description: 'Une équipe pluridisciplinaire à votre service.',
		members: [
			{
				_uid: 'fallback-tm-1',
				name: 'Terence Yegha',
				job_title: 'Avocat principal',
				short_bio: 'Fondateur du cabinet, spécialiste en droit des affaires.',
				photo: {
					filename: '',
					alt: ''
				} as unknown as HomePageContent['team']['members'][0]['photo'],
				linkedin_url: '',
				email: '',
				is_visible: true
			}
		]
	}
};

export const fallbackSiteSettings: SiteSettings = {
	firm_name: 'YEGHA LAW FIRM',
	logo: { filename: '', alt: '' } as unknown as SiteSettings['logo'],
	logo_light: { filename: '', alt: '' } as unknown as SiteSettings['logo_light'],
	email: 'contact@yeghalawfirm.com',
	phone_primary: '+237 6XX XXX XXX',
	phone_secondary: '',
	whatsapp: '+237 6XX XXX XXX',
	address: 'Douala, Cameroun',
	business_hours: 'Lun-Ven: 8h00 - 17h00',
	google_maps_url: '',
	linkedin_url: '',
	facebook_url: '',
	instagram_url: '',
	footer_description: "Cabinet d'avocats basé à Douala.",
	copyright: '© YEGHA LAW FIRM. Tous droits réservés.',
	default_meta_title: 'YEGHA LAW FIRM',
	default_meta_description: "Cabinet d'avocats à Douala, Cameroun",
	default_og_image: { filename: '', alt: '' } as unknown as SiteSettings['default_og_image']
};
