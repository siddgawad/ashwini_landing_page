import { Building2, GraduationCap, Award, Users } from "lucide-react";

export default function StatsBar() {
  return (
    <section className="py-4 px-4 bg-gradient-to-r from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            <span>Former Area Technical Head - VLCC</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            <span>MSc Dietetics - IGNOU</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>2x Award Winner</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>500+ Lives Transformed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
