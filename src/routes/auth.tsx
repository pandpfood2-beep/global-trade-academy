import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Ship } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign In / Register | B2B Export Import Hub" }] }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard" });
    });
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        toast.success("Account created! Check your email if confirmation is required.");
        navigate({ to: "/dashboard" });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
        navigate({ to: "/dashboard" });
      }
    } catch (err: any) {
      toast.error(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <div className="mx-auto flex max-w-md flex-col gap-6 px-4 py-16">
        <div className="text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-navy text-primary-foreground">
            <Ship className="h-7 w-7" />
          </div>
          <h1 className="mt-4 text-3xl font-bold">
            {mode === "signin" ? "Sign in to your account" : "Create your B2B account"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Access the global exporter & importer directory.
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
          {mode === "signup" && (
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} required maxLength={120} />
            </div>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} maxLength={72} />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            {mode === "signin" ? (
              <>Don't have an account?{" "}
                <button type="button" onClick={() => setMode("signup")} className="text-primary font-medium hover:underline">
                  Register
                </button>
              </>
            ) : (
              <>Already have an account?{" "}
                <button type="button" onClick={() => setMode("signin")} className="text-primary font-medium hover:underline">
                  Sign in
                </button>
              </>
            )}
          </p>
        </form>
        <Link to="/" className="text-center text-sm text-muted-foreground hover:text-foreground">
          ← Back to home
        </Link>
      </div>
    </SiteLayout>
  );
}
