<script lang="ts">
	import { t } from '$lib/i18n.svelte';
</script>

<section
	class="flex w-full flex-col items-center gap-[10px] border-y border-black/5 bg-white px-[50px] py-10 max-md:px-[18px]"
>
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-6">
		<p class="font-heading text-sm font-semibold uppercase tracking-wider text-text/50">
			{t('trusted.title')}
		</p>
		<div class="flex flex-wrap items-center justify-center gap-10 opacity-40 grayscale">
			<span class="font-heading text-xl font-bold text-text">{t('trusted.corporate')}</span>
			<span class="font-heading text-xl font-bold text-text">{t('trusted.realEstate')}</span>
			<span class="font-heading text-xl font-bold text-text">{t('trusted.immigration')}</span>
			<span class="font-heading text-xl font-bold text-text">{t('trusted.litigation')}</span>
			<span class="font-heading text-xl font-bold text-text">{t('trusted.familyLaw')}</span>
		</div>
	</div>
</section>
