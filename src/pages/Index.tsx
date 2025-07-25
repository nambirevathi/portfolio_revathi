
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import ResumeModal from '../components/ResumeModal';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import PublicationsSection from '../components/PublicationsSection';
import ContactSection from '../components/ContactSection';


const Index = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <div className="fixed inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/10 to-indigo-700/10 pointer-events-none" />
      
      <Navigation scrollToSection={scrollToSection} />
      
      <ResumeModal showResume={showResume} setShowResume={setShowResume} />

      <HeroSection scrollToSection={scrollToSection} setShowResume={setShowResume} />
      
      <AboutSection />
      
      <SkillsSection />
      
      <ExperienceSection />
      
      <ProjectsSection />
      
      <PublicationsSection />
      
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 bg-[hsl(var(--navbar-bg))]/90 border-t border-border relative">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Revathi Nambi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
