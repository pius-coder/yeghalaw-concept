<script lang="ts">
	import ProcessStep from '$lib/components/ui/ProcessStep.svelte';
	import ButtonMain from '$lib/components/ui/ButtonMain.svelte';
	import Star from 'phosphor-svelte/lib/Star';

	const steps = [
		{ stepNumber: 1, title: 'Our Mission', description: 'To provide exceptional legal services that protect our clients\' rights and interests while upholding the highest standards of professional ethics and integrity.' },
		{ stepNumber: 2, title: 'Our Vision', description: 'To be the leading law firm in Cameroon, recognized for our bilingual expertise, innovative legal solutions, and unwavering commitment to client success.' },
		{ stepNumber: 3, title: 'Our Values', description: 'Integrity, excellence, bilingualism, client focus, and social responsibility guide every aspect of our practice and client relationships.' }
	];
</script>

<section id="about" class="flex w-full flex-col items-center gap-[10px] bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]">
	<div class="flex w-full max-w-[1200px] flex-row items-start gap-11 max-md:flex-col max-md:gap-8">
		<div class="sticky top-10 flex flex-1 flex-col items-start gap-8 max-md:static max-md:w-full">
			<div class="z-[2] flex w-full max-w-[840px] flex-col items-center gap-6 max-md:gap-4">
				<h2 class="w-full font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]">
					About YEGHA LAW FIRM
				</h2>
				<p class="w-full max-w-[720px] font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85">
					YEGHA LAW FIRM is a full-service bilingual law firm based in Yaound&eacute;, Cameroon. We are dedicated to delivering high-quality legal services across multiple practice areas, combining deep local knowledge with international standards of excellence.
				</p>
			</div>
			<div class="flex w-full flex-wrap items-center gap-4">
				<ButtonMain text="Contact Us" variant="primary" href="/contact#contact" icon />
				<ButtonMain text="Our Services" variant="secondary" href="#services" icon />
			</div>
			<div class="flex w-full flex-wrap items-center gap-3">
				<div class="flex gap-0.5 text-primary">
					{#each Array(5) as _}
						<Star size={19} weight="fill" color="currentColor" />
					{/each}
				</div>
				<div class="h-6 w-[2px] bg-black/10"></div>
				<span class="font-sans text-lg leading-[1.5] text-text/60">Trusted by clients across Cameroon</span>
			</div>
		</div>
		<div class="flex flex-1 flex-col items-center gap-5 max-md:w-full">
			{#each steps as s}
				<ProcessStep stepNumber={s.stepNumber} title={s.title} description={s.description} />
			{/each}
		</div>
	</div>
</section>
