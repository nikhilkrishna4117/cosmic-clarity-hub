import { useState, useEffect } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const defaultWhy = "I want clarity about my life path, career direction, and the challenges I am currently facing.";
const presets = [
  "I feel stuck and need guidance",
  "I want clarity in my career",
  "I am facing relationship confusion",
  "I want to understand my future opportunities",
  "I feel something is blocking my progress",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20).regex(/^[+\d\s\-()]+$/, "Only digits and + - ( ) allowed"),
  email: z.string().trim().email("Please enter a valid email").max(120),
  why: z.string().trim().min(5, "Please share a bit more").max(500),
});

const LeadModal = () => {
  const { open, closeModal } = useLeadModal();
  const [form, setForm] = useState({ name: "", phone: "", email: "", why: defaultWhy });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      setStatus("idle");
      setErrors({});
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    toast({ title: "Report on its way ✨", description: "We'll deliver your numerology report shortly." });
    setTimeout(() => {
      closeModal();
      setForm({ name: "", phone: "", email: "", why: defaultWhy });
    }, 2400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md overflow-y-auto"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg my-auto glass-strong rounded-3xl p-6 sm:p-8 shadow-elegant"
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted/40 hover:bg-muted/70 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto mb-5 flex items-center justify-center shadow-gold">
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-2">Thank you ✨</h3>
                <p className="text-muted-foreground">Your report is being generated and will be sent shortly.</p>
              </div>
            ) : status === "loading" ? (
              <div className="text-center py-12">
                <Loader2 className="w-10 h-10 text-gold mx-auto mb-5 animate-spin" />
                <h3 className="font-display text-xl mb-2">Generating your report…</h3>
                <p className="text-sm text-muted-foreground">Decoding your cosmic blueprint</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <Sparkles className="w-6 h-6 text-gold mx-auto mb-3" />
                  <h2 className="font-display text-2xl sm:text-3xl mb-2">Your Free Report</h2>
                  <p className="text-sm text-muted-foreground">Fill in your details — delivered within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-xs">Full name</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1.5 bg-background/40 border-border/60 focus-visible:ring-gold" />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-xs">Phone number</Label>
                      <Input id="phone" type="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 99999 99999" className="mt-1.5 bg-background/40 border-border/60 focus-visible:ring-gold" />
                      {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs">Email</Label>
                      <Input id="email" type="email" inputMode="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="mt-1.5 bg-background/40 border-border/60 focus-visible:ring-gold" />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="why" className="text-xs">Why do you want this report?</Label>
                    <Textarea id="why" value={form.why} onChange={(e) => setForm({ ...form, why: e.target.value })} rows={3} className="mt-1.5 bg-background/40 border-border/60 focus-visible:ring-gold resize-none" />
                    {errors.why && <p className="text-xs text-destructive mt-1">{errors.why}</p>}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {presets.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setForm({ ...form, why: p })}
                          className="text-xs px-3 py-1.5 rounded-full glass hover:border-gold/40 hover:text-gold transition-colors"
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full mt-2">
                    Get My Free Report
                  </Button>
                  <p className="text-[11px] text-center text-muted-foreground">Private & secure. No spam, ever.</p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
