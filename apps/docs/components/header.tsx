import { useTranslations } from 'next-intl';

// Components
import { SiteMobileHeader } from './site-mobile-header';

export function Navbar() {
  const t = useTranslations();
  const navigation = t.raw('ui.navigation');
  const docsNavigation = t.raw('ui.docsNavigation');

  return (
    <header className="sticky top-0 left-0 z-50 mx-auto flex w-full max-w-[1580px] items-center justify-between px-5 backdrop-blur-xl md:px-10">
      <SiteMobileHeader navigation={docsNavigation} />
    </header>
  );
}
