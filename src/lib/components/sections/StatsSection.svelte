<script lang="ts">
	import type { StatItem } from '$lib/cms/types';
	import { t } from '$lib/i18n.svelte';

	let { items }: { items?: StatItem[] } = $props();

	const fallbackStats = [
		{ value: '100+', labelKey: 'stats.clientsServed' },
		{ value: '15+', labelKey: 'stats.yearsExperience' },
		{ value: '8', labelKey: 'stats.practiceAreas' }
	];
</script>

<section
	class="flex w-full flex-col items-center gap-[10px] bg-clean px-[50px] py-16 max-md:px-[18px]"
>
	<div class="w-full max-w-[1200px]">
		<div class="grid gap-8 text-center sm:grid-cols-3">
			{#if items && items.length > 0}
				{#each items as item}
					<div>
						<p class="font-serif text-5xl font-bold text-text">{item.value}{item.suffix}</p>
						<p class="mt-2 font-sans text-sm text-text/60">{item.label}</p>
					</div>
				{/each}
			{:else}
				{#each fallbackStats as stat}
					<div>
						<p class="font-serif text-5xl font-bold text-text">{stat.value}</p>
						<p class="mt-2 font-sans text-sm text-text/60">{t(stat.labelKey)}</p>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>
