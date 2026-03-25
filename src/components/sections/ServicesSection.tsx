import { motion } from "framer-motion";
import { Code2, Globe, Shield, Palette } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    features: [
      { label: "Tailored Apps", desc: "We build software that fits your business, not the other way around." },
      { label: "Efficiency", desc: "Automating manual tasks to save you time and money." },
      { label: "Technologies", desc: "Python, React, Flutter, Node.js, and more." },
    ],
    gradient: "from-sky-400 to-blue-600",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    borderAccent: "group-hover:border-sky-300/60",
  },
  {
    icon: Globe,
    title: "Website Design & UX",
    features: [
      { label: "Modern Aesthetics", desc: "Clean, professional designs that build trust." },
      { label: "Mobile-First", desc: "Fully responsive sites that look great on any device." },
      { label: "Conversion Focused", desc: "Built to turn visitors into paying customers." },
    ],
    gradient: "from-emerald-400 to-teal-600",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderAccent: "group-hover:border-emerald-300/60",
  },
  {
    icon: Shield,
    title: "Network Security",
    features: [
      { label: "Risk Mitigation", desc: "Protecting your business from data breaches and cyber threats." },
      { label: "Services Include", desc: "Firewall & VPN Setup, Vulnerability Testing, Secure Cloud Integration." },
      { label: "Peace of Mind", desc: '"Security isn\'t an option; it\'s a foundation."' },
    ],
    gradient: "from-violet-400 to-purple-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    borderAccent: "group-hover:border-violet-300/60",
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    features: [
      { label: "Visual Identity", desc: "Logos, brand guidelines, and social media kits." },
      { label: "Marketing Assets", desc: "Brochures, flyers, and digital ad creative." },
      { label: "Consistency", desc: "Ensuring your brand looks the same across all platforms." },
    ],
    gradient: "from-rose-400 to-pink-600",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    borderAccent: "group-hover:border-rose-300/60",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden section-gradient-alt noise-overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape variant="hexagon" className="absolute top-16 right-[8%] w-20 h-20 opacity-25" delay={0} />
        <FloatingShape variant="sphere" className="absolute bottom-32 left-[5%] w-24 h-24 opacity-20" delay={1.5} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            Comprehensive solutions tailored to elevate your business to new heights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className={`group ${service.borderAccent}`}
            >
              <div className="glass-card-elevated rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden">
                {/* Subtle gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-6">{service.title}</h3>
                  
                  <div className="space-y-4">
                    {service.features.map((feature) => (
                      <div key={feature.label} className="border-l-2 border-border pl-4 hover:border-primary/50 transition-colors duration-300">
                        <h4 className="font-display font-semibold text-foreground mb-0.5 text-sm">{feature.label}</h4>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
