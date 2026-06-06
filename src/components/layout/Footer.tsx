import { Link } from "@tanstack/react-router";
import { Ship, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
              <Ship className="h-5 w-5" />
            </span>
            <span>Global Export Import Academy</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Premier learning hub for export-import business, international trade, incoterms,
            shipping, customs and global logistics.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-white/20" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              ["/about-export-import", "Export Import"],
              ["/incoterms", "Incoterms"],
              ["/cha", "CHA"],
              ["/documentation", "Documentation"],
              ["/shipping", "Shipping & Logistics"],
              ["/payment-terms", "Payment Terms"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> <a href="tel:+918698569314" className="hover:text-white">+91 8698569314</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> <a href="mailto:pandpfood2@gmail.com" className="hover:text-white">pandpfood2@gmail.com</a>
            </li>
          </ul>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Thank you."); }}
            className="mt-5"
          >
            <label className="text-xs text-white/70">Newsletter</label>
            <div className="mt-1 flex overflow-hidden rounded-md border border-white/15 bg-white/5">
              <input
                required
                type="email"
                placeholder="you@email.com"
                className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/40"
              />
              <button className="grid w-11 place-items-center bg-brand-light text-navy hover:opacity-90" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 lg:px-8 sm:flex-row">
          <p>© {new Date().getFullYear()} Global Export Import Academy. All rights reserved.</p>
          <p>Made for traders, students and entrepreneurs worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
