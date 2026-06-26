<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
	<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">
</svelte:head>

{@render children()}

