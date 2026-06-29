<script lang="ts">
	import ProcessStep from '$lib/components/ui/ProcessStep.svelte';
	import ButtonMain from '$lib/components/ui/ButtonMain.svelte';
	import Star from 'phosphor-svelte/lib/Star';
	import { t } from '$lib/i18n.svelte';
	import type { AboutContent } from '$lib/cms/types';

	let { content }: { content?: AboutContent } = $props();

	const fallbackSteps = [
		{
			stepNumber: 1,
			titleKey: 'process.steps.mission.title',
			descKey: 'process.steps.mission.description'
		},
		{
			stepNumber: 2,
			titleKey: 'process.steps.vision.title',
			descKey: 'process.steps.vision.description'
		},
		{
			stepNumber: 3,
			titleKey: 'process.steps.values.title',
			descKey: 'process.steps.values.description'
		}
	];
</script>

<section
	id="about"
	class="flex w-full flex-col items-center gap-[10px] bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]"
>
	<div class="flex w-full max-w-[1200px] flex-row items-start gap-11 max-md:flex-col max-md:gap-8">
		<div class="sticky top-10 flex flex-1 flex-col items-start gap-8 max-md:static max-md:w-full">
			<div class="z-[2] flex w-full max-w-[840px] flex-col items-center gap-6 max-md:gap-4">
				<h2
					class="w-full font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]"
				>
					{content?.title ?? t('process.title')}
				</h2>
				<p
					class="w-full max-w-[720px] font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85"
				>
					{content?.description ?? t('process.subtitle')}
				</p>
			</div>
			<div class="flex w-full flex-wrap items-center gap-4">
				<ButtonMain
					text={content?.primary_button?.label ?? t('process.contactUs')}
					variant="primary"
					href={content?.primary_button?.link ?? '/contact#contact'}
					icon
				/>
				<ButtonMain
					text={content?.secondary_button?.label ?? t('process.ourServices')}
					variant="secondary"
					href={content?.secondary_button?.link ?? '#services'}
					icon
				/>
			</div>
			<div class="flex w-full flex-wrap items-center gap-3">
				<div class="flex gap-0.5 text-primary">
					{#each Array(5) as _}
						<Star size={19} weight="fill" color="currentColor" />
					{/each}
				</div>
				<div class="h-6 w-[2px] bg-black/10"></div>
				<span class="font-sans text-lg leading-[1.5] text-text/60">{t('process.trustedBy')}</span>
			</div>
		</div>
		<div class="flex flex-1 flex-col items-center gap-5 max-md:w-full">
			{#if content?.mission || content?.vision || content?.values}
				<ProcessStep
					stepNumber={1}
					title={t('process.steps.mission.title')}
					description={content.mission}
				/>
				<ProcessStep
					stepNumber={2}
					title={t('process.steps.vision.title')}
					description={content.vision}
				/>
				<ProcessStep
					stepNumber={3}
					title={t('process.steps.values.title')}
					description={content.values}
				/>
			{:else}
				{#each fallbackSteps as s}
					<ProcessStep stepNumber={s.stepNumber} title={t(s.titleKey)} description={t(s.descKey)} />
				{/each}
			{/if}
		</div>
	</div>
</section>
