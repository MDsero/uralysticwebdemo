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
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <FloatingShape 
        variant="ring" 
        className="absolute top-32 left-20 w-24 h-24 opacity-30" 
        delay={0}
      />
      <FloatingShape 
        variant="pyramid" 
        className="absolute bottom-20 right-10 w-20 h-20 opacity-25" 
        delay={2}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-semibold mb-6">
            THE ADVANTAGE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why <span className="text-gradient">Choose Us</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The competitive edge that sets us apart from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden">
                {/* Background glow on hover */}
                <div className="absolute inset-0 sky-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto rounded-2xl sky-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg glow-effect">
                    <advantage.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Stat display */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gradient">{advantage.stat}</span>
                    <p className="text-sm text-muted-foreground mt-1">{advantage.statLabel}</p>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
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
