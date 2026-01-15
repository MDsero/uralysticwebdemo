import { motion } from "framer-motion";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "sphere" | "cube" | "ring" | "pyramid";
}

const FloatingShape = ({ 
  className = "", 
  delay = 0, 
  duration = 6,
  variant = "sphere" 
}: FloatingShapeProps) => {
  const shapes = {
    sphere: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 via-sky-400 to-sky-600 opacity-90" />
        <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-white/80 via-sky-100/50 to-transparent" />
        <div className="absolute top-[15%] left-[20%] w-[25%] h-[15%] rounded-full bg-white/60 blur-sm" />
      </div>
    ),
    cube: (
      <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d", transform: "rotateX(-20deg) rotateY(30deg)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-sky-500 rounded-2xl shadow-lg" 
             style={{ transform: "translateZ(30px)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl"
             style={{ transform: "rotateY(90deg) translateZ(30px)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-sky-400 rounded-2xl"
             style={{ transform: "rotateX(90deg) translateZ(30px)" }} />
      </div>
    ),
    ring: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-full border-[12px] border-sky-400/60 shadow-lg" 
             style={{ boxShadow: "0 0 40px rgba(14, 165, 233, 0.4), inset 0 0 40px rgba(14, 165, 233, 0.2)" }} />
        <div className="absolute w-[70%] h-[70%] rounded-full border-[8px] border-sky-300/40" />
      </div>
    ),
    pyramid: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="pyramidGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="pyramidGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <polygon points="50,10 90,85 50,65" fill="url(#pyramidGrad1)" />
          <polygon points="50,10 10,85 50,65" fill="url(#pyramidGrad2)" />
          <polygon points="10,85 90,85 50,65" fill="#0ea5e9" opacity="0.8" />
        </svg>
      </div>
    ),
  };

  return (
    <motion.div
      className={`${className}`}
      animate={{
        y: [-10, 10, -10],
        rotateZ: [0, 5, -5, 0],
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
