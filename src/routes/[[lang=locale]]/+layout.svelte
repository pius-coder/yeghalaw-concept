<script lang="ts">
  import type { LayoutProps } from './$types';
  import { setLocale } from '$lib/i18n.svelte';

  let { data, children }: LayoutProps = $props();

  $effect(() => {
    setLocale(data.lang);
  });
</script>

{@render children()}
