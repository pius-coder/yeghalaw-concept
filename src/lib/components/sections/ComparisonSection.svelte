<script lang="ts">
	import SealCheck from 'phosphor-svelte/lib/SealCheck';
	import CloudinaryImage from '$lib/components/ui/CloudinaryImage.svelte';
	import type { RecentWorkItem } from '$lib/cms/types';
	import { t } from '$lib/i18n.svelte';

	let {
		items,
		title,
		description
	}: { items?: RecentWorkItem[]; title?: string; description?: string } = $props();

	const fallbackPortfolio = [
		{ titleKey: 'portfolio.items.corporate', src: '/images/yegha/work-1.jpg' },
		{ titleKey: 'portfolio.items.realEstate', src: '/images/yegha/work-2.jpg' },
		{ titleKey: 'portfolio.items.immigration', src: '/images/yegha/work-3.jpg' },
		{ titleKey: 'portfolio.items.litigation', src: '/images/yegha/work-4.jpg' }
	];
</script>

<section
	id="portfolio"
	class="relative flex w-full flex-col items-center gap-[10px] overflow-hidden bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]"
>
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-11">
		<div class="flex max-w-[840px] flex-col items-center gap-6 text-center">
			<h2
				class="font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]"
			>
				{title ?? t('portfolio.title')}
			</h2>
			<p
				class="max-w-[640px] font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85"
			>
				{description ?? t('portfolio.subtitle')}
			</p>
		</div>

		<div class="grid w-full gap-6 sm:grid-cols-2">
			{#if items && items.length > 0}
				{#each items as item}
					{#if item.is_visible !== false}
						<div class="group relative overflow-hidden rounded-[16px]">
							<CloudinaryImage
								src={item.image?.filename || '/images/yegha/work-1.jpg'}
								alt={item.title}
								class="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							<div class="absolute bottom-0 left-0 p-6">
								<h3 class="font-sans text-lg font-semibold text-white">{item.title}</h3>
							</div>
						</div>
					{/if}
				{/each}
			{:else}
				{#each fallbackPortfolio as item}
					<div class="group relative overflow-hidden rounded-[16px]">
						<CloudinaryImage
							src={item.src}
							alt={t(item.titleKey)}
							class="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
						<div class="absolute bottom-0 left-0 p-6">
							<h3 class="font-sans text-lg font-semibold text-white">{t(item.titleKey)}</h3>
						</div>
					</div>
				{/each}
			{/if}
		</div>

		<div class="flex flex-wrap items-center justify-center gap-3">
			{#each ['badges.clients', 'badges.bilingual', 'badges.trusted', 'badges.results'] as badgeKey}
				<div
					class="inline-flex items-center gap-2 rounded-[8px] px-4 py-3"
					style="background:radial-gradient(50% 50% at 50% 50%, #fff 13%, rgba(255,255,255,0.33) 100%)"
				>
					<SealCheck size={20} weight="duotone" color="rgba(0,0,0,0.85)" />
					<span class="font-sans text-[15px] font-normal text-text/85">{t(badgeKey)}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
