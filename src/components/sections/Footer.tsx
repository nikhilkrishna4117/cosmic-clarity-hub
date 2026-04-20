const Footer = () => (
  <footer className="relative border-t border-border/50 py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Aurora Numerology. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition">Privacy</a>
        <a href="#" className="hover:text-foreground transition">Terms</a>
        <a href="#faq" className="hover:text-foreground transition">FAQ</a>
      </div>
    </div>
  </footer>
);

export default Footer;
