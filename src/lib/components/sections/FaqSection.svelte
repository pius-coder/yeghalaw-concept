<script lang="ts">
	import FaqItem from '$lib/components/ui/FaqItem.svelte';
	import ButtonMain from '$lib/components/ui/ButtonMain.svelte';
	import CloudinaryImage from '$lib/components/ui/CloudinaryImage.svelte';
	import { t } from '$lib/i18n.svelte';

	let openIndex = $state(0);

	const faqKeys = [0, 1, 2, 3, 4];

	function toggle(index: number) {
		openIndex = openIndex === index ? -1 : index;
	}
</script>

<section id="faq" class="flex w-full flex-col items-center gap-[10px] bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]">
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-[54px]">
		<div class="flex w-full max-w-[840px] flex-col items-center gap-6 max-md:gap-4">
			<h2 class="w-full text-center font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]">
				{t('faq.title')}
			</h2>
			<p class="w-full max-w-[720px] text-center font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85">
				{t('faq.subtitle')}
			</p>
		</div>
		<div class="flex w-full flex-row items-stretch gap-11 max-md:flex-col">
			<div class="relative flex min-h-[400px] flex-1 overflow-hidden rounded-[13px] max-md:min-h-[300px]" style="box-shadow:0 0.7px 0.7px -0.6px rgba(19,78,74,0.35), 0 1.8px 1.8px -1.2px rgba(19,78,74,0.34), 0 3.6px 3.6px -1.8px rgba(19,78,74,0.33), 0 6.9px 6.9px -2.3px rgba(19,78,74,0.3), 0 13.6px 13.6px -2.9px rgba(19,78,74,0.26), 0 30px 30px -3.5px rgba(19,78,74,0.15)">
				<div class="absolute inset-0">
					<CloudinaryImage
						src="/images/yegha/contact-office.jpg"
						alt=""
						class="h-full w-full object-cover"
					/>
				</div>
				<div class="absolute inset-0" style="background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%)"></div>
				<div class="absolute left-6 top-6 z-[2]">
					<svg width="50" height="50" viewBox="0 0 50 50" fill="white">
						<path d="M 21.4 7.719 C 21.618 8.067 21.764 8.454 21.832 8.859 C 21.9 9.264 21.887 9.678 21.795 10.078 C 21.703 10.478 21.533 10.855 21.294 11.189 C 21.056 11.524 20.754 11.807 20.406 12.025 C 16.603 14.394 13.581 17.831 11.719 21.906 C 13.6 21.749 15.484 22.163 17.126 23.094 C 18.768 24.026 20.09 25.431 20.92 27.126 C 21.75 28.821 22.049 30.727 21.778 32.595 C 21.507 34.463 20.678 36.206 19.4 37.595 C 18.123 38.984 16.455 39.955 14.617 40.382 C 12.778 40.808 10.853 40.669 9.095 39.983 C 7.336 39.298 5.825 38.097 4.76 36.539 C 3.695 34.981 3.125 33.137 3.125 31.25 L 3.125 31.166 C 3.128 30.924 3.139 30.682 3.156 30.441 C 3.184 29.972 3.241 29.316 3.35 28.509 C 3.569 26.906 3.997 24.697 4.862 22.216 C 6.588 17.247 10.081 11.106 17.094 6.725 C 17.442 6.507 17.829 6.361 18.234 6.293 C 18.639 6.225 19.053 6.238 19.453 6.33 C 19.853 6.422 20.23 6.592 20.564 6.831 C 20.899 7.069 21.183 7.371 21.4 7.719 Z M 43.275 7.719 C 43.493 8.067 43.639 8.454 43.707 8.859 C 43.775 9.264 43.762 9.678 43.67 10.078 C 43.703 10.478 43.533 10.855 43.294 11.189 C 43.056 11.524 42.754 11.807 42.406 12.025 C 38.603 14.394 35.581 17.831 33.719 21.906 C 35.6 21.749 37.484 22.163 39.126 23.094 C 40.768 24.026 42.09 25.431 42.92 27.126 C 43.75 28.821 44.049 30.727 43.778 32.595 C 43.507 34.463 42.678 36.206 41.4 37.595 C 40.123 38.984 38.455 39.955 36.617 40.382 C 34.778 40.808 32.853 40.669 31.095 39.983 C 29.336 39.298 27.825 38.097 26.76 36.539 C 25.695 34.981 25.125 33.137 25.125 31.25 L 25.125 31.166 C 25.128 30.924 25.139 30.682 25.156 30.441 C 25.184 29.972 25.241 29.316 25.35 28.509 C 25.569 26.906 25.997 24.697 26.863 22.216 C 28.587 17.247 32.081 11.106 39.094 6.725 C 39.442 6.507 39.829 6.361 40.234 6.293 C 40.639 6.225 41.053 6.238 41.453 6.33 C 41.853 6.422 42.23 6.592 42.565 6.831 C 42.898 7.069 43.182 7.371 43.4 7.719 Z" />
					</svg>
				</div>
				<div class="relative z-[2] flex flex-col justify-end p-8">
					<h2 class="font-serif text-[28px] font-light leading-[1.2] tracking-[-0.03em] text-white max-md:text-[22px]">
						{t('faq.quote')}
					</h2>
				</div>
			</div>
			<div class="flex flex-1 flex-col gap-5 max-md:w-full">
				{#each faqKeys as i}
					<div onclick={() => toggle(i)} role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && toggle(i)}>
						<FaqItem question={t(`faq.items.${i}.question`)} answer={t(`faq.items.${i}.answer`)} isOpen={openIndex === i} />
					</div>
				{/each}
			</div>
		</div>
		<div class="flex w-full flex-wrap items-center gap-4">
			<ButtonMain text={t('faq.contactUs')} variant="primary" href="/contact#contact" icon />
			<ButtonMain text={t('faq.ourServices')} variant="secondary" href="#services" icon />
		</div>
	</div>
</section>
