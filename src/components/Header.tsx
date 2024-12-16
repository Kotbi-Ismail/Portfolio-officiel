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
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-800 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gray-800 dark:text-gray-200">Kotbi Ismail</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">About</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Experience</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Skills</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Contact</a>
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
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">About</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Experience</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Skills</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
