<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<svelte:head>
	<title>Contact — Unofficial Redesign Concept for YEGHA LAW FIRM</title>
	<meta name="description" content="Private redesign demonstration — Contact page disabled." />
</svelte:head>

<NavBar />

<section class="min-h-screen bg-white pt-36">
	<div class="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 lg:px-12">
		<h1 class="mb-6 font-serif text-4xl text-text">Contact Us</h1>
		<p class="mb-4 font-sans text-lg text-text/60">Reach out for consultancy inquiries.</p>

		<div class="mb-8 rounded-lg border border-yellow-300/50 bg-yellow-50 px-6 py-4">
			<p class="font-sans text-sm text-yellow-800">
				<strong>Demonstration only.</strong> This page is part of an unofficial redesign concept. All contact links are disabled. No information will be transmitted, stored or processed.
			</p>
		</div>

		<span class="inline-block cursor-not-allowed rounded-full bg-primary/40 px-8 py-3 font-sans text-sm font-semibold text-white/50">
			yeghalawfirm@gmail.com (inactive demo link)
		</span>

		<p class="mt-8 font-sans text-xs italic text-text/40">
			Inactive demonstration link — Not an official contact channel.
		</p>
	</div>
</section>

<Footer />
