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
import ScrollReveal from '../components/ui/ScrollReveal';

export default function LandingPage() {
  return (
    <main className="nodus-site min-h-screen overflow-x-hidden bg-[#050b18] text-white">
      <Navbar />
      <div className="nodus-section-stack">
        <Hero />
        <ScrollReveal><Problem /></ScrollReveal>
        <ScrollReveal delay={35}><Solution /></ScrollReveal>
        <ScrollReveal delay={25}><Features /></ScrollReveal>
        <ScrollReveal delay={20}><HowItWorks /></ScrollReveal>
        <ScrollReveal><DashboardPreview /></ScrollReveal>
        <ScrollReveal delay={30}><Automation /></ScrollReveal>
        <ScrollReveal><BeforeAfter /></ScrollReveal>
        <ScrollReveal delay={25}><ForWho /></ScrollReveal>
        <ScrollReveal><CTA /></ScrollReveal>
      </div>
      <Footer />
    </main>
  );
}
