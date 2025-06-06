import { setRequestLocale } from 'next-intl/server';

// Sections
import { Hero } from '@/sections/hero';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <div className="bg-grid-pattern absolute inset-0 h-full w-full"></div>
      <div className="pb-16">
        <Hero />
      </div>
    </>
  );
}
