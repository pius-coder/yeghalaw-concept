<script lang="ts">
	import ButtonMain from '$lib/components/ui/ButtonMain.svelte';
	import SealCheck from 'phosphor-svelte/lib/SealCheck';
	import Star from 'phosphor-svelte/lib/Star';
</script>

<section id="hero" class="flex flex-col items-center justify-start gap-[10px] overflow-hidden bg-white px-[50px] pb-[100px] pt-5 scroll-mt-[100px] max-md:px-[18px] max-md:pb-20">
	<div class="flex w-full flex-col items-center gap-16 rounded-[36px] bg-[radial-gradient(circle_at_18%_15%,rgba(124,58,237,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(255,90,95,0.14),transparent_28%),linear-gradient(180deg,#f2eeff_-20%,#fff9f2_55%,transparent_92%)] max-md:gap-8 max-md:rounded-[24px]">
		<div class="flex w-full max-w-[1200px] flex-wrap items-start gap-12 px-0 pb-10 pt-[100px] max-md:flex-col max-md:px-5 max-md:pt-10 max-sm:px-[10px]">
			<div class="relative flex min-w-[440px] max-w-[720px] flex-1 flex-row items-center gap-8 max-md:min-w-0 max-md:flex-col max-md:gap-16">
				<div class="pointer-events-none absolute left-[-40px] top-1/2 z-0 -translate-y-1/2 max-md:bottom-0 max-md:left-1/2 max-md:top-auto max-md:-translate-x-1/2 max-md:translate-y-0">
					<div class="absolute right-0 top-1/2 -translate-y-1/2 max-md:bottom-0 max-md:left-1/2 max-md:right-auto max-md:top-auto max-md:-translate-x-1/2 max-md:translate-y-0">
						<div class="h-[500px] w-[500px] rounded-full border border-black/10 shadow-[0_-200px_100px_-50px_rgba(0,0,0,0.05)]"></div>
						<div class="absolute inset-[-265px_-47px] rounded-full bg-white/80 blur-[40px]"></div>
					</div>
				</div>
				<div class="z-[2] flex flex-1 flex-col gap-6">
				<div class="inline-flex items-center gap-2 rounded-[17px] border border-[#f2eeff] bg-white px-4 py-1.5 shadow-[0_8px_24px_0_rgba(173,173,173,0.08)]">
					<SealCheck size={22} weight="duotone" color="rgba(0,0,0,0.85)" />
					<span class="font-heading text-sm font-medium uppercase tracking-[0.8px] text-text">EXPERT LEGAL SOLUTIONS</span>
				</div>

				<h1 class="font-serif text-[70px] font-light leading-[1] tracking-[-0.04em] text-text max-lg:text-[3.5rem] max-md:text-[3rem]">
					Expert Legal<br />Solutions in Cameroon
				</h1>

				<p class="font-sans text-lg leading-[1.5] tracking-[-0.02em] text-text/60">
					Providing bilingual legal services with a strong commitment to excellence in corporate and real estate sectors across the economy.
				</p>

				<div class="flex flex-wrap gap-4">
					<ButtonMain text="Contact Us" variant="primary" href="/contact#contact" icon />
					<ButtonMain text="Our Services" variant="secondary" href="#services" icon />
				</div>

				<div class="h-[2px] w-[406px] bg-black/10 max-md:w-full"></div>

				<div class="flex items-center gap-3">
					<div class="flex gap-0.5 text-primary">
						{#each Array(5) as _}
							<Star size={19} weight="fill" color="currentColor" />
						{/each}
					</div>
					<div class="h-6 w-[2px] bg-black/10"></div>
					<span class="font-sans text-lg leading-[1.5] text-text/60">Trusted by clients across Cameroon</span>
				</div>
				</div>
			</div>

			<div class="relative flex min-w-[440px] flex-1 flex-col gap-6 max-md:min-w-0">
				<div class="relative flex w-full flex-wrap gap-4">
					<div class="flex-1 overflow-hidden rounded-[16px]">
						<img
							src="/images/yegha/team-terence.jpg"
							alt="YEGHA LAW FIRM"
							class="aspect-[2/3] w-full object-cover"
							width="1024"
							height="1536"
						/>
					</div>
					<div class="flex-1 overflow-hidden rounded-[16px]">
						<img
							src="/images/yegha/corporate-law.jpg"
							alt="Legal expertise"
							class="aspect-[2/3] w-full object-cover"
							width="1024"
							height="1536"
						/>
					</div>
				</div>

				<div class="h-[2px] w-full bg-black/10"></div>

				<div class="flex items-center gap-4">
					<div class="flex">
						<div class="relative -mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white">
							<img src="/images/yegha/testimonial-1.jpg" alt="" class="h-full w-full object-cover" />
						</div>
						<div class="relative z-10 -mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white">
							<img src="/images/yegha/testimonial-2.jpg" alt="" class="h-full w-full object-cover" />
						</div>
						<div class="relative z-20 -mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white">
							<img src="/images/yegha/testimonial-3.jpg" alt="" class="h-full w-full object-cover" />
						</div>
						<div class="relative z-30 -mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white">
							<img src="/images/yegha/team-terence.jpg" alt="" class="h-full w-full object-cover" />
						</div>
					</div>
					<div class="font-sans text-lg leading-[1.5] text-text/60">
						Join <span class="font-semibold text-text" style="font-size:16px;line-height:1.6">1,000+</span><span> other awesome clients</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
