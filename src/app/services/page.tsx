import Link from "next/link";

export const metadata = {
  title: "Professional Medical Services | Shree Krishna Health Clinic",
  description: "Comprehensive medical services in Butwal: Orthopedics, Gynecology, Dermatology, and Laparoscopic Surgery.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Orthopedics",
      subtitle: "Bone & Joint Care",
      desc: "Focus on restoring mobility and treating musculoskeletal issues with precision.",
      features: ["Fracture & Trauma Management", "Joint Pain & Arthritis", "Physiotherapy Coordination"],
      icon: "🦴",
      color: "border-blue-400",
      link: "/orthopedics"
    },
    {
      title: "Gynecology",
      subtitle: "Women's Health",
      desc: "Comprehensive care for women at every life stage, from maternity to wellness.",
      features: ["Prenatal & Postnatal Care", "Reproductive Health Specialist", "Preventive Screenings"],
      icon: "🩺",
      color: "border-pink-400",
      link: "/gynecology"
    },
    {
      title: "Dermatology",
      subtitle: "Skin, Hair & Nail",
      desc: "Medical and aesthetic skin treatments tailored to your unique skin type.",
      features: ["Medical Skin Management", "Aesthetic Procedures", "PRP Hair Therapy"],
      icon: "✨",
      color: "border-purple-400",
      link: "/dermatology"
    },
    {
      title: "Laparoscopy",
      subtitle: "Keyhole Surgery",
      desc: "Modern minimally invasive techniques for faster recovery and minimal scarring.",
      features: ["Gynecological Laparoscopy", "Gallbladder & Hernia Repair", "Appendix Surgery"],
      icon: "🔬",
      color: "border-teal-400",
      link: "/laparoscopy"
    }
  ];

  return (
    <div className="bg-background-soft min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-24 text-white relative">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 italic">Our Medical Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            We offer specialized expertise across multiple disciplines to ensure comprehensive healthcare for you and your family.
          </p>
          <div className="h-1 w-32 bg-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className={`glass-card p-10 lg:p-12 border-l-8 ${s.color} hover:bg-white transition-all transform hover:-translate-y-1`}>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block">{s.subtitle}</span>
                    <h2 className="text-3xl font-bold text-primary">{s.title}</h2>
                  </div>
                  <div className="text-5xl opacity-20">{s.icon}</div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed italic border-l-2 border-gray-100 pl-4">
                  {s.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <span className="text-secondary">✦</span> {f}
                    </div>
                  ))}
                </div>
                <Link href={s.link} className="inline-flex items-center gap-2 font-bold text-secondary hover:text-primary transition-colors group">
                  Detailed Information <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 lg:p-20 bg-white rounded-[3rem] shadow-xl border border-gray-100 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-primary italic">Expert Care When You Need It</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
                Our clinic is equipped with the latest diagnostic technology and a team of specialists ready to provide you with the best medical care.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="btn-primary px-12 py-4">
                  Book a Consultation
                </Link>
                <a href="tel:+9779857086368" className="btn-secondary px-12 py-4">
                  Emergency Contact
                </a>
              </div>
            </div>
            {/* Decors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
