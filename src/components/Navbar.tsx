
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, BookOpen, Plane, Map, MapPin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [interestsDropdownOpen, setInterestsDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="z-50">
      {/* Main Navbar - Always visible */}
      <nav className="fixed top-0 left-0 z-40 w-full bg-black/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-gradient-to-r from-japan-sakura to-japan-lightRed text-white px-3 py-2 rounded-lg font-bold text-lg mr-2 transition-transform duration-300 hover:scale-105 shadow-lg border border-white/20 backdrop-blur-sm">
                  NIHONGO JOURNEY 🗾
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              <Link to="/" className="nav-link">
                <Home className="inline-block mr-1 h-4 w-4" /> HOME
              </Link>
              <Link to="/learn" className="nav-link">
                <BookOpen className="inline-block mr-1 h-4 w-4" /> LEARN
              </Link>
              <Link to="/travel" className="nav-link">
                <Plane className="inline-block mr-1 h-4 w-4" /> TRAVEL
              </Link>
              <Link to="/places" className="nav-link">
                <MapPin className="inline-block mr-1 h-4 w-4" /> PLACES
              </Link>
              <Link to="/areas" className="nav-link">
                <Map className="inline-block mr-1 h-4 w-4" /> AREAS
              </Link>
              <Link to="/contact" className="nav-link">
                <Mail className="inline-block mr-1 h-4 w-4" /> CONTACT
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/10 focus:outline-none transition duration-150 ease-in-out"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="bg-black/90 backdrop-blur-lg shadow-lg">
            <div className="pt-2 pb-4 space-y-1 px-4">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">
                <Home className="inline-block mr-2 h-5 w-5" /> HOME
              </Link>
              <Link to="/learn" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">
                <BookOpen className="inline-block mr-2 h-5 w-5" /> LEARN
              </Link>
              <Link to="/travel" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">
                <Plane className="inline-block mr-2 h-5 w-5" /> TRAVEL
              </Link>
              <Link to="/places" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">
                <MapPin className="inline-block mr-2 h-5 w-5" /> PLACES
              </Link>
              <Link to="/areas" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">
                <Map className="inline-block mr-2 h-5 w-5" /> AREAS
              </Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">
                <Mail className="inline-block mr-2 h-5 w-5" /> CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar (Categories) - more attractive and functional */}
      <nav className="fixed top-16 left-0 w-full bg-gradient-to-r from-japan-navy to-japan-indigo backdrop-blur-md z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-start h-12 space-x-8">
            {/* Courses Dropdown - Enhanced with 3D effect and hover */}
            <div 
              className="relative flex items-center h-full"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button 
                className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors transform hover:scale-105"
              >
                <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Courses</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {coursesDropdownOpen && (
                <div className="dropdown-content absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50 border border-white/20 animate-fade-in">
                  <div className="py-2 px-4 space-y-2">
                    <a href="https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📼 (Super Advanced) N1 Course
                    </a>
                    <a href="https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📼 (Advanced) N2 Course
                    </a>
                    <a href="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📼 (Intermediate) N3 Course
                    </a>
                    <a href="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📼 (Basic) N4 Course
                    </a>
                    <a href="https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📼 (Most Basic) N5 Course
                    </a>
                    <div className="border-t border-white/20 my-2"></div>
                    <a href="https://drive.google.com/file/d/1VNqheM7AI1TYL-Mow3mCHcCXPL_mk-nw/view?usp=sharing" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📼 Beginner Course
                    </a>
                    <a href="https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📄 Absolute Beginner Course
                    </a>
                    <a href="https://drive.google.com/file/d/1_FgeXtrY8S-JRY7rhC3uIxyKxQGHYeVK/view?usp=sharing" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📄 Japanese Alphabets
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Destinations Dropdown - Enhanced with hover */}
            <div 
              className="relative flex items-center h-full"
              onMouseEnter={() => setDestinationsDropdownOpen(true)}
              onMouseLeave={() => setDestinationsDropdownOpen(false)}
            >
              <button 
                className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors transform hover:scale-105"
              >
                <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Destinations</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${destinationsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {destinationsDropdownOpen && (
                <div className="dropdown-content absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50 border border-white/20 animate-fade-in">
                  <div className="py-2 px-4 space-y-2">
                    <a href="https://www.japan-guide.com/e/e2164.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Tokyo
                    </a>
                    <a href="https://www.japan-guide.com/e/e2157.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Osaka
                    </a>
                    <a href="https://www.japan-guide.com/e/e2156.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Yokohama
                    </a>
                    <a href="https://www.japan-guide.com/e/e2158.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Kyoto
                    </a>
                    <a href="https://en.japantravel.com/saitama" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Saitama
                    </a>
                    <a href="https://www.japan-guide.com/e/e2160.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Hiroshima
                    </a>
                    <a href="https://www.japan-guide.com/e/e5150.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Sendai
                    </a>
                    <a href="https://www.japan-guide.com/e/e2163.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Sapporo
                    </a>
                    <a href="https://www.japan-guide.com/e/e2162.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Nagasaki
                    </a>
                    <a href="https://www.japan-guide.com/e/e2165.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      📍 Nara
                    </a>
                    <div className="border-t border-white/20 my-2"></div>
                    <a href="https://matcha-jp.com/en/list/region" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      All Areas &gt;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Interests Dropdown - Enhanced with hover */}
            <div 
              className="relative flex items-center h-full"
              onMouseEnter={() => setInterestsDropdownOpen(true)}
              onMouseLeave={() => setInterestsDropdownOpen(false)}
            >
              <button 
                className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors transform hover:scale-105"
              >
                <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Interests</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${interestsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {interestsDropdownOpen && (
                <div className="dropdown-content absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50 border border-white/20 animate-fade-in">
                  <div className="py-2 px-4 space-y-2">
                    <a href="https://www.japan-guide.com/e/e2025.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      🛏 Accommodation
                    </a>
                    <a href="https://www.worldtravelguide.net/guides/asia/japan/food-and-drink/" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      🍴 Food and Drink
                    </a>
                    <a href="https://traveltriangle.com/blog/things-to-do-in-japan/" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      🇯🇵 Things to do
                    </a>
                    <a href="https://www.insidejapantours.com/japanese-culture/" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md transition-all hover:translate-x-1">
                      🗾 Culture
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed navbar - adjusted height for new layout */}
      <div className="h-28"></div>
    </header>
  );
};

export default Navbar;
