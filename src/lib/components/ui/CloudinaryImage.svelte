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
</script>

<img
  src={cloudinary(src)}
  alt={alt}
  class={className}
  loading="lazy"
  decoding="async"
  {width}
  {height}
/>
