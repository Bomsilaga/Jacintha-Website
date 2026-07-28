/* ==========================================================================
 * PLACEHOLDER CONTENT — REPLACE BEFORE THE SITE IS PROMOTED PUBLICLY.
 *
 * Every entry below is a structural template, not a record of real work.
 * Names have deliberately been left out and clients are described only by
 * sector and region so that nothing here reads as a specific, verifiable
 * claim about a business that has not agreed to it.
 *
 * Before launch, Mac Ben should replace each entry with a genuine engagement,
 * and only publish a testimonial where the client has given written
 * permission to use their words. Under the Australian Consumer Law
 * (ss 18 and 29, Competition and Consumer Act 2010) false or unauthorised
 * testimonials and misleading claims about past work are prohibited.
 * Delete any entry that cannot be substantiated.
 * ========================================================================== */

export type CaseStudy = {
  id: string;
  index: string;
  sector: string;
  location: string;
  year: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  services: readonly string[];
  /** Headline result. Keep qualitative unless the number can be evidenced. */
  metric: { value: string; label: string };
};

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "cheese-listeria-program",
    index: "CS/01",
    sector: "Dairy & cheese",
    location: "Gippsland, VIC",
    year: "2025",
    title: "Environmental monitoring rebuilt for a soft cheese line",
    challenge:
      "A specialty cheesemaker was swabbing to a plan inherited from a previous consultant. The sites had never been mapped to their current room layout, and a retailer had queried the program during a technical review.",
    approach:
      "We re-zoned the plant, rebuilt the sampling plan around actual traffic and drainage, and set escalation rules so a presumptive positive triggered a defined response rather than a phone call.",
    outcome:
      "The revised program was accepted at the retailer's technical review, and the team now runs it without external supervision.",
    services: ["Microbiological testing", "HACCP & food safety plans"],
    metric: { value: "Zone-based", label: "Monitoring redesign" },
  },
  {
    id: "smallgoods-shelf-life",
    index: "CS/02",
    sector: "Meat & smallgoods",
    location: "Northern Melbourne, VIC",
    year: "2025",
    title: "A date mark that could finally be defended",
    challenge:
      "A ready-to-eat smallgoods producer was applying a use-by date carried over from a similar product, with no study behind it. A national customer asked for the validation file and none existed.",
    approach:
      "We designed a combined real-time and challenge study across the intended storage range, covering microbiological, pH and sensory endpoints at defined intervals.",
    outcome:
      "The producer now holds a documented validation file supporting its date mark, and knows exactly which conditions the claim depends on.",
    services: ["Shelf life & product validation", "Microbiological testing"],
    metric: { value: "Documented", label: "Validation file" },
  },
  {
    id: "produce-harps-readiness",
    index: "CS/03",
    sector: "Horticulture",
    location: "Goulburn Valley, VIC",
    year: "2024",
    title: "HARPS readiness for a first-time supermarket supplier",
    challenge:
      "A grower-packer won its first major supermarket line and had eight weeks to be audit-ready against a scheme it had never worked under.",
    approach:
      "We ran a gap assessment against the scheme, built a prioritised closeout register, wrote the missing procedures and ran a full mock audit two weeks out.",
    outcome:
      "The business went into its certification audit with every identified gap closed and a team that had already rehearsed the questions.",
    services: ["Audits & pre-certification", "Training & compliance support"],
    metric: { value: "8 weeks", label: "Gap to audit-ready" },
  },
  {
    id: "sauce-label-review",
    index: "CS/04",
    sector: "Manufacturing",
    location: "Western Melbourne, VIC",
    year: "2024",
    title: "Label and allergen review across a full product range",
    challenge:
      "A sauce and condiment manufacturer had grown its range organically. Nutrition panels had been derived inconsistently and allergen statements varied between similar products.",
    approach:
      "We analysed representative products, rebuilt the Nutrition Information Panels from verified composition data, and reconciled every allergen declaration against the actual bill of materials and line schedule.",
    outcome:
      "The range now carries consistent, substantiated panels and a single documented basis for every allergen statement.",
    services: ["Chemical & nutritional analysis", "Training & compliance support"],
    metric: { value: "Full range", label: "Panels reconciled" },
  },
  {
    id: "food-service-3-2-2a",
    index: "CS/05",
    sector: "Food service",
    location: "Melbourne CBD, VIC",
    year: "2024",
    title: "Standard 3.2.2A compliance across a multi-site venue group",
    challenge:
      "A hospitality group needed consistent food safety records across several venues, with a Food Safety Supervisor and substantiation requirements to satisfy at each site.",
    approach:
      "We built one record system that worked in every kitchen, trained supervisors on it, and set a monthly internal check so drift was caught by the group rather than by a council officer.",
    outcome:
      "Each venue now keeps the same evidence in the same place, and the group has a single view of compliance across sites.",
    services: ["Training & compliance support", "Audits & pre-certification"],
    metric: { value: "Multi-site", label: "One record system" },
  },
  {
    id: "beverage-spoilage",
    index: "CS/06",
    sector: "Beverage",
    location: "Regional VIC",
    year: "2023",
    title: "Tracing a recurring spoilage complaint to its source",
    challenge:
      "A beverage producer was receiving intermittent spoilage complaints with no discernible pattern by batch, and had begun discarding stock as a precaution.",
    approach:
      "We sampled across the process rather than only the finished product, screening process water, filling equipment and packaging alongside product held under stress conditions.",
    outcome:
      "The source was isolated to a specific point in the process, and a targeted control replaced the blanket discarding of stock.",
    services: ["Microbiological testing", "HACCP & food safety plans"],
    metric: { value: "Source", label: "Isolated and controlled" },
  },
];

export type Testimonial = {
  quote: string;
  role: string;
  org: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "They walked the floor before they wrote anything. The plan we ended up with actually matches how we run the line, which is why the team uses it.",
    role: "Production Manager",
    org: "Specialty cheese producer, Gippsland",
  },
  {
    quote:
      "We had a customer asking for a validation file we did not have. Epitome scoped the study, ran it, and gave us something we could hand straight over.",
    role: "Quality Assurance Coordinator",
    org: "Ready-to-eat smallgoods manufacturer, Melbourne",
  },
  {
    quote:
      "The mock audit was harder than the real one. That was the point, and it is why we passed.",
    role: "Operations Director",
    org: "Grower-packer, Goulburn Valley",
  },
  {
    quote:
      "Results come back with an explanation of what to do about them, not just numbers. That has saved us a lot of second-guessing.",
    role: "Owner",
    org: "Sauce and condiment manufacturer, Western Melbourne",
  },
];

export type Contract = {
  ref: string;
  scope: string;
  sector: string;
  region: string;
  year: string;
  status: "Completed" | "Ongoing";
};


/**
 * Register of engagements — PLACEHOLDER, see the notice at the top of this
 * file. Currently 30 completed and 7 ongoing. Client identities are
 * deliberately absent; only scope, sector, region and period are recorded.
 * Replace with the real register before publishing, and keep the ref
 * sequence continuous so the record reads as a genuine job book.
 */
export const contracts: readonly Contract[] = [
  /* ------------------------------------------------------------- ongoing */
  {
    ref: "EQ-2026-031",
    scope: "Retained QA and technical management",
    sector: "Manufacturing",
    region: "Western Melbourne",
    year: "2026",
    status: "Ongoing",
  },
  {
    ref: "EQ-2026-028",
    scope: "Environmental monitoring program, ready-to-eat lines",
    sector: "Meat & smallgoods",
    region: "Northern Melbourne",
    year: "2026",
    status: "Ongoing",
  },
  {
    ref: "EQ-2026-026",
    scope: "QA officer placement, temp to permanent",
    sector: "Dairy & cheese",
    region: "Gippsland",
    year: "2026",
    status: "Ongoing",
  },
  {
    ref: "EQ-2026-024",
    scope: "SQF certification readiness program",
    sector: "Ready meals",
    region: "South-East Melbourne",
    year: "2026",
    status: "Ongoing",
  },
  {
    ref: "EQ-2026-021",
    scope: "Real-time shelf life study, 12-month program",
    sector: "Beverage",
    region: "Geelong",
    year: "2026",
    status: "Ongoing",
  },
  {
    ref: "EQ-2026-019",
    scope: "Line QC inspectors, seasonal peak cover",
    sector: "Horticulture",
    region: "Goulburn Valley",
    year: "2026",
    status: "Ongoing",
  },
  {
    ref: "EQ-2026-015",
    scope: "Multi-site food safety supervisor program",
    sector: "Food service",
    region: "Melbourne CBD",
    year: "2026",
    status: "Ongoing",
  },

  /* ----------------------------------------------------------- completed */
  {
    ref: "EQ-2026-012",
    scope: "Allergen cross-contact assessment and line trials",
    sector: "Bakery & snack",
    region: "Northern Melbourne",
    year: "2026",
    status: "Completed",
  },
  {
    ref: "EQ-2026-009",
    scope: "Internal audit program build to ISO 19011",
    sector: "Manufacturing",
    region: "Dandenong",
    year: "2026",
    status: "Completed",
  },
  {
    ref: "EQ-2026-007",
    scope: "Process water and CIP verification testing",
    sector: "Dairy & cheese",
    region: "Warrnambool",
    year: "2026",
    status: "Completed",
  },
  {
    ref: "EQ-2026-004",
    scope: "HACCP plan rewrite following line expansion",
    sector: "Meat & smallgoods",
    region: "Bendigo",
    year: "2026",
    status: "Completed",
  },
  {
    ref: "EQ-2026-002",
    scope: "Nutrition Information Panel derivation, 14 SKUs",
    sector: "Confectionery",
    region: "Western Melbourne",
    year: "2026",
    status: "Completed",
  },
  {
    ref: "EQ-2025-047",
    scope: "Mock BRCGS audit and closeout support",
    sector: "Ready meals",
    region: "Truganina",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-044",
    scope: "Listeria environmental program redesign",
    sector: "Dairy & cheese",
    region: "Gippsland",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-041",
    scope: "Accelerated shelf life study, chilled range",
    sector: "Meat & smallgoods",
    region: "Northern Melbourne",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-038",
    scope: "Supplier audit program, imported ingredients",
    sector: "Manufacturing",
    region: "South-East Melbourne",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-035",
    scope: "Cleaning validation and sanitation verification",
    sector: "Seafood",
    region: "Geelong",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-032",
    scope: "Food technologist placement, 6-month contract",
    sector: "Bakery & snack",
    region: "Ballarat",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-029",
    scope: "Water activity and mould-free shelf life trials",
    sector: "Bakery & snack",
    region: "Western Melbourne",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-025",
    scope: "HARPS gap assessment and mock audit",
    sector: "Horticulture",
    region: "Goulburn Valley",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-022",
    scope: "Pasteurisation verification and record review",
    sector: "Dairy & cheese",
    region: "Yarra Valley",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-018",
    scope: "Heavy metals and residue screening program",
    sector: "Horticulture",
    region: "Mildura",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-014",
    scope: "Recall procedure rewrite and mock recall",
    sector: "Manufacturing",
    region: "Laverton",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-011",
    scope: "Interim QA manager, parental leave cover",
    sector: "Pet food",
    region: "Dandenong",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-008",
    scope: "Standard 3.2.2A record system and training",
    sector: "Food service",
    region: "Mornington Peninsula",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2025-005",
    scope: "Spoilage investigation and process screening",
    sector: "Beverage",
    region: "Regional Victoria",
    year: "2025",
    status: "Completed",
  },
  {
    ref: "EQ-2024-043",
    scope: "Microbial challenge testing, ready-to-eat product",
    sector: "Meat & smallgoods",
    region: "Bendigo",
    year: "2024",
    status: "Completed",
  },
  {
    ref: "EQ-2024-039",
    scope: "Label and allergen review across full range",
    sector: "Manufacturing",
    region: "Western Melbourne",
    year: "2024",
    status: "Completed",
  },
  {
    ref: "EQ-2024-036",
    scope: "Wash water monitoring program, packing shed",
    sector: "Horticulture",
    region: "Shepparton",
    year: "2024",
    status: "Completed",
  },
  {
    ref: "EQ-2024-031",
    scope: "HACCP team training and internal auditor course",
    sector: "Dairy & cheese",
    region: "Warrnambool",
    year: "2024",
    status: "Completed",
  },
  {
    ref: "EQ-2024-027",
    scope: "Sanitation lead placement, night shift",
    sector: "Seafood",
    region: "Geelong",
    year: "2024",
    status: "Completed",
  },
  {
    ref: "EQ-2024-023",
    scope: "Council inspection readiness across four venues",
    sector: "Food service",
    region: "Melbourne CBD",
    year: "2024",
    status: "Completed",
  },
  {
    ref: "EQ-2024-019",
    scope: "Contract manufacturer technical audit",
    sector: "Confectionery",
    region: "Northern Melbourne",
    year: "2024",
    status: "Completed",
  },
  {
    ref: "EQ-2024-002",
    scope: "Freshcare readiness and grower food safety systems",
    sector: "Horticulture",
    region: "Sunraysia",
    year: "2024",
    status: "Completed",
  },
  {
    ref: "EQ-2023-034",
    scope: "Pathogen screening program, chilled lines",
    sector: "Meat & smallgoods",
    region: "Wodonga",
    year: "2023",
    status: "Completed",
  },
  {
    ref: "EQ-2023-024",
    scope: "Sensory and organoleptic stability assessment",
    sector: "Dairy & cheese",
    region: "Gippsland",
    year: "2023",
    status: "Completed",
  },
  {
    ref: "EQ-2023-012",
    scope: "Initial HACCP plan and CCP determination",
    sector: "Ready meals",
    region: "Laverton",
    year: "2023",
    status: "Completed",
  },
];
