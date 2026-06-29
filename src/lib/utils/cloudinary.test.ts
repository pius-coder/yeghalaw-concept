import { describe, it, expect } from 'vitest';
import { cloudinary, storyblokAssetUrl } from './cloudinary';

describe('cloudinary()', () => {
	it('returns empty string for empty src', () => {
		expect(cloudinary('')).toBe('');
	});

	it('returns full URL as-is', () => {
		const url = 'https://example.com/img.png';
		expect(cloudinary(url)).toBe(url);
	});

	it('builds Cloudinary URL from filename', () => {
		const result = cloudinary('photo.jpg');
		expect(result).toContain('res.cloudinary.com');
		expect(result).toContain('photo.jpg');
		expect(result).toContain('q_auto');
		expect(result).toContain('f_auto');
	});

	it('includes width transform when provided', () => {
		const result = cloudinary('photo.jpg', { w: 800 });
		expect(result).toContain('w_800');
	});

	it('includes height transform when provided', () => {
		const result = cloudinary('photo.jpg', { h: 600 });
		expect(result).toContain('h_600');
	});
});

describe('storyblokAssetUrl()', () => {
	it('returns empty string for null', () => {
		expect(storyblokAssetUrl(null)).toBe('');
	});

	it('returns empty string for undefined', () => {
		expect(storyblokAssetUrl(undefined)).toBe('');
	});

	it('returns empty string for asset without filename', () => {
		expect(storyblokAssetUrl({ filename: '' })).toBe('');
	});

	it('returns the filename when present', () => {
		expect(storyblokAssetUrl({ filename: 'https://a.storyblok.com/img.png' })).toBe(
			'https://a.storyblok.com/img.png'
		);
	});
});
