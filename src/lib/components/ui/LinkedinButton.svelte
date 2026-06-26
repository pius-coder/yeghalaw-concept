<script lang="ts">
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';

	let {
		href = 'https://www.linkedin.com'
	}: {
		href?: string;
	} = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="inline-flex items-center gap-2 rounded-[8px] border-2 border-white bg-[#fff9f2] px-3 py-2"
	style="box-shadow:inset 3px 3px 47px 5px rgba(255,255,255,0.65)"
>
	<LinkedinLogo size={16} color="currentColor" />
	<span class="font-sans text-[15px] font-normal text-text">Linkedin Profile</span>
	<ArrowUpRight size={16} color="currentColor" />
</a>
