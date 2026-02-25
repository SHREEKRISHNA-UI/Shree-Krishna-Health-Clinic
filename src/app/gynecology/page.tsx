import Image from "next/image";
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

          <section className="mt-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-blue-50">
              <div className="lg:w-1/2 w-full h-[500px] relative">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000"
                  alt="Dr. Sarawati Shrestha"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="bg-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Lead Gynecologist</span>
                </div>
              </div>

              <div className="lg:w-1/2 w-full p-8 lg:p-12">
                <h2 className="text-4xl font-bold text-primary mb-2">Dr. Sarawati Shrestha</h2>
                <div className="text-xl font-medium text-blue-600 mb-6">BSc, MBBS, MD (Gynea & Obs)</div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-2xl text-2xl">👩‍⚕️</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Expertise</h4>
                      <p className="text-gray-600">Specialist in Maternity, Reproductive Health, and Advanced Laparoscopic Surgery.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-2xl text-2xl">📜</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Medical Registration</h4>
                      <p className="text-gray-600">NMC No: 11356</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-2xl text-2xl">🏥</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Experience</h4>
                      <p className="text-gray-600">Over 10+ years of dedicated service in women's healthcare and complex obstetrics.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4">
                    Schedule Appointment
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

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
