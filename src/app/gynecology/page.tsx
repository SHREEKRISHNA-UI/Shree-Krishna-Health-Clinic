import Link from "next/link";

export const metadata = {
  title: "Gynecology & Obstetrics | Shree Krishna Health Clinic",
  description: "Expert gynecological care including prenatal, surgical, and wellness services in Butwal.",
};

export default function GynecologyPage() {
  return (
    <div className="bg-background-soft min-h-screen">
      {/* Subject Hero */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-white">Gynecology & Obstetrics</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            The gynecology and obstetrics department at Shree Krishna Health Clinic provides comprehensive women’s health care, from routine wellness to complex reproductive health needs.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Maternity & Prenatal Care */}
            <div className="glass-card p-8 border-t-4 border-pink-400">
              <div className="text-3xl mb-4">🤰</div>
              <h3 className="text-2xl font-bold mb-4 italic text-primary">Maternity Care</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">✔</span> Routine prenatal check-ups
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">✔</span> High-risk pregnancy management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">✔</span> Postnatal support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">✔</span> Breastfeeding counselling
                </li>
              </ul>
            </div>

            {/* Reproductive Health & Screening */}
            <div className="glass-card p-8 border-t-4 border-blue-400">
              <div className="text-3xl mb-4">🩺</div>
              <h3 className="text-2xl font-bold mb-4 italic text-primary">Reproductive Health</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Family planning & contraceptive
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Menopause management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> PCOD/PCOS specialist
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Infertility consultations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Cervical & breast cancer screenings
                </li>
              </ul>
            </div>

            {/* Minimally Invasive Surgery */}
            <div className="glass-card p-8 border-t-4 border-purple-400">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4 italic text-primary">Advanced Surgery</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✔</span> Laparoscopic hysterectomy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✔</span> Cyst removal procedures
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✔</span> Endometriosis management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✔</span> Advanced uterine surgery
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 bg-white shadow-xl rounded-[2rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-gray-100">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Department</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We combine compassionate care with cutting-edge medical technology to ensure the best outcomes for our patients. Our specialists are board-certified and continually update their skills through training and research.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="h-5 w-5 bg-accent rounded-full flex items-center justify-center text-[10px]">✨</span>
                  Qualified Female Doctors
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="h-5 w-5 bg-accent rounded-full flex items-center justify-center text-[10px]">✨</span>
                  Modern Operating Theatre
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="h-5 w-5 bg-accent rounded-full flex items-center justify-center text-[10px]">✨</span>
                  Safe & Confidential Care
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="h-5 w-5 bg-accent rounded-full flex items-center justify-center text-[10px]">✨</span>
                  Holistic Approach
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full text-center">
              <Link href="/contact" className="btn-primary block w-full py-5 text-lg">
                Book a Consultation
              </Link>
              <p className="mt-4 text-xs text-gray-400">Response within 2 hours during working hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
