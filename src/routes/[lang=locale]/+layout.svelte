<script lang="ts">
	import { setLocale } from '$lib/i18n.svelte';

	let { children, lang }: { children: import('svelte').Snippet; lang: string } = $props();

	$effect(() => {
		setLocale(lang);
	});
</script>

{@render children()}
