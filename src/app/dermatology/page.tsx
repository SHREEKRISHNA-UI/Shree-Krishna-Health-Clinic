import DoctorCard from "@/components/DoctorCard";
import Link from "next/link";

export const metadata = {
  title: "Dermatology | Shree Krishna Health Clinic",
  description: "Comprehensive skin and cosmetic treatments provided by experienced dermatologists in Butwal.",
};

export default function DermatologyPage() {
  // const doctors = [
  //   {
  //     name: "Dr. Vikram Patel",
  //     title: "Senior Consultant Dermatologist",
  //     bio: "A specialist in medical dermatology with over 15 years of experience in treating complex skin conditions.",
  //     treatments: [
  //       "Acne & Rosacea",
  //       "Eczema & Psoriasis",
  //       "Skin Cancer Screening",
  //       "Vitiligo Management"
  //     ],
  //     imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500",
  //   },
  //   {
  //     name: "Dr. Meera Joshi",
  //     title: "Cosmetic Dermatologist",
  //     bio: "Focusing on non-surgical aesthetic treatments and rejuvenation techniques to enhance your natural beauty.",
  //     treatments: [
  //       "Laser Therapies",
  //       "Chemical Peels",
  //       "PRP Therapy",
  //       "Anti-Aging Treatments"
  //     ],
  //     imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500",
  //   },
  // ];

  return (
    <div className="bg-background-soft min-h-screen">
      {/* Subject Hero */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-white">Advanced Dermatology</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Your skin is the body&apos;s largest organ. We provide comprehensive medical and cosmetic care to keep it healthy, vibrant, and protected.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-8">Medical dermatology for all ages</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From chronic skin conditions to acute infections, our team uses the latest diagnostic tools and treatment protocols to provide effective relief and long-term management strategies.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-4">
                {[
                  "Acne & Rosacea Care",
                  "Mole & Wart Removal",
                  "Skin Allergy Testing",
                  "Eczema Management",
                  "Fungal Infection Care",
                  "Pediatric Dermatology"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <span className="text-secondary">✦</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-10 bg-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 italic text-primary underline decoration-secondary decoration-4 underline-offset-8">Aesthetic Excellence</h3>
              <p className="text-gray-600 mb-8 text-sm">
                Enhance your natural radiance with our minimally invasive cosmetic procedures, performed under strict medical supervision for safety and precision.
              </p>
              <div className="space-y-4">
                {[
                  { name: "Laser Rejuvenation", desc: "Target pigmentation and fine lines." },
                  { name: "PRP Hair Therapy", desc: "Natural solution for thinning hair." },
                  { name: "Medical Grade Peels", desc: "Revitalize skin texture and tone." }
                ].map((service) => (
                  <div key={service.name} className="p-4 border border-gray-100 rounded-xl hover:bg-background-soft transition-colors cursor-default">
                    <h4 className="font-bold text-primary text-sm">{service.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Meet Our Specialists</h2>
              <p className="text-gray-500 font-medium">Board-certified experts dedicated to your skin health.</p>
            </div>
            {/* <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div> */}
          </div>

          <div className="bg-primary rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-4">Healthy Skin is a Phone Call Away</h3>
            <p className="text-blue-100 mb-8 italic">Consult with our experts for a personalized skin analysis.</p>
            <Link href="/contact" className="btn-secondary inline-block px-12 py-4">
              Book a Consultation
            </Link>
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
