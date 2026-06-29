const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'dgcnhlzwl';
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function cloudinary(src: string, options?: { w?: number; h?: number }): string {
	if (!src) return '';
	if (src.startsWith('http://') || src.startsWith('https://')) return src;
	const filename = src.split('/').pop() || src;
	const transforms = [`q_auto`, `f_auto`];
	if (options?.w) transforms.unshift(`w_${options.w}`);
	if (options?.h) transforms.unshift(`h_${options.h}`);
	return `${BASE}/${transforms.join(',')}/${filename}`;
}

export function storyblokAssetUrl(asset: { filename?: string } | null | undefined): string {
	if (!asset?.filename) return '';
	return asset.filename;
}
