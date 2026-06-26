<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { t } from '$lib/i18n.svelte';
</script>

<svelte:head>
	<title>{t('privacy.metaTitle')}</title>
	<meta name="description" content={t('privacy.metaDescription')} />
</svelte:head>

<NavBar />

<section id="privacy" class="min-h-screen bg-white pt-28">
	<div class="mx-auto max-w-3xl px-5 py-16 md:px-8 lg:px-12">
		<h1 class="mb-6 font-serif text-4xl text-text">{t('privacy.title')}</h1>
		<div class="prose prose-sm max-w-none font-sans text-text/60">
			<p>{t('privacy.subtitle')}</p>
		</div>
	</div>
</section>

<Footer />
