import { Sparkles } from "lucide-react";
import { useLeadModal } from "@/contexts/LeadModalContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { openModal } = useLeadModal();
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="container mt-4">
        <nav className="glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="font-display text-base sm:text-lg tracking-wide text-gold">Aurora</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <li><a href="#benefits" className="hover:text-foreground transition">Benefits</a></li>
            <li><a href="#how" className="hover:text-foreground transition">How it works</a></li>
            <li><a href="#trust" className="hover:text-foreground transition">Reviews</a></li>
            <li><a href="#faq" className="hover:text-foreground transition">FAQ</a></li>
          </ul>
          <Button variant="hero" size="sm" onClick={openModal} className="rounded-full">
            Free Report
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
