import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShape from "@/components/3d/FloatingShape";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg noise-overlay">
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* 3D floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape variant="sphere" className="absolute top-[15%] right-[12%] w-28 h-28 opacity-50" delay={0} />
        <FloatingShape variant="hexagon" className="absolute bottom-[25%] left-[6%] w-20 h-20 opacity-40" delay={1} />
        <FloatingShape variant="ring" className="absolute top-[30%] left-[12%] w-36 h-36 opacity-30" delay={2} />
        <FloatingShape variant="pyramid" className="absolute bottom-[15%] right-[18%] w-24 h-24 opacity-40" delay={1.5} />
        <FloatingShape variant="torus" className="absolute top-[60%] right-[35%] w-16 h-16 opacity-25" delay={3} />
        <FloatingShape variant="cube" className="absolute top-[20%] left-[35%] w-14 h-14 opacity-20" delay={2.5} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card mb-10"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-widest uppercase font-display">January 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold mb-8 leading-[1.05] tracking-tight"
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
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl mx-auto font-body leading-relaxed"
          >
            Custom Software, Web Design, & Security at Scale — 
            <span className="text-foreground font-medium"> crafted with precision by Auralystic.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="sky-gradient text-white px-9 py-6 text-base rounded-full glow-effect hover:scale-105 active:scale-[0.98] transition-all duration-300 font-display font-semibold tracking-wide shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-9 py-6 text-base rounded-full border-2 border-primary/30 bg-white/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 font-display font-semibold tracking-wide"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-2.5 rounded-full bg-primary/50" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
