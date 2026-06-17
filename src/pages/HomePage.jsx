import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import WhyMatters from '../components/home/WhyMatters';
import ExploreRole from '../components/home/ExploreRole';
import WhyAgewell from '../components/home/WhyAgewell';
import Testimonials from '../components/home/Testimonials';
import AppSection from '../components/home/AppSection';
import PartnerSection from '../components/home/PartnerSection';

export default function HomePage() {
  useEffect(() => {
    document.title = 'AgeWell – Where Generations Grow Together';
  }, []);

  return (
    <Layout>
      <Hero />
      <TrustStrip />
      <WhyMatters />
      <ExploreRole />
      <WhyAgewell />
      <Testimonials />
      <AppSection />
      <PartnerSection />
    </Layout>
  );
}
