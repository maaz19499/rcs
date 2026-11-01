import { toKey, toSlug } from "@/lib/services-data";

/**
 * Contact-form service chips, keyed by pillar. The chip keys match
 * `contact_form.service1..5` in messages/{locale}.json.
 */
export const CONTACT_SERVICE_BY_PILLAR = {
  ai_data: "service1",
  software_cloud_engineering: "service2",
  ict_low_current_systems: "service3",
  managed_services: "service4",
  cybersecurity: "service5",
} as const;

export type ContactServiceKey = (typeof CONTACT_SERVICE_BY_PILLAR)[keyof typeof CONTACT_SERVICE_BY_PILLAR];

/** Locale-less link to the contact form with a pillar's service pre-selected. */
export const contactHref = (pillarKey: string) =>
  `/contact?service=${toSlug(pillarKey)}#contact-form`;

/** Resolves a `?service=<pillar-slug>` value to a form chip, or undefined if unknown. */
export function contactServiceFromParam(param: string | null): ContactServiceKey | undefined {
  if (!param) return undefined;
  const pillarKey = toKey(param) as keyof typeof CONTACT_SERVICE_BY_PILLAR;
  return CONTACT_SERVICE_BY_PILLAR[pillarKey];
}
