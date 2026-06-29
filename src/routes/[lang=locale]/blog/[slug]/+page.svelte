<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.article?.title || 'Article'}</title>
	<meta name="description" content={data.article?.summary || ''} />
</svelte:head>

<NavBar />

<section id="post-details" class="min-h-screen bg-white pt-28">
	<div class="mx-auto max-w-3xl px-5 py-16 md:px-8 lg:px-12">
		<h1 class="mb-6 font-serif text-4xl text-text">{data.article?.title || ''}</h1>
		{#if data.article?.publication_date}
			<p class="mb-2 font-sans text-sm text-text/40">{data.article.publication_date}</p>
		{/if}
		{#if data.article?.author}
			<p class="mb-8 font-sans text-sm text-text/60">{data.article.author}</p>
		{/if}
		<div class="prose prose-lg max-w-none font-sans text-text/80">
			{data.article?.summary || ''}
		</div>
	</div>
</section>

<Footer />
