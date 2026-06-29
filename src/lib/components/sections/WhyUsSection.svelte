<script lang="ts">
	import WhyUsCard from '$lib/components/ui/WhyUsCard.svelte';
	import type { WhyUsItem } from '$lib/cms/types';
	import { t } from '$lib/i18n.svelte';
	import Translate from 'phosphor-svelte/lib/Translate';
	import MapPin from 'phosphor-svelte/lib/MapPin';
	import Heart from 'phosphor-svelte/lib/Heart';

	let { items, title, description }: { items?: WhyUsItem[]; title?: string; description?: string } =
		$props();

	const iconMap: Record<string, typeof Translate> = {
		translate: Translate,
		'map-pin': MapPin,
		heart: Heart
	};

	const fallbackCards = [
		{
			titleKey: 'why.cards.bilingual.title',
			descKey: 'why.cards.bilingual.description',
			icon: Translate
		},
		{ titleKey: 'why.cards.local.title', descKey: 'why.cards.local.description', icon: MapPin },
		{ titleKey: 'why.cards.client.title', descKey: 'why.cards.client.description', icon: Heart }
	];
</script>

<section
	id="why-us"
	class="flex w-full flex-col items-center gap-[10px] overflow-hidden bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]"
>
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-[54px] max-md:gap-8">
		<div class="flex w-full max-w-[840px] flex-col items-center gap-6 max-md:gap-4">
			<h2
				class="w-full text-center font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]"
			>
				{title ?? t('why.title')}
			</h2>
			<p
				class="w-full max-w-[640px] text-center font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85"
			>
				{description ?? t('why.subtitle')}
			</p>
		</div>
		<div class="flex w-full flex-col items-center gap-4 overflow-hidden max-md:gap-0">
			<div class="flex w-full max-w-[1100px]" style="perspective:1200px;overflow:hidden">
				<div class="flex w-full flex-row gap-5 max-md:flex-col max-md:items-center">
					{#if items && items.length > 0}
						{#each items as item}
							{@const IconComp = iconMap[item.icon?.toLowerCase()?.replace(/\s+/g, '-')] || Heart}
							<div class="flex-1 shrink-0 max-md:w-full">
								<WhyUsCard title={item.title} description={item.description}>
									<IconComp size={20} color="#0d9488" />
								</WhyUsCard>
							</div>
						{/each}
					{:else}
						{#each fallbackCards as card}
							<div class="flex-1 shrink-0 max-md:w-full">
								<WhyUsCard title={t(card.titleKey)} description={t(card.descKey)}>
									<card.icon size={20} color="#0d9488" />
								</WhyUsCard>
							</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
