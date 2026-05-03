import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Network, Calendar } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";
import showcaseApp from "@/assets/showcase-app.png";
import showcaseNetworking from "@/assets/showcase-networking.png";
import showcaseConference from "@/assets/showcase-conference.png";

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const reversed = index % 2 === 1;
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image frame */}
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <FloatingShape
          variant={item.shape}
          className={`absolute -z-10 w-40 h-40 opacity-40 ${
            reversed ? "-right-8 -top-8" : "-left-8 -top-8"
          }`}
          delay={index * 0.5}
        />
        <FloatingShape
          variant="torus"
          className={`absolute -z-10 w-24 h-24 opacity-30 ${
            reversed ? "-left-6 -bottom-6" : "-right-6 -bottom-6"
          }`}
          delay={index * 0.5 + 1}
        />

        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.03, rotateY: reversed ? -4 : 4, rotateX: -2 }}
          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
          className="relative group"
        >
          {/* Outer glow */}
          <div className="absolute -inset-4 sky-gradient rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />

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
                className="w-full h-auto block transition-transform duration-[1500ms] ease-out group-hover:scale-[1.06]"
              />
              {/* Gloss highlight */}
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
      </motion.div>

      {/* Text */}
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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

const ShowcaseSection = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden section-gradient noise-overlay">
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full sky-gradient text-white text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-[1.05]">
            From mobile apps to <span className="text-gradient">enterprise platforms</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Engineered with precision, designed with intention. A glimpse into the digital
            ecosystems we craft for ambitious teams.
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-40 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <ShowcaseRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
