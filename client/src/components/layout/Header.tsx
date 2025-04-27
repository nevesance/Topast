import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";
import { useLocation } from "wouter";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle navigation item click
  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId);
    setMobileMenuOpen(false);
  };

  // Check if we're on the home page
  const isHomePage = location === "/";

  return (
    <header className={`fixed w-full bg-white dark:bg-gray-800 z-50 transition-colors duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-primary dark:text-blue-400 font-bold text-xl">
              <i className="fas fa-cube mr-2"></i>
              ModernWeb
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  Home
                </a>
                <a 
                  href="#features" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('features'); }} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  Features
                </a>
                <a 
                  href="#gallery" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  Gallery
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  Contact
                </a>
              </>
            ) : (
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                Home
              </Link>
            )}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleTheme} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 rounded-full p-1"
              aria-label="Toggle dark mode"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
              aria-label="Open mobile menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
          <div className="space-y-2 pt-2 pb-4">
            {isHomePage ? (
              <>
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Home
                </a>
                <a 
                  href="#features" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('features'); }} 
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Features
                </a>
                <a 
                  href="#gallery" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }} 
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Gallery
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} 
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Contact
                </a>
              </>
            ) : (
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
