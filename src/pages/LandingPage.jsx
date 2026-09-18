import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Problem from '../components/landing/Problem';
import Solution from '../components/landing/Solution';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import DashboardPreview from '../components/landing/DashboardPreview';
import Automation from '../components/landing/Automation';
import BeforeAfter from '../components/landing/BeforeAfter';
import ForWho from '../components/landing/ForWho';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07090D] text-white">
      <Navbar />

      <Hero />

      <Problem />

      <Solution />

      <Features />

      <HowItWorks />

      <DashboardPreview />

      <Automation />

      <BeforeAfter />

      <ForWho />

      <CTA />

      <Footer />
    </main>
  );
}
