import Link from 'next/link';
import { FlagChip } from '@/components/UnionJack';
import CookieSettingsLink from '@/components/analytics/CookieSettingsLink';

const linkClass = 'text-xs text-gray-400 hover:text-gray-600 transition-colors';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xs text-gray-400">© 2026 HRS — Humanoid Robot Solutions UK</span>
          <FlagChip className="h-3.5 w-7" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link href="/privacy" className={linkClass}>Privacy</Link>
          <Link href="/cookies" className={linkClass}>Cookies</Link>
          <CookieSettingsLink className={linkClass} />
          <a href="mailto:info@hrsrobot.co.uk" className={linkClass}>
            info@hrsrobot.co.uk
          </a>
        </div>
      </div>
    </footer>
  );
}
