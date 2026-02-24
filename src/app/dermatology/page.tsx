import DoctorCard from "@/components/DoctorCard";

export const metadata = {
  title: "Dermatology - Shree Krishna Health Clinic",
  description: "Skin and cosmetic treatments provided by experienced dermatologists.",
};

export default function DermatologyPage() {
  const doctors = [
    {
      name: "Dr. Vikram Patel",
      title: "Dermatologist",
      bio: "Expert in medical dermatology and hair disorders.",
      treatments: [
        "Acne and rosacea management",
        "Skin cancer screenings",
        "Hair loss treatments",
      ],
      imageUrl: "https://cdn.pixabay.com/photo/2025/10/16/03/56/doctor-9897349_1280.png",
    },
    {
      name: "Dr. Meera Joshi",
      title: "Cosmetic Dermatologist",
      bio: "Focuses on non-surgical aesthetic treatments and skin rejuvenation.",
      treatments: [
        "Laser therapies",
        "Chemical peels",
        "Mole and wart removal",
      ],
      imageUrl: "https://via.placeholder.com/400x300?text=Dr+Meera",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Our Dermatology Services</h2>
      <p className="text-gray-700">
        Skin health is vital for overall wellness. Our dermatology department
        addresses both cosmetic and medical skin concerns with personalized care.
      </p>
      <section className="mt-6">
        <h3 className="text-2xl font-semibold">Common Treatments</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Acne and rosacea treatment</li>
          <li>Skin cancer screenings and mole removal</li>
          <li>Laser therapy and chemical peels</li>
          <li>Hair and scalp disorders (including PRP therapy for hair loss)</li>
          <li>Nail health and infections</li>
          <li>Anti-aging and cosmetic procedures</li>
        </ul>
      </section>
      <section className="mt-6">
        <h3 className="text-2xl font-semibold">Our Approach</h3>
        <p className="text-gray-700">
          Each patient receives a tailored treatment plan. Our dermatologists
          emphasize long-term skin health and use the latest non-invasive
          techniques to achieve natural-looking results.
        </p>
      </section>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {doctors.map((doc) => (
          <DoctorCard key={doc.name} {...doc} />
        ))}
      </div>
    </div>
  );
}
