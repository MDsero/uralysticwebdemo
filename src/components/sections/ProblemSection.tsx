import { motion } from "framer-motion";
import { DollarSign, Puzzle, Zap } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";

const problems = [
  {
    icon: DollarSign,
    title: "High Costs",
    description: "Traditional agencies charge premium prices that small to mid-sized businesses can't afford.",
    color: "from-rose-400 to-rose-600",
  },
  {
    icon: Puzzle,
    title: "Fragmented Services",
    description: "Clients have to hire one person for design, another for coding, and another for security.",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Zap,
    title: "Complexity",
    description: "Technology is moving fast, and businesses are being left behind due to technical barriers.",
    color: "from-violet-400 to-violet-600",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-100 rounded-full blur-3xl" />
      </div>
      
      <FloatingShape 
        variant="ring" 
        className="absolute top-20 right-10 w-20 h-20 opacity-30" 
        delay={0}
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
            THE CHALLENGE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The <span className="text-gradient">Problem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Businesses face overwhelming obstacles when trying to establish their digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-3d">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
