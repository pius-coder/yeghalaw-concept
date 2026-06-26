<script lang="ts">
	import WhyUsCard from '$lib/components/ui/WhyUsCard.svelte';
	import Translate from 'phosphor-svelte/lib/Translate';
	import MapPin from 'phosphor-svelte/lib/MapPin';
	import Heart from 'phosphor-svelte/lib/Heart';

	const cards = [
		{ title: 'Bilingual Advantage', description: 'We provide expert legal services in both English and French, ensuring clear communication and effective representation across Cameroon\'s bilingual legal landscape.', icon: Translate },
		{ title: 'Local Expertise', description: 'Deep understanding of Cameroon\'s legal system and business environment allows us to offer informed, strategic advice tailored to local realities.', icon: MapPin },
		{ title: 'Client-Centric Approach', description: 'Your goals are our priority. We take the time to understand your unique situation and develop personalized legal strategies that deliver results.', icon: Heart }
	];
</script>

<section id="why-us" class="flex w-full flex-col items-center gap-[10px] overflow-hidden bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]">
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-[54px] max-md:gap-8">
		<div class="flex w-full max-w-[840px] flex-col items-center gap-6 max-md:gap-4">
			<h2 class="w-full text-center font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]">
				Why Choose YEGHA LAW FIRM
			</h2>
			<p class="w-full max-w-[640px] text-center font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85">
				We combine legal excellence with a deep commitment to our clients&rsquo; success.
			</p>
		</div>
		<div class="flex w-full flex-col items-center gap-4 overflow-hidden max-md:gap-0">
			<div class="flex w-full max-w-[1100px]" style="perspective:1200px;overflow:hidden">
				<div class="flex w-full flex-row gap-5 max-md:flex-col max-md:items-center">
					{#each cards as card}
						<div class="flex-1 shrink-0 max-md:w-full">
							<WhyUsCard title={card.title} description={card.description}>
								<card.icon size={20} color="#6d28d9" />
							</WhyUsCard>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
