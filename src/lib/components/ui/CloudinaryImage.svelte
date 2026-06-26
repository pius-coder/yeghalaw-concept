<script lang="ts">
  import { cloudinary } from '$lib/utils/cloudinary';

  let {
    src = '',
    alt = '',
    class: className = '',
    width,
    height
  }: {
    src: string;
    alt?: string;
    class?: string;
    width?: number;
    height?: number;
  } = $props();

  let loaded = $state(false);
</script>

<div class="relative overflow-hidden {className}">
  {#if !loaded}
    <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
  {/if}
  <img
    src={cloudinary(src)}
    alt={alt}
    class="h-full w-full object-cover transition-opacity duration-500 {loaded ? 'opacity-100' : 'opacity-0'}"
    loading="lazy"
    decoding="async"
    onload={() => (loaded = true)}
    {width}
    {height}
  />
</div>
