import Link from 'next/link';
import { FlagChip } from '@/components/UnionJack';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xs text-gray-400">© 2026 HRS — Humanoid Robot Solutions UK</span>
          <FlagChip className="h-3.5 w-7" />
        </div>
        <a
          href="mailto:info@hrsrobot.co.uk"
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          info@hrsrobot.co.uk
        </a>
      </div>
    </footer>
  );
}
