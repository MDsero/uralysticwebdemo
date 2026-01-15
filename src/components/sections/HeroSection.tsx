import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShape from "@/components/3d/FloatingShape";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape 
          variant="sphere" 
          className="absolute top-20 right-[10%] w-32 h-32 opacity-60" 
          delay={0}
        />
        <FloatingShape 
          variant="cube" 
          className="absolute bottom-32 left-[5%] w-24 h-24 opacity-50" 
          delay={1}
        />
        <FloatingShape 
          variant="ring" 
          className="absolute top-40 left-[15%] w-40 h-40 opacity-40" 
          delay={2}
        />
        <FloatingShape 
          variant="pyramid" 
          className="absolute bottom-20 right-[15%] w-28 h-28 opacity-50" 
          delay={1.5}
        />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span className="text-sm font-semibold text-sky-700 tracking-wide">January 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="text-foreground">Integrated</span>
            <br />
            <span className="text-gradient">Tech & Design</span>
            <br />
            <span className="text-foreground">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-body"
          >
            Custom Software, Web Design, & Security at Scale
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="sky-gradient text-white px-8 py-6 text-lg rounded-full glow-effect hover:scale-105 transition-transform font-semibold tracking-wide"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 border-sky-300 hover:bg-sky-50 transition-all font-semibold tracking-wide"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
