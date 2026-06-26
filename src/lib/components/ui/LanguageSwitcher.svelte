<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { getLocale, setLocale } from '$lib/i18n.svelte';

  function switchLanguage() {
    const current = getLocale();
    const next = current === 'en' ? 'fr' : 'en';
    setLocale(next);
    const rest = page.url.pathname.replace(/^\/(en|fr)(\/|$)/, '/');
    const newPath = next === 'en' ? rest || '/' : `/${next}${rest}`;
    goto(newPath);
  }
</script>

<button
  type="button"
  onclick={switchLanguage}
  class="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-clean text-xs font-bold text-text/50 shadow-[inset_3px_3px_47px_5px_rgba(255,255,255,0.65)] transition-base hover:text-text/80"
  aria-label="Switch language / Changer de langue"
>
  {getLocale() === 'en' ? 'FR' : 'EN'}
</button>
