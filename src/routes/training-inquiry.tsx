import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { LeadForm } from "@/components/LeadForm";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export const Route = createFileRoute("/training-inquiry")({
  head: () => ({
    meta: [
      { title: "Export Import Training Inquiry | Global Export Import Academy" },
      { name: "description", content: "Enroll in our Export Import training. Learn international trade, documentation, INCOTERMS, customs and shipping from industry experts." },
      { property: "og:title", content: "Export Import Training Inquiry" },
      { property: "og:description", content: "Hands-on training in export-import, documentation, customs and global trade." },
    ],
  }),
  component: Page,
});

const HIGHLIGHTS = [
  { icon: BookOpen, title: "Complete Curriculum", text: "Export & import process, documentation, INCOTERMS, customs, payments, logistics." },
  { icon: Users, title: "Live + Self-paced", text: "Weekend live cohorts and recorded sessions for working professionals." },
  { icon: Award, title: "Certificate", text: "Get certified and gain confidence to start your own export-import business." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Training"
        title="Become an Export-Import Professional"
        subtitle="Practical training designed for entrepreneurs, exporters, importers and trade professionals. Fill the form and our team will contact you with course details, fees and the next batch start date."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">What you'll learn</h2>
              <p className="text-sm text-muted-foreground">Industry-tested syllabus, refreshed every batch.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <h.icon className="h-6 w-6 text-brand" />
                <p className="mt-3 font-semibold">{h.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
          <ul className="space-y-2 rounded-2xl border border-border bg-card p-6 shadow-card text-sm">
            <li>• How to find international buyers and qualify them</li>
            <li>• Export documentation: invoice, packing list, BL, COO</li>
            <li>• INCOTERMS 2020 explained with real examples</li>
            <li>• Customs, IEC, AD code, and DGFT schemes</li>
            <li>• Payment terms and how to get paid safely</li>
            <li>• Logistics, freight forwarders, and container basics</li>
          </ul>
        </div>
        <div>
          <LeadForm kind="training" />
        </div>
      </div>
    </SiteLayout>
  );
}
