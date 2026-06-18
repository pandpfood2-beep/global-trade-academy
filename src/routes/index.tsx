import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import {
  Ship, Plane, Truck, FileText, Globe, Shield, ArrowRight, BookOpen,
  TrendingUp, Award, Users, CheckCircle2, Hash, ShieldAlert,
} from "lucide-react";
import heroImg from "@/assets/hero-port.jpg";
import shipImg from "@/assets/ship.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import airImg from "@/assets/aircargo.jpg";
import docsImg from "@/assets/docs.jpg";
import customsImg from "@/assets/customs.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Export Import Academy | Learn International Trade" },
      { name: "description", content: "Master export-import business, incoterms, CHA, customs clearance, shipping, IEC and global trade — from beginner to advanced." },
      { property: "og:title", content: "Global Export Import Academy" },
      { property: "og:description", content: "Learn Export Import Business from Beginner to Advanced." },
    ],
  }),
  component: Home,
});

const categories = [
  { to: "/incoterms", icon: Globe, title: "Incoterms 2020", desc: "All 11 rules explained step by step with examples." },
  { to: "/cha", icon: Shield, title: "CHA & Customs", desc: "Custom house agent role & step-by-step clearance." },
  { to: "/documentation", icon: FileText, title: "Trade Documents", desc: "Invoice, B/L, LC, IEC and more." },
  { to: "/hsn-code", icon: Hash, title: "HSN Code Guide", desc: "Structure, chapters and how to classify products." },
  { to: "/shipping", icon: Ship, title: "Shipping & Logistics", desc: "Sea, air, road, rail and warehousing." },
  { to: "/payment-terms", icon: TrendingUp, title: "Payment Terms", desc: "LC, TT, DP, DA and open account." },
  { to: "/risk-management", icon: ShieldAlert, title: "Risk Management", desc: "Payment, currency, transit & political risk." },
  { to: "/government-policies", icon: Award, title: "Govt. Policies", desc: "DGFT, IEC, GST, RoDTEP, SEZ benefits." },
] as const;

const stats = [
  { v: "15K+", l: "Students Trained" },
  { v: "120+", l: "Topics Covered" },
  { v: "50+", l: "Countries Reached" },
  { v: "4.9★", l: "Learner Rating" },
];

const updates = [
  { tag: "Policy", title: "RoDTEP rates revised for FY 2026", date: "May 28, 2026" },
  { tag: "Shipping", title: "Red Sea reroutes adding 12 days transit", date: "May 20, 2026" },
  { tag: "Documentation", title: "DGFT mandates digital BRC by Q3", date: "May 10, 2026" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="International cargo port" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-brand/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36 text-primary-foreground">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-light" /> Trusted by traders worldwide
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Learn Export Import Business from <span className="text-brand-light">Beginner to Advanced</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85">
              Step-by-step guidance on international trade, incoterms, customs clearance,
              shipping, documentation, payment methods and government policies — everything
              you need to launch and scale a global trading business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/training-inquiry" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy shadow-elegant hover:bg-white/95">
                <BookOpen className="h-4 w-4" /> Join Training
              </Link>
              <Link to="/consultancy-inquiry" className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90">
                Get Consultancy <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about-export-import" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Explore Knowledge
              </Link>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-bold text-brand-light md:text-3xl">{s.v}</dt>
                  <dd className="text-xs text-white/70">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Featured Categories</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Everything you need to trade globally</h2>
          <p className="mt-3 text-muted-foreground">Structured learning paths covering every stage of international trade.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.to} to={c.to} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-navy text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand">
                Explore <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURE BAND */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:px-8 lg:grid-cols-2">
          <div>
            <img src={shipImg} alt="Container ship" className="rounded-2xl shadow-elegant" loading="lazy" width={1280} height={720} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Why Learn With Us</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">A practical roadmap to international trade</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Lifetime access to lessons on incoterms, shipping, customs and documentation.",
                "Real-world case studies from Indian SME exporters and importers.",
                "Templates: Commercial Invoice, Packing List, LC checklist, IEC docs.",
                "Mentorship by CHA professionals and freight forwarders.",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              About the Academy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UPDATES */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Latest Updates</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Export-Import news & insights</h2>
          </div>
          <Link to="/blog" className="hidden sm:inline-flex items-center text-sm font-semibold text-brand">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {updates.map((u, i) => (
            <article key={i} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{u.tag}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{u.title}</h3>
              <p className="mt-3 text-xs text-muted-foreground">{u.date}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Industry Gallery</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Inside global trade & logistics</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { img: warehouseImg, label: "Warehousing", icon: Truck },
              { img: airImg, label: "Air Freight", icon: Plane },
              { img: docsImg, label: "Documentation", icon: FileText },
              { img: customsImg, label: "Customs Clearance", icon: Shield },
              { img: shipImg, label: "Ocean Freight", icon: Ship },
              { img: heroImg, label: "Port Operations", icon: Globe },
            ].map((g, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <img src={g.img} alt={g.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                  <span className="font-semibold">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 text-primary-foreground lg:p-16">
          <div className="relative max-w-2xl">
            <Users className="h-10 w-10 text-brand-light" />
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Ready to start your global trade journey?</h2>
            <p className="mt-4 text-white/85">Join thousands of entrepreneurs learning the practical side of international trade.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-white/95">Get Started</Link>
              <Link to="/faq" className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">Read FAQs</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
