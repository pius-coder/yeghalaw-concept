export interface ContactPayload {
	name: string;
	email: string;
	phone?: string;
	subject: string;
	message: string;
	locale: 'fr' | 'en';
	consent: boolean;
}

export function validate(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
	const errors: string[] = [];

	if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
		errors.push('Name must be at least 2 characters');
	}

	if (
		!data.email ||
		typeof data.email !== 'string' ||
		!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
	) {
		errors.push('Valid email is required');
	}

	if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 2) {
		errors.push('Subject must be at least 2 characters');
	}

	if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
		errors.push('Message must be at least 10 characters');
	}

	if (data.consent !== true) {
		errors.push('Consent is required');
	}

	return { valid: errors.length === 0, errors };
}
