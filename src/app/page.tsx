import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "🐙 깃허브", href: "https://github.com/chlwogus012-byte" },
  { label: "✉️ 블로그", href: "https://blog.naver.com/akabsk" },
  { label: "🏠 홈페이지", href: "https://brabomarketing.co.kr/" },
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader
          name="최재현"
          bio="AI 마케팅 컨설턴트 | AI로 마케팅 합니다"
          imageUrl="/profile.png"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
