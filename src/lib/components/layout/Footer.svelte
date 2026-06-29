<script lang="ts">
	import type { SiteSettings } from '$lib/cms/types';
	import { t } from '$lib/i18n.svelte';

	let { settings }: { settings?: SiteSettings } = $props();
</script>

<!-- Trust Badges Bar -->
<div class="border-y border-black/5 bg-white px-5 py-4 md:px-8 lg:px-12">
	<div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8">
		{#each ['badges.clients', 'badges.bilingual', 'badges.trusted', 'badges.results'] as badge}
			<div class="flex items-center gap-2">
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					class="text-primary"
					><path
						d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
					/></svg
				>
				<span class="font-sans text-sm text-text/60">{t(badge)}</span>
			</div>
		{/each}
	</div>
</div>

<footer class="bg-clean px-5 pt-12 pb-6 md:px-8 lg:px-12">
	<div class="mx-auto max-w-7xl">
		<div class="mb-6 flex flex-col gap-1">
			<a
				href={settings?.email ? `mailto:${settings.email}` : '#'}
				class="font-sans text-sm text-text/40 transition-base hover:text-text/60"
			>
				{settings?.email || 'yeghalawfirm@gmail.com'}
				<span class="text-[10px] italic">{t('footer.emailDemo')}</span>
			</a>
			<a
				href={settings?.phone_primary ? `tel:${settings.phone_primary}` : '#'}
				class="font-sans text-sm text-text/40 transition-base hover:text-text/60"
			>
				{settings?.phone_primary || '+237 697 383 421'}
				<span class="text-[10px] italic">{t('footer.phoneDemo')}</span>
			</a>
		</div>
		<div class="mb-8 border-t border-black/10"></div>

		<nav class="mb-10 flex flex-wrap justify-center gap-6">
			<a href="#hero" class="font-sans text-sm text-text/60 transition-base hover:text-text"
				>{t('footer.home')}</a
			>
			<a href="#services" class="font-sans text-sm text-text/60 transition-base hover:text-text"
				>{t('footer.services')}</a
			>
			<a
				href="/contact#contact"
				class="rounded-full bg-primary px-5 py-2 font-sans text-sm font-medium text-white opacity-60 cursor-default"
				>{t('footer.contactUs')}</a
			>
			<a href="#about" class="font-sans text-sm text-text/60 transition-base hover:text-text"
				>{t('footer.about')}</a
			>
			<a href="#our-team" class="font-sans text-sm text-text/60 transition-base hover:text-text"
				>{t('footer.team')}</a
			>
		</nav>

		<div class="overflow-hidden py-4">
			<h1
				class="text-center font-serif text-[8rem] leading-none tracking-tight text-text md:text-[12rem] lg:text-[16rem]"
			>
				{settings?.firm_name?.split(' ')[0] || 'YEGHA'}
			</h1>
		</div>

		<div class="border-t border-black/10 pt-6">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="font-sans text-sm text-text/40">
					{settings?.copyright || t('footer.copyright')}
				</p>
				<p class="font-sans text-sm text-text/40">
					{t('footer.rights')}
				</p>
			</div>
		</div>
	</div>
</footer>
