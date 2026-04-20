import { motion } from "framer-motion";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import zodiacWheel from "@/assets/zodiac-wheel.png";

const Hero = () => {
  const { openModal } = useLeadModal();
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet/30 animate-pulse-glow pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/20 animate-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="star-field absolute inset-0" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs sm:text-sm text-muted-foreground tracking-wide">Limited free reports available today</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6">
            Unlock Your <span className="text-gold">Life Path</span> with a Personalized Numerology Report
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
            Discover your hidden strengths, lucky numbers, and the cosmic patterns shaping your career, relationships and future — completely free.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="xl" onClick={openModal} className="group">
              Get My Free Numerology Report
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Button>
            <Button variant="glow" size="xl" asChild>
              <a href="#how">How it works</a>
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Private & secure</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> No spam</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> 100% free</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-violet rounded-full blur-3xl opacity-30 animate-pulse-glow" />
          <img
            src={zodiacWheel}
            alt="Mystical zodiac wheel showing all twelve astrology signs and numerology symbols"
            width={1024}
            height={1024}
            className="relative w-full max-w-md lg:max-w-lg animate-spin-slow drop-shadow-[0_0_60px_hsl(280_90%_60%/0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
