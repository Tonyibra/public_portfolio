import Footer from '@/components/features/landing/footer/Footer';
import Intro from '@/components/features/landing/intro/Intro';
import LetsWork from '@/components/features/landing/letsWork/LetsWork';
import MarqueeSection from '@/components/features/landing/marqueeSection/MarqueeSection';
import ServiceSection from '@/components/features/landing/serviceSection/ServiceSection';
import SuccessTracker from '@/components/features/landing/successTracker/SuccessTracker';
import WhyusSection from '@/components/features/landing/whyusSection/WhyusSection';
import WorkSection from '@/components/features/landing/workSection/WorkSection';
import TopNav from '@/components/topNav/TopNav';
import React from 'react';

const index = () => {
  return (
    <div>
      <TopNav />
      <Intro />
      <WhyusSection />
      <MarqueeSection />
      <SuccessTracker />
      <ServiceSection />
      <WorkSection />
      <LetsWork />
      <Footer />
    </div>
  );
};

export default index;
