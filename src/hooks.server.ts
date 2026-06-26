import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  let lang = 'en';
  try {
    lang = event.url.searchParams.get('lang') || 'en';
  } catch {}

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('%lang%', lang).replace('%dir%', 'ltr')
  });
};
