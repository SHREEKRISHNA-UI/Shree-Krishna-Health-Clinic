export const metadata = {
  title: "About Us - Shree Krishna Health Clinic",
  description: "Learn about our mission, history, and why patients trust us.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">About Shree Krishna Health Clinic</h1>
      <p className="text-gray-700">
        Established in 2005, Shree Krishna Health Clinic is committed to providing
        compassionate, high-quality medical care to our community. Our team of
        experienced specialists in gynecology, dermatology, and orthopedics is
        dedicated to ensuring your health and wellbeing.
      </p>
      <section>
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-gray-700">
          To offer personalized healthcare services using the latest medical
          advancements while maintaining a warm and welcoming environment for all
          patients.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Contact & Hours</h2>
        <p className="text-gray-700">
          <strong>Address:</strong> Puspalal Park-6, Butwal 32907<br />
          <strong>Phone:</strong> +977 985-7086368, 985-7083903<br />
          <strong>Hours:</strong> Sun–Fri 7:00 AM–7:30 PM; Sat 9:00 AM–5:30 PM
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Board-certified specialists</li>
          <li>State-of-the-art facilities</li>
          <li>Patient-centered approach</li>
          <li>Comprehensive care under one roof</li>
        </ul>
      </section>
    </div>
  );
}
