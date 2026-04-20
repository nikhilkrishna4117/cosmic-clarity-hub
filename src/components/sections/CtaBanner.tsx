import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const CtaBanner = () => {
  const { openModal } = useLeadModal();
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-strong rounded-3xl px-6 sm:px-12 py-14 sm:py-16 text-center overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-violet opacity-30 blur-3xl rounded-full" />
          <div className="relative">
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
              Get Your <span className="text-gold">Free Numerology Report</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Personalized for you. Delivered within 24 hours. Absolutely free.
            </p>
            <Button variant="hero" size="xl" onClick={openModal}>
              Get My Free Report Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
