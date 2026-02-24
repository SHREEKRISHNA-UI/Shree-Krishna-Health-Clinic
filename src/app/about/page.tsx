import Link from "next/link";

export const metadata = {
  title: "About Us | Shree Krishna Health Clinic",
  description: "Learn about our mission, history, and why patients trust us for their healthcare needs in Butwal.",
};

export default function AboutPage() {
  return (
    <div className="bg-background-soft min-h-screen">
      {/* Subject Hero */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white italic">Our Story & Mission</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Dedicated to providing compassionate, high-quality medical care to the Butwal community since 2005.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-video bg-neutral-base rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-6xl">
                🏢
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 italic underline decoration-secondary decoration-4 underline-offset-8">Compassionate Healthcare</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Established in 2005, Shree Krishna Health Clinic is committed to providing compassionate, high-quality medical care to our community. Our team of experienced specialists in gynecology, dermatology, and orthopedics is dedicated to ensuring your health and wellbeing.
              </p>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-secondary pl-6 mb-8">
                &quot;To offer personalized healthcare services using the latest medical advancements while maintaining a warm and welcoming environment for all patients.&quot;
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Our Values", desc: "Integrity, compassion, and excellence in every patient interaction.", icon: "💎" },
              { title: "Our Vision", desc: "To be the leading choice for specialized healthcare in Butwal and beyond.", icon: "👁️" },
              { title: "Our Commitment", desc: "Continuous improvement and adoption of modern medical technologies.", icon: "🤝" }
            ].map((v) => (
              <div key={v.title} className="glass-card p-10 text-center">
                <div className="text-4xl mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-primary">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] shadow-xl p-12 lg:p-20 border border-gray-100">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Trust Us?</h2>
              <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Board-certified specialists",
                "Modern Diagnostic Tools",
                "Patient-centered approach",
                "Affordable Quality Care",
                "Minimal Wait Times",
                "Clean & Safe Environment",
                "Follow-up Support",
                "Multidisciplinary Team"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                    ✓
                  </div>
                  <span className="font-semibold text-primary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <Link href="/contact" className="btn-primary px-12 py-5 text-lg">
              Take the First Step to Better Health
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
