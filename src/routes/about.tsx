import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { Target, Eye, Heart } from "lucide-react";
import heroImg from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Global Export Import Academy" },
      { name: "description", content: "Global Export Import Academy provides complete educational information on export-import business, logistics, customs and international trade." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title="About Global Export Import Academy"
        subtitle="Empowering entrepreneurs, students and businesses to confidently enter international trade."
        image={heroImg}
      />
      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8 space-y-12">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Global Export Import Academy provides complete educational information about Export
          Import Business, International Trade, Logistics, Customs Procedures, Shipping,
          Documentation, Incoterms, Payment Methods, and Government Policies. Our mission is to
          help entrepreneurs, students, and businesses understand international trade and grow
          globally.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, t: "Our Mission", d: "Make international trade knowledge accessible, practical and affordable for every Indian entrepreneur." },
            { icon: Eye, t: "Our Vision", d: "To become Asia's most trusted learning hub for export-import and global supply chain education." },
            { icon: Heart, t: "Our Values", d: "Integrity, clarity, real-world relevance and unwavering support for learners at every level." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-navy p-10 text-primary-foreground lg:p-14">
          <h2 className="text-2xl font-bold">What we cover</h2>
          <ul className="mt-5 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
            {["Export-Import fundamentals","Incoterms 2020","CHA & Customs clearance","Trade documentation","Shipping & Logistics","International payment methods","DGFT & FTP","GST for exporters","Government incentives","Market research & buyer finding"].map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>
      </div>
    </SiteLayout>
  );
}
