<script lang="ts">
	import NavLink from '$lib/components/ui/NavLink.svelte';
	import ButtonMain from '$lib/components/ui/ButtonMain.svelte';
	import CloudinaryImage from '$lib/components/ui/CloudinaryImage.svelte';
	import LanguageSwitcher from '$lib/components/ui/LanguageSwitcher.svelte';
	import { t } from '$lib/i18n.svelte';

	let mobileOpen = $state(false);

	const navLinks = [
		{ label: 'nav.home', href: '#hero' },
		{ label: 'nav.services', href: '#services' },
		{ label: 'nav.about', href: '#about' },
		{ label: 'nav.team', href: '#our-team' },
		{ label: 'nav.contact', href: '#faq' }
	];

	const navShadow =
		'0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(19,78,74,0.17), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(19,78,74,0.17), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(19,78,74,0.16), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(19,78,74,0.15), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(19,78,74,0.13), 0px 30px 30px -3.5px rgba(19,78,74,0.08), 0px -0.6624060319518321px 0.6624060319518321px -1.1666666666666665px rgba(19,78,74,0.07), 0px -2.517386633567803px 2.517386633567803px -2.333333333333333px rgba(19,78,74,0.06), 0px -11px 11px -3.5px rgba(19,78,74,0.03)';
</script>

<!-- Disclaimer Banner -->
<div class="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center bg-[linear-gradient(110deg,#134e4a_0%,#0f766e_55%,#14b8a6_100%)] px-4 py-1.5 text-center max-md:px-2">
	<span class="font-heading text-[10px] font-semibold uppercase tracking-[1px] text-white/80 max-md:hidden">
		{t('banner.desktop')}
	</span>
	<span class="font-heading text-[9px] font-semibold uppercase tracking-[0.5px] text-white/80 md:hidden">
		{t('banner.mobile')}
	</span>
</div>

<!-- Top Bar -->
<div class="fixed top-[36px] left-0 right-0 z-50 flex items-center justify-between bg-white px-5 py-3 md:px-8 lg:px-12">
	<a href="#hero" class="flex items-center" aria-label="YEGHA LAW FIRM Home">
		<CloudinaryImage src="/images/yegha/logo.jpg" alt="YEGHA LAW FIRM" class="h-10 w-auto" />
	</a>

	<div class="flex items-center gap-6">

		<div class="hidden items-center gap-4 md:flex">
			<LanguageSwitcher />
			<span class="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-clean text-text/30 shadow-[inset_3px_3px_47px_5px_rgba(255,255,255,0.65)]" aria-label={t('nav.emailAria')}>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
			</span>
			<span class="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-clean text-text/30 shadow-[inset_3px_3px_47px_5px_rgba(255,255,255,0.65)]" aria-label={t('nav.whatsappAria')}>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
			</span>
			<span class="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-clean text-text/30 shadow-[inset_3px_3px_47px_5px_rgba(255,255,255,0.65)]" aria-label={t('nav.facebookAria')}>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
			</span>
		</div>
	</div>
</div>

<!-- Floating Pill Nav (Desktop/Tablet) -->
<div class="fixed bottom-4 left-1/2 z-10 hidden -translate-x-1/2 md:block">
	<nav
		class="flex items-center justify-center gap-2 rounded-[100px] px-5 py-2.5"
		style="background: linear-gradient(180deg, #ffffff 0%, #f2f8f5 52%, #fff3e8 100%); backdrop-filter: blur(8px); box-shadow: {navShadow};"
	>
		{#each navLinks as link}
			<NavLink text={t(link.label)} href={link.href} />
		{/each}
		<ButtonMain text={t('nav.contactUs')} href="/contact#contact" />
	</nav>
</div>

<!-- Mobile Menu Button -->
<button
	type="button"
	class="fixed right-5 top-[44px] z-50 flex items-center justify-center rounded-xl bg-white md:hidden"
	aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
	aria-expanded={mobileOpen}
	onclick={() => (mobileOpen = !mobileOpen)}
>
	{#if mobileOpen}
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>
	{:else}
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	{/if}
</button>

{#if mobileOpen}
	<div
		class="fixed inset-0 z-40 bg-black/10 md:hidden"
		role="presentation"
		onclick={() => (mobileOpen = false)}
	></div>
	<div class="fixed top-[80px] left-0 right-0 z-40 mx-4 flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-lg md:hidden slide-down">
		{#each navLinks as link}
			<a
				href={link.href}
				class="font-heading text-base font-medium text-text/80 transition-base hover:text-primary"
				onclick={() => (mobileOpen = false)}
			>
				{t(link.label)}
			</a>
		{/each}
		<ButtonMain text={t('nav.contactUs')} href="/contact#contact" onclick={() => (mobileOpen = false)} />
	</div>
{/if}
