import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavClick = (href) => {
    // Close mobile drawer if open
    setMobileDrawerOpen(false);

    // If we're on the chatbot page, navigate to home first
    if (location.pathname === '/chatbot') {
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 80; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If we're on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-200/80 dark:border-neutral-700/80 bg-gradient-to-b from-white to-neutral-50/80 dark:from-neutral-900/80 dark:to-neutral-900/80 shadow-sm">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-neutral-900 dark:text-white font-semibold bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">SoftSell</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleNavClick(item.href)} 
                  className="text-neutral-700 dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm hover:shadow-md"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-neutral-700" />}
            </button>
            <a href="#" className="py-2 px-3 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-700 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors font-medium shadow-sm hover:shadow-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-600 py-2 px-3 rounded-md text-white hover:opacity-90 transition-opacity font-medium shadow-sm hover:shadow-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-neutral-700 dark:text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden shadow-lg">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button 
                    onClick={() => handleNavClick(item.href)} 
                    className="text-neutral-700 dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm hover:shadow-md"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-neutral-700" />}
              </button>
              <a href="#" className="py-2 px-3 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-700 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors font-medium shadow-sm hover:shadow-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 transition-opacity font-medium shadow-sm hover:shadow-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
