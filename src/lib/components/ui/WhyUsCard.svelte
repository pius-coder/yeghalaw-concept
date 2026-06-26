<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		description,
		children
	}: {
		title: string;
		description: string;
		children: Snippet;
	} = $props();
</script>

<div class="w-full overflow-hidden rounded-[16px] p-2" style="box-shadow:inset 0 0 2px 1px rgba(0,0,0,0.5)">
	<div class="flex flex-col items-center gap-6 rounded-[14px] border border-[#d7ebe3] bg-white p-6">
		<div class="flex w-full min-w-[240px] flex-col items-start gap-[10px]">
			{@render children()}
			<div class="flex w-full max-w-[640px] flex-col items-center gap-4">
				<h4 class="w-full font-sans text-[24px] font-medium leading-[150%] text-text">{title}</h4>
				<p class="w-full font-sans text-[15px] font-normal leading-[160%] tracking-[-0.02em] text-text/85">{description}</p>
			</div>
		</div>
		<div class="flex w-full flex-row items-center gap-[10px]">
			<div class="h-[2px] flex-1 bg-black/10"></div>
			<div class="h-[15px] w-[15px] rounded-[8px] bg-black/10"></div>
			<div class="h-[15px] w-[15px] rounded-[8px] bg-black/10"></div>
		</div>
	</div>
</div>
