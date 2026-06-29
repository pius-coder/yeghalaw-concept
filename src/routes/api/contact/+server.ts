import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { validate } from '$lib/utils/contact-validation';
import type { ContactPayload } from '$lib/utils/contact-validation';

const recentIps = new Map<string, number>();

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const last = recentIps.get(ip);
	if (last && now - last < 60000) return true;
	recentIps.set(ip, now);
	return false;
}

export async function POST({ request, getClientAddress }: RequestEvent): Promise<Response> {
	const ip = getClientAddress();

	if (isRateLimited(ip)) {
		return json(
			{ error: 'Too many requests. Please wait before sending another message.' },
			{ status: 429 }
		);
	}

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return json({ error: 'Invalid JSON body' }, { status: 400 });
	}

	const { valid, errors } = validate(body);

	if (!valid) {
		return json({ error: 'Validation failed', details: errors }, { status: 400 });
	}

	const payload = body as unknown as ContactPayload;

	console.log(
		`[Contact] Message from ${payload.name} <${payload.email}> — subject: ${payload.subject}`
	);

	return json({
		success: true,
		message:
			payload.locale === 'fr'
				? 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
				: 'Your message has been sent successfully. We will get back to you shortly.'
	});
}
