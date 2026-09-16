import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full bg-white shadow-[0_12px_30px_-8px_rgba(120,72,32,0.35)] ring-4 ring-white/80">
        <Image src={imageUrl} alt={name} fill priority sizes="128px" className="object-cover object-top" />
      </div>
      <h1 className="text-xl font-bold text-[#3a2f28]">
        {name}
      </h1>
      <p className="max-w-xs text-sm text-[#7a6a5c]">
        {bio}
      </p>
    </div>
  );
}
