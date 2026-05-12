import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Handshake,
  ClipboardList,
  Lightbulb,
  PenTool,
  Layers,
  Code2,
  Users,
  ShieldCheck,
  Rocket,
  HeartHandshake,
} from "lucide-react";

interface JourneySlide {
  step: string;
  phase: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: typeof Sparkles;
  accent: string;
}

const slides: JourneySlide[] = [
  {
    step: "01",
    phase: "Connect",
    title: "We meet & listen.",
    desc: "Every project starts with a conversation. We understand your vision, business, and audience before writing a single line of code.",
    bullets: ["Discovery call", "Brand & goals workshop", "Free consultation"],
    icon: Handshake,
    accent: "from-sky-400 to-cyan-300",
  },
  {
    step: "02",
    phase: "Requirements",
    title: "Mapping every need.",
    desc: "We translate your ideas into a clear, prioritized requirements blueprint — features, flows, integrations, and success metrics.",
    bullets: ["Feature scoping", "User journey mapping", "Tech stack planning"],
    icon: ClipboardList,
    accent: "from-sky-500 to-blue-400",
  },
  {
    step: "03",
    phase: "Strategy",
    title: "Crafting the roadmap.",
    desc: "A clear plan with timelines, milestones, and deliverables — so you always know what's next and when.",
    bullets: ["Project roadmap", "Milestone planning", "Transparent timelines"],
    icon: Lightbulb,
    accent: "from-blue-400 to-sky-300",
  },
  {
    step: "04",
    phase: "Design",
    title: "Designing the experience.",
    desc: "Wireframes evolve into elegant, on-brand interfaces. Pixel-perfect, responsive, and built around how your users actually think.",
    bullets: ["UI / UX design", "Brand-aligned visuals", "Interactive prototypes"],
    icon: PenTool,
    accent: "from-sky-300 to-white",
  },
  {
    step: "05",
    phase: "Architecture",
    title: "Engineering the foundation.",
    desc: "We architect scalable, secure systems — clean code, modular structure, and infrastructure that grows with you.",
    bullets: ["Scalable architecture", "Database design", "API planning"],
    icon: Layers,
    accent: "from-cyan-400 to-sky-300",
  },
  {
    step: "06",
    phase: "Development",
    title: "Building with precision.",
    desc: "Our engineers bring designs to life with modern frameworks, test coverage, and obsessive attention to performance.",
    bullets: ["Frontend & backend", "Mobile & web", "Performance-first code"],
    icon: Code2,
    accent: "from-sky-400 to-blue-500",
  },
  {
    step: "07",
    phase: "Team Collaboration",
    title: "One team, your team.",
    desc: "Designers, developers, and project leads work in lock-step with you. Weekly demos, shared boards, and instant feedback loops.",
    bullets: ["Weekly demos", "Shared task boards", "Always-open channel"],
    icon: Users,
    accent: "from-blue-400 to-sky-400",
  },
  {
    step: "08",
    phase: "Quality & Security",
    title: "Tested. Hardened. Trusted.",
    desc: "Every release passes through rigorous QA, security checks, and real-device testing — so what ships is what you'd be proud of.",
    bullets: ["QA & device testing", "Security audits", "Performance benchmarks"],
    icon: ShieldCheck,
    accent: "from-cyan-300 to-sky-400",
  },
  {
    step: "09",
    phase: "Deployment",
    title: "Launch, smooth and sure.",
    desc: "From staging to production — domains, hosting, SSL, monitoring — we handle every detail of going live.",
    bullets: ["Cloud deployment", "Domain & SSL setup", "Zero-downtime launch"],
    icon: Rocket,
    accent: "from-sky-300 to-cyan-400",
  },
  {
    step: "10",
    phase: "Support & Growth",
    title: "We stay by your side.",
    desc: "Post-launch isn't goodbye. Updates, monitoring, and growth roadmaps keep your product sharp, secure, and ahead of the curve.",
    bullets: ["Ongoing support", "Performance monitoring", "Growth roadmap"],
    icon: HeartHandshake,
    accent: "from-sky-400 to-white",
  },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShowcaseCarousel = ({ open, onOpenChange }: Props) => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 border-white/10 bg-[#020617]/95 backdrop-blur-2xl overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[110px] opacity-40"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.5), transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full blur-[110px] opacity-30"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.4), transparent 70%)" }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
          }} />
        </div>

        <div className="relative z-10 p-6 md:p-10">
          <div className="flex items-center gap-2.5 mb-2">
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-sky-200/80 font-display font-semibold">
              Discover Auralystic
            </span>
          </div>
          <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Our <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#7dd3fc,#ffffff)" }}>10-step</span> client journey
          </DialogTitle>
          <DialogDescription className="text-sky-100/70 mt-2 font-body">
            From the first hello to launch and beyond — here's exactly how we work with you.
          </DialogDescription>

          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            plugins={[autoplay.current]}
            className="mt-8"
          >
            <CarouselContent>
              {slides.map((slide, i) => {
                const Icon = slide.icon;
                const isActive = current === i;
                return (
                  <CarouselItem key={i}>
                    <motion.div
                      initial={false}
                      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.97 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative rounded-2xl overflow-hidden border border-white/10"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(12,74,110,0.55), rgba(2,6,23,0.85))",
                        boxShadow: "0 30px 80px -20px rgba(14,165,233,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
                      }}
                    >
                      {/* Accent corner glow */}
                      <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[80px] opacity-40 bg-gradient-to-br ${slide.accent}`} />

                      <div className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-7 md:p-12 min-h-[440px] md:min-h-[460px]">
                        {/* Icon column */}
                        <motion.div
                          key={`icon-${i}-${isActive}`}
                          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                          animate={isActive ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0.6 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="flex md:flex-col items-center md:items-start gap-4"
                        >
                          <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${slide.accent} shadow-[0_20px_50px_-12px_rgba(56,189,248,0.6)]`}>
                            <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#020617]" strokeWidth={2.2} />
                          </div>
                          <div className="text-left md:text-left">
                            <div className="text-[10px] tracking-[0.3em] uppercase text-sky-200/70 font-display font-semibold">Step</div>
                            <div className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent"
                              style={{ backgroundImage: "linear-gradient(135deg,#7dd3fc,#ffffff)" }}>
                              {slide.step}
                            </div>
                          </div>
                        </motion.div>

                        {/* Content column */}
                        <div className="flex flex-col justify-center">
                          <motion.span
                            key={`phase-${i}-${isActive}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.7 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="inline-block self-start text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-sky-400/15 text-sky-200 border border-sky-400/30 font-display font-semibold mb-4"
                          >
                            {slide.phase}
                          </motion.span>
                          <motion.h3
                            key={`title-${i}-${isActive}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.8 }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight mb-4"
                          >
                            {slide.title}
                          </motion.h3>
                          <motion.p
                            key={`desc-${i}-${isActive}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.7 }}
                            transition={{ duration: 0.55, delay: 0.18 }}
                            className="text-sm md:text-base text-sky-100/80 font-body leading-relaxed mb-6 max-w-xl"
                          >
                            {slide.desc}
                          </motion.p>
                          <ul className="space-y-2.5">
                            {slide.bullets.map((b, bi) => (
                              <motion.li
                                key={`${i}-${bi}-${isActive}`}
                                initial={{ opacity: 0, x: -12 }}
                                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.6 }}
                                transition={{ duration: 0.4, delay: 0.25 + bi * 0.08 }}
                                className="flex items-center gap-3 text-sm md:text-base text-white/90 font-body"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${slide.accent}`} />
                                {b}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Step counter watermark */}
                        <div className="absolute bottom-4 right-6 text-xs text-white/40 font-body tracking-wider">
                          {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="right-2 md:-right-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>

          {/* Progress dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to step ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === i ? "w-8 bg-sky-300" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowcaseCarousel;
