import { formatDate } from './formatDate';

test('formats date correctly', () => {
    expect(formatDate('2025-06-12')).toBe('12 June 2025');
    expect(formatDate('2020-01-01')).toBe('1 January 2020');
});