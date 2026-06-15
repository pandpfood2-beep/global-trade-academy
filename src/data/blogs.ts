export type Blog = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  read: string;
  excerpt: string;
  image: string;
  content: string[]; // paragraphs
  sections?: { heading: string; body: string }[];
};

import heroImg from "@/assets/hero-port.jpg";
import shipImg from "@/assets/ship.jpg";
import docsImg from "@/assets/docs.jpg";
import customsImg from "@/assets/customs.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import airImg from "@/assets/aircargo.jpg";
import containersImg from "@/assets/containers.jpg";
import financeImg from "@/assets/finance.jpg";
import policyImg from "@/assets/policy.jpg";
import globalImg from "@/assets/global-trade.jpg";

export const blogs: Blog[] = [
  {
    slug: "what-is-export-import-business",
    title: "What is Export Import Business? Complete Beginner's Guide 2026",
    tag: "Trade Basics",
    date: "Jun 10, 2026",
    read: "12 min",
    excerpt:
      "Export-Import (EXIM) business is the buying and selling of goods and services across international borders. Learn definition, types, benefits, how it works and how to start.",
    image: heroImg,
    content: [
      "Export-Import business — popularly called EXIM business — is the commercial activity of selling Indian-origin goods or services to buyers located outside India (export) and bringing in foreign goods or services into India for domestic use, processing or resale (import). It is one of the oldest forms of trade and today contributes more than 22% to India's GDP, making it a critical pillar of the national economy.",
      "Unlike domestic trade where a single legal and tax framework applies, international trade involves two countries, two currencies, two legal systems, customs authorities on both sides, an international carrier, an insurance provider, banks for cross-border payments and often a regulatory body like the DGFT. Mastering how these moving parts connect is the essence of EXIM business.",
    ],
    sections: [
      { heading: "Why Export Import Business is Attractive",
        body: "It opens access to a global customer base of 8 billion people instead of being limited to local demand. Foreign exchange earnings often deliver 20–40% higher margins than the domestic market. The Government of India actively rewards exporters through schemes like RoDTEP, Advance Authorisation, EPCG, Duty Drawback, MEIS/SEIS replacement incentives, and zero-rated GST. Exporters also get easy access to packing credit, post-shipment finance, ECGC cover and priority lending status from banks." },
      { heading: "Types of Export Import Business",
        body: "1) Merchant Exporter — buys from manufacturers and exports without owning a factory. 2) Manufacturer Exporter — produces and exports own goods. 3) Service Exporter — IT, consulting, tourism, education, healthcare. 4) Deemed Exports — supply within India treated as export (to SEZ, EOU, EPCG holders). 5) Re-Exports / Merchant Trading — buy from country A and sell directly to country B. 6) E-commerce Exports through Amazon Global, eBay, Etsy under courier/postal route." },
      { heading: "How Export Business Works — End to End",
        body: "Find a foreign buyer → quote price on chosen Incoterm → receive Purchase Order → arrange production / procurement → arrange packing credit if needed → book freight forwarder & insurance → prepare invoice, packing list, COO → CHA files Shipping Bill on ICEGATE → customs examination & Let Export Order → goods loaded → Bill of Lading / AWB issued → documents sent to buyer's bank → payment realised → EBRC generated → claim RoDTEP / Drawback incentives." },
      { heading: "How Import Business Works — End to End",
        body: "Identify supplier → negotiate Incoterm and price → issue PO and arrange payment instrument (LC / TT / DA) → supplier ships goods → receive shipping documents → CHA files Bill of Entry → pay BCD + IGST + Cess → customs examination → Out of Charge → delivery order from shipping line → move container to warehouse → file GST input credit." },
      { heading: "Mandatory Registrations to Start",
        body: "PAN card, GST registration, Importer Exporter Code (IEC) from DGFT, AD-Code registration at the port of export, RCMC from an Export Promotion Council, current account in an AD-Category I bank, LUT bond for zero-rated exports, FSSAI / BIS / APEDA / Spices Board licences if your product category requires them." },
      { heading: "Investment & Profitability",
        body: "A merchant export setup can begin with as little as ₹2–5 lakhs of working capital because packing credit covers up to 90% of order value. Typical net margins range from 8% (commodity) to 35% (handicraft, premium food, niche industrial goods). Break-even on a properly run EXIM business is usually achieved within 3–6 shipments." },
    ],
  },
  {
    slug: "how-to-start-export-business-in-india",
    title: "How to Start an Export Business in India — 12-Step Roadmap",
    tag: "Getting Started",
    date: "Jun 8, 2026",
    read: "10 min",
    excerpt: "A complete step-by-step guide covering registrations, product selection, buyer hunting, pricing, shipping and getting paid — built for first-time Indian exporters.",
    image: shipImg,
    content: [
      "Starting an export business in India in 2026 has never been easier — but it still requires you to follow a clear sequence so that your first shipment goes out without customs delays, payment defaults or compliance penalties. This guide walks you through the entire 12-step roadmap exactly the way experienced exporters do it.",
    ],
    sections: [
      { heading: "Step 1 — Choose Business Structure", body: "Register as a Sole Proprietor, Partnership, LLP or Private Limited. For serious export volumes a Private Limited is preferred because of liability protection and easier bank credit." },
      { heading: "Step 2 — PAN, GST and Bank Account", body: "PAN is mandatory. Apply for GST (export is zero-rated). Open a current account in an AD-Category I bank that can receive foreign currency remittances." },
      { heading: "Step 3 — Get IEC from DGFT", body: "Apply online on dgft.gov.in with PAN, Aadhaar, bank certificate and cancelled cheque. Fee is ₹500. Issued within 1–2 working days." },
      { heading: "Step 4 — RCMC from EPC", body: "Register with the relevant Export Promotion Council (APEDA for food, Spices Board, EEPC for engineering, FIEO general) to claim DGFT incentives." },
      { heading: "Step 5 — AD-Code Registration", body: "Get your bank's AD-Code registered at each port from where you plan to ship; without this, the Shipping Bill cannot be filed." },
      { heading: "Step 6 — Product & Market Research", body: "Pick a product with strong domestic supply, freight-friendly weight-to-value ratio and high overseas demand. Use trademap.org and DGCIS data to validate." },
      { heading: "Step 7 — Find Buyers", body: "B2B portals (Alibaba, IndiaMart, TradeIndia), LinkedIn outreach, EPC trade fairs, virtual buyer-seller meets, embassy commercial wings, Google search with country qualifiers." },
      { heading: "Step 8 — Price Quotation", body: "Price = Cost + Profit + Inland freight + Port charges + Sea/Air freight + Insurance + Bank charges + Margin for incentive realisation. Quote on FOB, CIF, CFR or DDP — your choice." },
      { heading: "Step 9 — Confirm Order with PO / LC", body: "Get a written Purchase Order. If buyer is new, insist on 30% advance + 70% against BL copy OR an irrevocable LC at sight." },
      { heading: "Step 10 — Manufacture / Procure & Pack", body: "Follow buyer's specifications. Use export-grade corrugated boxes, fumigated wooden pallets (ISPM-15), shipping marks and HS code stencilling." },
      { heading: "Step 11 — CHA, Customs Clearance, Shipment", body: "Appoint a licensed CHA, file Shipping Bill on ICEGATE, complete LEO, load on vessel and obtain Bill of Lading." },
      { heading: "Step 12 — Get Paid & Claim Incentives", body: "Submit documents to your bank, realise payment, get EBRC. File RoDTEP, Drawback, and any FTA refund claims through DGFT online portal." },
    ],
  },
  {
    slug: "incoterms-2020-complete-guide",
    title: "Incoterms 2020 Explained — All 11 Rules with Real Examples",
    tag: "Incoterms",
    date: "Jun 5, 2026",
    read: "15 min",
    excerpt: "The complete plain-English breakdown of EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF — when to use which, risk points and pricing impact.",
    image: globalImg,
    content: [
      "Incoterms are 11 three-letter rules published by the International Chamber of Commerce (ICC) that define exactly who — buyer or seller — is responsible for arranging carriage, insurance, export and import clearance, and at what precise point the risk of loss or damage shifts from one party to the other in a cross-border sale. The 2020 edition is the latest and is the only one that should appear on commercial invoices today.",
      "Choosing the right Incoterm has direct financial impact: the wrong term can cost an exporter 5–10% of the contract value in unexpected freight, insurance or customs charges, or expose the buyer to in-transit risk they did not budget for.",
    ],
    sections: [
      { heading: "Group 1 — Any Mode of Transport (7 terms)", body: "EXW, FCA, CPT, CIP, DAP, DPU, DDP. These work for road, rail, air, sea or multimodal shipments, including containerised cargo." },
      { heading: "Group 2 — Sea & Inland Waterway Only (4 terms)", body: "FAS, FOB, CFR, CIF. Use only for non-containerised bulk or break-bulk loaded directly on board a vessel. For containers, prefer FCA / CPT / CIP." },
      { heading: "Key Change in 2020", body: "CIP now requires the seller to provide all-risks (ICC Clause A) insurance instead of the minimum cover. DAT was renamed DPU. FCA allows the buyer to instruct the carrier to issue a Bill of Lading with on-board notation." },
      { heading: "Quick Selection Cheat-Sheet", body: "Selling on Alibaba to a small overseas buyer → DDP. Bulk commodity exporter → FOB or CFR. Premium containerised goods → CIP. Buyer is large and has own forwarder → FCA or EXW. Need maximum insurance cover → CIP." },
    ],
  },
  {
    slug: "letter-of-credit-explained",
    title: "Letter of Credit (LC) Explained for First-Time Exporters",
    tag: "Payments",
    date: "Jun 2, 2026",
    read: "11 min",
    excerpt: "Decode LC types, the 9-step lifecycle, document discrepancies and the 7 mistakes that delay payment. With UCP 600 references.",
    image: financeImg,
    content: [
      "A Letter of Credit (LC) is a written undertaking by a bank — the issuing bank — to pay the exporter (beneficiary) a stated amount within a stated period against presentation of stipulated, compliant shipping documents. It is the most balanced payment instrument in international trade because it shifts payment risk from the importer to a bank.",
    ],
    sections: [
      { heading: "9-Step LC Lifecycle", body: "1) Buyer & seller sign sales contract. 2) Buyer applies to issuing bank. 3) Issuing bank issues LC to advising bank. 4) Advising bank notifies exporter. 5) Exporter ships goods. 6) Exporter presents documents to negotiating bank. 7) Negotiating bank checks UCP 600 compliance. 8) Documents forwarded to issuing bank. 9) Payment released to exporter; importer takes documents to clear goods." },
      { heading: "Types of LC", body: "Sight LC, Usance/Time LC, Irrevocable, Confirmed, Standby, Transferable, Back-to-Back, Red Clause (pre-shipment advance), Green Clause (storage advance), Revolving LC." },
      { heading: "7 Common Discrepancies", body: "Late shipment, late presentation (>21 days), description mismatch, weight/quantity variance, missing endorsement on BL, incorrect LC number on invoice, insurance amount below 110% of CIF value." },
    ],
  },
  {
    slug: "iec-code-registration-guide",
    title: "IEC Code Registration — Full DGFT Online Process Step by Step",
    tag: "Compliance",
    date: "May 30, 2026",
    read: "6 min",
    excerpt: "Apply for your Importer Exporter Code in under 30 minutes. Documents, fees, validity, modification and annual KYC update.",
    image: docsImg,
    content: [
      "Importer Exporter Code (IEC) is a 10-digit business identification number issued by the Directorate General of Foreign Trade (DGFT). Since 2023 it is the same as your PAN. Without an active IEC, no goods can clear Indian customs for export or import.",
    ],
    sections: [
      { heading: "Documents Required", body: "PAN of business, Aadhaar of proprietor / authorised signatory, cancelled cheque or bank certificate, address proof of premises (electricity bill / rent agreement), digital photograph, active mobile and email." },
      { heading: "Online Process", body: "Visit dgft.gov.in → Register as Importer/Exporter → fill ANF-2A form → upload documents → pay ₹500 fee via net-banking → receive IEC certificate by email within 1–2 working days." },
      { heading: "Annual KYC Update", body: "Since 2021, IEC holders must update KYC every year between April and June, even if no changes — otherwise IEC is deactivated automatically." },
    ],
  },
  {
    slug: "rodtep-scheme-explained",
    title: "RoDTEP Scheme — Rates, Eligibility & How to Claim Online",
    tag: "Incentives",
    date: "May 27, 2026",
    read: "8 min",
    excerpt: "Everything Indian exporters need to know about the Remission of Duties and Taxes on Exported Products scheme — rates, ICEGATE filing, scrip realisation.",
    image: policyImg,
    content: [
      "RoDTEP replaced MEIS in January 2021 and refunds the embedded central, state and local taxes that were earlier not rebated under any other scheme. It is WTO-compliant because it is a remission of taxes rather than an export subsidy.",
    ],
    sections: [
      { heading: "Eligibility", body: "Available to all sectors including textiles, agriculture, chemicals, marine products, leather, plastics, engineering goods. SEZ units became eligible from March 2024." },
      { heading: "Rate Range", body: "0.3% to 4.3% of FOB value, capped per unit. Notified in Appendix 4R of FTP 2023." },
      { heading: "How to Claim", body: "Declare RODTEPY in shipping bill → after EGM, ICEGATE generates RoDTEP scrip → exporter logs into ICEGATE → generates e-scrip → transfers or uses for payment of Basic Customs Duty." },
    ],
  },
  {
    slug: "hsn-code-classification-guide",
    title: "HSN Code Classification — How to Find the Right Code in 7 Steps",
    tag: "Classification",
    date: "May 24, 2026",
    read: "9 min",
    excerpt: "Misclassification is the #1 cause of customs disputes. Learn the 21-section structure, GIR rules, and a foolproof 7-step method to lock in the correct 8-digit HSN.",
    image: customsImg,
    content: [
      "HSN (Harmonized System of Nomenclature) is a 6-digit code published by the World Customs Organization that classifies every traded product on earth. India extends it to 8 digits as ITC-HS. Your HSN drives basic customs duty, GST rate, FTA eligibility, RoDTEP rate and whether you need any restricted-goods licence.",
    ],
    sections: [
      { heading: "Structure", body: "21 Sections → 99 Chapters (first 2 digits) → Headings (4 digits) → Sub-headings (6 digits — global) → Tariff item (8 digits — India)." },
      { heading: "7-Step Method", body: "1) Identify the essential character of the product. 2) Open the relevant Section. 3) Narrow to a Chapter. 4) Read Section & Chapter notes (critical). 5) Find the most specific Heading. 6) Apply GIR rules in order if ambiguous. 7) Lock the 8-digit ITC-HS from ICEGATE tariff." },
    ],
  },
  {
    slug: "fcl-vs-lcl-shipping-which-to-choose",
    title: "FCL vs LCL Shipping — Cost, Transit, Risk Comparison",
    tag: "Logistics",
    date: "May 20, 2026",
    read: "7 min",
    excerpt: "When does a Full Container Load beat Less than Container Load and vice versa? Real cost tables, transit difference and damage statistics.",
    image: containersImg,
    content: [
      "Choosing between FCL (Full Container Load) and LCL (Less than Container Load) is one of the first cost decisions every exporter makes. The break-even is generally 13–15 CBM — below that LCL is cheaper, above that FCL wins on a per-CBM basis.",
    ],
    sections: [
      { heading: "When to Choose FCL", body: "Volume >15 CBM, fragile / high-value goods, tight transit deadlines, sensitive products that should not mix with others (food, pharma), or temperature-controlled cargo requiring a reefer." },
      { heading: "When to Choose LCL", body: "Small volumes <13 CBM, irregular shipments, testing a new market, lower working capital deployment, or when buyer specifically asks for consolidated shipment." },
      { heading: "Hidden Costs", body: "LCL has CFS handling, deconsolidation and per-CBM destination charges that can add 30–40% to the headline freight. Always ask for an all-in landed quote." },
    ],
  },
  {
    slug: "export-documentation-checklist",
    title: "Export Documentation Checklist — All 15 Documents Explained",
    tag: "Documents",
    date: "May 16, 2026",
    read: "10 min",
    excerpt: "From Proforma Invoice to EBRC — the complete export document set with who issues it, when it's needed and common errors that cause customs holds.",
    image: docsImg,
    content: [
      "A typical Indian export shipment moves on the strength of 12–15 documents. Missing or inconsistent paperwork is responsible for over 60% of customs delays and almost all letter-of-credit discrepancies.",
    ],
    sections: [
      { heading: "Commercial Documents", body: "Proforma Invoice, Commercial Invoice, Packing List, Inspection Certificate, Insurance Policy." },
      { heading: "Transport Documents", body: "Bill of Lading / Airway Bill, Mate's Receipt, Shipping Bill, Carting Order, Let Export Order (LEO)." },
      { heading: "Regulatory & Banking", body: "IEC, RCMC, Certificate of Origin (preferential / non-preferential), GR/SDF declaration, LC / Purchase Order, EBRC, BRC." },
      { heading: "Top Errors", body: "Description mismatch between invoice and packing list, weight discrepancy >0.5%, wrong HSN on invoice vs shipping bill, missing notify-party details, LC reference missing on documents." },
    ],
  },
  {
    slug: "risk-management-in-international-trade",
    title: "Risk Management in International Trade — 8 Risks & How to Mitigate",
    tag: "Risk",
    date: "May 12, 2026",
    read: "9 min",
    excerpt: "Every cross-border transaction faces credit, currency, transit, political, legal, transportation and compliance risk. Here's how to insure against each one.",
    image: warehouseImg,
    content: [
      "International trade exposes exporters and importers to risks that simply don't exist in domestic business. A single uncovered currency swing or buyer default can wipe out the profit of a year's shipments. Identifying and pricing these risks at the quotation stage is what separates professional EXIM businesses from amateurs.",
    ],
    sections: [
      { heading: "Credit / Buyer Default", body: "Use ECGC Whole-Turnover Policy, insist on irrevocable confirmed LC, or factor receivables through EXIM Bank." },
      { heading: "Currency / FX Risk", body: "Hedge through forward contracts, currency options, or invoice in INR / local currency. RBI allows full INR invoicing since July 2022." },
      { heading: "Transit / Marine Risk", body: "Take Marine Insurance — Institute Cargo Clauses A (all-risks) covering warehouse-to-warehouse. Add war and SRCC clauses for sensitive routes." },
      { heading: "Country / Political Risk", body: "Use ECGC's Specific Shipment Policy for high-risk countries; monitor OFAC, UN, EU and Indian sanctions lists." },
      { heading: "Compliance Risk", body: "Get HSN classification rulings in advance; maintain end-use certificates for dual-use items; comply with SCOMET, BIS, FSSAI as applicable." },
    ],
  },
];
