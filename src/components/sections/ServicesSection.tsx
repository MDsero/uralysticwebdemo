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
    bgGlow: "bg-sky-400/20",
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
    bgGlow: "bg-emerald-400/20",
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
    bgGlow: "bg-violet-400/20",
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
    bgGlow: "bg-rose-400/20",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <FloatingShape 
        variant="cube" 
        className="absolute top-20 right-20 w-20 h-20 opacity-30" 
        delay={0}
      />
      <FloatingShape 
        variant="sphere" 
        className="absolute bottom-40 left-10 w-28 h-28 opacity-25" 
        delay={1.5}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-6">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to elevate your business to new heights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 ${service.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative glass-card rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                
                <div className="space-y-4">
                  {service.features.map((feature) => (
                    <div key={feature.label} className="border-l-2 border-sky-200 pl-4 hover:border-sky-500 transition-colors">
                      <h4 className="font-semibold text-foreground mb-1">{feature.label}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  ))}
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
