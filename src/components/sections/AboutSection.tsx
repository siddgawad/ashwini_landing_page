import { GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import { credentials } from "../../lib/data/credentials";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Ashwini Gawad
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">25+ Years of Clinical Excellence in Nutrition Therapy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                I&#39;m Ashwini Gawad, a Clinical Dietitian and Nutrition Consultant with over 25 years of experience across
                hospitals, pharmaceutical organizations, and national wellness chains.
              </p>
              <p>
                As the former <strong>Area Technical Head at VLCC Healthcare</strong>, I led nutrition and slimming programs
                across 25+ franchised centers in West, South, and Central India. My approach combines clinical expertise from
                hospital practice (Sir KEM Hospital, Mumbai) with practical wellness program experience.
              </p>
              <p>
                I specialize in <strong>therapeutic diet planning</strong> for diabetes, cardiac and renal disease, PCOS,
                obesity, thyroid disorders, and geriatric care - always with a focus on sustainable, Indian-food-based plans
                that families can actually follow.
              </p>
              <p>
                My work has helped <strong>500+ clients</strong> achieve measurable improvements in weight, blood sugar levels,
                and lipid profiles through personalized, evidence-based nutrition counseling.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Work With Me <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-emerald-600" />
                Education & Credentials
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-gray-900">Master of Science in Dietetics</div>
                  <div className="text-gray-600">Indira Gandhi National Open University (IGNOU)</div>
                  <div className="text-sm text-gray-500">Dissertation: Effect of High Protein Diet in PCOS</div>
                </div>
                <div className="border-t pt-3">
                  <div className="font-bold text-gray-900">PG Diploma in Dietetics</div>
                  <div className="text-gray-600">Institute of Hotel Management, Mumbai</div>
                  <div className="text-sm text-gray-500">Dissertation: Role of Diet in Acne</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white mb-3">
                    {cred.icon}
                  </div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{cred.title}</div>
                  <div className="text-xs text-gray-600 mb-1">{cred.org}</div>
                  <div className="text-xs text-emerald-600 font-semibold">{cred.detail}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold mb-3 text-gray-900">Professional Certifications</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {[
                  "FODMAP Diet for IBS - Monash University",
                  "Nutrigenomics - The Gene Box",
                  "Supplementation - Qua Nutrition",
                  "Online Nutrition Counselling - Qua Nutrition",
                  "Food Product Development - MSME (2025)",
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>{cert}</span>
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
