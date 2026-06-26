import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const match = event.url.pathname.match(/^\/(en|fr)(\/|$)/);
  const lang = match?.[1] || 'en';

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('%lang%', lang).replace('%dir%', 'ltr')
  });
};
