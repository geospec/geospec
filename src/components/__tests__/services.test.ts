import { describe, it, expect } from 'vitest';
import { SERVICES, SERVICES_BY_SLUG, getServiceBySlug } from '../../data/services';

describe('SERVICES data integrity', () => {
  it('exports exactly 8 services', () => {
    expect(SERVICES).toHaveLength(8);
  });

  it('every service has a unique slug', () => {
    const slugs = SERVICES.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('every service has a non-empty name, lede and at least 3 deliverables', () => {
    for (const s of SERVICES) {
      expect(s.name.length).toBeGreaterThan(0);
      expect(s.lede.length).toBeGreaterThan(0);
      expect(s.delivers.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('every service has exactly 3 KPI tiles', () => {
    for (const s of SERVICES) {
      expect(s.kpi).toHaveLength(3);
    }
  });

  it('SERVICES_BY_SLUG mirrors SERVICES', () => {
    expect(Object.keys(SERVICES_BY_SLUG)).toHaveLength(SERVICES.length);
    for (const s of SERVICES) {
      expect(SERVICES_BY_SLUG[s.slug]).toBe(s);
    }
  });

  it('getServiceBySlug returns the right entry and undefined for unknown', () => {
    expect(getServiceBySlug('customer-mapping')?.name).toBe('Customer mapping');
    expect(getServiceBySlug('nonexistent-slug')).toBeUndefined();
  });
});
