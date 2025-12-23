import { services } from "../../lib/data/services";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-linear-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Clinical Nutrition Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Specialized Diet Plans for Your Health Goals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evidence-based nutrition therapy for specific health conditions. All plans use real Indian foods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
