"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../lib/data/testimonials";

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real People, Real Results</h2>
          <p className="text-xl text-white/90">Hear from clients who transformed their health with personalized nutrition</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">{testimonials[activeTestimonial].image}</div>
            <div>
              <div className="font-bold text-2xl text-gray-900">{testimonials[activeTestimonial].name}</div>
              <div className="text-gray-600 mb-1">{testimonials[activeTestimonial].age}</div>
              <div className="flex gap-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100 mb-4">
            <div className="text-emerald-900 font-bold">{testimonials[activeTestimonial].condition}</div>
            <div className="text-emerald-700 font-semibold">{testimonials[activeTestimonial].result}</div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">{testimonials[activeTestimonial].text}</p>

          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === activeTestimonial ? "bg-emerald-600 w-10" : "bg-gray-200 w-2.5"
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
