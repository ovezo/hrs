import { FlagChip } from '@/components/UnionJack';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 flex items-center justify-center gap-2.5">
        <span className="text-xs text-gray-400">© 2026 HRS — Humanoid Robot Solutions UK</span>
        <FlagChip className="h-3.5 w-7" />
      </div>
    </footer>
  );
}
