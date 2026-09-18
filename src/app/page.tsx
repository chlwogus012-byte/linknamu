"use client";

import { useEffect, useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { id: "github", label: "🐙 깃허브", href: "https://github.com/chlwogus012-byte" },
  { id: "blog", label: "✉️ 블로그", href: "https://blog.naver.com/akabsk" },
  { id: "homepage", label: "🏠 홈페이지", href: "https://brabomarketing.co.kr/" },
];

export default function Home() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data) => setCounts(data))
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    fetch(`/api/clicks/${id}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCounts((prev) => ({ ...prev, [id]: data.count }));
      })
      .catch(() => {});
  };

  return (
    <div className="flex flex-1 justify-center bg-gradient-to-b from-[#fffaf3] via-[#fdedd9] to-[#fbdfc2] px-6 py-20 sm:px-8">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <ProfileHeader
          name="최재현"
          bio="AI 마케팅 컨설턴트 | AI로 마케팅 합니다"
          imageUrl="/profile.png"
        />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              label={link.label}
              href={link.href}
              count={counts[link.id] ?? 0}
              onClick={() => handleClick(link.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
