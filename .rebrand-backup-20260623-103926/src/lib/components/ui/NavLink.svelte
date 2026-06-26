<script lang="ts">
	let {
		text,
		href,
		variant = 'primary'
	}: {
		text: string;
		href: string;
		variant?: 'primary' | 'mobile';
	} = $props();
</script>

<a
	{href}
	class="flex h-[34px] items-center rounded-full px-3.5 font-heading text-xs text-text/80 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
	class:font-medium={variant === 'mobile'}
>
	{text}
</a>
