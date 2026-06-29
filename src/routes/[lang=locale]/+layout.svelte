<script lang="ts">
	import { page } from '$app/state';
	import { setLocale } from '$lib/i18n.svelte';
	import { initStoryblok } from '$lib/cms/client';
	import { storyblokEditable, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	let { children, lang }: { children: import('svelte').Snippet; lang: string } = $props();

	$effect(() => {
		setLocale(lang);
	});

	onMount(() => {
		initStoryblok();

		if (page.url.searchParams.has('_storyblok')) {
			useStoryblokBridge(0, () => {});
		}
	});
</script>

{@render children()}
