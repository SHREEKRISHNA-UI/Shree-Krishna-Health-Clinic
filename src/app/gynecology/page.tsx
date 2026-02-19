import DoctorCard from "@/components/DoctorCard";

export const metadata = {
  title: "Gynecology - Shree Krishna Health Clinic",
  description: "Expert gynecological care including prenatal, surgical, and wellness services.",
};

export default function GynecologyPage() {
  const doctors = [
    {
      name: "Dr. Priya Sharma",
      title: "Senior Gynecologist",
      bio: "Over 15 years of experience in women’s health and maternity care.",
      treatments: [
        "Prenatal and postnatal care",
        "Fertility consultations",
        "Pap smears and cervical screenings",
      ],
      imageUrl: "https://via.placeholder.com/400x300?text=Dr+Priya",
    },
    {
      name: "Dr. Anjali Rao",
      title: "Gynecologic Surgeon",
      bio: "Specializes in minimally invasive procedures and endometriosis.",
      treatments: [
        "Laparoscopic surgery",
        "Endometriosis management",
        "Contraceptive counseling",
      ],
      imageUrl: "https://via.placeholder.com/400x300?text=Dr+Anjali",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Our Gynecology Services</h2>
      <p className="text-gray-700">
        The gynecology department at Shree Krishna Health Clinic provides complete
        care for women at every stage of life. From routine checkups to advanced
        surgical procedures, our team is dedicated to your wellbeing.
      </p>
      <section className="mt-6">
        <h3 className="text-2xl font-semibold">Treatments Offered</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Prenatal and postnatal care</li>
          <li>Family planning and contraceptive services</li>
          <li>Menopause management</li>
          <li>Minimally invasive surgical procedures</li>
          <li>Cervical and breast cancer screenings</li>
        </ul>
      </section>
      <section className="mt-6">
        <h3 className="text-2xl font-semibold">Why Choose Our Department</h3>
        <p className="text-gray-700">
          We combine compassionate care with cutting-edge medical technology to
          ensure the best outcomes for our patients. Our specialists are board
          certified and continually update their skills through training and
          research.
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
