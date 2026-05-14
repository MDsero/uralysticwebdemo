import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Smartphone,
  Network,
  Calendar,
  Globe,
  Palette,
  ShieldCheck,
  Cloud,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import hospitalWebsite from "@/assets/showcase/site-00-hospital.jpg";
import siteFashion from "@/assets/showcase/site-01-fashion.jpg";
import siteSaas from "@/assets/showcase/site-02-saas.jpg";
import sitePortfolio from "@/assets/showcase/site-03-portfolio.jpg";
import siteRealestate from "@/assets/showcase/site-04-realestate.jpg";
import siteFintech from "@/assets/showcase/site-05-fintech.jpg";
import siteRestaurant from "@/assets/showcase/site-06-restaurant.jpg";
import siteAi from "@/assets/showcase/site-07-ai.jpg";
import siteTravel from "@/assets/showcase/site-08-travel.jpg";
import sitePhotographer from "@/assets/showcase/site-09-photographer.jpg";
import siteMedical from "@/assets/showcase/site-10-medical.jpg";
import showcaseApp from "@/assets/showcase-app.png";
import showcaseNetworking from "@/assets/showcase-networking.png";
import showcaseConference from "@/assets/showcase-conference.png";

const gallerySites = [
  { image: hospitalWebsite, title: "Hospital Website", tag: "Healthcare" },
  { image: siteFashion, title: "Fashion Boutique", tag: "E-commerce" },
  { image: siteSaas, title: "SaaS Platform", tag: "Software" },
  { image: sitePortfolio, title: "Creative Portfolio", tag: "Personal Brand" },
  { image: siteRealestate, title: "Real Estate", tag: "Property" },
  { image: siteFintech, title: "Fintech Dashboard", tag: "Finance" },
  { image: siteRestaurant, title: "Restaurant", tag: "Hospitality" },
  { image: siteAi, title: "AI Product", tag: "AI / ML" },
  { image: siteTravel, title: "Travel Agency", tag: "Tourism" },
  { image: sitePhotographer, title: "Photographer", tag: "Studio" },
  { image: siteMedical, title: "Medical Clinic", tag: "Healthcare" },
];

interface ServiceItem {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  features: string[];
  icon: typeof Smartphone;
  // Luxury palette tones
  bg: string;          // outer card bg
  accent: string;      // accent text/border
  glow: string;        // ambient glow color
}

const services: ServiceItem[] = [
  {
    image: showcaseApp,
    eyebrow: "Mobile & Digital Platforms",
    title: "Apps that feel effortless.",
    description:
      "Native iOS & Android applications, responsive dashboards, and refined digital products engineered for performance, beauty, and scale.",
    detail:
      "From first sketch to App Store launch, we build apps that feel inevitable — buttery 60fps interactions, offline-ready architectures, and design systems that scale with your brand. Every gesture, every transition, every empty state is considered.",
    features: ["Native iOS & Android", "Responsive web apps", "Custom UI/UX systems", "Performance budgets"],
    icon: Smartphone,
    bg: "from-[#0b1733] via-[#10204d] to-[#0b1733]",
    accent: "#7dd3fc",
    glow: "rgba(125,211,252,0.35)",
  },
  {
    image: showcaseNetworking,
    eyebrow: "Networking & Infrastructure",
    title: "Enterprise-grade infrastructure.",
    description:
      "Secure server architecture, structured cabling, and intelligent network design built to keep your business running at full speed.",
    detail:
      "We design networks the way architects design buildings — with intent. Redundant cores, segmented VLANs, zero-trust access, and observability baked in from day one. Your team gets stability they stop noticing, which is the highest compliment.",
    features: ["Server & rack architecture", "Structured cabling", "Firewalls & zero-trust", "24/7 monitoring"],
    icon: Network,
    bg: "from-[#1a1208] via-[#2a1c0d] to-[#1a1208]",
    accent: "#e8c07a",
    glow: "rgba(232,192,122,0.3)",
  },
  {
    image: showcaseConference,
    eyebrow: "Enterprise Software",
    title: "Built for healthcare & events.",
    description:
      "Medical Conference Software, Attendee Registration Management, HIMS and HRMS — complete enterprise digital ecosystems with branding support.",
    detail:
      "Purpose-built platforms for the moments that matter: a 5,000-attendee medical congress, a multi-hospital information system, an HR rollout across regions. We handle scale, compliance, and the unglamorous edges so your team can focus on the experience.",
    features: ["Medical conference SW", "Attendee registration", "HIMS / HRMS", "Brand & design"],
    icon: Calendar,
    bg: "from-[#0a1a14] via-[#0f2a1f] to-[#0a1a14]",
    accent: "#5cbdb9",
    glow: "rgba(92,189,185,0.3)",
  },
  {
    image: siteSaas,
    eyebrow: "Web Development",
    title: "Websites that close deals.",
    description:
      "High-conversion marketing sites, content platforms, and storefronts crafted with measurable outcomes in mind.",
    detail:
      "Lighthouse-perfect performance, SEO foundations that compound, and conversion architecture informed by real funnel data. We don't ship pages — we ship pipelines.",
    features: ["Marketing sites", "E-commerce", "CMS & headless", "SEO & analytics"],
    icon: Globe,
    bg: "from-[#1a0d2e] via-[#2a1547] to-[#1a0d2e]",
    accent: "#c9a0dc",
    glow: "rgba(201,160,220,0.3)",
  },
  {
    image: sitePortfolio,
    eyebrow: "Branding & Design",
    title: "Identities people remember.",
    description:
      "Logos, brand systems, and visual languages that give your company a presence customers can feel before they read a word.",
    detail:
      "Strategy first, then craft. We define what you stand for, then translate it into typography, color, motion, and a system your whole team can use without us in the room.",
    features: ["Logo & wordmark", "Brand guidelines", "Design systems", "Marketing collateral"],
    icon: Palette,
    bg: "from-[#1a0a14] via-[#2e0f24] to-[#1a0a14]",
    accent: "#f0a5b8",
    glow: "rgba(240,165,184,0.3)",
  },
  {
    image: siteFintech,
    eyebrow: "Cybersecurity",
    title: "Quiet, confident security.",
    description:
      "Audits, hardening, and ongoing protection for businesses that can't afford an incident — which is to say, every business.",
    detail:
      "Penetration testing, SOC2-ready posture, endpoint hardening, and incident playbooks. We find the doors before anyone else does, then we close them.",
    features: ["Security audits", "Penetration testing", "Compliance prep", "Incident response"],
    icon: ShieldCheck,
    bg: "from-[#0a1a1a] via-[#0f2828] to-[#0a1a1a]",
    accent: "#2dd4a8",
    glow: "rgba(45,212,168,0.3)",
  },
  {
    image: siteAi,
    eyebrow: "Cloud & DevOps",
    title: "Ship faster, sleep better.",
    description:
      "Cloud architecture, CI/CD pipelines, and infrastructure-as-code that turn deployments from events into routine.",
    detail:
      "AWS, Azure, GCP — we design for the platform you're on. Auto-scaling, blue-green deploys, observability dashboards, and runbooks your on-call team will actually thank you for.",
    features: ["AWS / Azure / GCP", "CI/CD pipelines", "Infrastructure-as-code", "Observability"],
    icon: Cloud,
    bg: "from-[#0d1322] via-[#141d35] to-[#0d1322]",
    accent: "#93c5fd",
    glow: "rgba(147,197,253,0.3)",
  },
  {
    image: siteAi,
    eyebrow: "AI & Automation",
    title: "AI that does the boring parts.",
    description:
      "Custom AI integrations, intelligent workflows, and automation that quietly removes hours from every week.",
    detail:
      "RAG pipelines, fine-tuned models, agentic workflows, and the unglamorous integration work that makes them actually useful inside your stack — not just impressive in a demo.",
    features: ["LLM integrations", "RAG pipelines", "Workflow automation", "Custom AI agents"],
    icon: Cpu,
    bg: "from-[#0a0f1f] via-[#10172e] to-[#0a0f1f]",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.35)",
  },
];

const SiteSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = gallerySites.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, 3500);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + total) % total);
  };

  const site = gallerySites[index];

  return (
    <div
      className="relative max-w-5xl mx-auto mb-24 md:mb-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-4 sky-gradient rounded-[2rem] opacity-20 blur-2xl" />
      <div
        className="relative rounded-[1.75rem] p-2 backdrop-blur-xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(186,230,253,0.4))",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow:
            "0 30px 80px -20px rgba(14,165,233,0.4), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        <div className="relative overflow-hidden rounded-[1.4rem] aspect-[16/9]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -direction * 80, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img src={site.image} alt={`${site.title} demo site`} className="w-full h-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-[#020617]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-display font-semibold text-white bg-white/15 backdrop-blur-md border border-white/30 mb-3 tracking-[0.2em] uppercase">
                  {site.tag}
                </span>
                <h4 className="text-white font-display font-bold text-2xl md:text-4xl leading-tight drop-shadow-lg">
                  {site.title}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center text-primary hover:bg-white hover:scale-110 transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center text-primary hover:bg-white hover:scale-110 transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {gallerySites.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-primary" : "w-1.5 bg-primary/30 hover:bg-primary/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = services.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + total) % total);
  };

  const item = services[index];
  const Icon = item.icon;

  return (
    <div
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient luxury glow */}
      <motion.div
        key={`glow-${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8 }}
        className="absolute -inset-8 rounded-[3rem] blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 50%, ${item.glow}, transparent 60%)` }}
      />

      <div
        className={`relative rounded-[2rem] overflow-hidden bg-gradient-to-br ${item.bg} border border-white/10`}
        style={{
          boxShadow: `0 40px 100px -30px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        {/* Subtle grain + grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Accent corner shimmer */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${item.glow}, transparent 70%)` }}
        />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 60 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid md:grid-cols-2 gap-0 min-h-[560px]"
          >
            {/* Image side */}
            <div className="relative overflow-hidden md:rounded-l-[2rem] aspect-[4/3] md:aspect-auto">
              <motion.img
                src={item.image}
                alt={item.title}
                initial={{ scale: 1.08 }}
                animate={{ scale: [1.08, 1.18, 1.08] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(110deg, transparent 40%, ${item.bg.includes("0b1733") ? "#0b1733" : ""}00 50%)`,
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50 md:to-transparent`} />
              {/* Floating badge on image */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: item.accent }} />
                <span className="text-[10px] font-display font-semibold text-white tracking-[0.2em] uppercase">
                  {`0${index + 1}`.slice(-2)} / {`0${total}`.slice(-2)}
                </span>
              </motion.div>
            </div>

            {/* Content side */}
            <div className="relative p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full mb-6 backdrop-blur-md border"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: `${item.accent}40`,
                }}
              >
                <Icon className="w-4 h-4" style={{ color: item.accent }} />
                <span
                  className="text-[10px] font-display font-semibold tracking-[0.25em] uppercase"
                  style={{ color: item.accent }}
                >
                  {item.eyebrow}
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.55 }}
                className="text-3xl md:text-4xl lg:text-[2.6rem] font-display font-bold mb-5 leading-[1.1] tracking-tight text-white"
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.55 }}
                className="text-base md:text-lg font-body leading-relaxed mb-5 text-white/80"
              >
                {item.description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.55 }}
                className="text-sm md:text-base font-body leading-relaxed mb-7 text-white/55 italic border-l-2 pl-4"
                style={{ borderColor: `${item.accent}80` }}
              >
                {item.detail}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.55 }}
                className="grid grid-cols-2 gap-x-4 gap-y-2.5"
              >
                {item.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm font-body text-white/85">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: item.accent, boxShadow: `0 0 8px ${item.accent}` }}
                    />
                    {f}
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous service"
        className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all z-20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next service"
        className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all z-20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Progress dots with service names */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 px-4">
        {services.map((s, i) => (
          <button
            key={s.eyebrow}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`px-3.5 py-1.5 rounded-full text-[10px] font-display font-semibold tracking-[0.15em] uppercase border transition-all duration-300 ${
              i === index
                ? "border-primary bg-primary/15 text-primary"
                : "border-primary/15 text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {s.eyebrow.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  );
};

const ShowcaseSection = () => {
  return (
    <section className="relaxed-motion -mt-20 pt-10 pb-24 md:-mt-24 md:pt-14 md:pb-32 relative overflow-hidden section-gradient noise-overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[420px] h-[420px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 -translate-y-10 md:-translate-y-12">
        {/* Site gallery slider */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <span className="inline-block px-5 py-2 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
            Site Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 tracking-tight leading-[1.05]">
            Websites we craft <span className="text-gradient">across industries</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body">
            A living gallery of demo sites — hospitals, fashion, SaaS, fintech, travel, and more — each one tailored to the brand.
          </p>
        </div>

        <SiteSlider />

        {/* Services slider — one by one luxury */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <span className="inline-block px-5 py-2 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 tracking-tight leading-[1.05]">
            Eight disciplines, <span className="text-gradient">one studio</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body">
            Move through each service, one by one — the full story behind everything we deliver.
          </p>
        </div>

        <ServiceSlider />
      </div>
    </section>
  );
};

export default ShowcaseSection;
