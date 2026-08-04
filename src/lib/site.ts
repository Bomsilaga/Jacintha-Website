export const site = {
  name: "Epitome Quality Group",
  shortName: "Epitome Quality",
  /** Previous trading name, referenced by the rebrand notice on the home page. */
  formerName: "The Epitome Testing",
  /** Trading name sits on top of the company; both appear in the footer. */
  legalEntity: "Mac Ben",
  legalLine: "Epitome Quality Group is a trading name of Mac Ben",
  tagline: "Quality control consultancy and specialist QA labour hire",
  abn: "62 825 390 390",
  abnPlain: "62825390390",
  ceo: "Mac Ben",
  ceoTitle: "Chief Executive Officer",
  phoneDisplay: "0487 907 952",
  phoneHref: "tel:+61487907952",
  email: "info@epitometesting.com.au",
  emailHref: "mailto:info@epitometesting.com.au",
  region: "Victoria, Australia",
  regionShort: "Victoria",
  hours: "Monday to Friday, 8:00am – 5:00pm AEST",
  url: "https://epitometesting.com.au",
  description:
    "Epitome Quality Group is a Victorian quality control consultancy for the food industry, providing food safety testing, HACCP systems, audits and specialist QA labour hire.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/labour-hire", label: "Labour hire" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Standards and frameworks our work is designed to help clients meet. */
export const standards = [
  "FSANZ Food Standards Code",
  "HACCP (Codex Alimentarius)",
  "ISO 22000",
  "ISO 9001",
  "Standard 3.2.2A",
  "SQF",
  "BRCGS",
  "HARPS",
  "FSSC 22000",
  "Food Act 1984 (Vic)",
] as const;

export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  points: readonly string[];
};

export const services: readonly Service[] = [
  {
    id: "microbiological-testing",
    index: "01",
    title: "Microbiological testing",
    summary:
      "Pathogen and indicator organism testing on raw materials, finished product, water and environmental swabs.",
    detail:
      "We coordinate microbiological analysis across your product range and production environment, then translate the results into an action you can actually take on the floor. Sampling plans are built around your process risk, not a generic checklist.",
    points: [
      "Listeria, Salmonella and E. coli screening",
      "Standard plate count, coliforms, yeast and mould",
      "Environmental monitoring and swabbing programs",
      "Potable and process water analysis",
    ],
  },
  {
    id: "chemical-nutritional",
    index: "02",
    title: "Chemical & nutritional analysis",
    summary:
      "Composition, contaminant and label-verification analysis so what is on the pack matches what is in the pack.",
    detail:
      "Nutrition Information Panels, allergen verification and contaminant screening, prepared to withstand a regulator or a retailer's technical review. We manage the analysis and issue a plain-English interpretation alongside the raw data.",
    points: [
      "Nutrition Information Panel derivation",
      "Allergen verification and cross-contact assessment",
      "Heavy metals, pesticide and residue screening",
      "Moisture, pH, water activity and salt",
    ],
  },
  {
    id: "haccp-food-safety-plans",
    index: "03",
    title: "HACCP & food safety plans",
    summary:
      "Documented, defensible food safety programs written for your process — then kept alive through review.",
    detail:
      "Most food safety plans fail because they describe a factory nobody works in. We walk your process, map the hazards where they actually occur, and write a plan your team will follow under pressure.",
    points: [
      "Hazard analysis and CCP determination",
      "Validation and verification schedules",
      "Corrective action and recall procedures",
      "Annual review and continuous improvement",
    ],
  },
  {
    id: "shelf-life-validation",
    index: "04",
    title: "Shelf life & product validation",
    summary:
      "Evidence-based use-by and best-before dating, supported by real storage and challenge data.",
    detail:
      "A date mark is a claim. We design accelerated and real-time studies that support the claim you want to make, covering microbiological, sensory and physicochemical stability across your intended storage conditions.",
    points: [
      "Real-time and accelerated shelf life studies",
      "Microbial challenge testing",
      "Sensory and organoleptic assessment",
      "Packaging and storage condition trials",
    ],
  },
  {
    id: "audits-inspections",
    index: "05",
    title: "Audits & pre-certification",
    summary:
      "Internal audits, mock certification audits and gap assessments before the certifier arrives.",
    detail:
      "We audit the way a certification body audits — but with time to fix what we find. You receive a prioritised, costed gap register rather than a list of clause numbers.",
    points: [
      "Internal audit programs to ISO 19011",
      "Mock SQF, BRCGS and HARPS audits",
      "Supplier and contract manufacturer audits",
      "Non-conformance closeout support",
    ],
  },
  {
    id: "training-compliance",
    index: "06",
    title: "Training & compliance support",
    summary:
      "Practical food safety training and ongoing QA capacity for teams without a full-time technical manager.",
    detail:
      "Retained QA support for businesses that need a technical manager's judgement without a technical manager's salary. On call for label reviews, customer complaints, incidents and council correspondence.",
    points: [
      "Food handler and supervisor training",
      "HACCP team and internal auditor training",
      "Retained QA and technical management",
      "Council, regulator and customer liaison",
    ],
  },
  {
    id: "qa-labour-hire",
    index: "07",
    title: "QA & QC labour hire",
    summary:
      "Screened quality personnel placed into your site — for a shift, a season or a permanent role.",
    detail:
      "Quality roles are hard to fill and expensive to fill badly. We place people we have trained and would put our own name against, and we stay involved after they start so a placement does not quietly become your problem.",
    points: [
      "QA officers and food technologists",
      "Line QC and in-process inspectors",
      "Food Safety Supervisors and sanitation leads",
      "Peak season, leave cover and temp-to-permanent",
    ],
  },
] as const;

export type Industry = {
  title: string;
  blurb: string;
  tags: readonly string[];
};

export const industries: readonly Industry[] = [
  {
    title: "Dairy & cheese",
    blurb:
      "Pasteurisation verification, Listeria environmental programs and shelf life for fresh and ripened product.",
    tags: ["Listeria", "Pasteurisation", "Shelf life"],
  },
  {
    title: "Meat & smallgoods",
    blurb:
      "Process validation, pathogen testing and dating support for chilled, cured and ready-to-eat lines.",
    tags: ["RTE", "Curing", "Validation"],
  },
  {
    title: "Horticulture & fresh produce",
    blurb:
      "HARPS and Freshcare readiness, wash water monitoring and grower-level food safety systems.",
    tags: ["HARPS", "Wash water", "On-farm"],
  },
  {
    title: "Bakery & snack",
    blurb:
      "Water activity, mould-free shelf life, allergen segregation and Nutrition Information Panels.",
    tags: ["Water activity", "Allergens", "NIP"],
  },
  {
    title: "Beverage & brewing",
    blurb:
      "Spoilage organism screening, process water testing and label composition verification.",
    tags: ["Spoilage", "Water", "Labelling"],
  },
  {
    title: "Food service & retail",
    blurb:
      "Food Act 1984 compliance, Standard 3.2.2A record keeping and council inspection readiness.",
    tags: ["3.2.2A", "Council", "Training"],
  },
] as const;

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export const process: readonly ProcessStep[] = [
  {
    step: "S/01",
    title: "Scope",
    body: "We walk your process, review existing records and agree exactly what needs testing and why.",
  },
  {
    step: "S/02",
    title: "Sample",
    body: "Sampling plans are documented, chain of custody is recorded, and every sample is traceable end to end.",
  },
  {
    step: "S/03",
    title: "Analyse",
    body: "Analysis is carried out to recognised methods, with results checked against your specification and the Code.",
  },
  {
    step: "S/04",
    title: "Report",
    body: "You receive the data, the interpretation and the recommended action — in language your whole team can use.",
  },
] as const;

/* ----------------------------------------------------------- labour hire ---- */

export type Role = {
  title: string;
  blurb: string;
  basis: string;
};

export const roles: readonly Role[] = [
  {
    title: "QA Officer",
    blurb:
      "Day-to-day quality oversight: releases, holds, documentation, complaint investigation and internal checks.",
    basis: "Temp, temp-to-perm or permanent",
  },
  {
    title: "Food Technologist",
    blurb:
      "Specification management, product development support, label and nutrition work, supplier technical liaison.",
    basis: "Project or ongoing",
  },
  {
    title: "Line QC Inspector",
    blurb:
      "In-process checks, weight and seal verification, metal detection challenges, CCP monitoring and records.",
    basis: "Shift, seasonal or ongoing",
  },
  {
    title: "Food Safety Supervisor",
    blurb:
      "Nominated supervisor cover for food service and manufacturing sites, with the records to satisfy council.",
    basis: "Ongoing or cover",
  },
  {
    title: "Sanitation Lead",
    blurb:
      "Cleaning validation and verification, chemical control, and hygiene crew supervision across shift changeover.",
    basis: "Nights, weekends or shutdown",
  },
  {
    title: "Interim QA Manager",
    blurb:
      "Senior cover during parental leave, resignation or certification crunch, holding the technical function together.",
    basis: "Fixed-term",
  },
];

export const labourHireSteps = [
  {
    step: "L/01",
    title: "Brief",
    body: "We take the role, the shift pattern, the standard you work to and the systems the person will need to pick up.",
  },
  {
    step: "L/02",
    title: "Screen",
    body: "Right to work, qualifications and referees are verified before anyone is put forward. Nothing is taken on trust.",
  },
  {
    step: "L/03",
    title: "Place",
    body: "Candidates are inducted to your site requirements before day one, so the first shift is productive rather than orientation.",
  },
  {
    step: "L/04",
    title: "Support",
    body: "We check in through the placement and stay technically available to the person we placed and to you.",
  },
] as const;

export const labourHireAssurances = [
  {
    k: "Verified before offer",
    v: "Right to work, qualifications, food safety training and referees are all confirmed prior to placement.",
  },
  {
    k: "Technically supervised",
    v: "Placements are backed by our consultancy team, so a difficult technical question does not stall your shift.",
  },
  {
    k: "Correctly engaged",
    v: "Award classification, superannuation, insurance and payroll obligations sit with us, documented and current.",
  },
  {
    k: "Replaceable",
    v: "If a placement is not right, tell us early and we replace them. You should not be managing our recruiting risk.",
  },
] as const;

export const principles = [
  {
    title: "Evidence before opinion",
    body: "Every recommendation we make is traceable to a result, a clause or a validated method. If we cannot evidence it, we do not claim it.",
  },
  {
    title: "Written for the floor",
    body: "A food safety plan that only the QA manager understands has already failed. We write documentation the production team will actually use.",
  },
  {
    title: "Local and accountable",
    body: "We are based in Victoria and we work in Victoria. You get a named contact who has walked your site, not a ticket number.",
  },
] as const;
