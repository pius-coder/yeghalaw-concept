<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="flex w-min items-center justify-center rounded-[8px] bg-[#ecebe4] p-4">
	{@render children()}
</div>
