<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import TrustedBySection from '$lib/components/sections/TrustedBySection.svelte';
	import ServicesSection from '$lib/components/sections/ServicesSection.svelte';
	import WhyUsSection from '$lib/components/sections/WhyUsSection.svelte';
	import StatsSection from '$lib/components/sections/StatsSection.svelte';
	import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
	import ComparisonSection from '$lib/components/sections/ComparisonSection.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';
	import CtaSection from '$lib/components/sections/CtaSection.svelte';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://yeghalawfirm.com';
	const pageUrl = $derived(`${siteUrl}/${data.locale}/`);
	const altLocale = $derived(data.locale === 'fr' ? 'en' : 'fr');
	const altUrl = $derived(`${siteUrl}/${altLocale}/`);

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		name: data.settings?.firm_name || 'YEGHA LAW FIRM',
		url: pageUrl,
		image: data.settings?.logo?.filename || undefined,
		email: data.settings?.email || undefined,
		telephone: data.settings?.phone_primary || undefined,
		address: data.settings?.address
			? {
					'@type': 'PostalAddress',
					streetAddress: data.settings.address
				}
			: undefined
	});

	const jsonLdString = $derived(JSON.stringify(jsonLd));
</script>

<svelte:head>
	<title>{data.home.hero?.title || data.settings?.default_meta_title || 'YEGHA LAW FIRM'}</title>
	<meta
		name="description"
		content={data.home.hero?.description || data.settings?.default_meta_description || ''}
	/>
	<link rel="canonical" href={pageUrl} />
	<link rel="alternate" hreflang={data.locale} href={pageUrl} />
	<link rel="alternate" hreflang={altLocale} href={altUrl} />
	<meta
		property="og:title"
		content={data.home.hero?.title || data.settings?.default_meta_title || 'YEGHA LAW FIRM'}
	/>
	<meta
		property="og:description"
		content={data.home.hero?.description || data.settings?.default_meta_description || ''}
	/>
	<meta property="og:url" content={pageUrl} />
	<meta property="og:type" content="website" />
	<!-- prettier-ignore -->
	<script type="application/ld+json">
{jsonLdString}
	</script>
</svelte:head>

<NavBar settings={data.settings} />

<HeroSection content={data.home.hero} />

<TrustedBySection />

<ServicesSection items={data.home.services} />

<WhyUsSection
	items={data.home.whyUs?.items}
	title={data.home.whyUs?.title}
	description={data.home.whyUs?.description}
/>

<StatsSection items={data.home.stats?.items} />

<ProcessSection content={data.home.about} />

<ComparisonSection
	items={data.home.recentWork?.items}
	title={data.home.recentWork?.title}
	description={data.home.recentWork?.description}
/>

<FaqSection
	items={data.home.faq?.items}
	title={data.home.faq?.title}
	description={data.home.faq?.description}
/>

<CtaSection content={data.home.cta} />

<TeamSection
	members={data.home.team?.members}
	title={data.home.team?.title}
	description={data.home.team?.description}
/>

<Footer settings={data.settings} />
