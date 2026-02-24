"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted", form);
    alert("Thank you for contacting us! We will get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-background-soft min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600">
            Have a question or want to book an appointment? Our team is here to help you. Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 italic text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-primary shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Location</h4>
                    <p className="text-gray-600 text-sm">Puspalal Park-6, Butwal 32907, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-primary shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Phone</h4>
                    <p className="text-gray-600 text-sm">+977 985-7086368</p>
                    <p className="text-gray-600 text-sm">+977 985-7083903</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-primary shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Email</h4>
                    <p className="text-gray-600 text-sm">info@shreekrishnaclinic.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 italic text-primary">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 text-base">Sun – Fri:</span>
                  <span className="font-semibold text-primary text-base underline decoration-secondary">7:00 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 text-base">Saturday:</span>
                  <span className="font-semibold text-primary text-base underline decoration-secondary">9:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-10">
              <h3 className="text-2xl font-bold mb-8 italic text-primary">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+977 98XXXXXXX"
                    className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 h-40 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                    required
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="btn-primary w-full md:w-auto px-10">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
