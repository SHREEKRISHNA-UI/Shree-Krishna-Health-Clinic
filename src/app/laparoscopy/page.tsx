import Link from "next/link";

export const metadata = {
  title: "Laparoscopic Surgery | Shree Krishna Health Clinic",
  description: "Advanced minimally invasive surgery including gynecological and general laparoscopy in Butwal.",
};

export default function LaparoscopyPage() {
  return (
    <div className="bg-background-soft min-h-screen">
      {/* Subject Hero */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white italic">Minimally Invasive <br /><span className="text-accent underline decoration-4 decoration-secondary">Laparoscopic Surgery</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Advanced &quot;Keyhole&quot; surgery techniques that ensure faster recovery, less pain, and minimal scarring for our patients.
            </p>
            <Link href="/contact" className="btn-secondary">
              Speak with a Surgeon
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="glass-card p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Specialized</div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Gynecological Laparoscopy</h2>
                <p className="text-gray-600 mb-8">Our expert gynecologists use laparoscopy for precise diagnostic and therapeutic procedures with reduced downtime.</p>
                <ul className="space-y-4">
                  {["Cyst removal (Ovarian Cystectomy)", "Endometriosis management", "Laparoscopic Hysterectomy", "Ectopic pregnancy management"].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-sm font-bold text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center text-[10px]">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 group-hover:rotate-12 transition-transform">🩺</div>
            </div>

            <div className="glass-card p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Comprehensive</div>
                <h2 className="text-3xl font-bold mb-6 text-primary">General Laparoscopy</h2>
                <p className="text-gray-600 mb-8">Advanced surgical assistance for a variety of common conditions, focusing on safety and efficiency.</p>
                <ul className="space-y-4">
                  {["Gallbladder removal", "Hernia repair surgery", "Appendix surgery", "Diagnostic laparoscopy"].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-sm font-bold text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-[10px]">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 group-hover:rotate-12 transition-transform">🔬</div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-xl p-12 lg:p-20 border border-gray-100 mb-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">The Laparoscopic Edge</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { title: "Less Pain", desc: "Small incisions mean less discomfort.", icon: "😌" },
                  { title: "Fast Recovery", desc: "Return home and work sooner.", icon: "⚡" },
                  { title: "Minimal Scars", desc: "Smaller, cosmetic-friendly marks.", icon: "✨" },
                  { title: "Lower Risk", desc: "Reduced chance of infection.", icon: "🛡️" }
                ].map((edge) => (
                  <div key={edge.title}>
                    <div className="text-4xl mb-4">{edge.icon}</div>
                    <h4 className="font-bold text-primary mb-2">{edge.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{edge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-6">Advanced Surgery, Faster Recovery</h3>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto italic">
              Our multidisciplinary team ensures that every laparoscopic procedure is performed with the highest safety standards and personalized follow-up care.
            </p>
            <Link href="/contact" className="btn-secondary px-12 py-4">
              Schedule a Consultation
            </Link>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
