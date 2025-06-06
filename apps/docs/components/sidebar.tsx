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
            <h2 className="text-muted-foreground mb-2 px-2 py-2 text-xs font-semibold tracking-tight">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item: DocItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:bg-secondary block w-fit rounded-xl px-2 py-2 text-xs transition-all duration-150 ${
                      pathname === item.href ? 'bg-secondary' : ''
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
