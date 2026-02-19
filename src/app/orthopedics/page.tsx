import DoctorCard from "@/components/DoctorCard";

export const metadata = {
  title: "Orthopedics - Shree Krishna Health Clinic",
  description: "Comprehensive orthopedic care for bones, joints, and sports injuries.",
};

export default function OrthopedicsPage() {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Orthopedic Surgeon",
      bio: "Specialist in joint replacement and arthroscopic surgery.",
      treatments: [
        "Knee and hip replacement",
        "Sports injury repair",
        "Fracture care",
      ],
      imageUrl: "https://via.placeholder.com/400x300?text=Dr+Rajesh",
    },
    {
      name: "Dr. Sneha Verma",
      title: "Pediatric Orthopedist",
      bio: "Focus on musculoskeletal disorders in children and adolescents.",
      treatments: [
        "Scoliosis treatment",
        "Clubfoot correction",
        "Growth plate injuries",
      ],
      imageUrl: "https://via.placeholder.com/400x300?text=Dr+Sneha",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Our Orthopedics Services</h2>
      <p className="text-gray-700">
        From sports injuries to chronic joint disorders, our orthopedics team is
        equipped to help you recover mobility and reduce pain.
      </p>
      <section className="mt-6">
        <h3 className="text-2xl font-semibold">Key Treatments</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Joint replacement (hip, knee, shoulder)</li>
          <li>Arthroscopic surgery</li>
          <li>Fracture management and casting</li>
          <li>Sports injury rehabilitation</li>
          <li>Pediatric orthopedic care</li>
        </ul>
      </section>
      <section className="mt-6">
        <h3 className="text-2xl font-semibold">Patient-Centered Care</h3>
        <p className="text-gray-700">
          Our specialists develop individualized recovery plans and work closely
          with physical therapists to ensure a smooth return to everyday
          activities. We emphasize minimally invasive options when appropriate.
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
