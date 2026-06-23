<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<div class="app">
	<main>{@render children()}</main>
</div>

<style>
	:root {
		--font-poppins: 'Poppins', sans-serif;
		--font-manrope: 'Manrope', sans-serif;
		--font-playfair: 'Playfair Display', serif;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
