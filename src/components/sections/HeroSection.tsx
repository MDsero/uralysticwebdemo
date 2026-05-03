import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShape from "@/components/3d/FloatingShape";
import { useRef, useEffect } from "react";
import hero3DScene from "@/assets/hero-3d-scene.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll parallax — different speeds per layer create depth
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const layer1X = useTransform(sx, [-1, 1], [-25, 25]);
  const layer1Y = useTransform(sy, [-1, 1], [-15, 15]);
  const layer2X = useTransform(sx, [-1, 1], [-15, 15]);
  const layer2Y = useTransform(sy, [-1, 1], [-10, 10]);
  const layer3X = useTransform(sx, [-1, 1], [-8, 8]);
  const layer3Y = useTransform(sy, [-1, 1], [-5, 5]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* LAYER 0 — Deep 3D scene background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={hero3DScene}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        {/* Color grade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/30 to-[#020617]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 via-transparent to-[#020617]/60" />
        {/* Cinematic vignette */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 0%, rgba(2,6,23,0.85) 100%)"
        }} />
      </motion.div>

      {/* LAYER 1 — Far ambient orbs (slowest) */}
      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute top-[15%] right-[20%] w-[600px] h-[600px] rounded-full blur-[140px] animate-pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)" }} />
          <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.3), transparent 70%)", animationDelay: "2s" }} />
        </motion.div>
      </motion.div>

      {/* LAYER 2 — Mid floating shapes */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: midY }} className="absolute inset-0">
          <FloatingShape variant="hexagon" className="absolute top-[18%] right-[8%] w-32 h-32 opacity-70" delay={0} />
          <FloatingShape variant="ring" className="absolute bottom-[20%] left-[6%] w-44 h-44 opacity-50" delay={1.5} />
          <FloatingShape variant="cube" className="absolute top-[60%] right-[28%] w-20 h-20 opacity-60" delay={2.2} />
          <FloatingShape variant="sphere" className="absolute top-[12%] left-[18%] w-24 h-24 opacity-50" delay={0.8} />
        </motion.div>
      </motion.div>

      {/* LAYER 3 — Foreground accents (closest, fastest) */}
      <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: fgY }} className="absolute inset-0">
          <FloatingShape variant="pyramid" className="absolute bottom-[12%] right-[10%] w-28 h-28 opacity-90" delay={1} />
          <FloatingShape variant="torus" className="absolute top-[28%] left-[8%] w-20 h-20 opacity-70" delay={2.8} />
          <FloatingShape variant="sphere" className="absolute bottom-[28%] right-[42%] w-12 h-12 opacity-80" delay={3.5} />
        </motion.div>
      </motion.div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)"
        }}
      />

      {/* CONTENT LAYER */}
      <motion.div style={{ y: contentY, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10 backdrop-blur-xl border border-white/15"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span className="text-sm font-semibold text-sky-100 tracking-widest uppercase font-display">
              Simply Advanced · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-[5.75rem] font-display font-bold mb-8 leading-[1.02] tracking-tight"
            style={{ textShadow: "0 4px 40px rgba(56,189,248,0.3)" }}
          >
            <span className="text-white">The Future of</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #7dd3fc 0%, #38bdf8 40%, #ffffff 100%)" }}
            >
              Tech & Design
            </span>
            <br />
            <span className="text-white">Built on Auralystic</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-sky-100/80 mb-14 max-w-2xl mx-auto font-body leading-relaxed"
          >
            Custom software, immersive web design, and enterprise-grade security —
            <span className="text-white font-medium"> engineered with precision.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="px-9 py-6 text-base rounded-full hover:scale-105 active:scale-[0.98] transition-all duration-300 font-display font-semibold tracking-wide text-[#020617] shadow-[0_0_40px_rgba(56,189,248,0.5)]"
              style={{ background: "linear-gradient(135deg, #e0f2fe, #7dd3fc)" }}
            >
              Discover Auralystic
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-9 py-6 text-base rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-300 font-display font-semibold tracking-wide"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Our Story
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
              className="w-6 h-10 rounded-full border-2 border-white/25 mx-auto flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-2.5 rounded-full bg-sky-300" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
