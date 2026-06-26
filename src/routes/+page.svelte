<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import ServicesSection from '$lib/components/sections/ServicesSection.svelte';
	import WhyUsSection from '$lib/components/sections/WhyUsSection.svelte';
	import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';
	import FooterSection from '$lib/components/sections/FooterSection.svelte';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';
	import CtaSection from '$lib/components/sections/CtaSection.svelte';
	import ComparisonSection from '$lib/components/sections/ComparisonSection.svelte';
	import StatsSection from '$lib/components/sections/StatsSection.svelte';
</script>

<svelte:head>
	<title>Unofficial Redesign Concept for YEGHA LAW FIRM</title>
	<meta name="description" content="Private redesign demonstration — Unofficial concept for YEGHA LAW FIRM. Not the official website." />
</svelte:head>

<NavBar />

<HeroSection />

<!-- Trusted By -->
<section class="flex w-full flex-col items-center gap-[10px] border-y border-black/5 bg-white px-[50px] py-10 max-md:px-[18px]">
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-6">
		<p class="font-heading text-sm font-semibold uppercase tracking-wider text-text/50">Trusted by Clients Across Cameroon</p>
		<div class="flex flex-wrap items-center justify-center gap-10 opacity-40 grayscale">
			<span class="font-heading text-xl font-bold text-text">Corporate</span>
			<span class="font-heading text-xl font-bold text-text">Real Estate</span>
			<span class="font-heading text-xl font-bold text-text">Immigration</span>
			<span class="font-heading text-xl font-bold text-text">Litigation</span>
			<span class="font-heading text-xl font-bold text-text">Family Law</span>
		</div>
	</div>
</section>

<ServicesSection />

<WhyUsSection />

<StatsSection />

<ProcessSection />

<ComparisonSection />

<FaqSection />

<CtaSection />

<TeamSection />

<FooterSection />
