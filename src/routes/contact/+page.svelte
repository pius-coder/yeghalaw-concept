<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { t } from '$lib/i18n.svelte';
</script>

<svelte:head>
	<title>{t('contact.metaTitle')}</title>
	<meta name="description" content={t('contact.metaDescription')} />
</svelte:head>

<NavBar />

<section class="min-h-screen bg-white pt-36">
	<div class="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 lg:px-12">
		<h1 class="mb-6 font-serif text-4xl text-text">{t('contact.title')}</h1>
		<p class="mb-4 font-sans text-lg text-text/60">{t('contact.subtitle')}</p>

		<div class="mb-8 rounded-lg border border-yellow-300/50 bg-yellow-50 px-6 py-4">
			<p class="font-sans text-sm text-yellow-800">
				{@html t('contact.demoNotice')}
			</p>
		</div>

		<span class="inline-block cursor-not-allowed rounded-full bg-primary/40 px-8 py-3 font-sans text-sm font-semibold text-white/50">
			{t('contact.emailLabel')}
		</span>

		<p class="mt-8 font-sans text-xs italic text-text/40">
			{t('contact.demoFootnote')}
		</p>
	</div>
</section>

<Footer />
