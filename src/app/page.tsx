import React, { useEffect } from 'react';
import { Mail, Phone, Award, GraduationCap, Heart, Users, TrendingUp, BookOpen, MapPin, Mic, Video, Radio } from 'lucide-react';

export default function Portfolio() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Ashwini Gawad - Clinical Dietitian & Nutrition Consultant | Mumbai";
    
    const metaTags = [
      { name: "description", content: "Ashwini Gawad - Clinical Dietitian with 25+ years experience in Mumbai. Expert in diabetes, cardiac, PCOS, obesity management. Book consultation for personalized nutrition plans." },
      { name: "keywords", content: "Ashwini Gawad, Clinical Dietitian Mumbai, Nutrition Consultant, Diabetes Diet, PCOS Treatment, Weight Loss, Borivali Dietitian, Best Dietitian Mumbai" },
      { name: "author", content: "Ashwini Gawad" },
      { property: "og:title", content: "Ashwini Gawad - Clinical Dietitian & Nutrition Consultant" },
      { property: "og:description", content: "25+ years experience in therapeutic diet planning for diabetes, cardiac, PCOS, obesity. Available in Borivali & Online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ashwini Gawad - Clinical Dietitian" },
      { name: "twitter:description", content: "Expert Clinical Dietitian in Mumbai with 25+ years experience" }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Structured Data for Google
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ashwini Gawad",
      "jobTitle": "Clinical Dietitian",
      "description": "Clinical Dietitian and Nutrition Wellness Consultant with 25+ years of experience",
      "url": window.location.href,
      "telephone": "+91-976-976-1766",
      "email": "ashwini.gawad@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Indira Gandhi National Open University"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Institute of Hotel Management, Mumbai"
        }
      ],
      "award": [
        "Best Centre Manager Award - VLCC 2006",
        "Best Dietitian Award - VLCC 2002"
      ],
      "knowsAbout": [
        "Clinical Nutrition",
        "Diabetes Management",
        "Cardiac Care",
        "PCOS Treatment",
        "Weight Management",
        "Geriatric Nutrition"
      ],
      "workExample": [
        {
          "@type": "Organization",
          "name": "VLCC Healthcare Ltd.",
          "position": "Area Technical Head"
        },
        {
          "@type": "Organization",
          "name": "Sir KEM Hospital",
          "position": "Dietitian"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  const experience = [
    {
      title: "Area Technical Head",
      company: "VLCC Healthcare Ltd.",
      period: "Jan 2013-Dec 2019; Jan 2023-Sep 2025",
      color: "from-emerald-500 to-teal-600",
      highlights: [
        "Led slimming & nutrition practice across ~25 franchised centres in South, West and Central India",
        "Designed and implemented anti-obesity, diabetes and wellness campaigns (festive drives, referral programmes, medical camps)",
        "Deployed to underperforming centres to audit workflows, address counselling gaps, retrain staff and restore programme effectiveness",
        "Created and standardised SOPs, checklists and counselling scripts for dietitians, physiotherapists and counsellors",
        "Led 100+ regional training sessions on clinical updates, case discussions, sales mindset, and objection handling",
        "Partnered with centre heads to run data-driven performance reviews using dashboards and case records"
      ]
    },
    {
      title: "Training & Development Manager",
      company: "Talwalkars Better Value Fitness Ltd.",
      period: "2011 – Jun 2012",
      color: "from-blue-500 to-indigo-600",
      highlights: [
        "Identified skill and process gaps in nutrition guidance, member communication and package renewal",
        "Developed and delivered training modules on customer care, basic nutrition and consultative selling",
        "Led launch of 'Reduce' programme website with integrated nutrition guidance",
        "Improved member awareness, engagement and lead generation for fitness programs"
      ]
    },
    {
      title: "Regional Trainer – Slimming & Nutrition",
      company: "VLCC Healthcare Ltd.",
      period: "May 1999 – Apr 2011",
      color: "from-purple-500 to-pink-600",
      highlights: [
        "Primary technical and training anchor for slimming & nutrition across West Zone",
        "Conducted regular audits and refresher trainings for double-digit VLCC centres",
        "Designed and led local anti-obesity and lifestyle campaigns (health camps, doctor tie-ups, society events)",
        "Supported centre teams with complex client planning for diabetes, cardiac risk, hormonal issues",
        "Reviewed slimming category performance and drove corrective actions"
      ]
    },
    {
      title: "Dietitian",
      company: "Sir KEM Hospital, Mumbai",
      period: "Nov 1998 – Apr 1999",
      color: "from-orange-500 to-red-600",
      highlights: [
        "Planned and implemented therapeutic diets for in-patients and OPD patients, including ICCU cases",
        "Managed diet planning for diabetes, cardiac disease, renal disease across paediatric to geriatric age groups"
      ]
    },
    {
      title: "Clinical Nutritionist",
      company: "Novartis India Ltd., Thane",
      period: "Jul 1998 – Oct 1998",
      color: "from-cyan-500 to-blue-600",
      highlights: [
        "Promoted and supported medical nutrition products and RT formulas for clinicians and hospitals",
        "Conducted nutrition awareness activities and counselling sessions for patients and caregivers"
      ]
    }
  ];

  const skills = [
    { icon: <Heart className="w-5 h-5" />, title: "Clinical Nutrition", items: ["Diabetes management", "Cardiac care", "Renal disease", "PCOS", "Paediatric nutrition", "Geriatric care"] },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Weight Management", items: ["Body composition programs", "Obesity treatment", "Dyslipidemia", "Fatty liver", "Post-surgery recovery"] },
    { icon: <Users className="w-5 h-5" />, title: "Training & Leadership", items: ["SOP development", "Team mentoring", "Franchise operations", "Sales training", "Counselling scripts"] },
    { icon: <BookOpen className="w-5 h-5" />, title: "Product Development", items: ["New Food Product Dev", "Meal kit design", "Consumer research", "Concept testing", "Feasibility analysis"] }
  ];

  const certifications = [
    "FODMAP Diet for IBS – Monash University",
    "Nutrigenomics – The Gene Box",
    "Supplementation – Qua Nutrition",
    "Online Nutrition Counselling – Qua Nutrition",
    "Processed Foods Certificate",
    "MSME – New Food Product Development",
    "Access Bars – Foundation Level",
    "Reiki – Level 3"
  ];

  const publicSpeaking = [
    { icon: <Users />, text: "Interactive nutrition sessions for Mumbai Police officers" },
    { icon: <Video />, text: "Talk show on TV9 covering obesity and lifestyle nutrition" },
    { icon: <Mic />, text: "Guest speaker for community diabetic camps with local GPs" },
    { icon: <Radio />, text: "Speaker on Red FM for diet & nutrition topics" },
    { icon: <Users />, text: "Webinar speaker on fitness and nutrition during summer" },
    { icon: <Heart />, text: "Ongoing counselling at Nana Palkar Charitable Trust, Borivali" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Ashwini Gawad
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-600 transition">About</a>
            <a href="#experience" className="hover:text-emerald-600 transition">Experience</a>
            <a href="#skills" className="hover:text-emerald-600 transition">Skills</a>
            <a href="#education" className="hover:text-emerald-600 transition">Education</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Compact */}
      <section className="pt-24 pb-12 px-4 sm:px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-white">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight">
              Ashwini Gawad
            </h1>
            <p className="text-2xl sm:text-3xl mb-3 font-light">
              Clinical Dietitian & Nutrition Wellness Consultant
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                <MapPin className="w-4 h-4" /> Mumbai, Maharashtra
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                25+ Years Experience
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                500+ Clients Transformed
              </span>
            </div>
            <p className="text-lg sm:text-xl max-w-4xl leading-relaxed mb-6 text-white/95">
              Specialized in therapeutic diet planning and medical nutrition counselling for diabetes, cardiac and renal disease, PCOS, obesity, dyslipidemia and geriatric care. Expert in sustainable, Indian-food-based plans with measurable improvements in weight, blood sugars and lipid profiles.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:ashwini.gawad@gmail.com" 
                className="bg-white text-emerald-700 px-6 py-3 rounded-full hover:bg-gray-100 transition font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" /> Contact Me
              </a>
              <a href="tel:+919769761766" 
                className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91-976-976-1766
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section id="about" className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Current Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100">
              <h3 className="font-semibold text-lg mb-3 text-emerald-900">Independent Practice</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Providing 1:1 counselling for diabetes, cardiac risk, obesity, PCOS, fatty liver and post-surgery recovery (Borivali & online), having supported hundreds of clients across paediatric to geriatric age groups.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">Family Nutrition Design</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Designing full-day menus, grocery lists and simple Indian recipes for elderly parents and busy families, including NRI children coordinating care from abroad, to maximise real-world compliance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
              <h3 className="font-semibold text-lg mb-3 text-purple-900">Product Innovation</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Participating in MSME – New Food Product Development (NPD) programme to build skills in consumer-centric product design, concept testing, risk assessment for healthy ready-to-cook meal kits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Areas of Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-3 text-emerald-600">
                  {skill.icon}
                  <h3 className="font-semibold text-gray-900">{skill.title}</h3>
                </div>
                <ul className="space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((job, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${job.color} p-4 text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                      <p className="text-white/90 font-medium">{job.company}</p>
                    </div>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-700 leading-relaxed flex gap-2">
                        <span className="text-emerald-500 mt-1">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-12 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-2">
                <GraduationCap className="w-8 h-8 text-emerald-600" /> Education
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100">
                  <h3 className="font-bold text-lg mb-2 text-emerald-900">Master of Science</h3>
                  <p className="text-gray-700 font-medium mb-1">Dietetics and Food Service Management</p>
                  <p className="text-sm text-gray-600 mb-2">Indira Gandhi National Open University, New Delhi</p>
                  <p className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                    Dissertation: Effect of High Protein Diet in PCOS
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100">
                  <h3 className="font-bold text-lg mb-2 text-emerald-900">Post Graduate Diploma</h3>
                  <p className="text-gray-700 font-medium mb-1">Dietetics and Hospital Food Service Management</p>
                  <p className="text-sm text-gray-600 mb-2">Institute of Hotel Management, Catering & Nutrition, Mumbai</p>
                  <p className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                    Dissertation: Role of Diet in Acne
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-2">
                <Award className="w-8 h-8 text-blue-600" /> Certifications
              </h2>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100">
                <div className="grid grid-cols-1 gap-2">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 bg-blue-50 px-3 py-2 rounded-lg">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-2">
            <Award className="w-8 h-8 text-amber-600" /> Awards & Recognition
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 flex items-center gap-4">
              <Award className="w-12 h-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-amber-900">Best Centre Manager Award</h3>
                <p className="text-gray-700">VLCC (All India & UAE), 2006</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 flex items-center gap-4">
              <Award className="w-12 h-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-amber-900">Best Dietitian Award</h3>
                <p className="text-gray-700">VLCC, 2002</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Speaking */}
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">
            <Mic className="w-8 h-8 text-purple-600" /> Public Speaking & Volunteer Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {publicSpeaking.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 flex items-start gap-3">
                <div className="text-purple-500 mt-1">{item.icon}</div>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Let us Transform Your Health Together</h2>
          <p className="text-xl mb-6 text-white/90">
            Available for consultations in Borivali and online
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:ashwini.gawad@gmail.com"
              className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full hover:bg-gray-100 transition font-medium"
            >
              <Mail className="w-5 h-5" />
              ashwini.gawad@gmail.com
            </a>
            <a 
              href="tel:+919769761766"
              className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full hover:bg-gray-100 transition font-medium"
            >
              <Phone className="w-5 h-5" />
              +91-976-976-1766
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full hover:bg-gray-100 transition font-medium"
            >
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ashwini Gawad • Clinical Dietitian & Nutrition Wellness Consultant • Mumbai, Maharashtra
          </p>
        </div>
      </footer>
    </div>
  );
}