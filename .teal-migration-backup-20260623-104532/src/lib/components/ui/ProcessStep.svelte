<script lang="ts">
	let {
		stepNumber,
		title,
		description
	}: {
		stepNumber: number;
		title: string;
		description: string;
	} = $props();
</script>

<div class="flex w-full flex-col items-center gap-6 rounded-[18px] border-2 border-white bg-[#fff9f2] p-6 pb-8 shadow-[inset_3px_3px_47px_5px_rgba(255,255,255,0.65)]">
	<div class="z-[2] font-serif text-[70px] font-light leading-[1] tracking-[-0.04em] text-text">{stepNumber}</div>
	<div class="flex w-full flex-col items-center gap-[10px]">
		<h4 class="w-full text-center font-sans text-[24px] font-medium leading-[150%] text-text">{title}</h4>
		<p class="w-full text-center font-sans text-[15px] font-normal leading-[160%] tracking-[-0.02em] text-text/85">{description}</p>
	</div>
</div>
