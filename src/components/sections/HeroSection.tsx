import { Award, CheckCircle, Calendar, MessageCircle, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDMwSDI0djEyaDEyVjMwem0wIDI0SDI0djEyaDEyVjU0em0yNCAwSDQ4djEyaDEyVjU0em0wLTI0SDQ4djEyaDEyVjMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">Award-Winning Clinical Dietitian • Former VLCC Area Head</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Health with <span className="text-yellow-300">Real Indian Food</span>
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-white/95 leading-relaxed">
              Expert clinical nutrition for <span className="font-bold">diabetes, PCOS, cardiac care</span> and{" "}
              <span className="font-bold">weight management</span>. Personalized meal plans that actually work with your lifestyle.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <CheckCircle className="w-5 h-5 text-emerald-200" />
                <span className="font-medium">25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <CheckCircle className="w-5 h-5 text-emerald-200" />
                <span className="font-medium">500+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <CheckCircle className="w-5 h-5 text-emerald-200" />
                <span className="font-medium">Online Consultations</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-emerald-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all font-bold flex items-center gap-2 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transform"
              >
                <Calendar className="w-5 h-5" /> Book Free Consultation
              </a>
              <a
                href="https://wa.me/919769761766"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-bold flex items-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["👨", "👩", "👴", "👵"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl border-2 border-white"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <span className="font-semibold">Trusted by 500+ clients across India</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-300" />
                Why Choose Ashwini Gawad?
              </h3>
              <div className="space-y-4">
                {[
                  "25+ years clinical experience (Hospital + VLCC)",
                  "Master's Degree in Dietetics (IGNOU)",
                  "Former Area Technical Head - 25+ centers",
                  "Specialized in diabetes, PCOS, cardiac care",
                  "Personalized Indian meal plans",
                  "No crash diets or unrealistic restrictions",
                  "Measurable results in 2-4 weeks",
                  "Ongoing WhatsApp support",
                  "Family-friendly nutrition guidance",
                  "Online & offline consultations",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-300" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
