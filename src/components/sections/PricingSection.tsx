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
    <section className="py-32 relative overflow-hidden bg-white">
      <FloatingShape 
        variant="sphere" 
        className="absolute top-20 left-10 w-28 h-28 opacity-30" 
        delay={0.5}
      />
      <FloatingShape 
        variant="cube" 
        className="absolute bottom-32 right-20 w-20 h-20 opacity-25" 
        delay={1}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-6">
              INVESTMENT
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Business Model <br />
              <span className="text-gradient">& Pricing</span>
            </h2>
            
            <div className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full sky-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="sky-gradient text-white px-8 py-6 text-lg rounded-full glow-effect hover:scale-105 transition-transform"
            >
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right side - Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main pricing card */}
              <div className="glass-card rounded-3xl p-10 relative overflow-hidden glow-effect">
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-500 text-white text-sm font-semibold mb-6">
                    MOST POPULAR
                  </span>
                  
                  <h3 className="text-3xl font-bold mb-2">Custom Package</h3>
                  <p className="text-muted-foreground mb-8">Tailored to your exact requirements</p>
                  
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl font-bold text-gradient">Flexible</span>
                    <span className="text-muted-foreground">pricing</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {["Project-based or retainer", "Full-service delivery", "Dedicated support", "Scalable solutions"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full py-6 text-lg rounded-full sky-gradient text-white hover:scale-[1.02] transition-transform">
                    Get Started Today
                  </Button>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-gradient">100%</span>
                  <p className="text-xs text-muted-foreground">Transparent</p>
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
