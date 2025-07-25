
import { FC } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation: FC<NavigationProps> = ({ scrollToSection }) => {
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Publications', 'Contact'];
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[hsl(var(--navbar-bg))]/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Name/Brand - moved to left */}
            <div 
            className="text-2xl font-bold text-[hsl(var(--navbar-text))] cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('home')}
          >
            Revathi
          </div>
          
          {/* Navigation Items - moved to right */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[hsl(var(--navbar-text))]/90 hover:text-[hsl(var(--navbar-text))] transition-colors duration-300 font-medium hover:scale-105 transform relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[hsl(var(--navbar-text))] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item}
              </button>
            ))}
            
            {/* Theme Toggle Icons */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-[hsl(var(--navbar-text))]/20">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[hsl(var(--navbar-text))]/10 transition-all duration-300 hover:scale-110"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-[hsl(var(--navbar-text))]/90 hover:text-[hsl(var(--navbar-text))] transition-colors" />
                ) : (
                  <Moon className="h-5 w-5 text-[hsl(var(--navbar-text))]/90 hover:text-[hsl(var(--navbar-text))] transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
