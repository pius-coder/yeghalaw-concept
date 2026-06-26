<script lang="ts">
	import LinkedinButton from '$lib/components/ui/LinkedinButton.svelte';

	let {
		name,
		jobTitle,
		photoSrc,
		linkedinUrl = 'https://www.linkedin.com'
	}: {
		name: string;
		jobTitle: string;
		photoSrc: string;
		linkedinUrl?: string;
	} = $props();
</script>

<div class="w-full overflow-hidden rounded-[16px] p-2" style="box-shadow:inset 0 0 2px 1px rgba(0,0,0,0.5)">
	<div class="flex flex-col gap-0 overflow-hidden rounded-[14px] bg-[#ecebe4]">
		<div class="overflow-hidden rounded-[8px] aspect-[3/4]" style="box-shadow:0 0.7px 0.7px -0.7px rgba(0,0,0,0.08), 0 1.8px 1.8px -1.3px rgba(0,0,0,0.08), 0 3.6px 3.6px -2px rgba(0,0,0,0.07), 0 6.9px 6.9px -2.7px rgba(0,0,0,0.07), 0 13.6px 13.6px -3.3px rgba(0,0,0,0.05), 0 30px 30px -4px rgba(0,0,0,0.02)">
			<img src={photoSrc} alt={name} class="h-full w-full object-cover" />
		</div>
		<div class="flex items-start justify-between gap-4 p-6">
			<div class="flex flex-col items-start gap-1">
				<p class="font-heading text-lg font-semibold text-text">{name}</p>
				<p class="font-sans text-[15px] font-normal text-text/80">{jobTitle}</p>
			</div>
			<LinkedinButton href={linkedinUrl} />
		</div>
	</div>
</div>
