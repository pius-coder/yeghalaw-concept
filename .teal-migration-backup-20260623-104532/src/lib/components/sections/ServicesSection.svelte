<script lang="ts">
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
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
			title: 'Corporate Law',
			description: 'Expert guidance for businesses of all sizes, offering tailored legal solutions for company formation, compliance, and governance. We ensure that our clients navigate the complexities of corporate regulations efficiently while protecting their interests.',
			landscapeSrc: '/images/yegha/corporate-full.jpg',
			portraitSrc: '/images/yegha/corporate-law.jpg',
			icon: Building
		},
		{
			title: 'Real Estate',
			description: 'Comprehensive assistance in property transactions, leasing agreements, and regulatory compliance. We strive to protect our clients\' investments and ensure smooth dealings in the real estate market.',
			landscapeSrc: '/images/yegha/real-estate-full.jpg',
			portraitSrc: '/images/yegha/real-estate.jpg',
			icon: House
		},
		{
			title: 'Immigration Law',
			description: 'Expert advice and representation for individuals and businesses seeking visas, work permits, and residency in Cameroon. We simplify the often-complex immigration process to help our clients achieve their goals.',
			landscapeSrc: '/images/yegha/immigration.jpg',
			portraitSrc: '/images/yegha/immigration.jpg',
			icon: IdentificationCard
		},
		{
			title: 'Litigation',
			description: 'Robust litigation services to protect our clients\' rights in disputes. Our skilled attorneys represent clients in various legal matters, from contract disputes to arbitration, ensuring effective resolution strategies.',
			landscapeSrc: '/images/yegha/litigation-full.jpg',
			portraitSrc: '/images/yegha/litigation.jpg',
			icon: Scales
		},
		{
			title: 'Labour Law',
			description: 'Labour Law governs the relationship between employers, employees, and labor organizations. We provide comprehensive counsel on workers\' rights, workplace conditions, employment contracts, wages, and dispute resolution.',
			landscapeSrc: '/images/yegha/labor-law.jpg',
			portraitSrc: '/images/yegha/labor-law.jpg',
			icon: Briefcase
		},
		{
			title: 'Intellectual Property',
			description: 'IP law grants creators and inventors exclusive rights over their creations, providing protection and incentivizing innovation. We help you protect your trademarks, patents, copyrights, and trade secrets.',
			landscapeSrc: '/images/yegha/intellectual-property.webp',
			portraitSrc: '/images/yegha/intellectual-property.webp',
			icon: Lightbulb
		},
		{
			title: 'International Human Rights',
			description: 'Our International Human Rights as a Service (IHRaaS) approach encompasses advocacy, education, consultation, and legal support to promote and protect human rights on a global scale.',
			landscapeSrc: '/images/yegha/human-rights.jpg',
			portraitSrc: '/images/yegha/human-rights.jpg',
			icon: GlobeHemisphereWest
		},
		{
			title: 'Family & Succession Law',
			description: 'Family and Succession Law deals with family relationships, inheritance, and the transfer of assets upon death. We protect family rights and ensure fair distribution of property.',
			landscapeSrc: '/images/yegha/family-law.jpg',
			portraitSrc: '/images/yegha/family-law.jpg',
			icon: UsersThree
		}
	];
</script>

<section id="services" class="bg-[radial-gradient(circle_at_8%_10%,rgba(124,58,237,0.13),transparent_30%),radial-gradient(circle_at_92%_85%,rgba(249,115,22,0.13),transparent_32%),#f2eeff] px-[50px] py-[100px] scroll-mt-[100px]">
	<div class="mx-auto flex max-w-[1200px] flex-col gap-11">
		<div class="mx-auto flex w-full max-w-[840px] flex-col items-center gap-6 px-8 text-center">
			<h2 class="font-serif text-[38px] font-light leading-[1.1] tracking-[-0.04em] text-text">
				Comprehensive Legal Solutions
			</h2>
			<p class="font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/70">
				At YEGHA LAW FIRM, we specialize in a diverse range of legal areas to meet our clients&rsquo; unique needs and expectations.
			</p>
		</div>
		<div class="flex flex-wrap justify-center gap-6">
			{#each services as s}
				<div class="min-w-[400px] flex-1">
					<ServiceCard title={s.title} description={s.description} landscapeSrc={s.landscapeSrc} portraitSrc={s.portraitSrc}>
						<s.icon size={32} color="#6d28d9" />
					</ServiceCard>
				</div>
			{/each}
		</div>
	</div>
</section>
