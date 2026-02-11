import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Testimonials from './components/Testimonials/Testimonials';
import LiveEvents from './components/LiveEvents/LiveEvents';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import WhoItsFor from './components/WhoItsFor/WhoItsFor';
import BecomeASpeaker from './components/BecomeASpeaker/BecomeASpeaker';
import PlanAhead from './components/PlanAhead/PlanAhead';
import Engagement from './components/Engagement/Engagement';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureCards />
        <Testimonials />
        <LiveEvents />
        <UpcomingEvents />
        <WhoItsFor />
        <BecomeASpeaker />
        <PlanAhead />
        <Engagement />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
