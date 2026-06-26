<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<svelte:head>
	<title>Blog — Archio</title>
	<meta name="description" content="Insights, resources, and industry perspectives" />
</svelte:head>

<NavBar />

<section id="blog-posts" class="min-h-screen bg-white pt-28">
	<div class="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12">
		<h1 class="mb-4 text-center font-serif text-4xl text-text">Our Blog</h1>
		<p class="mb-12 text-center font-sans text-lg text-text/60">Insights That Drive Growth</p>
		<div class="grid gap-6 md:grid-cols-2">
			<article class="rounded-2xl bg-clean p-8">
				<h2 class="mb-3 font-heading text-xl font-semibold text-text">Why Good Design is Good Business</h2>
				<p class="mb-4 font-sans text-sm text-text/60">Good design goes beyond looks—it builds trust, strengthens branding, and drives growth.</p>
			</article>
			<article class="rounded-2xl bg-clean p-8">
				<h2 class="mb-3 font-heading text-xl font-semibold text-text">The Rise of No-Code</h2>
				<p class="mb-4 font-sans text-sm text-text/60">No-code platforms are transforming how businesses build. Learn how no-code saves time, reduces costs, and fuels innovation.</p>
			</article>
		</div>
	</div>
</section>

<Footer />
