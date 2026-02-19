export const metadata = {
  title: "Services - Shree Krishna Health Clinic",
  description: "Explore the medical services we offer in gynecology, dermatology, and orthopedics.",
};

export default function ServicesPage() {
  const specialties = [
    {
      name: "Gynecology",
      description:
        "Comprehensive women’s health, prenatal care, and surgical expertise.",
      link: "/gynecology",
    },
    {
      name: "Dermatology",
      description:
        "Medical and cosmetic skin treatments tailored to your needs.",
      link: "/dermatology",
    },
    {
      name: "Orthopedics",
      description:
        "Expert care for bones, joints and muscles to keep you moving.",
      link: "/orthopedics",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Services</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {specialties.map((s) => (
          <a
            key={s.name}
            href={s.link}
            className="block p-6 bg-white shadow rounded hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{s.name}</h2>
            <p className="mt-2 text-gray-700">{s.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
