const CLOUD_NAME = 'dgcnhlzwl';
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function cloudinary(
  src: string,
  options?: { w?: number; h?: number }
): string {
  const filename = src.split('/').pop() || src;
  const transforms = [`q_auto`, `f_auto`];
  if (options?.w) transforms.unshift(`w_${options.w}`);
  if (options?.h) transforms.unshift(`h_${options.h}`);
  return `${BASE}/${transforms.join(',')}/${filename}`;
}
