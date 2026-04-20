import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is this report really free?", a: "Yes. Your personalized numerology report is 100% free. We offer it as a way for you to experience the depth of our work before considering deeper consultations." },
  { q: "How accurate is numerology?", a: "Numerology offers patterns, not prophecies. Many find the insights remarkably accurate as a mirror for self-understanding and decision-making — but you always remain the author of your life." },
  { q: "How will I receive my report?", a: "Your report is delivered to your WhatsApp number and email, usually within 24 hours of your submission." },
  { q: "Do I need my exact birth time?", a: "No. Your full name and birth date are enough to generate your core numerology report. Birth time is only needed for advanced astrological readings." },
  { q: "Will my information stay private?", a: "Absolutely. Your details are used only to prepare your report. We never sell, share or spam your inbox." },
];

const FAQ = () => (
  <section id="faq" className="relative py-24 sm:py-32">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <span className="text-gold text-sm tracking-[0.3em] uppercase">Questions</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4">Frequently asked</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="glass rounded-2xl px-5 border-0">
            <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
