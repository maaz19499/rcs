import { toSlug } from "@/lib/services-data";

/**
 * Company information pages: Certifications, Partners, Careers, Case Studies
 * and Saudization. Copy lives in messages/{locale}.json under `info_pages.<key>`;
 * the nav label lives under `nav.<key>`.
 */
export const INFO_PAGE_KEYS = [
  "certifications",
  "partners",
  "careers",
  "case_studies",
  "saudization",
] as const;

export type InfoPageKey = (typeof INFO_PAGE_KEYS)[number];

export const infoPagePath = (key: InfoPageKey) => `/${toSlug(key)}`;
