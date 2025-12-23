import { ChevronDown } from "lucide-react";
import { faqs } from "../../lib/data/faqs";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about working with me</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group hover:shadow-xl transition-shadow"
            >
              <summary className="font-bold text-lg cursor-pointer flex items-center justify-between text-gray-900">
                {faq.q}
                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform shrink-0 ml-4 text-emerald-600" />
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
