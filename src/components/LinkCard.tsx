type LinkCardProps = {
  label: string;
  href: string;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ label, href, count, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-2 rounded-3xl border border-white/60 bg-white/40 px-5 py-4 font-medium text-[#3a2f28] shadow-[0_8px_24px_-12px_rgba(120,72,32,0.25)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_12px_28px_-12px_rgba(120,72,32,0.3)]"
    >
      <span className="flex-1 text-center">{label}</span>
      <span className="text-xs font-normal text-[#7a6a5c]">{count}회</span>
    </a>
  );
}
