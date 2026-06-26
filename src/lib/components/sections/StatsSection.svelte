<script lang="ts">
  import { t } from '$lib/i18n.svelte';
</script>

<section class="flex w-full flex-col items-center gap-[10px] bg-clean px-[50px] py-16 max-md:px-[18px]">
  <div class="w-full max-w-[1200px]">
    <div class="grid gap-8 text-center sm:grid-cols-3">
      <div>
        <p class="font-serif text-5xl font-bold text-text">100+</p>
        <p class="mt-2 font-sans text-sm text-text/60">{t('stats.clientsServed')}</p>
      </div>
      <div>
        <p class="font-serif text-5xl font-bold text-text">15+</p>
        <p class="mt-2 font-sans text-sm text-text/60">{t('stats.yearsExperience')}</p>
      </div>
      <div>
        <p class="font-serif text-5xl font-bold text-text">8</p>
        <p class="mt-2 font-sans text-sm text-text/60">{t('stats.practiceAreas')}</p>
      </div>
    </div>
  </div>
</section>
