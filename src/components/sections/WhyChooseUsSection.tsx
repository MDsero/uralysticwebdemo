import { motion } from "framer-motion";
import { Banknote, Rocket, ShieldCheck } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";

const advantages = [
  {
    icon: Banknote,
    title: "Price Point",
    description: 'High-quality output without the "Big Agency" markup.',
    stat: "60%",
    statLabel: "Cost Savings",
  },
  {
    icon: Rocket,
    title: "Speed",
    description: "Agile development cycles for faster go-to-market.",
    stat: "2x",
    statLabel: "Faster Delivery",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Mindset",
    description: 'Unlike other "cheap" services, we don\'t sacrifice your data safety for speed.',
    stat: "100%",
    statLabel: "Secure",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden section-gradient noise-overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape variant="torus" className="absolute top-24 left-[10%] w-24 h-24 opacity-25" delay={0} />
        <FloatingShape variant="pyramid" className="absolute bottom-16 right-[8%] w-18 h-18 opacity-20" delay={2} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
            The Advantage
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why <span className="text-gradient">Choose Us</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            The competitive edge that sets us apart from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card-elevated rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 text-center relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 sky-gradient opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-2xl sky-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg glow-subtle">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-6">
                    <motion.span 
                      className="text-5xl font-display font-bold text-gradient inline-block"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      {advantage.stat}
                    </motion.span>
                    <p className="text-xs text-muted-foreground mt-1.5 font-display tracking-wider uppercase">{advantage.statLabel}</p>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">{advantage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
