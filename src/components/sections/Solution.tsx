import mysticBook from "@/assets/mystic-book.jpg";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Numerology decodes the patterns hidden in your birth date and name",
  "Helps you make better decisions in career, love and money",
  "Not prediction — clarity-based guidance you can actually use",
];

const Solution = () => (
  <section className="relative py-24 sm:py-32 overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-violet opacity-20 blur-3xl rounded-full" />
        <img
          src={mysticBook}
          alt="Ancient numerology book with candles representing clarity-based guidance"
          width={1280}
          height={768}
          loading="lazy"
          className="relative rounded-3xl w-full object-cover aspect-[4/3] border border-border shadow-elegant"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-gold text-sm tracking-[0.3em] uppercase">The clarity</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 leading-tight">
          Astrology guides you toward <span className="text-gold">clarity</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Numerology is more than predictions — it's an art of understanding. We help you decode the celestial messages hidden in your birth chart so you can move forward with confidence.
        </p>
        <ul className="space-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-1 w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
              <span className="text-foreground/90">{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Solution;
