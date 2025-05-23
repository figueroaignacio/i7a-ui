'use client';

// Hooks
import { usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';

// Utils
import { cn } from '@/lib/utils';

// Definitions
import { DocItem, DocSection } from '@/lib/definitions';

export function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations('ui');
  const docsNavigation = t.raw('docsNavigation');

  return (
    <aside className="hidden h-[calc(100vh-5rem)] lg:block">
      <nav>
        {docsNavigation.map((section: DocSection, index: number) => (
          <div key={section.title} className={cn('pb-4', index !== 0 && 'pt-4')}>
            <h2 className="mb-2 text-sm font-semibold tracking-tight">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item: DocItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:bg-secondary hover:text-primary block rounded-xl px-3 py-2 text-sm transition-all duration-150 ${
                      pathname === item.href ? 'bg-secondary text-primary' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
