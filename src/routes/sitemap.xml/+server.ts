import type { RequestEvent } from '@sveltejs/kit';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://yeghalawfirm.com';

const pages = [
	{ path: '', changefreq: 'weekly', priority: '1.0' as const },
	{ path: 'blog', changefreq: 'weekly', priority: '0.8' },
	{ path: 'contact', changefreq: 'monthly', priority: '0.6' },
	{ path: 'privacy', changefreq: 'monthly', priority: '0.3' }
];

export async function GET(_event: RequestEvent): Promise<Response> {
	const locales = ['fr', 'en'];

	const urls = locales.flatMap((locale) =>
		pages.map(
			(page) => `
  <url>
    <loc>${SITE_URL}/${locale}/${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
		)
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
