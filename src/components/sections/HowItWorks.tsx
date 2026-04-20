import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/contexts/LeadModalContext";

const steps = [
  { n: "01", title: "Enter Your Details", desc: "Share your name, birth date and what you're seeking clarity on." },
  { n: "02", title: "Analysis Is Generated", desc: "Our numerologists decode your unique cosmic blueprint." },
  { n: "03", title: "Receive Your Report", desc: "Delivered straight to your WhatsApp or email — usually within 24 hours." },
];

const HowItWorks = () => {
  const { openModal } = useLeadModal();
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Simple process</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5">How it works</h2>
          <p className="text-muted-foreground">Three steps between you and the clarity you're looking for.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full glass-strong mb-6">
                <span className="absolute inset-0 rounded-full bg-gradient-gold opacity-20 blur-md" />
                <span className="relative font-display text-2xl text-gold">{s.n}</span>
              </div>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button variant="hero" size="lg" onClick={openModal}>Get My Free Report</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
