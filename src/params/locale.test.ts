import { describe, it, expect } from 'vitest';
import { match } from './locale';

describe('locale param matcher', () => {
	it('matches en', () => {
		expect(match('en')).toBe(true);
	});

	it('matches fr', () => {
		expect(match('fr')).toBe(true);
	});

	it('rejects other values', () => {
		expect(match('de')).toBe(false);
		expect(match('')).toBe(false);
		expect(match('en-US')).toBe(false);
	});
});
