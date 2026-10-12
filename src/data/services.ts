import type { ServicePage } from '../types';

/**
 * Eight services. Order here drives the home-page grid AND the prev/next
 * pager on each detail page.
 */
export const SERVICES: ServicePage[] = [
  {
    num: '01',
    slug: 'customer-mapping',
    name: 'Customer mapping',
    tag: 'Commercial intelligence',
    summary:
      'Understand exactly where your customers are, and where they could be. Demand hotspots, sharper territory allocation and underserved markets you have not found yet.',
    hook: ['Stop guessing where demand lives.', 'Start placing it on a map.'],
    lede: 'Geographic intelligence that turns scattered customer data into a strategic asset, exposing demand hotspots, sharpening territory allocation and revealing markets your competitors have not found yet.',
    prose: [
      'Most commercial teams operate on instinct and last quarter’s spreadsheet. We operate on coordinates. By layering your sales records, demographic data and behavioural signals onto precise spatial geometries, we turn "where" into a competitive advantage, pinpointing where to expand, where to consolidate and where to walk away.',
      'The result is not a dashboard you glance at once and forget. It is an operating system for territory decisions: live demand heatmaps, defensible boundary lines, branch-siting recommendations and the analytical backbone for every "should we?" conversation in the room.',
    ],
    delivers: [
      'Demand heatmaps overlaying customer concentration with addressable market',
      'Territory boundary files (Shapefile / KML / GeoJSON) optimised for balanced workloads',
      'Branch, agent and service-point siting recommendations with footfall projections',
      'Interactive web dashboard, or Esri / QGIS-native files, your team’s choice',
      'Executive briefing pack with quantified opportunity sizing',
    ],
    faq: [
      [
        'Do we need to share customer PII?',
        'No. We can work from anonymised, aggregated records or your CRM’s geographic fields alone, privacy and compliance are non-negotiable for us.',
      ],
      [
        'How long does a typical engagement take?',
        'Most customer-mapping projects run 4–8 weeks end-to-end, including data preparation, modelling and delivery.',
      ],
      [
        'Can the output update automatically?',
        'Yes. We can deploy a refresh pipeline that ingests your CRM weekly or monthly and recomputes the maps.',
      ],
      [
        'What if our customer data is messy?',
        'We expect that. Address standardisation, geocoding and deduplication are part of the standard scope, not an extra line item.',
      ],
      [
        'Will this integrate with our existing tools?',
        'Output formats are tool-agnostic, Esri, QGIS, PowerBI, Tableau, Looker and direct CRM injection are all supported.',
      ],
    ],
    kpi: [
      ['4–8 wk', 'Typical timeline'],
      ['Tool-agnostic', 'Output formats'],
      ['CRM-native', 'Workflow fit'],
    ],
  },
  {
    num: '02',
    slug: 'land-evaluation',
    name: 'Land evaluation',
    tag: 'Capital and investment intelligence',
    summary:
      'Rigorous land-suitability assessments integrating soil composition, topography, hydrology and cadastral records, evidence decision-makers need before capital is committed.',
    hook: ['Know the land before you', 'buy, lease, or develop.'],
    lede: 'Rigorous land-suitability assessments that turn parcel-level uncertainty into evidence, so capital decisions are defensible, accelerated and aligned with what the ground actually supports.',
    prose: [
      'Land is the single largest line item in most African investments, and the least understood. Soil, slope, water access, tenure status and infrastructure proximity each shift the economics, and getting any one of them wrong shifts the IRR.',
      'We collapse the entire diligence stack into one decision-grade product. Multi-source satellite analysis, cadastral matching and field-validated ground truth, synthesised into a scorecard your investment committee can sign off on, not a stack of PDFs to interpret.',
    ],
    delivers: [
      'Suitability scorecard across agronomic, infrastructural and regulatory criteria',
      'Risk overlay maps, flood, erosion, tenure conflict, encroachment, access',
      'Cadastral verification and boundary reconciliation against official records',
      'Comparable-parcel benchmarking where relevant data is available',
      'Executive summary and investment-committee-ready presentation deck',
    ],
    faq: [
      [
        'What size of parcel can you evaluate?',
        'From a single 5-hectare plot to a 500,000-hectare concession, methodology scales without changing.',
      ],
      [
        'Do you visit the site?',
        'Field validation is included when the engagement value warrants it. For preliminary screens, satellite-only is often sufficient.',
      ],
      [
        'How current is the data?',
        'Satellite imagery is typically less than 60 days old at delivery; cadastral data is matched against the most recent official source available.',
      ],
      [
        'Can this support DD for an acquisition?',
        'Yes. Our outputs have been used in agribusiness, real-estate and infrastructure DD processes, documentation is auditor-grade.',
      ],
      [
        'How quickly can you turn a parcel around?',
        'Single-parcel screens: 5–10 working days. Portfolio assessments: 4–6 weeks.',
      ],
    ],
    kpi: [
      ['5–10 d', 'Single-parcel turnaround'],
      ['Auditor-grade', 'DD documentation'],
      ['Scales 1:100k', 'Parcel size range'],
    ],
  },
  {
    num: '03',
    slug: 'environmental-monitoring',
    name: 'Environmental monitoring',
    tag: 'ESG, compliance and conservation',
    summary:
      'Continuous, time-series tracking of vegetation, water, deforestation and climate signals, refreshed on a schedule and formatted for ESG, compliance and conservation reporting.',
    hook: ['Defensible evidence', 'for every reporting cycle.'],
    lede: 'Continuous, time-series environmental tracking that turns satellite data into compliance documentation, ESG reporting and conservation outcomes, refreshed on a schedule you can plan around.',
    prose: [
      'Regulators, lenders and capital partners are no longer satisfied with annual self-attestation. They want evidence, quantified, geo-referenced, comparable year on year. Building that internally is expensive; outsourcing it to a generalist firm is risky.',
      'We embed environmental monitoring into your operating cadence. Vegetation, water, deforestation, encroachment and climate signals are extracted from multi-spectral and SAR satellite data on a recurring schedule, and delivered as both raw layers and executive-ready summaries. Same dataset, two audiences.',
    ],
    delivers: [
      'Change-detection reports on vegetation, water bodies, deforestation and built-up area',
      'Recurring monitoring dashboard, weekly, monthly or quarterly cadence',
      'Alert system for anomaly thresholds (e.g. forest-loss events, encroachment, flooding)',
      'Audit-grade PDF reports formatted for ESG, IFC PS6 and regulatory submission',
      'Historic baselines reaching back to 2015 for long-term trend establishment',
    ],
    faq: [
      [
        'What is the smallest change you can detect?',
        'Down to ~10 m² at sub-metre tasking; typical change detection works at 10–30 m using freely available satellites.',
      ],
      [
        'How often does the dashboard refresh?',
        'Cadence is set per engagement, weekly, monthly or quarterly are standard. Real-time alerts can run on top.',
      ],
      [
        'Does this meet IFC PS6 / TCFD reporting standards?',
        'Yes. Methodology and documentation are aligned with the major sustainability reporting frameworks.',
      ],
      [
        'Can we monitor sites we don’t own?',
        'Yes, supply-chain monitoring (e.g. third-party concessions) is a common use case for agribusinesses and lenders.',
      ],
      [
        'What if cloud cover blocks the view?',
        'For persistent cloud regions we layer SAR (radar) data, which sees through cloud, methodology adapts to the geography.',
      ],
    ],
    kpi: [
      ['10 m²', 'Min. detectable change'],
      ['2015→', 'Historical baseline'],
      ['SAR-capable', 'Cloud-resilient'],
    ],
  },
  {
    num: '04',
    slug: 'resource-mapping',
    name: 'Resource mapping',
    tag: 'Strategic asset intelligence',
    summary:
      'Spatial delineation of minerals, water, forestry and agricultural zones, extraction feasibility scored, exploration targets ranked, sustainability constraints flagged.',
    hook: ['Find what is there.', 'Know what it is worth.'],
    lede: 'Spatial delineation of natural resources, minerals, water, forestry, agricultural zones, with the precision and rigour strategic planning demands.',
    prose: [
      'Resource decisions move slowly because the information is scattered, dated and rarely comparable. Concessions overlap. Geology reports contradict. Hydrology data lives in three different ministries. The cost of getting it wrong is measured in decades.',
      'We consolidate the picture. Satellite-derived geological, hydrological and ecological signals are fused with available ground data into a single resource portfolio view, extraction feasibility scored, exploration targets ranked, sustainability constraints flagged before they become tomorrow’s lawsuit.',
    ],
    delivers: [
      'Resource distribution maps for the asset class (mineral, water, biomass, agricultural)',
      'Extraction feasibility scorecards integrating economic, logistical and regulatory factors',
      'Ranked exploration target lists for early-stage opportunity sizing',
      'Sustainability constraint overlay, protected areas, community land, watercourses',
      'GIS-ready data packages compatible with your existing exploration stack',
    ],
    faq: [
      [
        'What resource types do you cover?',
        'Minerals (surface and shallow subsurface signals), water bodies and groundwater proxies, forestry biomass, agricultural production zones, and protected-ecosystem layers.',
      ],
      [
        'Can you replace ground exploration?',
        'No, and we will tell you when ground work is essential. Our role is to focus the ground spend where it has the highest probability of payoff.',
      ],
      [
        'How do you handle community / customary land?',
        'We integrate documented customary tenure and community-mapped layers where available, and flag gaps in the public record.',
      ],
      [
        'Will the data hold up in licensing applications?',
        'Yes. Documentation, methodology and provenance are formatted to regulatory standards.',
      ],
    ],
    kpi: [
      ['Multi-class', 'Mineral, water, biomass'],
      ['Regulator-ready', 'Documentation'],
      ['Constraint-aware', 'Sustainability flags'],
    ],
  },
  {
    num: '05',
    slug: 'spatial-planning',
    name: 'Spatial planning',
    tag: 'Public and urban intelligence',
    summary:
      'Evidence-based support for urban and regional planning, zoning, infrastructure, population, land-use change. The spatial evidence base your planners can defend.',
    hook: ['Plan with evidence,', 'not assumptions about your region.'],
    lede: 'Evidence-based support for urban and regional planning decisions, integrating zoning, infrastructure, population and land-use change into models your stakeholders can defend.',
    prose: [
      'Plans fail when they collide with the territory. Population estimates are stale. Infrastructure inventories are partial. Land-use shifts faster than the master plan refreshes. The result is policy that looks elegant on paper and falls over in execution.',
      'We replace assumptions with measurements. Satellite-derived built-up extent, population modelling, infrastructure mapping and land-use change detection are integrated into a planning evidence base, so the recommendations that get tabled are the ones the data can support, and the ones it cannot are flagged before they become political liabilities.',
    ],
    delivers: [
      'Zoning compliance and conflict analysis against the current plan',
      'Infrastructure inventory and accessibility modelling (roads, services, utilities)',
      'Gridded population distribution and growth projections',
      'Land-use change time-series, 5, 10 and 20-year retrospectives',
      'Stakeholder-ready map packs and policy-brief documentation',
    ],
    faq: [
      [
        'Do you replace our planning consultants?',
        'No. We provide the spatial evidence base they need. Most of our spatial planning work is delivered as a sub-contract to lead planning firms.',
      ],
      [
        'Can outputs be used in public consultation?',
        'Yes, visual deliverables are formatted for both technical review and public-facing presentation.',
      ],
      [
        'What scales do you work at?',
        'From a single ward to a multi-county region. Resolution is matched to the decision horizon.',
      ],
      [
        'Is local administrative data required?',
        'Helpful but not always essential. Satellite-derived layers can substitute or validate where official records are incomplete.',
      ],
    ],
    kpi: [
      ['Ward → region', 'Scales we handle'],
      ['20-year', 'Retrospective depth'],
      ['Public-ready', 'Visual outputs'],
    ],
  },
  {
    num: '06',
    slug: 'satellite-imagery',
    name: 'High-resolution satellite imagery',
    tag: 'Imagery acquisition and processing',
    summary:
      "Sub-metre imagery from the world's leading providers, tasking, archival retrieval and time-series compilation, processed to your spec, analysis-ready not raw.",
    hook: ['Sub-metre imagery.', 'Tasked, processed, delivered.'],
    lede: 'Direct access to the world’s leading satellite providers, handled end-to-end. You define the area of interest, we manage the rest.',
    prose: [
      'Sourcing satellite imagery is a procurement problem disguised as a technical one. Different providers, different licensing terms, different processing requirements, different formats. Most organisations either over-pay through resellers, or burn weeks of internal time learning a market they will not buy from again.',
      'We sit between you and the constellation. Tasking, archival retrieval and time-series compilation are negotiated, processed and delivered to your spec, imagery that is analysis-ready, not raw, at competitive pricing because we know the market and bring scale.',
    ],
    delivers: [
      'Newly-tasked imagery from sub-metre commercial providers',
      'Archival pulls from open and commercial archives, processed to consistent specification',
      'Time-series stacks aligned, co-registered and cloud-masked',
      'Cloud-optimised GeoTIFFs (COGs), JP2 or provider-native formats',
      'Licensing handled, you receive imagery cleared for your stated use case',
    ],
    faq: [
      [
        'Which providers do you work with?',
        'Maxar (WorldView), Airbus (Pléiades, SPOT), Planet, BlackSky, ICEYE for SAR, plus the full open-data catalogue (Sentinel, Landsat).',
      ],
      [
        'What is the highest resolution available?',
        '30 cm pan-sharpened from Maxar WorldView-3, the highest commercially available outside government channels.',
      ],
      [
        'How quickly can imagery be tasked?',
        'For clear-sky regions: 2–5 days. For persistent cloud or high-latitude tasking: longer windows apply.',
      ],
      [
        'Can you provide imagery for restricted regions?',
        'Subject to provider licensing terms. We will tell you up-front if a region is restricted.',
      ],
      [
        'Do you license imagery for redistribution?',
        'Standard licences cover internal use. Redistribution and publishing licences are negotiable per provider.',
      ],
    ],
    kpi: [
      ['30 cm', 'Best-available resolution'],
      ['2–5 d', 'Tasking turnaround'],
      ['Full archive', 'Open + commercial'],
    ],
  },
  {
    num: '07',
    slug: 'analysis-ready-data',
    name: 'Analysis-ready data',
    tag: 'Geospatial data engineering',
    summary:
      'Pre-processed, radiometrically corrected, atmospherically calibrated datasets, ready for immediate integration into your analytical workflows. Skip the pipeline.',
    hook: ['Skip the pipeline.', 'Start with the answer.'],
    lede: 'Pre-processed, radiometrically corrected and atmospherically calibrated datasets, delivered ready for immediate integration into your analytical workflows.',
    prose: [
      'Raw satellite data is a long way from a useful answer. Atmospheric correction, cloud masking, co-registration, mosaicking, format normalisation, each step is straightforward, and collectively they consume the majority of every in-house geospatial team’s capacity.',
      'We do that work once, on infrastructure built for it, and hand you the output. Your team picks up at "what does it mean?" instead of "how do we process this?", multiplying the value of the analysts you already employ.',
    ],
    delivers: [
      'Atmospherically corrected, cloud-masked, co-registered imagery stacks',
      'STAC catalogue access for programmatic discovery and retrieval',
      'Cloud-optimised GeoTIFFs (COGs) and zarr packages for cloud-native workflows',
      'Time-aligned multi-sensor fusion (e.g. Sentinel-1 + Sentinel-2 stacks)',
      'On-premise install or hosted cloud API, whichever your security posture requires',
    ],
    faq: [
      [
        'What formats do you support?',
        'COG, JP2, Zarr, NetCDF, HDF5, GeoJSON, Shapefile, GeoPackage, standard plus most provider-native formats.',
      ],
      [
        'Is this hosted or do we receive files?',
        'Both options are supported. Hosted is faster to start; on-premise suits sensitive workloads.',
      ],
      [
        'How does pricing work?',
        'Per area-of-interest and per cadence. We will scope and quote against your specific footprint.',
      ],
      [
        'Can you integrate proprietary or government data?',
        'Yes, provided licensing permits. We have processed sensitive geospatial datasets under NDA before.',
      ],
    ],
    kpi: [
      ['Hosted or on-prem', 'Deployment options'],
      ['STAC-compliant', 'Discovery standard'],
      ['Multi-sensor', 'Fusion-ready'],
    ],
  },
  {
    num: '08',
    slug: 'geoint',
    name: 'GEOINT',
    tag: 'Defence, security and strategic operations',
    summary:
      'Geospatial intelligence products integrating imagery, human-geography and signals analysis, structured outputs for situational awareness, threat assessment and operational planning.',
    hook: ['Decision-grade intelligence', 'for situations that do not allow guesswork.'],
    lede: 'Geospatial intelligence products that integrate imagery, human-geography and signals data into structured outputs for situational awareness, threat assessment and operational planning.',
    prose: [
      'GEOINT is not GIS with a serious cover. It is an analytical discipline, fusing imagery, OSINT, human terrain and signals into a coherent picture, structured for the decision the consumer actually has to make. The difference between intelligence and a slide deck is in how the question was framed.',
      'We work with security, defence and strategic-operations clients who need the discipline applied to African operating environments. Engagements are scoped tightly, documented to standard, delivered under NDA, and built around the operational tempo of the consumer, not the comfort of the analyst.',
    ],
    delivers: [
      'Structured intelligence briefs, area study, target package, situation report formats',
      'Imagery interpretation and pattern-of-life analysis',
      'OSINT fusion (open-source media, social, public records) cross-referenced spatially',
      'Threat overlays, route analysis and operational planning support layers',
      'NDA-bound delivery, sanitised for downstream classification handling',
    ],
    faq: [
      [
        'Do you hold security clearances?',
        'Discussed under NDA. We work with clients across the security spectrum and align process to their requirements.',
      ],
      [
        'How is sensitive data handled?',
        'On-premise or air-gapped delivery is standard. All staff sign NDAs; engagement-specific protocols are agreed up-front.',
      ],
      [
        'What regions do you cover?',
        'Pan-African operating environments are our specialty. Other regions on case-by-case.',
      ],
      [
        'Can you support live operations?',
        'Yes, we provide on-call analytical support for active engagements, structured around the client’s operational tempo.',
      ],
    ],
    kpi: [
      ['NDA-bound', 'Every engagement'],
      ['Pan-African', 'Specialty region'],
      ['On-call', 'Operational support'],
    ],
  },
];

/** Look up a service by its slug. Returns undefined if not found. */
export function getServiceBySlug(slug: string): ServicePage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Map of slug → service for fast lookup. */
export const SERVICES_BY_SLUG: Record<string, ServicePage> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);
