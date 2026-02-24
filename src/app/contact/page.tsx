"use client";
import { useState } from "react";

// export const metadata = {
//   title: "Contact - Shree Krishna Health Clinic",
//   description: "Get in touch with our clinic via phone or contact form.",
// };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted", form);
    // in a real app you would send this to an API
    alert("Thank you for contacting us! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-gray-700">
        Have questions or need to book an appointment? Reach out using the form
        below or call us at <strong>+977 985-7086368</strong>.
      </p>
      <div className="text-center text-gray-600">
        <p>Address: Puspalal Park-6, Butwal 32907</p>
        <p>Hours: Sun–Fri 7:00 AM–7:30 PM | Sat 9:00 AM–5:30 PM</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
