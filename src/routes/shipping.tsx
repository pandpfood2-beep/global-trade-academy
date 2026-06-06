import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import shipImg from "@/assets/ship.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import airImg from "@/assets/aircargo.jpg";
import { Ship, Plane, Truck, Train, Warehouse, Boxes, Container, Network } from "lucide-react";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Logistics | Sea, Air, Road & Rail Freight" },
      { name: "description", content: "Complete guide to international shipping and logistics — sea, air, road, rail freight, warehousing, freight forwarding and container types." },
    ],
  }),
  component: Page,
});

const modes = [
  { icon: Ship, title: "Sea Freight", body: "Most cost-effective for high-volume cargo. Transit 15–45 days. Options: FCL, LCL, breakbulk and Ro-Ro.", img: shipImg },
  { icon: Plane, title: "Air Freight", body: "Fastest mode — 1–7 days. Best for perishables, high-value or urgent shipments. Charged on chargeable weight.", img: airImg },
  { icon: Truck, title: "Road Transport", body: "Door-to-door flexibility for regional and cross-border deliveries. Used in feeder and last-mile.", img: warehouseImg },
  { icon: Train, title: "Rail Transport", body: "Reliable for inland container movement (e.g., DFC, DPD). Lower cost than road for long distances.", img: warehouseImg },
];

const extras = [
  { icon: Warehouse, t: "Warehousing", d: "Inventory storage, kitting, cross-docking, bonded warehousing and FTWZ services." },
  { icon: Network, t: "Freight Forwarding", d: "Forwarders book carriers, prepare docs, arrange insurance and consolidate shipments." },
  { icon: Boxes, t: "Supply Chain Management", d: "End-to-end coordination — procurement, manufacturing, logistics, distribution, returns." },
  { icon: Container, t: "Container Types", d: "20'/40' Dry, HC, Reefer, Open Top, Flat Rack, Tank — chosen based on cargo nature." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Logistics"
        title="Shipping & Logistics"
        subtitle="How goods physically move across the world — modes of transport, container types, warehousing and freight forwarding."
        image={shipImg}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 space-y-16">
        <section className="grid gap-8 md:grid-cols-2">
          {modes.map((m) => (
            <article key={m.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img src={m.img} alt={m.title} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-7">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-primary-foreground">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
              </div>
            </article>
          ))}
        </section>

        <section>
          <h2 className="text-3xl font-bold">Beyond Transport</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((e) => (
              <div key={e.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <e.icon className="h-8 w-8 text-brand" />
                <h4 className="mt-3 font-semibold">{e.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl gradient-hero p-10 text-primary-foreground lg:p-14">
          <h2 className="text-3xl font-bold">Typical Shipping Process</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            {["Booking & Quote","Pickup & Stuffing","Export Clearance","Loading on Vessel","In-Transit Tracking","Arrival & Discharge","Import Clearance","Delivery to Buyer"].map((s, i) => (
              <li key={s} className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <span className="text-brand-light text-xs font-bold">STEP {i + 1}</span>
                <p className="mt-1 font-semibold">{s}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </SiteLayout>
  );
}
