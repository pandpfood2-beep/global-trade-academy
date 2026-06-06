import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28 animate-fade-up">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-light">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-3xl text-base md:text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
