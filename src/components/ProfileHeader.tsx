type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-14 w-14 text-zinc-400 dark:text-zinc-500"
        >
          <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-9 1.79-9 5v3h18v-3c0-3.21-5.134-5-9-5z" />
        </svg>
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
