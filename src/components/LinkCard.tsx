type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-3xl border border-white/60 bg-white/40 px-5 py-4 font-medium text-[#3a2f28] shadow-[0_8px_24px_-12px_rgba(120,72,32,0.25)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_12px_28px_-12px_rgba(120,72,32,0.3)]"
    >
      {label}
    </a>
  );
}
