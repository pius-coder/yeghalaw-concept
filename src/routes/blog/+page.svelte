<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { t } from '$lib/i18n.svelte';
</script>

<svelte:head>
	<title>{t('blog.metaTitle')}</title>
	<meta name="description" content={t('blog.metaDescription')} />
</svelte:head>

<NavBar />

<section id="blog-posts" class="min-h-screen bg-white pt-28">
	<div class="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12">
		<h1 class="mb-4 text-center font-serif text-4xl text-text">{t('blog.title')}</h1>
		<p class="mb-12 text-center font-sans text-lg text-text/60">{t('blog.subtitle')}</p>
		<div class="grid gap-6 md:grid-cols-2">
			<article class="rounded-2xl bg-clean p-8">
				<h2 class="mb-3 font-heading text-xl font-semibold text-text">{t('blog.posts.goodDesign.title')}</h2>
				<p class="mb-4 font-sans text-sm text-text/60">{t('blog.posts.goodDesign.description')}</p>
			</article>
			<article class="rounded-2xl bg-clean p-8">
				<h2 class="mb-3 font-heading text-xl font-semibold text-text">{t('blog.posts.noCode.title')}</h2>
				<p class="mb-4 font-sans text-sm text-text/60">{t('blog.posts.noCode.description')}</p>
			</article>
		</div>
	</div>
</section>

<Footer />
