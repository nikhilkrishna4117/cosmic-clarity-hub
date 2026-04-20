import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { motion } from "framer-motion";

const FinalCta = () => {
  const { openModal } = useLeadModal();
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-violet opacity-10 blur-3xl" />
      <div className="star-field absolute inset-0" />
      <div className="container relative text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
        >
          Clarity starts with <span className="text-gold">understanding yourself</span>
        </motion.h2>
        <p className="text-muted-foreground text-lg mb-10">
          Take the first step. Your free numerology report is waiting.
        </p>
        <Button variant="hero" size="xl" onClick={openModal}>
          Get My Free Numerology Report
        </Button>
      </div>
    </section>
  );
};

export default FinalCta;
