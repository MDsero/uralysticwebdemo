import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import auraLogo from "@/assets/auralogo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={auraLogo} alt="Auralystic" className="h-12 w-auto" />
              <div>
                <span className="text-2xl font-display font-bold">Auralystic</span>
                <span className="block text-xs text-slate-400 tracking-widest uppercase">Simply Advanced</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md font-body">
              Your all-in-one tech partner for custom software, web design, and security solutions. Building digital excellence at scale.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-400 font-body">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Web Design & UX</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Network Security</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Graphic Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-body">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <a href="mailto:auraorganising@gmail.com" className="hover:text-sky-400 transition-colors">
                  auraorganising@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <a href="tel:+9609467845" className="hover:text-sky-400 transition-colors">
                  +960 9467845
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-body">
            © 2026 Auralystic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 font-body">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
