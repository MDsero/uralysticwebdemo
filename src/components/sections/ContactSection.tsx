import { motion } from "framer-motion";
import { Mail, Phone, Globe, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FloatingShape from "@/components/3d/FloatingShape";

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "auraorganising@gmail.com",
    href: "mailto:auraorganising@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+960 9467845",
    href: "tel:+9609467845",
  },
  {
    icon: Globe,
    title: "Visit Website",
    value: "Coming Soon",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden section-gradient noise-overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape variant="ring" className="absolute top-16 right-[10%] w-28 h-28 opacity-25" delay={0} />
        <FloatingShape variant="torus" className="absolute bottom-32 left-[6%] w-20 h-20 opacity-20" delay={1.5} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Let's <span className="text-gradient">Build Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Ready to transform your business? Let's start a conversation about your next project.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contactCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-elevated rounded-3xl p-7 text-center hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 h-full">
                <div className="w-14 h-14 mx-auto rounded-2xl sky-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg glow-subtle">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-display font-semibold mb-1.5">{card.title}</h3>
                <p className="text-primary font-medium font-body text-sm">{card.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Inline contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card-elevated rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-display font-bold mb-6 text-center">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="rounded-xl border-border/60 bg-white/60 backdrop-blur-sm h-12 font-body focus:border-primary/40" />
                <Input placeholder="Your Email" type="email" className="rounded-xl border-border/60 bg-white/60 backdrop-blur-sm h-12 font-body focus:border-primary/40" />
              </div>
              <Input placeholder="Subject" className="rounded-xl border-border/60 bg-white/60 backdrop-blur-sm h-12 font-body focus:border-primary/40" />
              <textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                className="w-full rounded-xl border border-border/60 bg-white/60 backdrop-blur-sm px-3 py-3 text-base font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/40 resize-none"
              />
              <Button 
                type="submit"
                className="w-full py-6 text-base rounded-full sky-gradient text-white hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 font-display font-semibold shadow-lg glow-effect"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
