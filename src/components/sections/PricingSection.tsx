import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShape from "@/components/3d/FloatingShape";

const features = [
  "Flexible Tiers – Project-based pricing or monthly retainers",
  "Transparent Costs – No hidden fees or surprise charges",
  "Scalability – Start small with a logo/website and grow into full software automation",
  "Custom packages tailored to your specific needs",
  "Priority support included with all plans",
];

const PricingSection = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden section-gradient-alt noise-overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape variant="sphere" className="absolute top-16 left-[6%] w-24 h-24 opacity-25" delay={0.5} />
        <FloatingShape variant="hexagon" className="absolute bottom-24 right-[10%] w-18 h-18 opacity-20" delay={1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
              Investment
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Business Model <br />
              <span className="text-gradient">& Pricing</span>
            </h2>
            
            <div className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full sky-gradient flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-foreground font-body leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="sky-gradient text-white px-9 py-6 text-base rounded-full glow-effect hover:scale-105 active:scale-[0.98] transition-all duration-300 font-display font-semibold tracking-wide shadow-lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right side – Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative">
              <div className="glass-card-elevated rounded-3xl p-10 relative overflow-hidden glow-subtle">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-wider uppercase">
                    Most Popular
                  </span>
                  
                  <h3 className="text-2xl font-display font-bold mb-2">Custom Package</h3>
                  <p className="text-muted-foreground mb-8 font-body">Tailored to your exact requirements</p>
                  
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-5xl font-display font-bold text-gradient">Flexible</span>
                    <span className="text-muted-foreground font-body">pricing</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {["Project-based or retainer", "Full-service delivery", "Dedicated support", "Scalable solutions"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="font-body text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full py-6 text-base rounded-full sky-gradient text-white hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 font-display font-semibold shadow-lg">
                    Get Started Today
                  </Button>
                </div>
              </div>
              
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 glass-card-elevated rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <span className="text-xl font-display font-bold text-gradient">100%</span>
                  <p className="text-[10px] text-muted-foreground font-display tracking-wider uppercase">Transparent</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
