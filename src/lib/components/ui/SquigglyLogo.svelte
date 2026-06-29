<script lang="ts">
	type Props = {
		size?: number;
	};
	let { size = 24 }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="currentColor"
	class="text-primary"
	aria-hidden="true"
>
	<path d="M12 1.5l2.5 7.5H22l-6 4.5 2.5 7.5L12 16.5l-6.5 4.5L8 13.5 2 9h7.5L12 1.5z" />
</svg>
