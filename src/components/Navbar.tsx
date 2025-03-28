import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, BookOpen, Plane, Map, MapPin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [interestsDropdownOpen, setInterestsDropdownOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close expandable sections when mobile menu is closed
  useEffect(() => {
    if (!isOpen) {
      setIsCoursesOpen(false);
      setIsDestinationsOpen(false);
      setIsInterestsOpen(false);
    }
  }, [isOpen]);

  // Function to close the mobile menu
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="z-50">
      {/* Main Navbar - Always visible */}
      <nav className="fixed top-0 left-0 z-40 w-full bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center" onClick={closeMenu}>
                <div className="bg-gradient-to-r from-japan-sakura to-japan-lightRed text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-bold text-sm sm:text-base md:text-lg mr-4 transition-transform duration-300 hover:scale-105 shadow-lg border border-white/20 backdrop-blur-sm shadow-[0_0_10px_rgba(255,105,180,0.8)] hover:shadow-[0_0_15px_rgba(255,105,180,1)]">
                  NIHONGO JOURNEY 🗾
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
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
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition duration-300 ease-in-out"
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
        <div
          className={`md:hidden fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-black/90 backdrop-blur-lg shadow-lg z-50 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full overflow-y-auto py-4 px-4 space-y-1">
            <Link
              to="/"
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors duration-200"
              onClick={closeMenu}
            >
              <Home className="inline-block mr-2 h-5 w-5" /> HOME
            </Link>
            <Link
              to="/learn"
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors duration-200"
              onClick={closeMenu}
            >
              <BookOpen className="inline-block mr-2 h-5 w-5" /> LEARN
            </Link>
            <Link
              to="/travel"
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors duration-200"
              onClick={closeMenu}
            >
              <Plane className="inline-block mr-2 h-5 w-5" /> TRAVEL
            </Link>
            <Link
              to="/places"
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors duration-200"
              onClick={closeMenu}
            >
              <MapPin className="inline-block mr-2 h-5 w-5" /> PLACES
            </Link>
            <Link
              to="/areas"
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors duration-200"
              onClick={closeMenu}
            >
              <Map className="inline-block mr-2 h-5 w-5" /> AREAS
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/20 transition-colors duration-200"
              onClick={closeMenu}
            >
              <Mail className="inline-block mr-2 h-5 w-5" /> CONTACT
            </Link>

            {/* Expandable sections for mobile */}
            <div className="mt-4 border-t border-white/20 pt-4">
              {/* Courses */}
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-white hover:bg-white/20 rounded-md transition-colors duration-200"
              >
                Courses
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isCoursesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out ${
                  isCoursesOpen ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'
                }`}
              >
                <a
                  href="https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 (Super Advanced) N1 Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 (Advanced) N2 Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 (Intermediate) N3 Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 (Basic) N4 Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 (Most Basic) N5 Course
                </a>
                <div className="border-t border-white/20 my-2"></div>
                <a
                  href="https://drive.google.com/file/d/1VNqheM7AI1TYL-Mow3mCHcCXPL_mk-nw/view?usp=sharing"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 Beginner Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📄 Absolute Beginner Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1_FgeXtrY8S-JRY7rhC3uIxyKxQGHYeVK/view?usp=sharing"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📄 Japanese Alphabets
                </a>
              </div>

              {/* Destinations */}
              <button
                onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-white hover:bg-white/20 rounded-md transition-colors duration-200 mt-2"
              >
                Destinations
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isDestinationsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out ${
                  isDestinationsOpen ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'
                }`}
              >
                <a
                  href="https://www.japan-guide.com/e/e2164.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Tokyo
                </a>
                <a
                  href="https://www.japan-guide.com/e/e2157.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Osaka
                </a>
                <a
                  href="https://www.japan-guide.com/e/e2156.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Yokohama
                </a>
                <a
                  href="https://www.japan-guide.com/e/e2158.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Kyoto
                </a>
                <a
                  href="https://en.japantravel.com/saitama"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Saitama
                </a>
                <a
                  href="https://www.japan-guide.com/e/e2160.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Hiroshima
                </a>
                <a
                  href="https://www.japan-guide.com/e/e5150.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Sendai
                </a>
                <a
                  href="https://www.japan-guide.com/e/e2163.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Sapporo
                </a>
                <a
                  href="https://www.japan-guide.com/e/e2162.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Nagasaki
                </a>
                <a
                  href="https://www.japan-guide.com/e/e2165.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📍 Nara
                </a>
                <div className="border-t border-white/20 my-2"></div>
                <a
                  href="https://matcha-jp.com/en/list/region"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  All Areas {'>'}
                </a>
              </div>

              {/* Interests */}
              <button
                onClick={() => setIsInterestsOpen(!isInterestsOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-white hover:bg-white/20 rounded-md transition-colors duration-200 mt-2"
              >
                Interests
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isInterestsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out ${
                  isInterestsOpen ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'
                }`}
              >
                <a
                  href="https://www.japan-guide.com/e/e2025.html"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  🛏 Accommodation
                </a>
                <a
                  href="https://www.worldtravelguide.net/guides/asia/japan/food-and-drink/"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  🍴 Food and Drink
                </a>
                <a
                  href="https://traveltriangle.com/blog/things-to-do-in-japan/"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  🇯🇵 Things to do
                </a>
                <a
                  href="https://www.insidejapantours.com/japanese-culture/"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  🗾 Culture
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar (Categories) - Visible on desktop */}
      <nav className="fixed top-16 left-0 w-full bg-gradient-to-r from-japan-navy to-japan-indigo backdrop-blur-md z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-start h-12 space-x-8">
            {/* Courses Dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors transform hover:scale-105 duration-300">
                <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Courses
                </span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    coursesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50 border border-white/20 transition-all duration-300 ease-in-out opacity-0 translate-y-[-10px] animate-[fade-in_0.3s_ease-in-out_forwards]">
                  <div className="py-2 px-4 space-y-2">
                    <a
                      href="https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📼 (Super Advanced) N1 Course
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📼 (Advanced) N2 Course
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📼 (Intermediate) N3 Course
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📼 (Basic) N4 Course
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📼 (Most Basic) N5 Course
                    </a>
                    <div className="border-t border-white/20 my-2"></div>
                    <a
                      href="https://drive.google.com/file/d/1VNqheM7AI1TYL-Mow3mCHcCXPL_mk-nw/view?usp=sharing"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📼 Beginner Course
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📄 Absolute Beginner Course
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1_FgeXtrY8S-JRY7rhC3uIxyKxQGHYeVK/view?usp=sharing"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📄 Japanese Alphabets
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setDestinationsDropdownOpen(true)}
              onMouseLeave={() => setDestinationsDropdownOpen(false)}
            >
              <button className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors transform hover:scale-105 duration-300">
                <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Destinations
                </span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    destinationsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {destinationsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50 border border-white/20 transition-all duration-300 ease-in-out opacity-0 translate-y-[-10px] animate-[fade-in_0.3s_ease-in-out_forwards]">
                  <div className="py-2 px-4 space-y-2">
                    <a
                      href="https://www.japan-guide.com/e/e2164.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Tokyo
                    </a>
                    <a
                      href="https://www.japan-guide.com/e/e2157.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Osaka
                    </a>
                    <a
                      href="https://www.japan-guide.com/e/e2156.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Yokohama
                    </a>
                    <a
                      href="https://www.japan-guide.com/e/e2158.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Kyoto
                    </a>
                    <a
                      href="https://en.japantravel.com/saitama"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Saitama
                    </a>
                    <a
                      href="https://www.japan-guide.com/e/e2160.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Hiroshima
                    </a>
                    <a
                      href="https://www.japan-guide.com/e/e5150.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Sendai
                    </a>
                    <a
                      href="https://www.japan-guide.com/e/e2163.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Sapporo
                    </a>
                    <a
                      href="https://www.japan-guide.com/e/e2162.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Nagasaki
                    </a>
                    <a
                      href="https://www.japan-guide.com/e/e2165.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      📍 Nara
                    </a>
                    <div className="border-t border-white/20 my-2"></div>
                    <a
                      href="https://matcha-jp.com/en/list/region"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      All Areas {'>'}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Interests Dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setInterestsDropdownOpen(true)}
              onMouseLeave={() => setInterestsDropdownOpen(false)}
            >
              <button className="flex items-center text-white hover:text-white/80 focus:outline-none transition-colors transform hover:scale-105 duration-300">
                <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Interests
                </span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    interestsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {interestsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto rounded-md bg-black/90 backdrop-blur-md shadow-lg z-50 border border-white/20 transition-all duration-300 ease-in-out opacity-0 translate-y-[-10px] animate-[fade-in_0.3s_ease-in-out_forwards]">
                  <div className="py-2 px-4 space-y-2">
                    <a
                      href="https://www.japan-guide.com/e/e2025.html"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      🛏 Accommodation
                    </a>
                    <a
                      href="https://www.worldtravelguide.net/guides/asia/japan/food-and-drink/"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      🍴 Food and Drink
                    </a>
                    <a
                      href="https://traveltriangle.com/blog/things-to-do-in-japan/"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      🇯🇵 Things to do
                    </a>
                    <a
                      href="https://www.insidejapantours.com/japanese-culture/"
                      target="_blank"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                    >
                      🗾 Culture
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Responsive spacer for fixed navbars */}
      <div className="h-16 md:h-28"></div>
    </header>
  );
};

export default Navbar;