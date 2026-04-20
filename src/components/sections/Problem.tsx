import { motion } from "framer-motion";
import { Briefcase, Heart, Wallet, CloudFog } from "lucide-react";

const problems = [
  { icon: Briefcase, title: "Career Confusion", desc: "Uncertain about your next step? Stuck in a job that doesn't feel like yours." },
  { icon: Heart, title: "Relationship Struggles", desc: "Repeating patterns, missed connections, or unclear compatibility." },
  { icon: Wallet, title: "Financial Instability", desc: "Money flows in and out, but real abundance always seems out of reach." },
  { icon: CloudFog, title: "Feeling Stuck", desc: "Working hard, doing the right things — yet nothing seems to move forward." },
];

const Problem = () => (
  <section className="relative py-24 sm:py-32">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold text-sm tracking-[0.3em] uppercase">The struggle</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5">
          Does any of this feel <span className="text-gold">familiar?</span>
        </h2>
        <p className="text-muted-foreground">You're not alone. Most people walk through life carrying questions the universe has already answered.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-gold/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
