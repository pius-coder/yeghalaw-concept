<script lang="ts">
	import ButtonMain from '$lib/components/ui/ButtonMain.svelte';
	import MapPin from 'phosphor-svelte/lib/MapPin';
	import Clock from 'phosphor-svelte/lib/Clock';
</script>

<footer class="relative flex w-full flex-col items-center gap-[10px] overflow-hidden bg-white px-[50px] py-[100px] max-md:px-[18px] max-md:py-[80px]">
	<div class="flex w-full max-w-[1200px] flex-col items-center gap-10">
		<div class="flex w-full flex-col items-center gap-4">
			<span class="font-sans text-lg font-normal leading-[1.5] text-text/50 cursor-default">
				yeghalawfirm@gmail.com <span class="text-[11px] italic text-text/40">(inactive demo link)</span>
			</span>
			<span class="font-sans text-lg font-normal leading-[1.5] text-text/50 cursor-default">
				+237 697 383 421 <span class="text-[11px] italic text-text/40">(inactive demo link)</span>
			</span>
			<span class="font-sans text-lg font-normal leading-[1.5] text-text/50 cursor-default">
				+237 679 300 632 <span class="text-[11px] italic text-text/40">(inactive demo link)</span>
			</span>
			<div class="h-px w-full bg-white/80"></div>
		</div>
		<div class="h-px w-full bg-white"></div>
		<div class="flex w-full flex-col items-center gap-6">
			<h2 class="font-serif text-[180px] font-normal leading-[0.9] tracking-[-0.03em] text-text max-lg:text-[100px] max-md:text-[60px]" style="font-family:'Times New Roman',serif">
				YEGHA
			</h2>
			<p class="w-full max-w-[540px] text-center font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85">
				Expert legal solutions in Cameroon. Bilingual. Trusted. Client-focused.
			</p>
		</div>
		<nav class="flex flex-wrap items-center justify-center gap-4">
			<ButtonMain text="Home" variant="clean" href="#hero" />
			<ButtonMain text="Services" variant="clean" href="#services" />
			<ButtonMain text="Contact Us" variant="primary" href="/contact#contact" icon />
			<ButtonMain text="About" variant="clean" href="#about" />
		</nav>
		<div class="flex flex-col items-center gap-3">
			<div class="flex items-center gap-2">
				<MapPin size={16} color="rgba(0,0,0,0.65)" />
				<span class="font-sans text-[15px] font-normal text-text/85">mosqu&eacute;e monter-escalier, Immeuble Rose, 2&egrave;me &eacute;tage, Yaound&eacute;</span>
			</div>
			<div class="flex items-center gap-2">
				<Clock size={16} color="rgba(0,0,0,0.65)" />
				<span class="font-sans text-[15px] font-normal text-text/85">Mon&ndash;Fri 8:00&ndash;18:00 | Sat&ndash;Sun Closed</span>
			</div>
			<div class="flex items-center gap-6">
				<span class="font-sans text-[15px] font-normal text-text/85">&copy; 2025 YEGHA LAW FIRM</span>
				<div class="h-[18px] w-px bg-black/10"></div>
				<span class="font-sans text-[15px] font-normal text-text/85">All Rights Reserved</span>
			</div>
		</div>

		<!-- Legal Notice -->
		<div class="mt-10 w-full max-w-[800px] border-t border-black/10 pt-8 text-center">
			<p class="mb-4 font-heading text-xs font-bold uppercase tracking-[1px] text-text/60">Important Notice</p>
			<div class="space-y-4 text-left text-[12px] leading-[1.7] text-text/50">
				<p><strong class="text-text/70">English:</strong> This website is an independent and unofficial redesign concept prepared solely to demonstrate possible improvements to the online presentation of YEGHA LAW FIRM. This concept has not been commissioned, approved, endorsed or published by YEGHA LAW FIRM. It does not constitute the firm&rsquo;s official website and must not be interpreted as a legal service, professional communication or representation made on behalf of the firm. All names, trademarks, logos, photographs, biographies and other identifying materials relating to YEGHA LAW FIRM remain the property of their respective owners. Their limited appearance in this private demonstration is solely intended to identify the organisation for which the redesign proposal was prepared. No legal services are offered through this demonstration. All forms, telephone links, email links, appointment features and payment functions are disabled. For official information or legal assistance, please use the contact details published through YEGHA LAW FIRM&rsquo;s official communication channels.</p>
				<p><strong class="text-text/70">Fran&ccedil;ais :</strong> Ce site constitue un concept ind&eacute;pendant et non officiel de refonte, pr&eacute;par&eacute; uniquement afin d&rsquo;illustrer des am&eacute;liorations possibles de la pr&eacute;sentation en ligne de YEGHA LAW FIRM. Cette maquette n&rsquo;a pas &eacute;t&eacute; command&eacute;e, approuv&eacute;e, valid&eacute;e ou publi&eacute;e par YEGHA LAW FIRM. Elle ne constitue pas le site officiel du cabinet et ne doit pas &ecirc;tre interpr&eacute;t&eacute;e comme une offre de services juridiques, une communication professionnelle ou une repr&eacute;sentation effectu&eacute;e au nom du cabinet. Les noms, marques, logos, photographies, biographies et autres &eacute;l&eacute;ments permettant d&rsquo;identifier YEGHA LAW FIRM demeurent la propri&eacute;t&eacute; de leurs titulaires respectifs. Leur pr&eacute;sence limit&eacute;e dans cette d&eacute;monstration priv&eacute;e sert uniquement &agrave; identifier l&rsquo;organisation &agrave; laquelle la proposition de refonte est destin&eacute;e. Aucun service juridique n&rsquo;est propos&eacute; &agrave; travers cette d&eacute;monstration. Les formulaires, appels t&eacute;l&eacute;phoniques, liens &eacute;lectroniques, prises de rendez-vous et fonctions de paiement sont d&eacute;sactiv&eacute;s. Pour toute information officielle ou demande d&rsquo;assistance juridique, veuillez utiliser les canaux de communication officiels de YEGHA LAW FIRM.</p>
			</div>
		</div>
	</div>
</footer>
