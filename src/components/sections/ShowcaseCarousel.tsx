import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import s0 from "@/assets/showcase/site-00-hospital.jpg";
import s1 from "@/assets/showcase/site-01-fashion.jpg";
import s2 from "@/assets/showcase/site-02-saas.jpg";
import s3 from "@/assets/showcase/site-03-portfolio.jpg";
import s4 from "@/assets/showcase/site-04-realestate.jpg";
import s5 from "@/assets/showcase/site-05-fintech.jpg";
import s6 from "@/assets/showcase/site-06-restaurant.jpg";
import s7 from "@/assets/showcase/site-07-ai.jpg";
import s8 from "@/assets/showcase/site-08-travel.jpg";
import s9 from "@/assets/showcase/site-09-photographer.jpg";
import s10 from "@/assets/showcase/site-10-medical.jpg";

const slides = [
  { img: s0, title: "Hospital Website", tag: "Healthcare", desc: "Modern hospital website with appointment booking, doctor profiles, and service catalog." },
  { img: s1, title: "Editorial Fashion Store", tag: "E-commerce", desc: "Minimal luxury commerce with editorial typography and product storytelling." },
  { img: s2, title: "Analytics SaaS Dashboard", tag: "SaaS · Fintech", desc: "Dark-mode glassmorphism dashboard with realtime charts and KPI cards." },
  { img: s3, title: "Creative Studio Portfolio", tag: "Agency", desc: "Bold serif headlines with asymmetric editorial case studies." },
  { img: s4, title: "Luxury Real Estate", tag: "Real Estate", desc: "Cinematic property hero with elegant search and curated listings." },
  { img: s5, title: "Mobile Banking App", tag: "Fintech · Mobile", desc: "Floating 3D phone mockups for a premium banking product launch." },
  { img: s6, title: "Fine Dining Restaurant", tag: "Hospitality", desc: "Cinematic food photography with elegant menu and reservation booking." },
  { img: s7, title: "AI Startup Landing", tag: "AI · Tech", desc: "Futuristic gradient hero with glassmorphism feature cards." },
  { img: s8, title: "Luxury Travel Booking", tag: "Travel", desc: "Stunning destinations with elegant booking and curated trips." },
  { img: s9, title: "Photographer Portfolio", tag: "Creative", desc: "Full-bleed black & white hero with masonry project grid." },
  { img: s10, title: "Healthcare Platform", tag: "Medical", desc: "Clean, trustworthy doctor booking and service catalog." },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShowcaseCarousel = ({ open, onOpenChange }: Props) => {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
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
      <DialogContent className="max-w-6xl w-[95vw] p-0 border-white/10 bg-[#020617]/95 backdrop-blur-2xl overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.5), transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.4), transparent 70%)" }} />
        </div>

        <div className="relative z-10 p-6 md:p-10">
          <div className="flex items-center gap-2.5 mb-2">
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-sky-200/80 font-display font-semibold">
              Design Showcase
            </span>
          </div>
          <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            10 Trending <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#7dd3fc,#ffffff)" }}>Concepts</span> We Build
          </DialogTitle>
          <DialogDescription className="text-sky-100/70 mt-2 font-body">
            A glimpse into the kind of premium websites & portfolios our team designs.
          </DialogDescription>

          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            plugins={[autoplay.current]}
            className="mt-8"
          >
            <CarouselContent>
              {slides.map((slide, i) => {
                const distance = Math.min(
                  Math.abs(i - current),
                  slides.length - Math.abs(i - current)
                );
                const shouldRender = distance <= 1;
                return (
                <CarouselItem key={i}>
                  <div
                    className="relative rounded-2xl overflow-hidden border border-white/10 group bg-[#0b1224]"
                    style={{ boxShadow: "0 30px 80px -20px rgba(14,165,233,0.35)" }}
                  >
                    <div className="aspect-[16/10] w-full">
                      {shouldRender && (
                        <img
                          src={slide.img}
                          alt={slide.title}
                          width={1280}
                          height={800}
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={i === current ? "high" : "low"}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] animate-fade-in"
                        />
                      )}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-sky-400/15 text-sky-200 border border-sky-400/30 font-display font-semibold">
                          {slide.tag}
                        </span>
                        <span className="text-xs text-white/50 font-body">
                          {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white">{slide.title}</h3>
                      <p className="text-sm text-sky-100/70 mt-1 font-body max-w-2xl">{slide.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="right-2 md:-right-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
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
