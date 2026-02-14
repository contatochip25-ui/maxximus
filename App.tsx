import React from 'react';
import HeroSection from './components/HeroSection';
import AuthoritySection from './components/AuthoritySection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-neon selection:text-brand-black overflow-x-hidden">
      <HeroSection />
      <AuthoritySection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default App;