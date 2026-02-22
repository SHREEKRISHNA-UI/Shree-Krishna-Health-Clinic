export const metadata = {
  title: "Services - Shree Krishna Health Clinic",
  description: "Explore the medical services we offer in gynecology, dermatology, and orthopedics.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-8 prose mx-auto">
      <h1>Our Services</h1>
      <section>
        <h2>Orthopedics (Bone &amp; Joint Care)</h2>
        <p>
          Focus on restoring mobility and treating musculoskeletal issues.
        </p>
        <ul>
          <li>Fracture &amp; Trauma Management</li>
          <li>Joint Pain &amp; Arthritis (osteoporosis, back/knee pain)</li>
          <li>Specialized Procedures: injections, physiotherapy coordination</li>
        </ul>
        <p>
          <strong>Key Expert:</strong> Dr. Saraswoti Shrestha is a frequently
          recommended specialist at our clinic.
        </p>
      </section>
      <section>
        <h2>Gynecology &amp; Obstetrics (Women’s Health)</h2>
        <p>
          Comprehensive care for women at every life stage.
        </p>
        <ul>
          <li>Maternity Care: prenatal check-ups, high-risk pregnancy management, postnatal support</li>
          <li>Reproductive Health: menstrual disorders, PCOD/PCOS, infertility counseling</li>
          <li>Preventive Screenings: Pap smears, cervical cancer screenings, vaccinations</li>
        </ul>
      </section>
      <section>
        <h2>Laparoscopic Surgery (Minimally Invasive)</h2>
        <p>
          "Keyhole" surgery techniques that ensure faster recovery and minimal scarring.
        </p>
        <ul>
          <li>Gynecological Laparoscopy: cyst removal, endometriosis treatment, laparoscopic hysterectomy</li>
          <li>General Laparoscopy: gallbladder removal, hernia repair, appendix surgery</li>
        </ul>
      </section>
      <section>
        <h2>Dermatology (Skin, Hair &amp; Nail Care)</h2>
        <ul>
          <li>Medical Dermatology: eczema, fungal infections, acne, psoriasis diagnosis and management</li>
          <li>Aesthetic Procedures: mole/wart removal, chemical peels, laser scar and pigmentation treatment</li>
          <li>Hair &amp; Nail Health: PRP therapy for hair loss, nail infection treatment</li>
        </ul>
      </section>
    </div>
  );
}
