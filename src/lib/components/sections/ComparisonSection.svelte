<script lang="ts">
  import SealCheck from 'phosphor-svelte/lib/SealCheck';

  const portfolio = [
    { title: 'Corporate Law Success', src: '/images/yegha/work-1.jpg' },
    { title: 'Real Estate Transaction', src: '/images/yegha/work-2.jpg' },
    { title: 'Immigration Case', src: '/images/yegha/work-3.jpg' },
    { title: 'Litigation Victory', src: '/images/yegha/work-4.jpg' }
  ];

  const badges = [
    'Worked With 100+ Clients',
    'Bilingual Legal Experts',
    'Trusted Advisors',
    'Proven Results'
  ];
</script>

<section id="portfolio" class="relative flex w-full flex-col items-center gap-[10px] overflow-hidden bg-white px-[50px] py-[100px] scroll-mt-[100px] max-md:px-[18px] max-md:py-[80px]">
  <div class="flex w-full max-w-[1200px] flex-col items-center gap-11">
    <div class="flex max-w-[840px] flex-col items-center gap-6 text-center">
      <h2 class="font-serif text-[44px] font-light leading-[1.1] tracking-[-0.04em] text-text max-lg:text-[38px]">
        Our Recent Work
      </h2>
      <p class="max-w-[640px] font-sans text-lg font-normal leading-[1.5] tracking-[-0.02em] text-text/85">
        We take pride in delivering exceptional legal services. Here are some highlights from our recent cases and client engagements.
      </p>
    </div>

    <div class="grid w-full gap-6 sm:grid-cols-2">
      {#each portfolio as item}
        <div class="group relative overflow-hidden rounded-[16px]">
          <img src={item.src} alt={item.title} class="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6">
            <h3 class="font-sans text-lg font-semibold text-white">{item.title}</h3>
          </div>
        </div>
      {/each}
    </div>

    <div class="flex flex-wrap items-center justify-center gap-3">
      {#each badges as badge}
        <div class="inline-flex items-center gap-2 rounded-[8px] px-4 py-3" style="background:radial-gradient(50% 50% at 50% 50%, #fff 13%, rgba(255,255,255,0.33) 100%)">
          <SealCheck size={20} weight="duotone" color="rgba(0,0,0,0.85)" />
          <span class="font-sans text-[15px] font-normal text-text/85">{badge}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
