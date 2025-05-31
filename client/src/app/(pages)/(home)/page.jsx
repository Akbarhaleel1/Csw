import {
  CountriesSection,
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  UniversitySearch,
  VideoTestimonialsPage,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UniversitySearch/>
      <VideoTestimonialsPage/>
      <CountriesSection/>
      <Featured />
      <OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
