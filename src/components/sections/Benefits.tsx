import { motion } from "framer-motion";
import { Compass, Gem, Hash, Target } from "lucide-react";

const benefits = [
  { icon: Compass, title: "Life Path Insights", desc: "Understand the deeper purpose your numbers are guiding you toward." },
  { icon: Gem, title: "Strengths & Weaknesses", desc: "Discover the natural gifts you carry and the blocks holding you back." },
  { icon: Hash, title: "Lucky Numbers", desc: "Find the numbers, dates and cycles that work in your favor." },
  { icon: Target, title: "Career Direction", desc: "Get clarity on roles and paths that align with your true energy." },
];

const Benefits = () => (
  <section id="benefits" className="relative py-24 sm:py-32">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold text-sm tracking-[0.3em] uppercase">What you'll discover</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5">
          Your free report includes
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-violet opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <b.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
