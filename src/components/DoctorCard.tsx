import Image from "next/image";

type DoctorCardProps = {
  name: string;
  title: string;
  bio?: string;
  treatments: string[];
  imageUrl?: string;
};

export default function DoctorCard({
  name,
  title,
  bio,
  treatments,
  imageUrl,
}: DoctorCardProps) {
  return (
    <div className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-64 bg-accent/10">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-primary/20">
            👨‍⚕️
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span className="text-white text-xs font-bold uppercase tracking-widest">Expert Specialist</span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-primary mb-1">{name}</h3>
        <p className="text-secondary font-semibold text-sm mb-4 uppercase tracking-wider">{title}</p>

        {bio && (
          <p className="text-gray-600 text-sm mb-6 leading-relaxed italic">
            &quot;{bio}&quot;
          </p>
        )}

        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Specializations</p>
          <div className="flex flex-wrap gap-2">
            {treatments.map((t) => (
              <span key={t} className="px-3 py-1 bg-background-soft border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 hover:bg-accent/20 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
