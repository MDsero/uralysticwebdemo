import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Building2, Smartphone, Network, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

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

interface ShowcaseItem {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  icon: typeof Smartphone;
  shape: "sphere" | "hexagon" | "ring" | "torus" | "pyramid";
}

const items: ShowcaseItem[] = [
  {
    image: hospitalWebsite,
    alt: "Hospital website demo with appointment booking and doctor profile sections",
    eyebrow: "Hospital Website Demo",
    title: "Hospital website, ready first.",
    description:
      "A clean healthcare website demo with appointment booking, doctor profiles, service pages, and a professional corporate feel.",
    tags: ["Hospital Website", "Appointments", "Doctor Profiles"],
    icon: Building2,
    shape: "hexagon",
  },
  {
    image: showcaseApp,
    alt: "Mobile application and web dashboard mockup",
    eyebrow: "Mobile & Digital Platforms",
    title: "Apps that feel effortless.",
    description:
      "Native iOS & Android applications, responsive dashboards, and digital products engineered for performance, beauty, and scale.",
    tags: ["Mobile Apps", "Web Platforms", "UI / UX"],
    icon: Smartphone,
    shape: "sphere",
  },
  {
    image: showcaseNetworking,
    alt: "Engineers working in a modern server and networking room",
    eyebrow: "Networking & Infrastructure",
    title: "Enterprise-grade infrastructure.",
    description:
      "Secure server architecture, structured cabling, and intelligent network design built to keep your business running at full speed.",
    tags: ["Network Setup", "Server Architecture", "Cybersecurity"],
    icon: Network,
    shape: "hexagon",
  },
  {
    image: showcaseConference,
    alt: "Modern conference stage with attendees",
    eyebrow: "Enterprise Software",
    title: "Built for healthcare & events.",
    description:
      "Medical Conference Software, Attendee Registration Management, HIMS (Hospital Information) and HRMS — complete enterprise digital ecosystems with full branding & design support.",
    tags: ["Conference SW", "Registration", "HIMS", "HRMS", "Branding"],
    icon: Calendar,
    shape: "ring",
  },
];

const ShowcaseRow = ({ item, index }: { item: ShowcaseItem; index: number }) => {
  const reversed = index % 2 === 1;
  const Icon = item.icon;

  return (
    <div
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative group"
      >
        {/* Outer glow */}
        <div className="absolute -inset-4 sky-gradient rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500" />

        {/* Frame */}
        <div
          className="relative rounded-[1.75rem] p-2 backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(186,230,253,0.4))",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow:
              "0 30px 80px -20px rgba(14,165,233,0.4), 0 8px 24px -8px rgba(14,165,233,0.2), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <div className="relative overflow-hidden rounded-[1.4rem]">
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(14,165,233,0.08) 100%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[1.4rem]" />
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-6">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-xs font-display font-semibold text-primary tracking-[0.2em] uppercase">
            {item.eyebrow}
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 leading-[1.1] tracking-tight">
          <span className="text-gradient">{item.title}</span>
        </h3>
        <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-7 max-w-xl">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-display font-semibold text-primary bg-white/60 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-white/80 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

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
              <img
                src={site.image}
                alt={`${site.title} demo site`}
                className="w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-[#020617]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <motion.span
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-display font-semibold text-white bg-white/15 backdrop-blur-md border border-white/30 mb-3 tracking-[0.2em] uppercase"
                >
                  {site.tag}
                </motion.span>
                <motion.h4
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.22 }}
                  className="text-white font-display font-bold text-2xl md:text-4xl leading-tight drop-shadow-lg"
                >
                  {site.title}
                </motion.h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
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

      {/* Dots */}
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

const ShowcaseSection = () => {
  return (
    <section className="relaxed-motion -mt-20 pt-10 pb-24 md:-mt-24 md:pt-14 md:pb-32 relative overflow-hidden section-gradient noise-overlay">
      {/* Ambient orbs */}
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
        {/* Animated site gallery */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase"
          >
            Site Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 tracking-tight leading-[1.05]"
          >
            Websites we craft <span className="text-gradient">across industries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground font-body"
          >
            A living gallery of demo sites — hospitals, fashion, SaaS, fintech, travel,
            and more — each one tailored to the brand.
          </motion.p>
        </div>

        <SiteSlider />


        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <span className="inline-block px-5 py-2 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 tracking-tight leading-[1.05]">
            From mobile apps to <span className="text-gradient">enterprise platforms</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body">
            Engineered with precision, designed with intention. A glimpse into the digital
            ecosystems we craft for ambitious teams.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <ShowcaseRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
