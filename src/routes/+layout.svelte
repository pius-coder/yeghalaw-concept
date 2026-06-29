<script lang="ts">
	import { page } from '$app/state';
	import { setLocale, detectLocale } from '$lib/i18n.svelte';
	import './layout.css';

	let { children } = $props();

	$effect(() => {
		const lang = detectLocale(page.url.pathname);
		setLocale(lang);
	});
</script>

<svelte:head>
	{#if import.meta.env.PUBLIC_DEMO_MODE === 'true'}
		<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
		<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet" />
	{/if}
</svelte:head>

{@render children()}
