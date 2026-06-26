<script lang="ts">
	import type { Snippet } from 'svelte';
	import IconBadge from '$lib/components/ui/IconBadge.svelte';

	let {
		title,
		description,
		children,
		landscapeSrc,
		portraitSrc
	}: {
		title: string;
		description: string;
		children: Snippet;
		landscapeSrc?: string;
		portraitSrc?: string;
	} = $props();
</script>

<div
	class="flex w-full flex-col gap-6 rounded-[10px] border border-white/80 bg-white p-5 shadow-[inset_3px_3px_47px_5px_rgba(255,255,255,0.65)]"
>
	<div class="flex flex-col gap-2">
		<IconBadge>
			{@render children()}
		</IconBadge>
		<h4 class="font-sans text-[24px] font-medium leading-[1.5] text-text">{title}</h4>
		<p class="font-sans text-[15px] font-normal leading-[1.6] tracking-[-0.02em] text-text/85">{description}</p>
	</div>
	{#if landscapeSrc || portraitSrc}
		<div class="flex flex-wrap gap-2.5">
			{#if landscapeSrc}
				<div class="min-w-[200px] flex-1 overflow-hidden rounded-[10px]">
					<img src={landscapeSrc} alt="" class="aspect-[4/3] h-full w-full object-cover" />
				</div>
			{/if}
			<!-- {#if portraitSrc}
				<div class="min-w-[200px] flex-1 overflow-hidden rounded-[10px]">
					<img src={portraitSrc} alt="" class="aspect-[4/3] h-full w-full object-cover" />
				</div>
			{/if} -->
		</div>
	{/if}
</div>
