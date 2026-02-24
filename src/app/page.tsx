import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home - Shree Krishna Health Clinic",
  description: "Professional healthcare specializing in gynecology, dermatology, and orthopedics.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/modern_clinic_hero_1771931560417.png"
            alt="Modern Clinic"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 animate-fade-in">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full text-accent text-sm font-bold uppercase tracking-wider mb-6">
              Trusted Healthcare in Butwal
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-white">
              Advanced Care for Your <span className="text-secondary">Well-being</span>
            </h1>
            <p className="text-lg text-blue-50 leading-relaxed mb-10 max-w-xl">
              Experience world-class medical expertise in Gynecology, Dermatology, and Orthopedics. We combine compassion with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-secondary">
                Book Your Visit
              </Link>
              <Link href="/services" className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Specialties</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600">
              We provide specialized medical attention across three major disciplines, ensuring you receive the most expert care possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Gynecology",
                desc: "Expert care for women's health, from routine checkups to advanced surgical procedures.",
                icon: "🩺",
                link: "/gynecology",
                color: "border-pink-200 hover:shadow-pink-100"
              },
              {
                title: "Dermatology",
                desc: "Specialized skin treatments for medical and cosmetic needs using modern diagnostic tools.",
                icon: "✨",
                link: "/dermatology",
                color: "border-blue-200 hover:shadow-blue-100"
              },
              {
                title: "Orthopedics",
                desc: "Restoring mobility and strengthening your musculoskeletal system with precision care.",
                icon: "🦴",
                link: "/orthopedics",
                color: "border-green-200 hover:shadow-green-100"
              }
            ].map((specialty) => (
              <div key={specialty.title} className={`glass-card p-10 group transition-all duration-300 hover:-translate-y-2 border-t-4 ${specialty.color}`}>
                <div className="text-4xl mb-6">{specialty.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{specialty.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {specialty.desc}
                </p>
                <Link href={specialty.link} className="text-secondary font-bold flex items-center group-hover:gap-2 transition-all">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-blue-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl">
                🏥
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-[240px]">
              <div className="text-4xl font-bold text-primary mb-1">10k+</div>
              <div className="text-sm text-gray-500 font-medium">Patients Treated Successfully</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Why Shree Krishna Health Clinic?</h2>
            <div className="space-y-6">
              {[
                { title: "Expert Doctors", desc: "Our specialists are highly qualified and experienced in their respective fields." },
                { title: "Modern Technology", desc: "We use the latest medical equipment for accurate diagnosis and effective treatment." },
                { title: "Personalized Care", desc: "Every patient receives a tailored treatment plan focused on their unique needs." },
                { title: "Affordable Services", desc: "High-quality healthcare shouldn't be a luxury. We provide cost-effective medical solutions." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[2rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-white">Your Path to Health Starts Here</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
                Don&apos;t wait for your symptoms to worsen. Book a consultation today and get expert care from the best medical professionals in Butwal.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-accent transition-all shadow-lg">
                  Schedule Now
                </Link>
                <a href="tel:+9779857086368" className="px-8 py-4 border border-white/20 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Call: +977 985-7086368
                </a>
              </div>
            </div>
            {/* Abstract background shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
