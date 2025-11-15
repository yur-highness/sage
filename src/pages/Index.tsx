import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import CaseStudies from '../components/CaseStudies';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import { HeroParallaxDemo } from '../components/Parallax';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HeroParallaxDemo />
        <Services />
        <HowItWorks />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
