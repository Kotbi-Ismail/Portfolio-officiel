import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Check localStorage for theme preference
    return localStorage.getItem('theme') === 'dark';
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setIsMenuOpen(false); // Close menu after toggling dark mode
  };

  const handleLinkClick = (event) => {
    setIsMenuOpen(false);
    const targetId = event.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-800 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Kotbi Ismail</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#experience" className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#skills" className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <a href="#about" onClick={handleLinkClick} className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#experience" onClick={handleLinkClick} className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#skills" onClick={handleLinkClick} className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#projects" onClick={handleLinkClick} className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" onClick={handleLinkClick} className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              {/* Dark Mode Toggle in Mobile Menu */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
