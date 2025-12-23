import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook, Youtube, Star } from "lucide-react";
import ContactForm from "../ui/ContactForm";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDMwSDI0djEyaDEyVjMwem0wIDI0SDI0djEyaDEyVjU0em0yNCAwSDQ4djEyaDEyVjU0em0wLTI0SDQ4djEyaDEyVjMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-6xl mx-auto relative" id="contact">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your Health?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Book your free consultation today and start your journey to better health with personalized Indian meal plans
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ContactForm />

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <a
                  href="tel:+919769761766"
                  className="flex items-center gap-4 text-white hover:text-emerald-200 transition group"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Call / WhatsApp</div>
                    <div className="font-bold text-lg">+91-976-976-1766</div>
                  </div>
                </a>

                <a
                  href="mailto:ashwini.gawad@gmail.com"
                  className="flex items-center gap-4 text-white hover:text-emerald-200 transition group"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Email</div>
                    <div className="font-bold">ashwini.gawad@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Location</div>
                    <div className="font-bold">Borivali, Mumbai, Maharashtra</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Available</div>
                    <div className="font-bold">Mon-Sat: 9:00 AM - 7:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Connect on Social Media</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ashwini-gawad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/ashwinigawad_dietitian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/ashwinigawaddietitian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@ashwinigawad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-linear-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl rounded-3xl p-6 border-2 border-yellow-400/30">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                <h4 className="text-white font-bold text-lg">Quick Response Guaranteed</h4>
              </div>
              <p className="text-white/90 text-sm">
                I personally respond to all inquiries within 24 hours. For urgent consultations, WhatsApp me directly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
