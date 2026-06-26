<script lang="ts">
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';

	let {
		text,
		variant = 'primary',
		href,
		icon = false,
		...rest
	}: {
		text: string;
		variant?: 'primary' | 'secondary' | 'clean';
		href?: string;
		icon?: boolean;
		[key: string]: unknown;
	} = $props();

	const primaryShadow =
		'0px 0.6021873017743928px 1.083937143193907px -1.25px rgba(61,61,61,0.72), 0px 2.288533303243457px 4.119359945838223px -2.5px rgba(61,61,61,0.64), 0px 10px 18px -3.75px rgba(61,61,61,0.25), 0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(19,78,74,0.35), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(19,78,74,0.34), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(19,78,74,0.33), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(19,78,74,0.3), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(19,78,74,0.26), 0px 30px 30px -3.5px rgba(19,78,74,0.15)';

	const cleanShadow = 'inset 3px 3px 47px 5px rgba(255,255,255,0.62)';
</script>

{#if href}
	<a
		{href}
		class="inline-flex items-center gap-2 rounded-[10px] px-5 py-3 font-heading text-xs transition-base {variant === 'primary'
			? 'bg-[linear-gradient(110deg,#134e4a_0%,#0f766e_55%,#14b8a6_100%)] text-white hover:brightness-110'
			: variant === 'secondary'
				? 'bg-[linear-gradient(110deg,#ffd7a8_0%,#ffb86b_100%)] text-[#3b1d08] hover:brightness-105'
				: 'border border-white bg-clean text-text'}"
		style={variant === 'primary'
			? `box-shadow: ${primaryShadow}`
			: variant === 'clean'
				? `box-shadow: ${cleanShadow}`
				: ''}
		{...rest}
	>
		<span class="font-heading text-xs font-semibold">{text}</span>
		{#if icon}
			{#if variant === 'secondary'}
				<ArrowRight size={20} weight="fill" color="currentColor" />
			{:else}
				<ArrowUpRight size={20} weight="fill" color="currentColor" />
			{/if}
		{/if}
	</a>
{:else}
	<button
		class="inline-flex items-center gap-2 rounded-[10px] px-5 py-3 font-heading text-xs transition-base {variant === 'primary'
			? 'bg-[linear-gradient(110deg,#134e4a_0%,#0f766e_55%,#14b8a6_100%)] text-white hover:brightness-110'
			: variant === 'secondary'
				? 'bg-[linear-gradient(110deg,#ffd7a8_0%,#ffb86b_100%)] text-[#3b1d08] hover:brightness-105'
				: 'border border-white bg-clean text-text'}"
		style={variant === 'primary'
			? `box-shadow: ${primaryShadow}`
			: variant === 'clean'
				? `box-shadow: ${cleanShadow}`
				: ''}
		{...rest}
	>
		<span class="font-heading text-xs font-semibold">{text}</span>
		{#if icon}
			{#if variant === 'secondary'}
				<ArrowRight size={20} weight="fill" color="currentColor" />
			{:else}
				<ArrowUpRight size={20} weight="fill" color="currentColor" />
			{/if}
		{/if}
	</button>
{/if}
