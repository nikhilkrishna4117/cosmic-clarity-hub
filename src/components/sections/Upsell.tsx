import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { Crown, Check } from "lucide-react";

const features = [
  "Deep, multi-layered chart analysis",
  "Personalized solutions for your situation",
  "Live 1:1 guidance call with a numerologist",
  "Custom remedies, mantras and lucky periods",
];

const Upsell = () => {
  const { openModal } = useLeadModal();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden glass-strong p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 items-center"
        >
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-gold/20 blur-3xl rounded-full" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-gold text-primary-foreground text-xs font-medium mb-5">
              <Crown className="w-3.5 h-3.5" /> Want to go deeper?
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight">
              Book a <span className="text-gold">Personal Consultation</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For those ready to unlock the full picture — get a dedicated session with a senior numerologist who'll walk you through your chart in depth.
            </p>
            <Button variant="hero" size="lg" onClick={openModal}>Reserve a Session</Button>
          </div>

          <ul className="relative space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 glass rounded-xl p-4">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary-foreground" />
                </span>
                <span className="text-foreground/90 text-sm sm:text-base">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Upsell;
