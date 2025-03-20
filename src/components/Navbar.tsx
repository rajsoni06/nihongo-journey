
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, BookOpen, Plane, Map, MapPin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [interestsDropdownOpen, setInterestsDropdownOpen] = useState(false);
  const location = useLocation();

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header>
      {/* Main Navbar */}
      <nav 
        className={cn(
          "fixed top-0 left-0 z-40 w-full transition-all duration-300",
          isScrolled ? "bg-black/60 backdrop-blur-md shadow-md" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-japan-sakura text-japan-red px-3 py-2 rounded font-bold text-lg mr-2 transition-transform duration-300 hover:scale-105">
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
          <div className="bg-black/80 backdrop-blur-lg shadow-lg">
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

      {/* Secondary Navbar (Categories) */}
      <nav className={cn(
        "w-full transition-all duration-300 z-30",
        isScrolled ? "fixed top-16 left-0 bg-black/50 backdrop-blur-sm" : "relative top-0 bg-black/70 backdrop-blur-sm mt-16"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-start h-12 space-x-8">
            {/* Courses Dropdown */}
            <div className="relative flex items-center h-full">
              <button 
                onClick={() => {
                  setCoursesDropdownOpen(!coursesDropdownOpen);
                  setDestinationsDropdownOpen(false);
                  setInterestsDropdownOpen(false);
                }}
                className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors"
              >
                <span className="font-medium">Courses</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {coursesDropdownOpen && (
                <div className="dropdown-content absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50">
                  <div className="py-2 px-4 space-y-2">
                    <a href="https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📼 (Super Advanced) N1 Course
                    </a>
                    <a href="https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📼 (Advanced) N2 Course
                    </a>
                    <a href="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📼 (Intermediate) N3 Course
                    </a>
                    <a href="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📼 (Basic) N4 Course
                    </a>
                    <a href="https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📼 (Most Basic) N5 Course
                    </a>
                    <div className="border-t border-white/20 my-2"></div>
                    <a href="https://drive.google.com/file/d/1VNqheM7AI1TYL-Mow3mCHcCXPL_mk-nw/view?usp=sharing" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📼 Beginner Course
                    </a>
                    <a href="https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📄 Absolute Beginner Course
                    </a>
                    <a href="https://drive.google.com/file/d/1_FgeXtrY8S-JRY7rhC3uIxyKxQGHYeVK/view?usp=sharing" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📄 Japanese Alphabets
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div className="relative flex items-center h-full">
              <button 
                onClick={() => {
                  setDestinationsDropdownOpen(!destinationsDropdownOpen);
                  setCoursesDropdownOpen(false);
                  setInterestsDropdownOpen(false);
                }}
                className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors"
              >
                <span className="font-medium">Destinations</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {destinationsDropdownOpen && (
                <div className="dropdown-content absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50">
                  <div className="py-2 px-4 space-y-2">
                    <a href="https://www.japan-guide.com/e/e2164.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Tokyo
                    </a>
                    <a href="https://www.japan-guide.com/e/e2157.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Osaka
                    </a>
                    <a href="https://www.japan-guide.com/e/e2156.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Yokohama
                    </a>
                    <a href="https://www.japan-guide.com/e/e2158.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Kyoto
                    </a>
                    <a href="https://en.japantravel.com/saitama" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Saitama
                    </a>
                    <a href="https://www.japan-guide.com/e/e2160.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Hiroshima
                    </a>
                    <a href="https://www.japan-guide.com/e/e5150.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Sendai
                    </a>
                    <a href="https://www.japan-guide.com/e/e2163.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Sapporo
                    </a>
                    <a href="https://www.japan-guide.com/e/e2162.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Nagasaki
                    </a>
                    <a href="https://www.japan-guide.com/e/e2165.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      📍 Nara
                    </a>
                    <div className="border-t border-white/20 my-2"></div>
                    <a href="https://matcha-jp.com/en/list/region" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      All Areas &gt;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Interests Dropdown */}
            <div className="relative flex items-center h-full">
              <button 
                onClick={() => {
                  setInterestsDropdownOpen(!interestsDropdownOpen);
                  setCoursesDropdownOpen(false);
                  setDestinationsDropdownOpen(false);
                }}
                className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors"
              >
                <span className="font-medium">Interests</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {interestsDropdownOpen && (
                <div className="dropdown-content absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50">
                  <div className="py-2 px-4 space-y-2">
                    <a href="https://www.japan-guide.com/e/e2025.html" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      🛏 Accommodation
                    </a>
                    <a href="https://www.worldtravelguide.net/guides/asia/japan/food-and-drink/" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      🍴 Food and Drink
                    </a>
                    <a href="https://traveltriangle.com/blog/things-to-do-in-japan/" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      🇯🇵 Things to do
                    </a>
                    <a href="https://www.insidejapantours.com/japanese-culture/" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-md">
                      🗾 Culture
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed navbar */}
      <div className="h-28"></div>
    </header>
  );
};

export default Navbar;
