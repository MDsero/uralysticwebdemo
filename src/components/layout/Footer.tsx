import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import auraLogo from "@/assets/auralogo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(220 25% 8%) 0%, hsl(220 30% 5%) 100%)" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/6 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <img src={auraLogo} alt="Auralystic" className="h-10 w-auto" />
              <div>
                <span className="text-xl font-display font-bold text-white">Auralystic</span>
                <span className="block text-[10px] text-slate-500 tracking-[0.2em] uppercase font-display">Simply Advanced</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm font-body text-sm">
              Your all-in-one tech partner for custom software, web design, and security solutions. Building digital excellence at scale.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/30 flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-primary"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-display font-semibold mb-5 text-white tracking-wider uppercase">Services</h4>
            <ul className="space-y-3 text-slate-400 font-body text-sm">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Software Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Web Design & UX</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Network Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Graphic Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-display font-semibold mb-5 text-white tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-body text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:auraorganising@gmail.com" className="hover:text-primary transition-colors duration-300">
                  auraorganising@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+9609467845" className="hover:text-primary transition-colors duration-300">
                  +960 9467845
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-body">
            © 2026 Auralystic. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600 font-body">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
