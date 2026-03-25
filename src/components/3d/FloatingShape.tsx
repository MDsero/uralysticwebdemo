import { motion } from "framer-motion";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "sphere" | "cube" | "ring" | "pyramid" | "torus" | "hexagon";
}

const FloatingShape = ({ 
  className = "", 
  delay = 0, 
  duration = 8,
  variant = "sphere" 
}: FloatingShapeProps) => {
  const shapes = {
    sphere: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full" 
          style={{ 
            background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), rgba(186,230,253,0.6) 40%, rgba(14,165,233,0.4) 70%, rgba(2,132,199,0.3))",
            boxShadow: "0 8px 32px rgba(14,165,233,0.2), inset 0 -4px 12px rgba(14,165,233,0.15)"
          }} 
        />
        <div className="absolute top-[12%] left-[22%] w-[30%] h-[18%] rounded-full bg-white/70 blur-[6px] rotate-[-20deg]" />
      </div>
    ),
    cube: (
      <div className="relative w-full h-full" style={{ perspective: "200px" }}>
        <div className="absolute inset-[10%] rounded-2xl"
          style={{ 
            background: "linear-gradient(135deg, rgba(186,230,253,0.8), rgba(14,165,233,0.5))",
            transform: "rotateX(-15deg) rotateY(25deg)",
            boxShadow: "0 12px 40px rgba(14,165,233,0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.4)"
          }} 
        />
      </div>
    ),
    ring: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-[85%] h-[85%] rounded-full" 
          style={{ 
            border: "6px solid rgba(14,165,233,0.3)",
            boxShadow: "0 0 30px rgba(14,165,233,0.15), inset 0 0 30px rgba(14,165,233,0.08)",
            backdropFilter: "blur(4px)"
          }} 
        />
        <div className="absolute w-[60%] h-[60%] rounded-full"
          style={{ border: "3px solid rgba(14,165,233,0.15)" }}
        />
      </div>
    ),
    pyramid: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <defs>
            <linearGradient id="pyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(186,230,253,0.9)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.6)" />
            </linearGradient>
            <linearGradient id="pyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(224,242,254,0.9)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.5)" />
            </linearGradient>
          </defs>
          <polygon points="50,12 88,82 50,62" fill="url(#pyGrad1)" />
          <polygon points="50,12 12,82 50,62" fill="url(#pyGrad2)" />
          <polygon points="12,82 88,82 50,62" fill="rgba(14,165,233,0.35)" />
        </svg>
      </div>
    ),
    torus: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-[80%] h-[50%] rounded-[50%]"
          style={{
            border: "8px solid rgba(14,165,233,0.25)",
            boxShadow: "0 0 40px rgba(14,165,233,0.1), inset 0 -4px 12px rgba(14,165,233,0.1)",
            transform: "rotateX(60deg)",
          }}
        />
      </div>
    ),
    hexagon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] drop-shadow-lg">
          <defs>
            <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(186,230,253,0.8)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.4)" />
            </linearGradient>
          </defs>
          <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="url(#hexGrad)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  };

  return (
    <motion.div
      className={className}
      animate={{
        y: [-12, 12, -12],
        rotateZ: [0, 3, -3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {shapes[variant]}
    </motion.div>
  );
};

export default FloatingShape;
