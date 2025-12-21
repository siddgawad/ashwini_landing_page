"use client";

import { useState } from "react";
import { Menu, X} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#top" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              AG
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">Ashwini Gawad</div>
              <div className="text-xs text-emerald-700 font-medium">MSc Clinical Dietitian • 25+ Years</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              About
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              Success Stories
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
              FAQ
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm"
            >
              Book Consultation
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium py-2 text-gray-700">
              Services
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium py-2 text-gray-700">
              About
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium py-2 text-gray-700"
            >
              Success Stories
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium py-2 text-gray-700">
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-emerald-600 text-white px-5 py-3 rounded-full text-center text-sm font-semibold"
            >
              Book Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
