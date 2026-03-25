import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import auraLogo from "@/assets/auralogo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.6, 0.9]);
  const blur = useTransform(scrollY, [0, 100], [12, 24]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        style={{
          // @ts-ignore
          "--bg-opacity": bgOpacity,
          "--blur": blur,
        } as any}
      >
        <div className="rounded-2xl px-5 py-3 flex items-center justify-between border border-white/50"
          style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)"
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <img src={auraLogo} alt="Auralystic" className="h-9 w-auto" />
            <div className="hidden sm:block">
              <span className="text-lg font-display font-bold text-foreground leading-none">Auralystic</span>
              <span className="block text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-display font-medium mt-0.5">Simply Advanced</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-display font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="sky-gradient text-white rounded-full px-6 py-2.5 hover:scale-105 active:scale-[0.98] transition-all duration-300 font-display font-semibold tracking-wide text-sm shadow-md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 rounded-2xl p-6 border border-white/50"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 8px 40px -8px rgba(0,0,0,0.1)"
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-display font-medium py-3 px-3 rounded-xl hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}
              <Button className="sky-gradient text-white rounded-full mt-4 font-display font-semibold shadow-md">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
