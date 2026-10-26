/**
 * Service structure for the five RCS Arabia pillars.
 *
 * Structure only. All copy lives in messages/{locale}.json:
 *   - `pillars.<pillar_key>`  → pillar page content
 *   - `catalog.<child_key>`   → { title, description } for every service / category
 *
 * Keys use underscores (JSON-friendly); URL slugs are the hyphenated form.
 */

export const toSlug = (key: string) => key.replace(/_/g, "-");
export const toKey = (slug: string) => slug.replace(/-/g, "_");

export interface PillarDef {
  /** Underscore key, e.g. "ict_audio_visual_systems" */
  key: string;
  /** URL slug, e.g. "ict-audio-visual-systems" */
  slug: string;
  /**
   * Keys of the pillar's sub-pages. For most pillars these are individual
   * services; for Managed Services they are the seven service categories.
   */
  children: readonly string[];
}

const pillar = (key: string, children: readonly string[]): PillarDef => ({
  key,
  slug: toSlug(key),
  children,
});

export const PILLARS: readonly PillarDef[] = [
  pillar("managed_services", [
    "end_user_services",
    "infrastructure_managed_services",
    "monitoring_operations_centers",
    "application_managed_services",
    "industry_specialized_services",
    "as_a_service_offerings",
    "service_management_transformation",
  ]),
  pillar("ict_audio_visual_systems", [
    "ict_infrastructure",
    "audio_visual_systems",
    "digital_signage",
    "design_bim_coordination",
    "installation_project_delivery",
    "testing_commissioning_handover",
  ]),
  pillar("cybersecurity", [
    "security_operations_center",
    "vulnerability_management_remediation",
    "managed_firewall_network_security",
    "endpoint_security_management",
    "identity_privileged_access_operations",
    "application_security_testing",
  ]),
  pillar("ai_data", ["genai_solutions", "data_analytics"]),
  pillar("software_cloud_engineering", [
    "web_mobile_custom_software",
    "ui_ux_design",
    "quality_assurance",
    "modernization_integration",
    "cloud_devops_hybrid_cloud",
    "strategic_engineering",
    "smart_workspace_management",
  ]),
];

/** Managed Services categories → the individual services listed on each category page. */
export const MANAGED_CATEGORY_SERVICES: Readonly<Record<string, readonly string[]>> = {
  end_user_services: [
    "enterprise_service_desk",
    "deskside_onsite_support",
    "field_support_hardware_break_fix",
    "remote_support_software_distribution",
    "imac_services",
    "endpoint_patch_management",
    "it_asset_device_lifecycle_management",
    "managed_print_services",
    "vdi_support",
  ],
  infrastructure_managed_services: [
    "server_virtualization_data_center_management",
    "storage_backup_recovery",
    "network_management",
    "unified_communications_telephony",
    "database_administration",
    "dr_site_operations",
    "data_center_facility_support",
  ],
  monitoring_operations_centers: [
    "network_operations_center",
    "enterprise_monitoring_aiops_command_center",
  ],
  application_managed_services: [
    "enterprise_platform_support",
    "line_of_business_application_support",
    "application_monitoring_operations",
  ],
  industry_specialized_services: [
    "banking_branch_atm_services",
    "healthcare_it_support",
    "elv_physical_security_systems",
    "building_facility_systems",
    "telecom_site_field_services",
  ],
  as_a_service_offerings: [
    "device_as_a_service",
    "workspace_as_a_service",
    "shared_support_center",
    "professional_services_on_demand",
  ],
  service_management_transformation: [
    "service_transition",
    "itsm_governance",
    "automation_self_service",
    "continual_service_improvement",
  ],
};

export const getPillarBySlug = (slug: string) => PILLARS.find((p) => p.slug === slug);

export const pillarPath = (p: PillarDef) => `/services/${p.slug}`;
export const childPath = (p: PillarDef, childKey: string) =>
  `/services/${p.slug}/${toSlug(childKey)}`;

/** Resolve a pillar + child slug pair, or undefined when it doesn't exist. */
export function getChild(pillarSlug: string, childSlug: string) {
  const p = getPillarBySlug(pillarSlug);
  if (!p) return undefined;
  const key = toKey(childSlug);
  if (!p.children.includes(key)) return undefined;
  return { pillar: p, key, services: MANAGED_CATEGORY_SERVICES[key] };
}

/** The three pillars that follow `current`, wrapping around — used for "related" cards. */
export function getRelatedPillars(current: PillarDef, count = 3): PillarDef[] {
  const i = PILLARS.findIndex((p) => p.key === current.key);
  return Array.from({ length: Math.min(count, PILLARS.length - 1) }, (_, n) => PILLARS[(i + 1 + n) % PILLARS.length]);
}

/** Every [pillar, child] pair — used for static params and the sitemap. */
export const ALL_CHILD_ROUTES = PILLARS.flatMap((p) =>
  p.children.map((childKey) => ({ pillar: p, childKey, slug: p.slug, service: toSlug(childKey) })),
);
