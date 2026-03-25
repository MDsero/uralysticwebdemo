import { motion } from "framer-motion";
import { DollarSign, Puzzle, Zap } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";

const problems = [
  {
    icon: DollarSign,
    title: "High Costs",
    description: "Traditional agencies charge premium prices that small to mid-sized businesses can't afford.",
    accent: "from-rose-400 to-rose-500",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    number: "01",
  },
  {
    icon: Puzzle,
    title: "Fragmented Services",
    description: "Clients have to hire one person for design, another for coding, and another for security.",
    accent: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    number: "02",
  },
  {
    icon: Zap,
    title: "Complexity",
    description: "Technology is moving fast, and businesses are being left behind due to technical barriers.",
    accent: "from-violet-400 to-purple-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    number: "03",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden section-gradient-alt noise-overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape variant="ring" className="absolute top-16 right-[8%] w-20 h-20 opacity-25" delay={0} />
        <FloatingShape variant="cube" className="absolute bottom-20 left-[5%] w-16 h-16 opacity-20" delay={1.5} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-xs font-display font-semibold mb-6 tracking-[0.2em] uppercase"
          >
            The Challenge
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="text-gradient">Problem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Businesses face overwhelming obstacles when trying to establish their digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card-elevated rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden">
                {/* Gradient line at top */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${problem.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Number watermark */}
                <span className="absolute top-4 right-6 text-6xl font-display font-bold text-muted/60 select-none">{problem.number}</span>
                
                <div className={`w-14 h-14 rounded-2xl ${problem.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <problem.icon className={`w-7 h-7 ${problem.iconColor}`} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
