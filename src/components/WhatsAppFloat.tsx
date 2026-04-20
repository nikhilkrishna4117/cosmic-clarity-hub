import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => (
  <motion.a
    href="https://wa.me/919999999999?text=Hi,%20I%27d%20like%20to%20know%20more%20about%20my%20numerology%20report"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.5, type: "spring" }}
    whileHover={{ scale: 1.08 }}
    className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center shadow-[0_10px_30px_-5px_hsl(142_70%_30%/0.6)] hover:shadow-[0_0_40px_hsl(142_70%_50%/0.6)] transition-shadow"
  >
    <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-ping opacity-30" />
    <MessageCircle className="relative w-6 h-6 text-white" fill="currentColor" />
  </motion.a>
);

export default WhatsAppFloat;
