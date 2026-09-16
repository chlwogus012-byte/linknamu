import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <Image src={imageUrl} alt={name} fill sizes="112px" className="object-cover object-top" />
      </div>
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="max-w-xs text-sm text-zinc-500 dark:text-zinc-400">
        {bio}
      </p>
    </div>
  );
}
