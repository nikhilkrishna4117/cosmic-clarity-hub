import { motion } from "framer-motion";
import { Star, ShieldCheck, BadgeCheck, Lock } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    role: "Marketing Lead, Bangalore",
    text: "I was completely lost about my next career move. The report gave me a structured way to think about my strengths — within 3 months I made a switch that finally feels right.",
  },
  {
    name: "Rahul M.",
    role: "Entrepreneur, Mumbai",
    text: "Honestly skeptical at first. But the insights about my partnership patterns were eerily accurate and actually helped me communicate better with my co-founder.",
  },
  {
    name: "Ananya K.",
    role: "Designer, Delhi",
    text: "The clarity I got about my life path number was the gentle nudge I needed. Soft, thoughtful and never pushy — exactly the guidance I was hoping for.",
  },
];

const badges = [
  { icon: Lock, label: "Private & Secure" },
  { icon: ShieldCheck, label: "No Spam, Ever" },
  { icon: BadgeCheck, label: "Guidance-focused" },
];

const Trust = () => (
  <section id="trust" className="relative py-24 sm:py-32">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold text-sm tracking-[0.3em] uppercase">Trusted by thousands</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5">Stories of clarity</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-foreground/85 leading-relaxed mb-5 flex-1">"{t.text}"</p>
            <div>
              <p className="font-medium text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {badges.map((b) => (
          <div key={b.label} className="glass rounded-full px-5 py-2.5 flex items-center gap-2 text-sm">
            <b.icon className="w-4 h-4 text-gold" />
            <span className="text-muted-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
