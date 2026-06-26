<script lang="ts">
	import TeamMemberCard from '$lib/components/ui/TeamMemberCard.svelte';
	import SealCheck from 'phosphor-svelte/lib/SealCheck';
	import { base } from '$app/paths';

	const team = [
		{ name: 'Terence Yegba', jobTitle: 'Founder & Managing Partner', photoSrc: base + '/images/yegha/team-terence.jpg' },
		{ name: 'Laura Ngo', jobTitle: 'Senior Associate', photoSrc: base + '/images/yegha/team-laura.jpg' },
		{ name: 'Ndakor Nfor', jobTitle: 'Associate Attorney', photoSrc: base + '/images/yegha/team-ndakor.jpg' },
		{ name: 'Eyea Eyong', jobTitle: 'Junior Associate', photoSrc: base + '/images/yegha/team-eyea.jpg' },
		{ name: 'Mebdou\'a Etienne', jobTitle: 'Legal Assistant', photoSrc: base + '/images/yegha/team-mebdouga.jpg' }
	];

	const badges = [
		'Worked With 100+ Clients',
		'Bilingual Legal Experts',
		'Trusted Advisors',
		'Proven Results'
	];
</script>

<section id="our-team" class="flex w-full flex-col items-center gap-[10px] bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]">
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-[54px] max-md:gap-8">
		<div class="flex w-full max-w-[840px] flex-col items-center gap-6 max-md:gap-4">
			<h2 class="w-full text-center font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]">
				Meet Our Team
			</h2>
			<p class="w-full max-w-[720px] text-center font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85">
				Our team of dedicated legal professionals brings diverse expertise and a shared commitment to excellence.
			</p>
		</div>
		<div class="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each team as member}
				<TeamMemberCard name={member.name} jobTitle={member.jobTitle} photoSrc={member.photoSrc} />
			{/each}
		</div>
		<div class="flex flex-wrap items-center justify-center gap-3">
			{#each badges as badge}
				<div class="inline-flex items-center gap-2 rounded-[8px] px-4 py-3" style="background:radial-gradient(50% 50% at 50% 50%, #fff 13%, rgba(255,255,255,0.33) 100%)">
					<SealCheck size={20} weight="duotone" color="rgba(0,0,0,0.85)" />
					<span class="font-sans text-[15px] font-normal text-text/85">{badge}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
