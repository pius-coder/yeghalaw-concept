<script lang="ts">
  import { page } from '$app/state';
  import { setLocale } from '$lib/i18n.svelte';
  import './layout.css';

  let { children } = $props();

  $effect(() => {
    const lang = page.url.searchParams.get('lang') || 'en';
    setLocale(lang);
  });
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
  <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">
</svelte:head>

{@render children()}
