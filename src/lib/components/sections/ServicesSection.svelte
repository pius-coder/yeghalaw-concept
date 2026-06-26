<script lang="ts">
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import { cloudinary } from '$lib/utils/cloudinary';
	import { t } from '$lib/i18n.svelte';
	import Building from 'phosphor-svelte/lib/Building';
	import House from 'phosphor-svelte/lib/House';
	import IdentificationCard from 'phosphor-svelte/lib/IdentificationCard';
	import Scales from 'phosphor-svelte/lib/Scales';
	import Briefcase from 'phosphor-svelte/lib/Briefcase';
	import Lightbulb from 'phosphor-svelte/lib/Lightbulb';
	import GlobeHemisphereWest from 'phosphor-svelte/lib/GlobeHemisphereWest';
	import UsersThree from 'phosphor-svelte/lib/UsersThree';

	const services = [
		{
			titleKey: 'services.items.corporate.title',
			descKey: 'services.items.corporate.description',
			landscapeSrc: cloudinary('/images/yegha/corporate-full.jpg'),
			portraitSrc: cloudinary('/images/yegha/corporate-law.jpg'),
			icon: Building
		},
		{
			titleKey: 'services.items.realEstate.title',
			descKey: 'services.items.realEstate.description',
			landscapeSrc: cloudinary('/images/yegha/real-estate-full.jpg'),
			portraitSrc: cloudinary('/images/yegha/real-estate.jpg'),
			icon: House
		},
		{
			titleKey: 'services.items.immigration.title',
			descKey: 'services.items.immigration.description',
			landscapeSrc: cloudinary('/images/yegha/immigration.jpg'),
			portraitSrc: cloudinary('/images/yegha/immigration.jpg'),
			icon: IdentificationCard
		},
		{
			titleKey: 'services.items.litigation.title',
			descKey: 'services.items.litigation.description',
			landscapeSrc: cloudinary('/images/yegha/litigation-full.jpg'),
			portraitSrc: cloudinary('/images/yegha/litigation.jpg'),
			icon: Scales
		},
		{
			titleKey: 'services.items.labour.title',
			descKey: 'services.items.labour.description',
			landscapeSrc: cloudinary('/images/yegha/labor-law.jpg'),
			portraitSrc: cloudinary('/images/yegha/labor-law.jpg'),
			icon: Briefcase
		},
		{
			titleKey: 'services.items.intellectual.title',
			descKey: 'services.items.intellectual.description',
			landscapeSrc: cloudinary('/images/yegha/intellectual-property.webp'),
			portraitSrc: cloudinary('/images/yegha/intellectual-property.webp'),
			icon: Lightbulb
		},
		{
			titleKey: 'services.items.humanRights.title',
			descKey: 'services.items.humanRights.description',
			landscapeSrc: cloudinary('/images/yegha/human-rights.jpg'),
			portraitSrc: cloudinary('/images/yegha/human-rights.jpg'),
			icon: GlobeHemisphereWest
		},
		{
			titleKey: 'services.items.family.title',
			descKey: 'services.items.family.description',
			landscapeSrc: cloudinary('/images/yegha/family-law.jpg'),
			portraitSrc: cloudinary('/images/yegha/family-law.jpg'),
			icon: UsersThree
		}
	];
</script>

<section id="services" class="bg-white px-[50px] py-[100px] scroll-mt-[100px]">
	<div class="mx-auto flex max-w-[1200px] flex-col gap-11">
		<div class="mx-auto flex w-full max-w-[840px] flex-col items-center gap-6 px-8 text-center">
			<h2 class="font-serif text-[38px] font-light leading-[1.1] tracking-[-0.04em] text-text">
				{t('services.title')}
			</h2>
			<p class="font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/70">
				{t('services.subtitle')}
			</p>
		</div>
		<div class="flex flex-wrap justify-center gap-6">
			{#each services as s}
				<div class="min-w-[400px] flex-1">
					<ServiceCard title={t(s.titleKey)} description={t(s.descKey)} landscapeSrc={s.landscapeSrc} portraitSrc={s.portraitSrc}>
						<s.icon size={32} color="#0d9488" />
					</ServiceCard>
				</div>
			{/each}
		</div>
	</div>
</section>
