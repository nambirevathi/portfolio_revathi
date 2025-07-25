
import { FC } from 'react';
import { ChevronDown, Download } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  setShowResume: (show: boolean) => void;
}

const HeroSection: FC<HeroSectionProps> = ({ scrollToSection, setShowResume }) => {
  const handleDownloadResume = () => {
    // Create a downloadable resume link
    const link = document.createElement('a');
    link.href = '/Revathi_Resume.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'Revathi Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[hsl(var(--home-bg))]">
      <div className="absolute inset-0 bg-[hsl(var(--home-bg))]/10 backdrop-blur-sm"></div>
      <div className="text-center z-10 fade-in flex flex-col items-center">
        <div className="mb-8">
          <img
            src="/Revathi2.JPG"
            alt="Revathi Nambi"
            className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-border shadow-2xl"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[hsl(var(--home-text))]">
          Revathi Nambi
        </h1>
        <p className="text-lg md:text-xl text-[hsl(var(--home-text))]/80 mb-4 font-medium">
          M.Tech – Computer Science and Engineering
        </p>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[hsl(var(--home-text))]/80">
          Full Stack Developer & Software Developer Instructor
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-[hsl(var(--button-bg))] hover:bg-[hsl(var(--button-bg))]/90 text-[hsl(var(--button-text))] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Projects
          </button>
          
          <button
            onClick={handleDownloadResume}
            className="bg-[hsl(var(--button-bg))] hover:bg-[hsl(var(--button-bg))]/90 text-[hsl(var(--button-text))] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 border border-border"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-[hsl(var(--home-text))]/60" />
      </div>
    </section>
  );
};

export default HeroSection;
