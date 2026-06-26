<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="flex w-min items-center justify-center rounded-[8px] bg-[linear-gradient(135deg,#ede9fe_0%,#ffe4d6_100%)] p-4">
	{@render children()}
</div>
