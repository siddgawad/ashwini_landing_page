import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold">
                AG
              </div>
              <div>
                <div className="font-bold text-lg">Ashwini Gawad</div>
                <div className="text-sm text-gray-400">Clinical Dietitian</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming health with evidence-based Indian nutrition plans for 25+ years.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-emerald-400">Quick Links</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-gray-400 hover:text-white transition text-sm">
                Services
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition text-sm">
                About
              </a>
              <a href="#testimonials" className="block text-gray-400 hover:text-white transition text-sm">
                Success Stories
              </a>
              <a href="#faq" className="block text-gray-400 hover:text-white transition text-sm">
                FAQ
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition text-sm">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-emerald-400">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Diabetes Management</div>
              <div>PCOS Treatment</div>
              <div>Weight Loss Programs</div>
              <div>Cardiac Care</div>
              <div>Thyroid & Hormonal</div>
              <div>Geriatric Nutrition</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-emerald-400">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91-976-976-1766</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ashwini.gawad@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Borivali, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Ashwini Gawad. All rights reserved. | Clinical Dietitian Mumbai | MSc Dietetics, IGNOU
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/ashwini-gawad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ashwinigawad_dietitian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/ashwinigawaddietitian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@ashwinigawad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
