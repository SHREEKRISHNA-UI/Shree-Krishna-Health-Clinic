import Image from "next/image";

export const metadata = {
  title: "Home - Shree Krishna Health Clinic",
  description: "Professional healthcare specializing in gynecology, dermatology, and orthopedics.",
};

export default function Home() {
  return (
    <div className="bg-zinc-50 min-h-screen font-sans dark:bg-black">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800">
            Shree Krishna Health Clinic
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Compassionate, expert care in Gynecology, Dermatology, and
            Orthopedics. Your health is our priority.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/gynecology"
              className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Gynecology
            </a>
            <a
              href="/dermatology"
              className="px-6 py-3 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Dermatology
            </a>
            <a
              href="/orthopedics"
              className="px-6 py-3 rounded bg-red-600 text-white hover:bg-red-700"
            >
              Orthopedics
            </a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">
            Our Specialties
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="text-center p-6 bg-white shadow rounded">
              <h3 className="text-xl font-bold">Gynecology</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive women’s health, prenatal care, and surgical
                expertise.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow rounded">
              <h3 className="text-xl font-bold">Dermatology</h3>
              <p className="mt-2 text-gray-600">
                Medical and cosmetic skin treatments tailored to your needs.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow rounded">
              <h3 className="text-xl font-bold">Orthopedics</h3>
              <p className="mt-2 text-gray-600">
                Expert care for bones, joints and muscles to keep you moving.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="/services"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Learn More About Our Services
            </a>
          </div>
          <div className="mt-10 text-center bg-blue-50 p-6 rounded">
            <h3 className="text-2xl font-semibold">
              Ready to make an appointment?
            </h3>
            <p className="mt-2 text-gray-700">
              Call us at <strong>+977 985-7086368</strong>, or use our <a href="/contact" className="text-blue-600 underline">contact form</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
