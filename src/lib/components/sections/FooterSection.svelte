<script lang="ts">
	import ButtonMain from '$lib/components/ui/ButtonMain.svelte';
	import MapPin from 'phosphor-svelte/lib/MapPin';
	import Clock from 'phosphor-svelte/lib/Clock';
	import { t } from '$lib/i18n.svelte';
</script>

<footer class="relative flex w-full flex-col items-center gap-[10px] overflow-hidden bg-white px-[50px] py-[100px] max-md:px-[18px] max-md:py-[80px]">
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-10">
		<div class="flex w-full flex-col items-center gap-4">
			<span class="font-sans text-lg font-normal leading-[1.5] text-text/50 cursor-default">
				yeghalawfirm@gmail.com <span class="text-[11px] italic text-text/40">{t('footerSection.emailDemo')}</span>
			</span>
			<span class="font-sans text-lg font-normal leading-[1.5] text-text/50 cursor-default">
				+237 697 383 421 <span class="text-[11px] italic text-text/40">{t('footerSection.phoneDemo')}</span>
			</span>
			<span class="font-sans text-lg font-normal leading-[1.5] text-text/50 cursor-default">
				+237 679 300 632 <span class="text-[11px] italic text-text/40">{t('footerSection.phoneDemo')}</span>
			</span>
			<div class="h-px w-full bg-white/80"></div>
		</div>
		<div class="h-px w-full bg-white"></div>
		<div class="flex w-full flex-col items-center gap-6">
			<h2 class="font-serif text-[180px] font-normal leading-[0.9] tracking-[-0.03em] text-text max-lg:text-[100px] max-md:text-[60px]" style="font-family:'Times New Roman',serif">
				YEGHA
			</h2>
			<p class="w-full max-w-[540px] text-center font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85">
				{t('footerSection.tagline')}
			</p>
		</div>
		<nav class="flex flex-wrap items-center justify-center gap-4">
			<ButtonMain text={t('footerSection.home')} variant="clean" href="#hero" />
			<ButtonMain text={t('footerSection.services')} variant="clean" href="#services" />
			<ButtonMain text={t('footerSection.contactUs')} variant="primary" href="/contact#contact" icon />
			<ButtonMain text={t('footerSection.about')} variant="clean" href="#about" />
		</nav>
		<div class="flex flex-col items-center gap-3">
			<div class="flex items-center gap-2">
				<MapPin size={16} color="rgba(0,0,0,0.65)" />
				<span class="font-sans text-[15px] font-normal text-text/85">{t('footerSection.address')}</span>
			</div>
			<div class="flex items-center gap-2">
				<Clock size={16} color="rgba(0,0,0,0.65)" />
				<span class="font-sans text-[15px] font-normal text-text/85">{t('footerSection.hours')}</span>
			</div>
			<div class="flex items-center gap-6">
				<span class="font-sans text-[15px] font-normal text-text/85">{t('footerSection.copyright')}</span>
				<div class="h-[18px] w-px bg-black/10"></div>
				<span class="font-sans text-[15px] font-normal text-text/85">{t('footerSection.rights')}</span>
			</div>
		</div>

		<!-- Legal Notice -->
		<div class="mt-10 w-full max-w-[800px] border-t border-black/10 pt-8 text-center">
			<p class="mb-4 font-heading text-xs font-bold uppercase tracking-[1px] text-text/60">{t('footerSection.legalNotice.title')}</p>
			<div class="space-y-4 text-left text-[12px] leading-[1.7] text-text/50">
				<p><strong class="text-text/70">{t('footerSection.legalNotice.englishLabel')}</strong> {t('footerSection.legalNotice.english')}</p>
				<p><strong class="text-text/70">{t('footerSection.legalNotice.frenchLabel')}</strong> {t('footerSection.legalNotice.french')}</p>
			</div>
		</div>
	</div>
</footer>
