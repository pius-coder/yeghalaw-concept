<script lang="ts">
	import TeamMemberCard from '$lib/components/ui/TeamMemberCard.svelte';
	import SealCheck from 'phosphor-svelte/lib/SealCheck';
	import type { TeamMember } from '$lib/cms/types';
	import { cloudinary } from '$lib/utils/cloudinary';
	import { t } from '$lib/i18n.svelte';

	let {
		members,
		title,
		description
	}: { members?: TeamMember[]; title?: string; description?: string } = $props();

	const fallbackTeam = [
		{
			nameKey: 'team.members.terence.name',
			titleKey: 'team.members.terence.title',
			photoSrc: cloudinary('/images/yegha/team-terence.jpg')
		},
		{
			nameKey: 'team.members.laura.name',
			titleKey: 'team.members.laura.title',
			photoSrc: cloudinary('/images/yegha/team-laura.jpg')
		},
		{
			nameKey: 'team.members.ndakor.name',
			titleKey: 'team.members.ndakor.title',
			photoSrc: cloudinary('/images/yegha/team-ndakor.jpg')
		},
		{
			nameKey: 'team.members.eyea.name',
			titleKey: 'team.members.eyea.title',
			photoSrc: cloudinary('/images/yegha/team-eyea.jpg')
		},
		{
			nameKey: 'team.members.mebdoua.name',
			titleKey: 'team.members.mebdoua.title',
			photoSrc: cloudinary('/images/yegha/team-mebdouga.jpg')
		}
	];
</script>

<section
	id="our-team"
	class="flex w-full flex-col items-center gap-[10px] bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]"
>
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-[54px] max-md:gap-8">
		<div class="flex w-full max-w-[840px] flex-col items-center gap-6 max-md:gap-4">
			<h2
				class="w-full text-center font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]"
			>
				{title ?? t('team.title')}
			</h2>
			<p
				class="w-full max-w-[720px] text-center font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85"
			>
				{description ?? t('team.subtitle')}
			</p>
		</div>
		<div class="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#if members && members.length > 0}
				{#each members as member}
					{#if member.is_visible !== false}
						<TeamMemberCard
							name={member.name}
							jobTitle={member.job_title}
							photoSrc={member.photo?.filename
								? cloudinary(member.photo.filename)
								: fallbackTeam[0].photoSrc}
							linkedinUrl={member.linkedin_url}
						/>
					{/if}
				{/each}
			{:else}
				{#each fallbackTeam as member}
					<TeamMemberCard
						name={t(member.nameKey)}
						jobTitle={t(member.titleKey)}
						photoSrc={member.photoSrc}
					/>
				{/each}
			{/if}
		</div>
		<div class="flex flex-wrap items-center justify-center gap-3">
			{#each ['badges.clients', 'badges.bilingual', 'badges.trusted', 'badges.results'] as badgeKey}
				<div
					class="inline-flex items-center gap-2 rounded-[8px] px-4 py-3"
					style="background:radial-gradient(50% 50% at 50% 50%, #fff 13%, rgba(255,255,255,0.33) 100%)"
				>
					<SealCheck size={20} weight="duotone" color="rgba(0,0,0,0.85)" />
					<span class="font-sans text-[15px] font-normal text-text/85">{t(badgeKey)}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
