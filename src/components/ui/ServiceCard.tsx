import { CheckCircle, ArrowRight } from "lucide-react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group hover:-translate-y-1">
      <div
        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}
      >
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <div className="space-y-3 mb-6">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-700">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
      <div className="bg-emerald-50 rounded-xl p-4 mb-6">
        <div className="text-sm font-semibold text-emerald-900">{service.caseStudy}</div>
      </div>
      <a
        href="#contact"
        className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-emerald-700"
      >
        Book Consultation <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
}
