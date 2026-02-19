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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {imageUrl && (
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={`${name} photo`}
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">{title}</p>
        {bio && <p className="text-gray-600 text-sm mb-2">{bio}</p>}
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {treatments.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
