import DoctorCard from "@/components/DoctorCard";
import Link from "next/link";

export const metadata = {
  title: "Orthopedic Surgery & Care | Shree Krishna Health Clinic",
  description: "Comprehensive orthopedic care for bones, joints, and sports injuries in Butwal. Expert surgeons and advanced rehabilitation.",
};

export default function OrthopedicsPage() {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Senior Orthopedic Surgeon",
      bio: "Expert in joint replacement and complex trauma surgery with extensive experience in leading medical institutions.",
      treatments: [
        "Knee & Hip Replacement",
        "Arthroscopic Surgery",
        "Complex Trauma",
        "Joint Reconstruction"
      ],
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500",
    }

  ];

  return (
    <div className="bg-background-soft min-h-screen">
      {/* Subject Hero */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-white text-center italic underline decoration-secondary decoration-4 underline-offset-12">Orthopedics & Joint Care</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center leading-relaxed">
            Restoring your mobility and lifestyle with precision surgery and compassionate rehabilitation. We treat the whole patient, not just the injury.
          </p>
        </div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Joint Replacement",
                desc: "State-of-the-art hip, knee, and shoulder replacements using minimally invasive techniques for faster recovery.",
                icon: "🦴"
              },
              {
                title: "Sports Medicine",
                desc: "Specialized care for athletes of all levels, focusing on arthroscopic repair of ligaments and tendons.",
                icon: "🏃"
              },
              {
                title: "Pediatric Ortho",
                desc: "Specialized treatment for growing bones and muscles, covering congenital conditions and trauma.",
                icon: "🧒"
              }
            ].map((service) => (
              <div key={service.title} className="glass-card p-10 hover:border-secondary transition-all">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 mb-24">
            <div className="grid md:grid-cols-2">
              <div className="p-12 lg:p-20">
                <h2 className="text-3xl font-bold mb-8">Comprehensive Bone & Joint Health</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our orthopedic department is equipped with modern diagnostic and surgical facilities. We work closely with our physiotherapy unit to ensure a seamless recovery process.
                </p>
                <div className="space-y-4">
                  {[
                    "Digital X-Ray & Imaging",
                    "Modern Physiotherapy Unit",
                    "Advanced Casting Techniques",
                    "Post-Surgical Rehabilitation"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4 text-primary font-bold">
                      <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-secondary text-xs">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 relative min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl opacity-10">🏥</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Orthopedic Experts</h2>
              <div className="h-1.5 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-500 max-w-xl mx-auto">Get treated by the best surgeons in the region with a track record of successful outcomes.</p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
          </div>

          <div className="bg-neutral-base rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Don&apos;t Let Pain Limit Your Life</h3>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Early diagnosis of joint and bone conditions can prevent long-term damage. Book your screening today.</p>
              <Link href="/contact" className="btn-secondary px-12 py-4">
                Request Appointment
              </Link>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
