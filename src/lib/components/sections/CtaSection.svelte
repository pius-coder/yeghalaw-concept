<script lang="ts">
	import type { CtaContent } from '$lib/cms/types';
	import { t } from '$lib/i18n.svelte';

	let { content }: { content?: CtaContent } = $props();
</script>

<section
	class="flex w-full flex-col items-center gap-[10px] bg-primary px-[50px] py-16 max-md:px-[18px]"
>
	<div
		class="flex w-full max-w-[1200px] flex-row items-center justify-between gap-8 max-md:flex-col max-md:text-center"
	>
		<div class="flex-1">
			<h2 class="mb-4 font-serif text-3xl text-white md:text-4xl">
				{content?.title ?? t('cta.title')}
			</h2>
			<p class="max-w-md font-sans text-base text-white/70">
				{content?.description ?? t('cta.subtitle')}
			</p>
		</div>
		<div class="flex flex-wrap gap-4">
			{#if content?.button_link}
				<a
					href={content.button_link}
					class="rounded-full bg-white px-7 py-3 font-sans text-sm font-semibold text-primary transition-base hover:bg-white/90"
				>
					{content.button_label}
				</a>
			{:else}
				<span
					class="inline-block cursor-not-allowed rounded-full bg-white/30 px-7 py-3 font-sans text-sm font-semibold text-white/50"
				>
					{content?.button_label ?? t('cta.contactUs')}
				</span>
			{/if}
			<a
				href="#services"
				class="rounded-full border border-white/30 px-7 py-3 font-sans text-sm font-semibold text-white transition-base hover:bg-white/10"
			>
				{t('cta.ourServices')}
			</a>
		</div>
	</div>
	<p class="mt-3 font-sans text-[11px] italic text-white/40">
		{content?.secondary_note ?? t('cta.disclaimer')}
	</p>
</section>
