<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = '#',
		children,
		...rest
	}: {
		href?: string;
		children: Snippet;
		[key: string]: unknown;
	} = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-[8px] text-text/80 transition-colors hover:text-primary"
	style="background:linear-gradient(180deg, #fff 0%, #ffd7a8 100%)"
	{...rest}
>
	{@render children()}
</a>
