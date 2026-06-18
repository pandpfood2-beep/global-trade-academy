import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Ship, Search } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-export-import", label: "Knowledge" },
  { to: "/incoterms", label: "Incoterms" },
  { to: "/documentation", label: "Docs" },
  { to: "/shipping", label: "Shipping" },
  { to: "/training-inquiry", label: "Training" },
  { to: "/consultancy-inquiry", label: "Consultancy" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-primary-foreground">
            <Ship className="h-5 w-5" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm">Global Export Import</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Academy</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-foreground/75 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setSearch((s) => !s)}
            className="grid h-9 w-9 place-items-center rounded-md text-foreground/70 hover:bg-secondary"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            onClick={toggleDark}
            className="grid h-9 w-9 place-items-center rounded-md text-foreground/70 hover:bg-secondary"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          {user ? (
            <Link
              to="/dashboard"
              className="hidden sm:inline-flex items-center rounded-md bg-navy px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/auth"
              className="hidden sm:inline-flex items-center rounded-md bg-navy px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Sign In / Register
            </Link>
          )}
          <button
            onClick={() => setOpen((o) => !o)}
            className="xl:hidden grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-secondary"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {search && (
        <div className="border-t border-border bg-background px-4 py-3 lg:px-8">
          <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              autoFocus
              placeholder="Search topics: Incoterms, IEC, LC, Bill of Lading…"
              className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      )}

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
