export const metadata = {
  title: "Laparoscopy - Shree Krishna Health Clinic",
  description: "Minimally invasive laparoscopic surgery services.",
};

export default function LaparoscopyPage() {
  return (
    <div className="space-y-8 prose mx-auto">
      <h1>Laparoscopic Surgery</h1>
      <p>
        At Shree Krishna Health Clinic we perform a range of minimally invasive
        laparoscopic procedures that promote quicker recovery and smaller scars.
      </p>
      <section>
        <h2>Gynecological Laparoscopy</h2>
        <p>Procedures include:</p>
        <ul>
          <li>Cyst removal</li>
          <li>Endometriosis treatment</li>
          <li>Laparoscopic hysterectomy</li>
        </ul>
      </section>
      <section>
        <h2>General Laparoscopy</h2>
        <p>We also offer laparoscopic assistance for:</p>
        <ul>
          <li>Gallbladder removal</li>
          <li>Hernia repair</li>
          <li>Appendix surgery</li>
        </ul>
      </section>
      <p>
        The laparoscopic team works closely with our gynecology and general
        surgery specialists to ensure safe outcomes and comprehensive follow-up
        care.
      </p>
    </div>
  );
}
