import { describe, it, expect, beforeEach } from 'vitest';
import { validate } from '$lib/utils/contact-validation';

describe('validate()', () => {
	it('accepts valid payload', () => {
		const { valid, errors } = validate({
			name: 'John Doe',
			email: 'john@example.com',
			subject: 'Consultation',
			message: 'I would like to schedule a consultation regarding my case.',
			consent: true
		});
		expect(valid).toBe(true);
		expect(errors).toHaveLength(0);
	});

	it('rejects short name', () => {
		const { valid, errors } = validate({
			name: 'J',
			email: 'john@example.com',
			subject: 'Consultation',
			message: 'I would like to schedule a consultation.',
			consent: true
		});
		expect(valid).toBe(false);
		expect(errors).toContain('Name must be at least 2 characters');
	});

	it('rejects invalid email', () => {
		const { valid, errors } = validate({
			name: 'John Doe',
			email: 'not-an-email',
			subject: 'Consultation',
			message: 'I would like to schedule a consultation.',
			consent: true
		});
		expect(valid).toBe(false);
		expect(errors).toContain('Valid email is required');
	});

	it('rejects short message', () => {
		const { valid, errors } = validate({
			name: 'John Doe',
			email: 'john@example.com',
			subject: 'Consultation',
			message: 'Hi',
			consent: true
		});
		expect(valid).toBe(false);
		expect(errors).toContain('Message must be at least 10 characters');
	});

	it('rejects missing consent', () => {
		const { valid, errors } = validate({
			name: 'John Doe',
			email: 'john@example.com',
			subject: 'Consultation',
			message: 'I would like to schedule a consultation.',
			consent: false
		});
		expect(valid).toBe(false);
		expect(errors).toContain('Consent is required');
	});

	it('rejects missing name', () => {
		const { valid, errors } = validate({
			email: 'john@example.com',
			subject: 'Consultation',
			message: 'I would like to schedule a consultation.',
			consent: true
		});
		expect(valid).toBe(false);
	});

	it('rejects non-string subject', () => {
		const { valid, errors } = validate({
			name: 'John Doe',
			email: 'john@example.com',
			subject: 123,
			message: 'I would like to schedule a consultation.',
			consent: true
		});
		expect(valid).toBe(false);
	});
});
