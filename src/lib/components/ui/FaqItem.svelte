<script lang="ts">
	let {
		question,
		answer,
		isOpen = false
	}: {
		question: string;
		answer: string;
		isOpen?: boolean;
	} = $props();
</script>

<div
	class="flex w-full flex-col overflow-hidden rounded-[10px] border-2 border-white bg-[#fff9f2] p-6"
	style="box-shadow:inset 3px 3px 47px 5px rgba(255,255,255,0.65)"
>
	<div class="flex w-full cursor-pointer items-center justify-between gap-4">
		<p class="flex-1 font-sans text-[15px] font-normal leading-[150%] text-text">{question}</p>
		<div class="shrink-0 transition-transform duration-300" class:rotate-180={isOpen}>
			<svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
				<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
			</svg>
		</div>
	</div>
	{#if isOpen}
		<div class="pt-4">
			<p class="font-sans text-[15px] font-normal leading-[160%] tracking-[-0.02em] text-text/85">{answer}</p>
		</div>
	{/if}
	<div class="pointer-events-none absolute inset-0 rounded-[10px]" style="background:radial-gradient(50% 50% at 7.2% 6.1%, rgba(184,199,217,0.5) 0%, rgba(4,7,13,0) 100%);opacity:0.1"></div>
</div>
