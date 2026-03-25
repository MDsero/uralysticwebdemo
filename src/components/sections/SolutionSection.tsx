import { motion } from "framer-motion";
import { Check, Layers, Sparkles, Target } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";

const solutions = [
  {
    icon: Layers,
    title: 'The "All-in-One" Tech Partner',
    description: "We provide a holistic approach to digital business.",
  },
  {
    icon: Target,
    title: "Affordability",
    description: "Optimized workflows allow us to deliver high-end results at a fraction of the market cost.",
  },
  {
    icon: Sparkles,
    title: "End-to-End Delivery",
    description: "From the first pixel of a logo to the final line of secure code.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden section-gradient noise-overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape variant="sphere" className="absolute top-32 left-[6%] w-28 h-28 opacity-30" delay={0.5} />
        <FloatingShape variant="pyramid" className="absolute bottom-20 right-[10%] w-20 h-20 opacity-25" delay={1} />
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
            <span className="inline-block px-5 py-2 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Our <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-body">
              We've reimagined how businesses access premium technology services. 
              No more juggling multiple vendors or breaking the bank.
            </p>

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-5 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-lg transition-all duration-500">
                    <solution.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-1.5">{solution.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side – Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main card */}
              <div className="absolute inset-0 glass-card-elevated rounded-3xl p-8 flex items-center justify-center glow-subtle">
                <div className="text-center">
                  <div className="w-28 h-28 mx-auto mb-6 relative">
                    <motion.div 
                      className="absolute inset-0 rounded-full sky-gradient"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-[6px] rounded-full bg-white flex items-center justify-center shadow-inner">
                      <Check className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">One Partner</h3>
                  <p className="text-muted-foreground font-body">Everything you need</p>
                </div>
              </div>
              
              {/* Floating cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card-elevated rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="font-display font-semibold text-sm">Cost Effective</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 glass-card-elevated rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-display font-semibold text-sm">Premium Quality</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
