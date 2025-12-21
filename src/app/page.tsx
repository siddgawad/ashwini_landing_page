<<<<<<< HEAD
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import StatsBar from "../components/sections/StatsBar";
import StatsSection from "../components/sections/StatsSection";
import ServicesSection from "../components/sections/ServicesSection";
import AboutSection from "../components/sections/AboutSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import WhatsAppButton from "../components/ui/WhatsAppButton";
=======
"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Facebook,
  GraduationCap,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  Youtube,
} from "lucide-react";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Diabetes Management",
      description:
        "Evidence-based diet plans for Type 1, Type 2, and gestational diabetes with proven HbA1c reduction results",
      features: ["Blood sugar control", "Medication coordination", "Meal timing optimization"],
      color: "from-rose-500 to-pink-500",
      caseStudy: "Average HbA1c reduction: 2.8 points in 4 months",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "PCOS Treatment",
      description:
        "Hormonal balance through nutrition, sustainable weight management, and fertility support with Indian foods",
      features: ["Hormonal regulation", "Weight management", "Fertility support"],
      color: "from-purple-500 to-pink-500",
      caseStudy: "85% clients report improved menstrual regularity",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Weight Loss Programs",
      description:
        "Sustainable weight management with real Indian food - no crash diets, fad foods, or unrealistic restrictions",
      features: ["Body composition analysis", "Customized meal plans", "Ongoing support"],
      color: "from-emerald-500 to-teal-500",
      caseStudy: "Average weight loss: 8-12 kg in 3 months",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiac Care",
      description:
        "Heart-healthy diets for cholesterol management, blood pressure control, and post-cardiac event recovery",
      features: ["Cholesterol management", "BP control", "Post-surgery recovery"],
      color: "from-blue-500 to-cyan-500",
      caseStudy: "Significant lipid profile improvements",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Thyroid & Hormonal",
      description:
        "Specialized nutrition for thyroid disorders, menopause, and various hormonal imbalances",
      features: ["Thyroid optimization", "Hormone balance", "Symptom relief"],
      color: "from-orange-500 to-amber-500",
      caseStudy: "Improved energy and metabolic markers",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Geriatric & Family Nutrition",
      description:
        "Complete meal planning for elderly care, including coordination with NRI families from abroad",
      features: ["Multi-generational plans", "Cook coordination", "Simple recipes"],
      color: "from-indigo-500 to-purple-500",
      caseStudy: "Support for 100+ elderly clients",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      age: "34, Mumbai",
      condition: "PCOS & Weight Loss",
      result: "Lost 18kg in 5 months, regular periods restored",
      text: "Ashwini ma'am understood my PCOS struggles like no other dietitian. Her Indian meal plans were so practical - I could eat with my family! My periods are regular now and I've lost 18kg without feeling deprived.",
      rating: 5,
      image: "👩",
    },
    {
      name: "Rajesh Patel",
      age: "52, Borivali",
      condition: "Type 2 Diabetes",
      result: "HbA1c reduced from 9.2 to 6.1 in 4 months",
      text: "My HbA1c was 9.2 and doctor wanted to increase medicines. Ashwini's diet plan brought it down to 6.1 in just 4 months! I eat normal Indian food, no boring salads. Best decision ever.",
      rating: 5,
      image: "👨",
    },
    {
      name: "Meera Desai",
      age: "67, Kandivali",
      condition: "Cardiac Care",
      result: "Cholesterol normalized, blood pressure stable",
      text: "After my heart surgery, I was confused about what to eat. Ashwini gave me such clear, simple plans. My cholesterol is normal now and I feel energetic. She's like family to us.",
      rating: 5,
      image: "👵",
    },
    {
      name: "Ananya & Rohan",
      age: "NRI Family, USA",
      condition: "Elderly Parent Care",
      result: "Complete nutrition management from abroad",
      text: "Managing our parents' health from USA was stressful. Ashwini designs full weekly menus, coordinates with their cook, and sends us regular updates. Our parents' health has improved tremendously!",
      rating: 5,
      image: "👫",
    },
  ];

  const stats = [
    { number: "25+", label: "Years Experience", description: "Clinical expertise since 1998" },
    { number: "500+", label: "Lives Transformed", description: "Successful client outcomes" },
    { number: "4.9/5", label: "Client Rating", description: "Based on 127+ reviews" },
    { number: "95%", label: "Success Rate", description: "Clients achieve health goals" },
  ];

  const credentials = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Master's in Dietetics",
      org: "IGNOU, New Delhi",
      detail: "Dissertation: High Protein Diet in PCOS",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Centre Manager",
      org: "VLCC - All India & UAE",
      detail: "2006",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Dietitian Award",
      org: "VLCC Healthcare",
      detail: "2002",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Area Technical Head",
      org: "VLCC Healthcare Ltd.",
      detail: "Led 25+ centers across India",
    },
  ];

  const faqs = [
    {
      q: "Do you provide online consultations for clients outside Mumbai?",
      a: "Yes! I offer comprehensive video consultations for clients across India and internationally. All meal plans are customized to your location, food availability, and local cuisine. I've successfully worked with NRI families coordinating elderly parent care from abroad.",
    },
    {
      q: "What makes your approach different from other dietitians?",
      a: "With 25+ years of clinical experience including my role as Area Technical Head at VLCC managing 25+ centers, I focus on sustainable, real Indian food that your family already eats. No unrealistic diets, imported superfoods, or crash plans. Just practical, evidence-based, measurable results with food you love. I also provide ongoing WhatsApp support and coordinate with your cook or family for seamless implementation.",
    },
    {
      q: "How long does it take to see results?",
      a: "Most clients see improvements within 2-4 weeks - better energy levels, reduced bloating, improved blood parameters. Significant weight loss typically shows in 2-3 months, while diabetes management improvements can be seen in HbA1c tests within 3-4 months. I track progress closely with regular follow-ups.",
    },
    {
      q: "Do you provide detailed meal plans and recipes?",
      a: "Absolutely! You get comprehensive daily meal plans, detailed grocery lists, portion guides, and simple Indian recipes. For elderly clients or busy families, I also help coordinate with your cook and provide full weekly menus. Everything is practical and easy to implement in real life.",
    },
    {
      q: "What conditions do you specialize in?",
      a: "I specialize in diabetes management (Type 1, 2, gestational), PCOS treatment, cardiac care (cholesterol, blood pressure), weight management, thyroid disorders, renal disease diet, geriatric nutrition, and family meal planning. My hospital experience (Sir KEM) combined with wellness program expertise (VLCC) gives me a unique clinical + practical approach.",
    },
    {
      q: "What is your consultation fee and package structure?",
      a: "Initial consultation packages start from ₹2000 with detailed assessment and personalized plan. Follow-up packages are designed based on your health goals and duration. I offer flexible monthly packages with unlimited WhatsApp support. Contact me for detailed pricing tailored to your needs.",
    },
    {
      q: "How do you coordinate with my existing doctors?",
      a: "I work collaboratively with your physicians, especially for conditions like diabetes and cardiac care. I review your medical reports, medication schedules, and align my nutrition plan with your doctor's treatment plan. Many of my clients see medication reductions as their health improves (always under medical supervision).",
    },
    {
      q: "Can you help with family meal planning?",
      a: "Yes! I excel at creating multi-generational meal plans where one menu works for the entire family with minor modifications. This is especially popular with clients managing elderly parents or children with different needs. I provide practical solutions that make Indian family cooking healthier without cooking separate meals.",
    },
  ];

  const blogPosts = [
    {
      title: "5 Indian Breakfast Ideas for Diabetics That Actually Work",
      excerpt:
        "Discover blood-sugar-friendly breakfast options using everyday Indian ingredients that don't spike glucose levels...",
      readTime: "5 min read",
      category: "Diabetes Management",
      keywords: "diabetes breakfast, Indian diabetic diet, blood sugar control",
    },
    {
      title: "PCOS Diet Plan: What Mumbai Women Need to Know",
      excerpt:
        "A practical guide to managing PCOS through nutrition with local Indian foods, hormonal balance, and sustainable weight loss...",
      readTime: "6 min read",
      category: "PCOS Treatment",
      keywords: "PCOS diet, hormonal balance, Mumbai dietitian",
    },
    {
      title: "Managing Elderly Nutrition: Guide for NRI Families",
      excerpt: "How to coordinate complete nutrition care for aging parents in India when you're living abroad...",
      readTime: "7 min read",
      category: "Geriatric Care",
      keywords: "elderly nutrition, NRI family care, parent health",
    },
  ];

  useEffect(() => {
    document.title =
      "Ashwini Gawad - Best Clinical Dietitian Mumbai | 25+ Years Experience | Diabetes, PCOS, Weight Loss Expert";

    const metaTags = [
      {
        name: "description",
        content:
          "Ashwini Gawad - Award-winning Clinical Dietitian in Mumbai with 25+ years experience. Expert in diabetes management, PCOS treatment, cardiac care, weight loss & elderly nutrition. Former VLCC Area Head. Online consultations available. Book now!",
      },
      {
        name: "keywords",
        content:
          "Ashwini Gawad dietitian, best dietitian Mumbai, clinical dietitian Borivali, diabetes diet plan Mumbai, PCOS dietitian Mumbai, weight loss expert Mumbai, cardiac diet specialist, elderly nutrition Mumbai, online dietitian India, VLCC dietitian, nutritionist Maharashtra, diet counseling Mumbai, therapeutic diet planning, Indian diet plans",
      },
      { name: "author", content: "Ashwini Gawad, MSc Dietetics" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "bingbot", content: "index, follow" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Mumbai, Borivali, Maharashtra" },
      { name: "geo.position", content: "19.2183;72.9781" },
      { name: "ICBM", content: "19.2183, 72.9781" },
      { name: "language", content: "en-IN" },
      { name: "revisit-after", content: "7 days" },
      { property: "og:title", content: "Ashwini Gawad - Clinical Dietitian Mumbai | Diabetes, PCOS, Weight Loss Expert" },
      {
        property: "og:description",
        content:
          "Transform your health with India's trusted clinical dietitian. 25+ years experience, 500+ success stories. Specialized in diabetes, PCOS, cardiac care & weight management.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
      { property: "og:site_name", content: "Ashwini Gawad - Clinical Dietitian" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "https://ashwinigawad.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Ashwini Gawad - Clinical Dietitian Mumbai" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ashwini Gawad - Best Clinical Dietitian Mumbai" },
      {
        name: "twitter:description",
        content: "Award-winning dietitian with 25+ years experience. Diabetes, PCOS, weight loss expert. Book consultation now!",
      },
      { name: "twitter:image", content: "https://ashwinigawad.com/twitter-card.jpg" },
      { name: "rating", content: "General" },
      { name: "distribution", content: "Global" },
      { name: "coverage", content: "Worldwide" },
      { name: "target", content: "all" },
      { name: "HandheldFriendly", content: "True" },
      { name: "MobileOptimized", content: "320" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "profession", content: "Clinical Dietitian, Nutrition Consultant" },
      {
        name: "specialty",
        content: "Diabetes Management, PCOS Treatment, Cardiac Care, Weight Loss, Geriatric Nutrition",
      },
    ];

    const existingMetas = document.querySelectorAll("meta[name], meta[property]");
    existingMetas.forEach((meta) => {
      const name = meta.getAttribute("name") || meta.getAttribute("property");
      if (metaTags.some((tag) => tag.name === name || tag.property === name)) {
        meta.remove();
      }
    });

    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.setAttribute("property", tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = window.location.href.split("?")[0];
    document.head.appendChild(canonical);

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Person", "MedicalBusiness", "Physician"],
          "@id": "https://ashwinigawad.com/#person",
          name: "Ashwini Gawad",
          alternateName: "Ashwini Gawad Dietitian",
          jobTitle: "Clinical Dietitian & Nutrition Consultant",
          description:
            "Award-winning Clinical Dietitian with 25+ years of experience specializing in diabetes management, PCOS treatment, cardiac care, weight management, and geriatric nutrition. Former Area Technical Head at VLCC Healthcare with expertise in therapeutic diet planning across India.",
          url: window.location.href,
          image: {
            "@type": "ImageObject",
            url: "https://ashwinigawad.com/ashwini-gawad-photo.jpg",
            width: 800,
            height: 800,
          },
          telephone: "+91-976-976-1766",
          email: "ashwini.gawad@gmail.com",
          sameAs: [
            "https://www.linkedin.com/in/ashwini-gawad",
            "https://www.instagram.com/ashwinigawad_dietitian",
            "https://www.facebook.com/ashwinigawaddietitian",
            "https://www.youtube.com/@ashwinigawad",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Borivali",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400092",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: "19.2183", longitude: "72.9781" },
          areaServed: [
            { "@type": "City", name: "Mumbai" },
            { "@type": "State", name: "Maharashtra" },
            { "@type": "Country", name: "India" },
            { "@type": "Place", name: "Online - Worldwide" },
          ],
          priceRange: "₹₹",
          paymentAccepted: ["Cash", "UPI", "Bank Transfer", "Online Payment"],
          openingHours: "Mo-Sa 09:00-19:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
            bestRating: "5",
            worstRating: "1",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Priya Sharma" },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody:
                "Lost 18kg in 5 months with Ashwini's personalized diet plan. My PCOS symptoms improved dramatically and periods are regular now!",
              datePublished: "2024-10-15",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Rajesh Patel" },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody: "My HbA1c reduced from 9.2 to 6.1 in just 4 months. Ashwini's Indian meal plans are practical and effective!",
              datePublished: "2024-09-20",
            },
          ],
          alumniOf: [
            {
              "@type": "EducationalOrganization",
              name: "Indira Gandhi National Open University",
              description: "Master of Science in Dietetics and Food Service Management",
            },
            {
              "@type": "EducationalOrganization",
              name: "Institute of Hotel Management, Mumbai",
              description: "Post Graduate Diploma in Dietetics and Hospital Food Service Management",
            },
          ],
          award: [
            "Best Centre Manager Award - VLCC Healthcare (All India & UAE) - 2006",
            "Best Dietitian Award - VLCC Healthcare - 2002",
          ],
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "degree",
              name: "Master of Science in Dietetics and Food Service Management",
              educationalLevel: "Master's Degree",
            },
            { "@type": "EducationalOccupationalCredential", name: "Certified in FODMAP Diet for IBS - Monash University" },
            { "@type": "EducationalOccupationalCredential", name: "Certificate in Nutrigenomics - The Gene Box" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Clinical Nutrition Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "MedicalTherapy",
                  name: "Diabetes Management Diet Plan",
                  description: "Personalized Indian diet plans for Type 1, Type 2, and gestational diabetes with proven HbA1c reduction",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "MedicalTherapy",
                  name: "PCOS Treatment Diet",
                  description: "Hormonal balance through nutrition for PCOS, fertility support and sustainable weight management",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Weight Loss Program",
                  description: "Sustainable weight management with real Indian food - no crash diets",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "MedicalTherapy",
                  name: "Cardiac Care Nutrition",
                  description: "Heart-healthy diets for cholesterol, blood pressure, and post-cardiac event recovery",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Geriatric Nutrition Planning",
                  description: "Complete meal planning for elderly care, including NRI family coordination",
                },
              },
            ],
          },
          knowsAbout: [
            "Clinical Nutrition",
            "Diabetes Management",
            "Cardiac Care",
            "PCOS Treatment",
            "Weight Management",
            "Geriatric Nutrition",
            "Renal Disease Diet",
            "Obesity Treatment",
            "Therapeutic Diet Planning",
            "Indian Meal Planning",
            "Elderly Care Nutrition",
            "Family Nutrition",
            "FODMAP Diet",
            "Nutrigenomics",
          ],
          memberOf: { "@type": "Organization", name: "VLCC Healthcare Ltd.", description: "Former Area Technical Head" },
          workExample: [
            {
              "@type": "CreativeWork",
              name: "Led nutrition practice across 25+ franchised centres",
              description: "Area Technical Head managing slimming & nutrition programs across South, West and Central India",
            },
            {
              "@type": "CreativeWork",
              name: "500+ Client Transformations",
              description: "Successfully helped over 500 clients achieve health goals through personalized nutrition plans",
            },
          ],
        },
        {
          "@type": "WebPage",
          "@id": `${window.location.href}#webpage`,
          url: window.location.href,
          name: "Ashwini Gawad - Clinical Dietitian Mumbai",
          description: "Professional portfolio and consultation booking for Ashwini Gawad, Mumbai's trusted clinical dietitian",
          inLanguage: "en-IN",
          isPartOf: {
            "@type": "WebSite",
            "@id": `${window.location.origin}#website`,
            url: window.location.origin,
            name: "Ashwini Gawad Clinical Dietitian",
            publisher: { "@id": "https://ashwinigawad.com/#person" },
          },
          about: { "@id": "https://ashwinigawad.com/#person" },
          primaryImageOfPage: { "@type": "ImageObject", url: "https://ashwinigawad.com/hero-image.jpg" },
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://ashwinigawad.com/#service",
          name: "Ashwini Gawad Clinical Dietitian Services",
          description: "Professional clinical nutrition and diet counseling services in Mumbai",
          provider: { "@id": "https://ashwinigawad.com/#person" },
          areaServed: { "@type": "Country", name: "India" },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceType: "Online and Offline Consultations",
            availableLanguage: ["English", "Hindi", "Marathi"],
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      clearInterval(interval);
      document.documentElement.style.scrollBehavior = "auto";
      script.remove();
      canonical.remove();
      metaTags.forEach((tag) => {
        const name = tag.name || tag.property;
        if (!name) return;
        document
          .querySelectorAll(`meta[name='${name}'], meta[property='${name}']`)
          .forEach((meta) => meta.remove());
      });
    };
  }, [testimonials.length]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
>>>>>>> a6486ecdf344fe61f966995ec7f34844985e3f61

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
<<<<<<< HEAD
      <Navbar />
      <HeroSection />
      <StatsBar />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}













































// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Award,
//   BookOpen,
//   Briefcase,
//   Building2,
//   Calendar,
//   CheckCircle,
//   ChevronDown,
//   Clock,
//   Facebook,
//   GraduationCap,
//   Heart,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Menu,
//   MessageCircle,
//   Phone,
//   Send,
//   Shield,
//   Star,
//   TrendingUp,
//   Users,
//   X,
//   Youtube,
// } from "lucide-react";

// export default function Portfolio() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const services = [
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Diabetes Management",
//       description:
//         "Evidence-based diet plans for Type 1, Type 2, and gestational diabetes with proven HbA1c reduction results",
//       features: ["Blood sugar control", "Medication coordination", "Meal timing optimization"],
//       color: "from-rose-500 to-pink-500",
//       caseStudy: "Average HbA1c reduction: 2.8 points in 4 months",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "PCOS Treatment",
//       description:
//         "Hormonal balance through nutrition, sustainable weight management, and fertility support with Indian foods",
//       features: ["Hormonal regulation", "Weight management", "Fertility support"],
//       color: "from-purple-500 to-pink-500",
//       caseStudy: "85% clients report improved menstrual regularity",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Weight Loss Programs",
//       description:
//         "Sustainable weight management with real Indian food - no crash diets, fad foods, or unrealistic restrictions",
//       features: ["Body composition analysis", "Customized meal plans", "Ongoing support"],
//       color: "from-emerald-500 to-teal-500",
//       caseStudy: "Average weight loss: 8-12 kg in 3 months",
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Cardiac Care",
//       description:
//         "Heart-healthy diets for cholesterol management, blood pressure control, and post-cardiac event recovery",
//       features: ["Cholesterol management", "BP control", "Post-surgery recovery"],
//       color: "from-blue-500 to-cyan-500",
//       caseStudy: "Significant lipid profile improvements",
//     },
//     {
//       icon: <BookOpen className="w-8 h-8" />,
//       title: "Thyroid & Hormonal",
//       description:
//         "Specialized nutrition for thyroid disorders, menopause, and various hormonal imbalances",
//       features: ["Thyroid optimization", "Hormone balance", "Symptom relief"],
//       color: "from-orange-500 to-amber-500",
//       caseStudy: "Improved energy and metabolic markers",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Geriatric & Family Nutrition",
//       description:
//         "Complete meal planning for elderly care, including coordination with NRI families from abroad",
//       features: ["Multi-generational plans", "Cook coordination", "Simple recipes"],
//       color: "from-indigo-500 to-purple-500",
//       caseStudy: "Support for 100+ elderly clients",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       age: "34, Mumbai",
//       condition: "PCOS & Weight Loss",
//       result: "Lost 18kg in 5 months, regular periods restored",
//       text: "Ashwini ma'am understood my PCOS struggles like no other dietitian. Her Indian meal plans were so practical - I could eat with my family! My periods are regular now and I've lost 18kg without feeling deprived.",
//       rating: 5,
//       image: "👩",
//     },
//     {
//       name: "Rajesh Patel",
//       age: "52, Borivali",
//       condition: "Type 2 Diabetes",
//       result: "HbA1c reduced from 9.2 to 6.1 in 4 months",
//       text: "My HbA1c was 9.2 and doctor wanted to increase medicines. Ashwini's diet plan brought it down to 6.1 in just 4 months! I eat normal Indian food, no boring salads. Best decision ever.",
//       rating: 5,
//       image: "👨",
//     },
//     {
//       name: "Meera Desai",
//       age: "67, Kandivali",
//       condition: "Cardiac Care",
//       result: "Cholesterol normalized, blood pressure stable",
//       text: "After my heart surgery, I was confused about what to eat. Ashwini gave me such clear, simple plans. My cholesterol is normal now and I feel energetic. She's like family to us.",
//       rating: 5,
//       image: "👵",
//     },
//     {
//       name: "Ananya & Rohan",
//       age: "NRI Family, USA",
//       condition: "Elderly Parent Care",
//       result: "Complete nutrition management from abroad",
//       text: "Managing our parents' health from USA was stressful. Ashwini designs full weekly menus, coordinates with their cook, and sends us regular updates. Our parents' health has improved tremendously!",
//       rating: 5,
//       image: "👫",
//     },
//   ];

//   const stats = [
//     { number: "25+", label: "Years Experience", description: "Clinical expertise since 1998" },
//     { number: "500+", label: "Lives Transformed", description: "Successful client outcomes" },
//     { number: "4.9/5", label: "Client Rating", description: "Based on 127+ reviews" },
//     { number: "95%", label: "Success Rate", description: "Clients achieve health goals" },
//   ];

//   const credentials = [
//     {
//       icon: <GraduationCap className="w-6 h-6" />,
//       title: "Master's in Dietetics",
//       org: "IGNOU, New Delhi",
//       detail: "Dissertation: High Protein Diet in PCOS",
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Best Centre Manager",
//       org: "VLCC - All India & UAE",
//       detail: "2006",
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Best Dietitian Award",
//       org: "VLCC Healthcare",
//       detail: "2002",
//     },
//     {
//       icon: <Building2 className="w-6 h-6" />,
//       title: "Area Technical Head",
//       org: "VLCC Healthcare Ltd.",
//       detail: "Led 25+ centers across India",
//     },
//   ];

//   const faqs = [
//     {
//       q: "Do you provide online consultations for clients outside Mumbai?",
//       a: "Yes! I offer comprehensive video consultations for clients across India and internationally. All meal plans are customized to your location, food availability, and local cuisine. I've successfully worked with NRI families coordinating elderly parent care from abroad.",
//     },
//     {
//       q: "What makes your approach different from other dietitians?",
//       a: "With 25+ years of clinical experience including my role as Area Technical Head at VLCC managing 25+ centers, I focus on sustainable, real Indian food that your family already eats. No unrealistic diets, imported superfoods, or crash plans. Just practical, evidence-based, measurable results with food you love. I also provide ongoing WhatsApp support and coordinate with your cook or family for seamless implementation.",
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Most clients see improvements within 2-4 weeks - better energy levels, reduced bloating, improved blood parameters. Significant weight loss typically shows in 2-3 months, while diabetes management improvements can be seen in HbA1c tests within 3-4 months. I track progress closely with regular follow-ups.",
//     },
//     {
//       q: "Do you provide detailed meal plans and recipes?",
//       a: "Absolutely! You get comprehensive daily meal plans, detailed grocery lists, portion guides, and simple Indian recipes. For elderly clients or busy families, I also help coordinate with your cook and provide full weekly menus. Everything is practical and easy to implement in real life.",
//     },
//     {
//       q: "What conditions do you specialize in?",
//       a: "I specialize in diabetes management (Type 1, 2, gestational), PCOS treatment, cardiac care (cholesterol, blood pressure), weight management, thyroid disorders, renal disease diet, geriatric nutrition, and family meal planning. My hospital experience (Sir KEM) combined with wellness program expertise (VLCC) gives me a unique clinical + practical approach.",
//     },
//     {
//       q: "What is your consultation fee and package structure?",
//       a: "Initial consultation packages start from ₹2000 with detailed assessment and personalized plan. Follow-up packages are designed based on your health goals and duration. I offer flexible monthly packages with unlimited WhatsApp support. Contact me for detailed pricing tailored to your needs.",
//     },
//     {
//       q: "How do you coordinate with my existing doctors?",
//       a: "I work collaboratively with your physicians, especially for conditions like diabetes and cardiac care. I review your medical reports, medication schedules, and align my nutrition plan with your doctor's treatment plan. Many of my clients see medication reductions as their health improves (always under medical supervision).",
//     },
//     {
//       q: "Can you help with family meal planning?",
//       a: "Yes! I excel at creating multi-generational meal plans where one menu works for the entire family with minor modifications. This is especially popular with clients managing elderly parents or children with different needs. I provide practical solutions that make Indian family cooking healthier without cooking separate meals.",
//     },
//   ];

//   const blogPosts = [
//     {
//       title: "5 Indian Breakfast Ideas for Diabetics That Actually Work",
//       excerpt:
//         "Discover blood-sugar-friendly breakfast options using everyday Indian ingredients that don't spike glucose levels...",
//       readTime: "5 min read",
//       category: "Diabetes Management",
//       keywords: "diabetes breakfast, Indian diabetic diet, blood sugar control",
//     },
//     {
//       title: "PCOS Diet Plan: What Mumbai Women Need to Know",
//       excerpt:
//         "A practical guide to managing PCOS through nutrition with local Indian foods, hormonal balance, and sustainable weight loss...",
//       readTime: "6 min read",
//       category: "PCOS Treatment",
//       keywords: "PCOS diet, hormonal balance, Mumbai dietitian",
//     },
//     {
//       title: "Managing Elderly Nutrition: Guide for NRI Families",
//       excerpt: "How to coordinate complete nutrition care for aging parents in India when you're living abroad...",
//       readTime: "7 min read",
//       category: "Geriatric Care",
//       keywords: "elderly nutrition, NRI family care, parent health",
//     },
//   ];

//   useEffect(() => {
//     document.title =
//       "Ashwini Gawad - Best Clinical Dietitian Mumbai | 25+ Years Experience | Diabetes, PCOS, Weight Loss Expert";

//     const metaTags = [
//       {
//         name: "description",
//         content:
//           "Ashwini Gawad - Award-winning Clinical Dietitian in Mumbai with 25+ years experience. Expert in diabetes management, PCOS treatment, cardiac care, weight loss & elderly nutrition. Former VLCC Area Head. Online consultations available. Book now!",
//       },
//       {
//         name: "keywords",
//         content:
//           "Ashwini Gawad dietitian, best dietitian Mumbai, clinical dietitian Borivali, diabetes diet plan Mumbai, PCOS dietitian Mumbai, weight loss expert Mumbai, cardiac diet specialist, elderly nutrition Mumbai, online dietitian India, VLCC dietitian, nutritionist Maharashtra, diet counseling Mumbai, therapeutic diet planning, Indian diet plans",
//       },
//       { name: "author", content: "Ashwini Gawad, MSc Dietetics" },
//       { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
//       { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
//       { name: "bingbot", content: "index, follow" },
//       { name: "geo.region", content: "IN-MH" },
//       { name: "geo.placename", content: "Mumbai, Borivali, Maharashtra" },
//       { name: "geo.position", content: "19.2183;72.9781" },
//       { name: "ICBM", content: "19.2183, 72.9781" },
//       { name: "language", content: "en-IN" },
//       { name: "revisit-after", content: "7 days" },
//       { property: "og:title", content: "Ashwini Gawad - Clinical Dietitian Mumbai | Diabetes, PCOS, Weight Loss Expert" },
//       {
//         property: "og:description",
//         content:
//           "Transform your health with India's trusted clinical dietitian. 25+ years experience, 500+ success stories. Specialized in diabetes, PCOS, cardiac care & weight management.",
//       },
//       { property: "og:type", content: "website" },
//       { property: "og:url", content: window.location.href },
//       { property: "og:site_name", content: "Ashwini Gawad - Clinical Dietitian" },
//       { property: "og:locale", content: "en_IN" },
//       { property: "og:image", content: "https://ashwinigawad.com/og-image.jpg" },
//       { property: "og:image:width", content: "1200" },
//       { property: "og:image:height", content: "630" },
//       { property: "og:image:alt", content: "Ashwini Gawad - Clinical Dietitian Mumbai" },
//       { name: "twitter:card", content: "summary_large_image" },
//       { name: "twitter:title", content: "Ashwini Gawad - Best Clinical Dietitian Mumbai" },
//       {
//         name: "twitter:description",
//         content: "Award-winning dietitian with 25+ years experience. Diabetes, PCOS, weight loss expert. Book consultation now!",
//       },
//       { name: "twitter:image", content: "https://ashwinigawad.com/twitter-card.jpg" },
//       { name: "rating", content: "General" },
//       { name: "distribution", content: "Global" },
//       { name: "coverage", content: "Worldwide" },
//       { name: "target", content: "all" },
//       { name: "HandheldFriendly", content: "True" },
//       { name: "MobileOptimized", content: "320" },
//       { name: "apple-mobile-web-app-capable", content: "yes" },
//       { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
//       { name: "profession", content: "Clinical Dietitian, Nutrition Consultant" },
//       {
//         name: "specialty",
//         content: "Diabetes Management, PCOS Treatment, Cardiac Care, Weight Loss, Geriatric Nutrition",
//       },
//     ];

//     const existingMetas = document.querySelectorAll("meta[name], meta[property]");
//     existingMetas.forEach((meta) => {
//       const name = meta.getAttribute("name") || meta.getAttribute("property");
//       if (metaTags.some((tag) => tag.name === name || tag.property === name)) {
//         meta.remove();
//       }
//     });

//     metaTags.forEach((tag) => {
//       const meta = document.createElement("meta");
//       if (tag.name) meta.name = tag.name;
//       if (tag.property) meta.setAttribute("property", tag.property);
//       meta.content = tag.content;
//       document.head.appendChild(meta);
//     });

//     const canonical = document.createElement("link");
//     canonical.rel = "canonical";
//     canonical.href = window.location.href.split("?")[0];
//     document.head.appendChild(canonical);

//     const structuredData = {
//       "@context": "https://schema.org",
//       "@graph": [
//         {
//           "@type": ["Person", "MedicalBusiness", "Physician"],
//           "@id": "https://ashwinigawad.com/#person",
//           name: "Ashwini Gawad",
//           alternateName: "Ashwini Gawad Dietitian",
//           jobTitle: "Clinical Dietitian & Nutrition Consultant",
//           description:
//             "Award-winning Clinical Dietitian with 25+ years of experience specializing in diabetes management, PCOS treatment, cardiac care, weight management, and geriatric nutrition. Former Area Technical Head at VLCC Healthcare with expertise in therapeutic diet planning across India.",
//           url: window.location.href,
//           image: {
//             "@type": "ImageObject",
//             url: "https://ashwinigawad.com/ashwini-gawad-photo.jpg",
//             width: 800,
//             height: 800,
//           },
//           telephone: "+91-976-976-1766",
//           email: "ashwini.gawad@gmail.com",
//           sameAs: [
//             "https://www.linkedin.com/in/ashwini-gawad",
//             "https://www.instagram.com/ashwinigawad_dietitian",
//             "https://www.facebook.com/ashwinigawaddietitian",
//             "https://www.youtube.com/@ashwinigawad",
//           ],
//           address: {
//             "@type": "PostalAddress",
//             streetAddress: "Borivali",
//             addressLocality: "Mumbai",
//             addressRegion: "Maharashtra",
//             postalCode: "400092",
//             addressCountry: "IN",
//           },
//           geo: { "@type": "GeoCoordinates", latitude: "19.2183", longitude: "72.9781" },
//           areaServed: [
//             { "@type": "City", name: "Mumbai" },
//             { "@type": "State", name: "Maharashtra" },
//             { "@type": "Country", name: "India" },
//             { "@type": "Place", name: "Online - Worldwide" },
//           ],
//           priceRange: "₹₹",
//           paymentAccepted: ["Cash", "UPI", "Bank Transfer", "Online Payment"],
//           openingHours: "Mo-Sa 09:00-19:00",
//           aggregateRating: {
//             "@type": "AggregateRating",
//             ratingValue: "4.9",
//             reviewCount: "127",
//             bestRating: "5",
//             worstRating: "1",
//           },
//           review: [
//             {
//               "@type": "Review",
//               author: { "@type": "Person", name: "Priya Sharma" },
//               reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
//               reviewBody:
//                 "Lost 18kg in 5 months with Ashwini's personalized diet plan. My PCOS symptoms improved dramatically and periods are regular now!",
//               datePublished: "2024-10-15",
//             },
//             {
//               "@type": "Review",
//               author: { "@type": "Person", name: "Rajesh Patel" },
//               reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
//               reviewBody: "My HbA1c reduced from 9.2 to 6.1 in just 4 months. Ashwini's Indian meal plans are practical and effective!",
//               datePublished: "2024-09-20",
//             },
//           ],
//           alumniOf: [
//             {
//               "@type": "EducationalOrganization",
//               name: "Indira Gandhi National Open University",
//               description: "Master of Science in Dietetics and Food Service Management",
//             },
//             {
//               "@type": "EducationalOrganization",
//               name: "Institute of Hotel Management, Mumbai",
//               description: "Post Graduate Diploma in Dietetics and Hospital Food Service Management",
//             },
//           ],
//           award: [
//             "Best Centre Manager Award - VLCC Healthcare (All India & UAE) - 2006",
//             "Best Dietitian Award - VLCC Healthcare - 2002",
//           ],
//           hasCredential: [
//             {
//               "@type": "EducationalOccupationalCredential",
//               credentialCategory: "degree",
//               name: "Master of Science in Dietetics and Food Service Management",
//               educationalLevel: "Master's Degree",
//             },
//             { "@type": "EducationalOccupationalCredential", name: "Certified in FODMAP Diet for IBS - Monash University" },
//             { "@type": "EducationalOccupationalCredential", name: "Certificate in Nutrigenomics - The Gene Box" },
//           ],
//           hasOfferCatalog: {
//             "@type": "OfferCatalog",
//             name: "Clinical Nutrition Services",
//             itemListElement: [
//               {
//                 "@type": "Offer",
//                 itemOffered: {
//                   "@type": "MedicalTherapy",
//                   name: "Diabetes Management Diet Plan",
//                   description: "Personalized Indian diet plans for Type 1, Type 2, and gestational diabetes with proven HbA1c reduction",
//                 },
//               },
//               {
//                 "@type": "Offer",
//                 itemOffered: {
//                   "@type": "MedicalTherapy",
//                   name: "PCOS Treatment Diet",
//                   description: "Hormonal balance through nutrition for PCOS, fertility support and sustainable weight management",
//                 },
//               },
//               {
//                 "@type": "Offer",
//                 itemOffered: {
//                   "@type": "Service",
//                   name: "Weight Loss Program",
//                   description: "Sustainable weight management with real Indian food - no crash diets",
//                 },
//               },
//               {
//                 "@type": "Offer",
//                 itemOffered: {
//                   "@type": "MedicalTherapy",
//                   name: "Cardiac Care Nutrition",
//                   description: "Heart-healthy diets for cholesterol, blood pressure, and post-cardiac event recovery",
//                 },
//               },
//               {
//                 "@type": "Offer",
//                 itemOffered: {
//                   "@type": "Service",
//                   name: "Geriatric Nutrition Planning",
//                   description: "Complete meal planning for elderly care, including NRI family coordination",
//                 },
//               },
//             ],
//           },
//           knowsAbout: [
//             "Clinical Nutrition",
//             "Diabetes Management",
//             "Cardiac Care",
//             "PCOS Treatment",
//             "Weight Management",
//             "Geriatric Nutrition",
//             "Renal Disease Diet",
//             "Obesity Treatment",
//             "Therapeutic Diet Planning",
//             "Indian Meal Planning",
//             "Elderly Care Nutrition",
//             "Family Nutrition",
//             "FODMAP Diet",
//             "Nutrigenomics",
//           ],
//           memberOf: { "@type": "Organization", name: "VLCC Healthcare Ltd.", description: "Former Area Technical Head" },
//           workExample: [
//             {
//               "@type": "CreativeWork",
//               name: "Led nutrition practice across 25+ franchised centres",
//               description: "Area Technical Head managing slimming & nutrition programs across South, West and Central India",
//             },
//             {
//               "@type": "CreativeWork",
//               name: "500+ Client Transformations",
//               description: "Successfully helped over 500 clients achieve health goals through personalized nutrition plans",
//             },
//           ],
//         },
//         {
//           "@type": "WebPage",
//           "@id": `${window.location.href}#webpage`,
//           url: window.location.href,
//           name: "Ashwini Gawad - Clinical Dietitian Mumbai",
//           description: "Professional portfolio and consultation booking for Ashwini Gawad, Mumbai's trusted clinical dietitian",
//           inLanguage: "en-IN",
//           isPartOf: {
//             "@type": "WebSite",
//             "@id": `${window.location.origin}#website`,
//             url: window.location.origin,
//             name: "Ashwini Gawad Clinical Dietitian",
//             publisher: { "@id": "https://ashwinigawad.com/#person" },
//           },
//           about: { "@id": "https://ashwinigawad.com/#person" },
//           primaryImageOfPage: { "@type": "ImageObject", url: "https://ashwinigawad.com/hero-image.jpg" },
//         },
//         {
//           "@type": "ProfessionalService",
//           "@id": "https://ashwinigawad.com/#service",
//           name: "Ashwini Gawad Clinical Dietitian Services",
//           description: "Professional clinical nutrition and diet counseling services in Mumbai",
//           provider: { "@id": "https://ashwinigawad.com/#person" },
//           areaServed: { "@type": "Country", name: "India" },
//           availableChannel: {
//             "@type": "ServiceChannel",
//             serviceType: "Online and Offline Consultations",
//             availableLanguage: ["English", "Hindi", "Marathi"],
//           },
//         },
//       ],
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.text = JSON.stringify(structuredData);
//     document.head.appendChild(script);

//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 6000);

//     document.documentElement.style.scrollBehavior = "smooth";

//     return () => {
//       clearInterval(interval);
//       document.documentElement.style.scrollBehavior = "auto";
//       script.remove();
//       canonical.remove();
//       metaTags.forEach((tag) => {
//         const name = tag.name || tag.property;
//         if (!name) return;
//         document
//           .querySelectorAll(`meta[name='${name}'], meta[property='${name}']`)
//           .forEach((meta) => meta.remove());
//       });
//     };
//   }, [testimonials.length]);

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//     setTimeout(() => setFormSubmitted(false), 5000);
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
//                 AG
//               </div>
//               <div>
//                 <div className="text-lg font-bold text-gray-900">Ashwini Gawad</div>
//                 <div className="text-xs text-emerald-700 font-medium">MSc Clinical Dietitian • 25+ Years</div>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center gap-6">
//               <a href="#services" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
//                 Services
//               </a>
//               <a href="#about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
//                 About
//               </a>
//               <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
//                 Success Stories
//               </a>
//               <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition">
//                 FAQ
//               </a>
//               <a
//                 href="#contact"
//                 className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm"
//               >
//                 Book Consultation
//               </a>
//             </div>

//             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {mobileMenuOpen && (
//             <div className="lg:hidden mt-4 pb-4 space-y-3 border-t pt-4">
//               <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium py-2 text-gray-700">
//                 Services
//               </a>
//               <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium py-2 text-gray-700">
//                 About
//               </a>
//               <a
//                 href="#testimonials"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block text-sm font-medium py-2 text-gray-700"
//               >
//                 Success Stories
//               </a>
//               <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium py-2 text-gray-700">
//                 FAQ
//               </a>
//               <a
//                 href="#contact"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block bg-emerald-600 text-white px-5 py-3 rounded-full text-center text-sm font-semibold"
//               >
//                 Book Consultation
//               </a>
//             </div>
//           )}
//         </div>
//       </nav>

//       <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDMwSDI0djEyaDEyVjMwem0wIDI0SDI0djEyaDEyVjU0em0yNCAwSDQ4djEyaDEyVjU0em0wLTI0SDQ4djEyaDEyVjMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

//         <div className="max-w-7xl mx-auto relative">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="text-white">
//               <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
//                 <Award className="w-5 h-5 text-yellow-300" />
//                 <span className="text-sm font-semibold">Award-Winning Clinical Dietitian • Former VLCC Area Head</span>
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 Transform Your Health with <span className="text-yellow-300">Real Indian Food</span>
//               </h1>

//               <p className="text-xl md:text-2xl mb-6 text-white/95 leading-relaxed">
//                 Expert clinical nutrition for <span className="font-bold">diabetes, PCOS, cardiac care</span> and <span className="font-bold">weight management</span>. Personalized meal plans that actually work with your lifestyle.
//               </p>

//               <div className="flex flex-wrap gap-3 mb-8">
//                 <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
//                   <CheckCircle className="w-5 h-5 text-emerald-200" />
//                   <span className="font-medium">25+ Years Experience</span>
//                 </div>
//                 <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
//                   <CheckCircle className="w-5 h-5 text-emerald-200" />
//                   <span className="font-medium">500+ Success Stories</span>
//                 </div>
//                 <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
//                   <CheckCircle className="w-5 h-5 text-emerald-200" />
//                   <span className="font-medium">Online Consultations</span>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href="#contact"
//                   className="bg-white text-emerald-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all font-bold flex items-center gap-2 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transform"
//                 >
//                   <Calendar className="w-5 h-5" /> Book Free Consultation
//                 </a>
//                 <a
//                   href="https://wa.me/919769761766"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-bold flex items-center gap-2 backdrop-blur-sm"
//                 >
//                   <MessageCircle className="w-5 h-5" /> WhatsApp Now
//                 </a>
//               </div>

//               <div className="mt-8 flex items-center gap-3">
//                 <div className="flex -space-x-2">
//                   {["👨", "👩", "👴", "👵"].map((emoji, i) => (
//                     <div key={i} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl border-2 border-white">
//                       {emoji}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-sm">
//                   <div className="flex gap-1 mb-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
//                     ))}
//                   </div>
//                   <span className="font-semibold">Trusted by 500+ clients across India</span>
//                 </div>
//               </div>
//             </div>

//             <div className="hidden lg:block">
//               <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
//                 <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
//                   <Shield className="w-6 h-6 text-emerald-300" />
//                   Why Choose Ashwini Gawad?
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     "25+ years clinical experience (Hospital + VLCC)",
//                     "Master's Degree in Dietetics (IGNOU)",
//                     "Former Area Technical Head - 25+ centers",
//                     "Specialized in diabetes, PCOS, cardiac care",
//                     "Personalized Indian meal plans",
//                     "No crash diets or unrealistic restrictions",
//                     "Measurable results in 2-4 weeks",
//                     "Ongoing WhatsApp support",
//                     "Family-friendly nutrition guidance",
//                     "Online & offline consultations",
//                   ].map((item, idx) => (
//                     <div key={idx} className="flex items-start gap-3 text-white">
//                       <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-300" />
//                       <span className="text-base leading-relaxed">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-4 px-4 bg-gradient-to-r from-gray-900 to-slate-800">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
//             <div className="flex items-center gap-2">
//               <Building2 className="w-5 h-5" />
//               <span>Former Area Technical Head - VLCC</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <GraduationCap className="w-5 h-5" />
//               <span>MSc Dietetics - IGNOU</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Award className="w-5 h-5" />
//               <span>2x Award Winner</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Users className="w-5 h-5" />
//               <span>500+ Lives Transformed</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, idx) => (
//               <div key={idx} className="text-center group hover:scale-105 transition-transform">
//                 <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-900 font-bold text-lg mb-1">{stat.label}</div>
//                 <div className="text-gray-600 text-sm">{stat.description}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               Clinical Nutrition Services
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Specialized Diet Plans for Your Health Goals</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Evidence-based nutrition therapy for specific health conditions. All plans use real Indian foods.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group hover:-translate-y-1"
//               >
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}
//                 >
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
//                 <div className="space-y-3 mb-6">
//                   {service.features.map((feature, i) => (
//                     <div key={i} className="flex items-center gap-3 text-gray-700">
//                       <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="font-medium">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="bg-emerald-50 rounded-xl p-4 mb-6">
//                   <div className="text-sm font-semibold text-emerald-900">{service.caseStudy}</div>
//                 </div>
//                 <a
//                   href="#contact"
//                   className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-emerald-700"
//                 >
//                   Book Consultation <ArrowRight className="w-5 h-5" />
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="about" className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                 About Ashwini Gawad
//               </div>
//               <h2 className="text-4xl font-bold mb-6 text-gray-900">25+ Years of Clinical Excellence in Nutrition Therapy</h2>
//               <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
//                 <p>
//                   I’m Ashwini Gawad, a Clinical Dietitian and Nutrition Consultant with over 25 years of experience across hospitals, pharmaceutical organizations, and national wellness chains.
//                 </p>
//                 <p>
//                   As the former <strong>Area Technical Head at VLCC Healthcare</strong>, I led nutrition and slimming programs across 25+ franchised centers in West, South, and Central India. My approach combines clinical expertise from hospital practice (Sir KEM Hospital, Mumbai) with practical wellness program experience.
//                 </p>
//                 <p>
//                   I specialize in <strong>therapeutic diet planning</strong> for diabetes, cardiac and renal disease, PCOS, obesity, thyroid disorders, and geriatric care - always with a focus on sustainable, Indian-food-based plans that families can actually follow.
//                 </p>
//                 <p>
//                   My work has helped <strong>500+ clients</strong> achieve measurable improvements in weight, blood sugar levels, and lipid profiles through personalized, evidence-based nutrition counseling.
//                 </p>
//               </div>
//               <div className="mt-8">
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105"
//                 >
//                   Work With Me <ArrowRight className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
//                 <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
//                   <GraduationCap className="w-6 h-6 text-emerald-600" />
//                   Education & Credentials
//                 </h3>
//                 <div className="space-y-3">
//                   <div>
//                     <div className="font-bold text-gray-900">Master of Science in Dietetics</div>
//                     <div className="text-gray-600">Indira Gandhi National Open University (IGNOU)</div>
//                     <div className="text-sm text-gray-500">Dissertation: Effect of High Protein Diet in PCOS</div>
//                   </div>
//                   <div className="border-t pt-3">
//                     <div className="font-bold text-gray-900">PG Diploma in Dietetics</div>
//                     <div className="text-gray-600">Institute of Hotel Management, Mumbai</div>
//                     <div className="text-sm text-gray-500">Dissertation: Role of Diet in Acne</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 {credentials.map((cred, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-white rounded-xl p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
//                   >
//                     <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white mb-3">
//                       {cred.icon}
//                     </div>
//                     <div className="font-bold text-gray-900 text-sm mb-1">{cred.title}</div>
//                     <div className="text-xs text-gray-600 mb-1">{cred.org}</div>
//                     <div className="text-xs text-emerald-600 font-semibold">{cred.detail}</div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
//                 <h3 className="text-lg font-bold mb-3 text-gray-900">Professional Certifications</h3>
//                 <div className="space-y-2 text-sm text-gray-700">
//                   {["FODMAP Diet for IBS - Monash University", "Nutrigenomics - The Gene Box", "Supplementation - Qua Nutrition", "Online Nutrition Counselling - Qua Nutrition", "Food Product Development - MSME (2025)"].map(
//                     (cert, idx) => (
//                       <div key={idx} className="flex items-center gap-2">
//                         <CheckCircle className="w-4 h-4 text-blue-600" />
//                         <span>{cert}</span>
//                       </div>
//                     ),
//                   )}
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6 border-l-4 border-emerald-600">
//                 <div className="font-bold text-emerald-900 mb-2 text-lg">{testimonials[activeTestimonial].condition}</div>
//                 <div className="text-emerald-700 font-semibold text-xl">{testimonials[activeTestimonial].result}</div>
//               </div>

//               <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
//                 {testimonials[activeTestimonial].text}
//               </p>

//               <div className="flex gap-2 justify-center">
//                 {testimonials.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveTestimonial(idx)}
//                     className={`h-3 rounded-full transition-all ${idx === activeTestimonial ? "bg-emerald-600 w-12" : "bg-gray-300 w-3"}`}
//                     aria-label={`View testimonial ${idx + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105"
//             >
//               Get Your Success Story <ArrowRight className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               Professional Journey
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">25+ Years of Excellence in Clinical Nutrition</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">From hospital clinical practice to leading national wellness programs</p>
//           </div>

//           <div className="space-y-8">
//             <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition-shadow">
//               <div className="flex items-start gap-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
//                   <Briefcase className="w-8 h-8" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900">Area Technical Head</h3>
//                       <div className="text-emerald-600 font-semibold text-lg">VLCC Healthcare Ltd.</div>
//                     </div>
//                     <div className="text-gray-600 font-medium">2013-2019 | 2023-2025</div>
//                   </div>
//                   <ul className="space-y-2 text-gray-700">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                       <span>Led slimming & nutrition practice across <strong>25+ franchised centers</strong> in South, West, and Central India</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                       <span>Designed and implemented anti-obesity, diabetes, and wellness campaigns increasing program uptake and client results</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                       <span>Led <strong>100+ regional training sessions</strong> for clinical teams on complex conditions and case handling</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//                       <span>Created standardized SOPs and counseling protocols improving client outcomes across all centers</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
//               <div className="flex items-start gap-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
//                   <Users className="w-8 h-8" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900">Regional Trainer - Slimming & Nutrition</h3>
//                       <div className="text-blue-600 font-semibold text-lg">VLCC Healthcare Ltd.</div>
//                     </div>
//                     <div className="text-gray-600 font-medium">1999-2011</div>
//                   </div>
//                   <ul className="space-y-2 text-gray-700">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                       <span>Primary technical and training anchor for West Zone centers on protocols and counseling quality</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                       <span>Designed local anti-obesity campaigns (health camps, doctor tie-ups, corporate talks) increasing program enrollment</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                       <span>Supported teams with complex client planning for diabetes, cardiac risk, and hormonal issues</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-shadow">
//               <div className="flex items-start gap-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
//                   <Heart className="w-8 h-8" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900">Clinical Dietitian</h3>
//                       <div className="text-purple-600 font-semibold text-lg">Sir KEM Hospital, Mumbai</div>
//                     </div>
//                     <div className="text-gray-600 font-medium">1998-1999</div>
//                   </div>
//                   <ul className="space-y-2 text-gray-700">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
//                       <span>Planned and implemented therapeutic diets for in-patients, OPD, and ICCU cases</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
//                       <span>Managed diet planning for diabetes, cardiac, renal, and critical conditions across all age groups</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               Nutrition Insights
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Latest Health & Nutrition Tips</h2>
//             <p className="text-xl text-gray-600">Evidence-based advice for better health</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {blogPosts.map((post, idx) => (
//               <article
//                 key={idx}
//                 className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow group"
//               >
//                 <div className="text-xs font-bold text-emerald-600 mb-3 uppercase tracking-wide">{post.category}</div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
//                   {post.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-500 flex items-center gap-2">
//                     <Clock className="w-4 h-4" /> {post.readTime}
//                   </span>
//                   <a
//                     href="#contact"
//                     className="text-emerald-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
//                   >
//                     Read More <ArrowRight className="w-4 h-4" />
//                   </a>
//                 </div>
//                 <div className="mt-4 pt-4 border-t border-gray-200">
//                   <div className="text-xs text-gray-500">{post.keywords}</div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="faq" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               Common Questions
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
//             <p className="text-xl text-gray-600">Everything you need to know about working with me</p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => (
//               <details
//                 key={idx}
//                 className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group hover:shadow-xl transition-shadow"
//               >
//                 <summary className="font-bold text-lg cursor-pointer flex items-center justify-between text-gray-900">
//                   {faq.q}
//                   <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform flex-shrink-0 ml-4 text-emerald-600" />
//                 </summary>
//                 <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDMwSDI0djEyaDEyVjMwem0wIDI0SDI0djEyaDEyVjU0em0yNCAwSDQ4djEyaDEyVjU0em0wLTI0SDQ4djEyaDEyVjMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

//         <div className="max-w-6xl mx-auto relative" id="contact">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your Health?</h2>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto">
//               Book your free consultation today and start your journey to better health with personalized Indian meal plans
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             <div className="bg-white rounded-3xl p-8 shadow-2xl">
//               <h3 className="text-2xl font-bold mb-6 text-gray-900">Book Your Consultation</h3>

//               {formSubmitted ? (
//                 <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
//                   <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
//                   <h4 className="text-xl font-bold text-emerald-900 mb-2">Thank You!</h4>
//                   <p className="text-emerald-700">I’ll get back to you within 24 hours.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleFormSubmit} className="space-y-5">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition"
//                       placeholder="Enter your name"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition"
//                       placeholder="your@email.com"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       required
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition"
//                       placeholder="+91 98765 43210"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Tell me about your health goals *</label>
//                     <textarea
//                       name="message"
//                       required
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       rows={4}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition resize-none"
//                       placeholder="Diabetes management, weight loss, PCOS treatment, etc."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
//                   >
//                     <Send className="w-5 h-5" />
//                     Send Message
//                   </button>
//                 </form>
//               )}
//             </div>

//             <div className="space-y-6">
//               <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20">
//                 <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

//                 <div className="space-y-6">
//                   <a href="tel:+919769761766" className="flex items-center gap-4 text-white hover:text-emerald-200 transition group">
//                     <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <Phone className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-white/80">Call / WhatsApp</div>
//                       <div className="font-bold text-lg">+91-976-976-1766</div>
//                     </div>
//                   </a>

//                   <a href="mailto:ashwini.gawad@gmail.com" className="flex items-center gap-4 text-white hover:text-emerald-200 transition group">
//                     <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <Mail className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-white/80">Email</div>
//                       <div className="font-bold">ashwini.gawad@gmail.com</div>
//                     </div>
//                   </a>

//                   <div className="flex items-center gap-4 text-white">
//                     <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
//                       <MapPin className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-white/80">Location</div>
//                       <div className="font-bold">Borivali, Mumbai, Maharashtra</div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 text-white">
//                     <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
//                       <Clock className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-white/80">Available</div>
//                       <div className="font-bold">Mon-Sat: 9:00 AM - 7:00 PM</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20">
//                 <h3 className="text-xl font-bold text-white mb-4">Connect on Social Media</h3>
//                 <div className="flex gap-4">
//                   <a href="https://www.linkedin.com/in/ashwini-gawad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110">
//                     <Linkedin className="w-6 h-6" />
//                   </a>
//                   <a href="https://www.instagram.com/ashwinigawad_dietitian" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110">
//                     <Instagram className="w-6 h-6" />
//                   </a>
//                   <a href="https://www.facebook.com/ashwinigawaddietitian" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110">
//                     <Facebook className="w-6 h-6" />
//                   </a>
//                   <a href="https://www.youtube.com/@ashwinigawad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110">
//                     <Youtube className="w-6 h-6" />
//                   </a>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl rounded-3xl p-6 border-2 border-yellow-400/30">
//                 <div className="flex items-center gap-3 mb-3">
//                   <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
//                   <h4 className="text-white font-bold text-lg">Quick Response Guaranteed</h4>
//                 </div>
//                 <p className="text-white/90 text-sm">
//                   I personally respond to all inquiries within 24 hours. For urgent consultations, WhatsApp me directly!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30">
//               Client Success Stories
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real People, Real Results</h2>
//             <p className="text-xl text-white/90">Hear from clients who transformed their health with personalized nutrition</p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="text-6xl">{testimonials[activeTestimonial].image}</div>
//               <div>
//                 <div className="font-bold text-2xl text-gray-900">{testimonials[activeTestimonial].name}</div>
//                 <div className="text-gray-600 mb-1">{testimonials[activeTestimonial].age}</div>
//                 <div className="flex gap-1">
//                   {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100 mb-4">
//               <div className="text-emerald-900 font-bold">{testimonials[activeTestimonial].condition}</div>
//               <div className="text-emerald-700 font-semibold">{testimonials[activeTestimonial].result}</div>
//             </div>

//             <p className="text-gray-700 text-lg leading-relaxed">{testimonials[activeTestimonial].text}</p>

//             <div className="flex gap-2 justify-center mt-6">
//               {testimonials.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveTestimonial(idx)}
//                   className={`h-2.5 rounded-full transition-all ${idx === activeTestimonial ? "bg-emerald-600 w-10" : "bg-gray-200 w-2.5"}`}
//                   aria-label={`View testimonial ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold">
//                   AG
//                 </div>
//                 <div>
//                   <div className="font-bold text-lg">Ashwini Gawad</div>
//                   <div className="text-sm text-gray-400">Clinical Dietitian</div>
//                 </div>
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Transforming health with evidence-based Indian nutrition plans for 25+ years.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-emerald-400">Quick Links</h4>
//               <div className="space-y-2">
//                 <a href="#services" className="block text-gray-400 hover:text-white transition text-sm">
//                   Services
//                 </a>
//                 <a href="#about" className="block text-gray-400 hover:text-white transition text-sm">
//                   About
//                 </a>
//                 <a href="#testimonials" className="block text-gray-400 hover:text-white transition text-sm">
//                   Success Stories
//                 </a>
//                 <a href="#faq" className="block text-gray-400 hover:text-white transition text-sm">
//                   FAQ
//                 </a>
//                 <a href="#contact" className="block text-gray-400 hover:text-white transition text-sm">
//                   Contact
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-emerald-400">Services</h4>
//               <div className="space-y-2 text-sm text-gray-400">
//                 <div>Diabetes Management</div>
//                 <div>PCOS Treatment</div>
//                 <div>Weight Loss Programs</div>
//                 <div>Cardiac Care</div>
//                 <div>Thyroid & Hormonal</div>
//                 <div>Geriatric Nutrition</div>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4 text-emerald-400">Contact Info</h4>
//               <div className="space-y-3 text-sm text-gray-400">
//                 <div className="flex items-center gap-2">
//                   <Phone className="w-4 h-4" />
//                   <span>+91-976-976-1766</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Mail className="w-4 h-4" />
//                   <span>ashwini.gawad@gmail.com</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MapPin className="w-4 h-4" />
//                   <span>Borivali, Mumbai</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-700 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="text-gray-400 text-sm text-center md:text-left">
//                 © 2025 Ashwini Gawad. All rights reserved. | Clinical Dietitian Mumbai | MSc Dietetics, IGNOU
//               </p>
//               <div className="flex gap-4">
//                 <a href="https://www.linkedin.com/in/ashwini-gawad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.instagram.com/ashwinigawad_dietitian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.facebook.com/ashwinigawaddietitian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.youtube.com/@ashwinigawad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
//                   <Youtube className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <a
//         href="https://wa.me/919769761766"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
//         aria-label="WhatsApp"
//       >
//         <MessageCircle className="w-8 h-8" />
//       </a>
//     </div>
//   );
// }
=======
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                AG
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Ashwini Gawad</div>
                <div className="text-xs text-emerald-700 font-medium">MSc Clinical Dietitian • 25+ Years</div>
              </div>
            </div>

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
                Expert clinical nutrition for <span className="font-bold">diabetes, PCOS, cardiac care</span> and <span className="font-bold">weight management</span>. Personalized meal plans that actually work with your lifestyle.
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
                    <div key={i} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl border-2 border-white">
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
                  <Shield className="w-6 h-6 text-emerald-300" />
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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group hover:scale-105 transition-transform">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Clinical Nutrition Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Specialized Diet Plans for Your Health Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Evidence-based nutrition therapy for specific health conditions. All plans use real Indian foods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group hover:-translate-y-1"
              >
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
            ))}
          </div>
        </div>
      </section>

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
                  I’m Ashwini Gawad, a Clinical Dietitian and Nutrition Consultant with over 25 years of experience across hospitals, pharmaceutical organizations, and national wellness chains.
                </p>
                <p>
                  As the former <strong>Area Technical Head at VLCC Healthcare</strong>, I led nutrition and slimming programs across 25+ franchised centers in West, South, and Central India. My approach combines clinical expertise from hospital practice (Sir KEM Hospital, Mumbai) with practical wellness program experience.
                </p>
                <p>
                  I specialize in <strong>therapeutic diet planning</strong> for diabetes, cardiac and renal disease, PCOS, obesity, thyroid disorders, and geriatric care - always with a focus on sustainable, Indian-food-based plans that families can actually follow.
                </p>
                <p>
                  My work has helped <strong>500+ clients</strong> achieve measurable improvements in weight, blood sugar levels, and lipid profiles through personalized, evidence-based nutrition counseling.
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
                  {["FODMAP Diet for IBS - Monash University", "Nutrigenomics - The Gene Box", "Supplementation - Qua Nutrition", "Online Nutrition Counselling - Qua Nutrition", "Food Product Development - MSME (2025)"].map(
                    (cert, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>{cert}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6 border-l-4 border-emerald-600">
                <div className="font-bold text-emerald-900 mb-2 text-lg">{testimonials[activeTestimonial].condition}</div>
                <div className="text-emerald-700 font-semibold text-xl">{testimonials[activeTestimonial].result}</div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                {testimonials[activeTestimonial].text}
              </p>

              <div className="flex gap-2 justify-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-3 rounded-full transition-all ${idx === activeTestimonial ? "bg-emerald-600 w-12" : "bg-gray-300 w-3"}`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105"
            >
              Get Your Success Story <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Professional Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">25+ Years of Excellence in Clinical Nutrition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From hospital clinical practice to leading national wellness programs</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Area Technical Head</h3>
                      <div className="text-emerald-600 font-semibold text-lg">VLCC Healthcare Ltd.</div>
                    </div>
                    <div className="text-gray-600 font-medium">2013-2019 | 2023-2025</div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Led slimming & nutrition practice across <strong>25+ franchised centers</strong> in South, West, and Central India</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Designed and implemented anti-obesity, diabetes, and wellness campaigns increasing program uptake and client results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Led <strong>100+ regional training sessions</strong> for clinical teams on complex conditions and case handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Created standardized SOPs and counseling protocols improving client outcomes across all centers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Users className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Regional Trainer - Slimming & Nutrition</h3>
                      <div className="text-blue-600 font-semibold text-lg">VLCC Healthcare Ltd.</div>
                    </div>
                    <div className="text-gray-600 font-medium">1999-2011</div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Primary technical and training anchor for West Zone centers on protocols and counseling quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Designed local anti-obesity campaigns (health camps, doctor tie-ups, corporate talks) increasing program enrollment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Supported teams with complex client planning for diabetes, cardiac risk, and hormonal issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Clinical Dietitian</h3>
                      <div className="text-purple-600 font-semibold text-lg">Sir KEM Hospital, Mumbai</div>
                    </div>
                    <div className="text-gray-600 font-medium">1998-1999</div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Planned and implemented therapeutic diets for in-patients, OPD, and ICCU cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Managed diet planning for diabetes, cardiac, renal, and critical conditions across all age groups</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Nutrition Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Latest Health & Nutrition Tips</h2>
            <p className="text-xl text-gray-600">Evidence-based advice for better health</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow group"
              >
                <div className="text-xs font-bold text-emerald-600 mb-3 uppercase tracking-wide">{post.category}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {post.readTime}
                  </span>
                  <a
                    href="#contact"
                    className="text-emerald-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">{post.keywords}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
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
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform flex-shrink-0 ml-4 text-emerald-600" />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDMwSDI0djEyaDEyVjMwem0wIDI0SDI0djEyaDEyVjU0em0yNCAwSDQ4djEyaDEyVjU0em0wLTI0SDQ4djEyaDEyVjMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-6xl mx-auto relative" id="contact">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your Health?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book your free consultation today and start your journey to better health with personalized Indian meal plans
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Book Your Consultation</h3>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">Thank You!</h4>
                  <p className="text-emerald-700">I’ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tell me about your health goals *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition resize-none"
                      placeholder="Diabetes management, weight loss, PCOS treatment, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <a href="tel:+919769761766" className="flex items-center gap-4 text-white hover:text-emerald-200 transition group">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-white/80">Call / WhatsApp</div>
                      <div className="font-bold text-lg">+91-976-976-1766</div>
                    </div>
                  </a>

                  <a href="mailto:ashwini.gawad@gmail.com" className="flex items-center gap-4 text-white hover:text-emerald-200 transition group">
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
                  <a href="https://www.linkedin.com/in/ashwini-gawad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/ashwinigawad_dietitian" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/ashwinigawaddietitian" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.youtube.com/@ashwinigawad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition hover:scale-110">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl rounded-3xl p-6 border-2 border-yellow-400/30">
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
                  className={`h-2.5 rounded-full transition-all ${idx === activeTestimonial ? "bg-emerald-600 w-10" : "bg-gray-200 w-2.5"}`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold">
                  AG
                </div>
                <div>
                  <div className="font-bold text-lg">Ashwini Gawad</div>
                  <div className="text-sm text-gray-400">Clinical Dietitian</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming health with evidence-based Indian nutrition plans for 25+ years.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-emerald-400">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition text-sm">
                  Services
                </a>
                <a href="#about" className="block text-gray-400 hover:text-white transition text-sm">
                  About
                </a>
                <a href="#testimonials" className="block text-gray-400 hover:text-white transition text-sm">
                  Success Stories
                </a>
                <a href="#faq" className="block text-gray-400 hover:text-white transition text-sm">
                  FAQ
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition text-sm">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-emerald-400">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Diabetes Management</div>
                <div>PCOS Treatment</div>
                <div>Weight Loss Programs</div>
                <div>Cardiac Care</div>
                <div>Thyroid & Hormonal</div>
                <div>Geriatric Nutrition</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-emerald-400">Contact Info</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-976-976-1766</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>ashwini.gawad@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Borivali, Mumbai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Ashwini Gawad. All rights reserved. | Clinical Dietitian Mumbai | MSc Dietetics, IGNOU
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/ashwini-gawad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/ashwinigawad_dietitian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/ashwinigawaddietitian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@ashwinigawad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/919769761766"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
>>>>>>> a6486ecdf344fe61f966995ec7f34844985e3f61
