/**
 * Sector pages. Structure only: all copy is reused from existing, approved
 * message keys, so a sector page never states more than the rest of the site.
 *
 *  - name / blurb      → `what_we_offer_industries.<indKey>_title|_desc`
 *  - headline / intro  → `catalog.<services[0]>.title|description`
 *  - figures           → indexes into `track_record.items` (delivery numbers)
 *  - projects          → numbers of `project_references.project<N>_*`
 *
 * A section renders only when its list is non-empty.
 */
export interface SectorDef {
  slug: string;
  /** Prefix of the `what_we_offer_industries` keys, e.g. "ind1" */
  indKey: string;
  /** Catalog keys of the managed services that serve this sector */
  services: readonly string[];
  /** Indexes into `track_record.items` that apply to this sector */
  figures: readonly number[];
  /** Project reference numbers that apply to this sector */
  projects: readonly number[];
}

export const SECTORS: readonly SectorDef[] = [
  { slug: "banking", indKey: "ind1", services: ["banking_branch_atm_services"], figures: [1, 2], projects: [] },
  { slug: "healthcare", indKey: "ind2", services: ["healthcare_it_support"], figures: [], projects: [4, 5] },
  { slug: "telecom", indKey: "ind4", services: ["telecom_site_field_services"], figures: [3], projects: [] },
  { slug: "facilities", indKey: "ind5", services: ["building_facility_systems"], figures: [], projects: [] },
];

export const sectorPath = (sector: SectorDef) => `/sectors/${sector.slug}`;

export const getSectorBySlug = (slug: string) => SECTORS.find((s) => s.slug === slug);

/** Industry card key (e.g. "ind1") → sector page path, if that sector has a page. */
export const sectorPathForIndKey = (indKey: string) => {
  const sector = SECTORS.find((s) => s.indKey === indKey);
  return sector ? sectorPath(sector) : undefined;
};
