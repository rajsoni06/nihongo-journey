import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, BookOpen, Plane, Map, MapPin, Mail, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

// Data structure for destinations by region
const regions = [
  {
    name: 'Hokkaido',
    destinations: [
      { name: 'Sapporo', url: 'https://www.japan-guide.com/e/e2163.html' },
    ],
  },
  {
    name: 'Tohoku',
    destinations: [
      { name: 'Sendai', url: 'https://www.japan-guide.com/e/e5150.html' },
    ],
  },
  {
    name: 'Kanto',
    destinations: [
      { name: 'Tokyo', url: 'https://www.japan-guide.com/e/e2164.html' },
      { name: 'Yokohama', url: 'https://www.japan-guide.com/e/e2156.html' },
      { name: 'Saitama', url: 'https://en.japantravel.com/saitama' },
    ],
  },
  {
    name: 'Kansai',
    destinations: [
      { name: 'Osaka', url: 'https://www.japan-guide.com/e/e2157.html' },
      { name: 'Kyoto', url: 'https://www.japan-guide.com/e/e2158.html' },
      { name: 'Nara', url: 'https://www.japan-guide.com/e/e2165.html' },
    ],
  },
  {
    name: 'Chugoku',
    destinations: [
      { name: 'Hiroshima', url: 'https://www.japan-guide.com/e/e2160.html' },
    ],
  },
  {
    name: 'Kyushu',
    destinations: [
      { name: 'Nagasaki', url: 'https://www.japan-guide.com/e/e2162.html' },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [interestsDropdownOpen, setInterestsDropdownOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  // Searchable data
  const searchData = {
    courses: {
      n1: { keyword: 'n1', url: 'https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing', internalPath: '/learn' },
      n2: { keyword: 'n2', url: 'https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link', internalPath: '/learn' },
      n3: { keyword: 'n3', url: 'https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing', internalPath: '/learn' },
      n4: { keyword: 'n4', url: 'https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk', internalPath: '/learn' },
      n5: { keyword: 'n5', url: 'https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk', internalPath: '/learn' },
      jlptn1: { keyword: 'jlpt n1', url: 'https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing', internalPath: '/learn' },
      jlptn2: { keyword: 'jlpt n2', url: 'https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link', internalPath: '/learn' },
      jlptn3: { keyword: 'jlpt n3', url: 'https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing', internalPath: '/learn' },
      jlptn4: { keyword: 'jlpt n4', url: 'https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk', internalPath: '/learn' },
      jlptn5: { keyword: 'jlpt n5', url: 'https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk', internalPath: '/learn' },
      beginner: { keyword: 'beginner', url: 'https://drive.google.com/file/d/1VNqheM7AI1TYL-Mow3mCHcCXPL_mk-nw/view?usp=sharing', internalPath: '/learn' },
      absoluteBeginner: { keyword: 'absolute beginner', url: 'https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk', internalPath: '/learn' },
      alphabets: { keyword: 'alphabets', url: 'https://drive.google.com/file/d/1_FgeXtrY8S-JRY7rhC3uIxyKxQGHYeVK/view?usp=sharing', internalPath: '/learn' },
      jlpt: { keyword: 'jlpt', internalPath: '/learn' },
      courses: { keyword: 'courses', internalPath: '/learn' },
      learn: { keyword: 'learn', internalPath: '/learn' },
      home: { keyword: 'home', internalPath: '/' },
      travel: { keyword: 'travel', internalPath: '/travel' },
      places: { keyword: 'places', internalPath: '/places' },
      areas: { keyword: 'areas', internalPath: '/areas' },
      contact: { keyword: 'contact', internalPath: '/contact' },
    },
    destinations: {
      tokyo: { keyword: 'tokyo', url: 'https://www.japan-guide.com/e/e2164.html', internalPath: '/travel' },
      osaka: { keyword: 'osaka', url: 'https://www.japan-guide.com/e/e2157.html', internalPath: '/travel' },
      yokohama: { keyword: 'yokohama', url: 'https://www.japan-guide.com/e/e2156.html', internalPath: '/travel' },
      kyoto: { keyword: 'kyoto', url: 'https://www.japan-guide.com/e/e2158.html', internalPath: '/travel' },
      saitama: { keyword: 'saitama', url: 'https://en.japantravel.com/saitama', internalPath: '/travel' },
      hiroshima: { keyword: 'hiroshima', url: 'https://www.japan-guide.com/e/e2160.html', internalPath: '/travel' },
      sendai: { keyword: 'sendai', url: 'https://www.japan-guide.com/e/e5150.html', internalPath: '/travel' },
      sapporo: { keyword: 'sapporo', url: 'https://www.japan-guide.com/e/e2163.html', internalPath: '/travel' },
      nagasaki: { keyword: 'nagasaki', url: 'https://www.japan-guide.com/e/e2162.html', internalPath: '/travel' },
      nara: { keyword: 'nara', url: 'https://www.japan-guide.com/e/e2165.html', internalPath: '/travel' },
    },
    interests: {
      accommodation: { keyword: 'accommodation', url: 'https://www.japan-guide.com/e/e2025.html', internalPath: '/travel' },
      food: { keyword: 'food', url: 'https://www.worldtravelguide.net/guides/asia/japan/food-and-drink/', internalPath: '/travel' },
      thingsToDo: { keyword: 'things to do', url: 'https://traveltriangle.com/blog/things-to-do-in-japan/', internalPath: '/travel' },
      culture: { keyword: 'culture', url: 'https://www.insidejapantours.com/japanese-culture/', internalPath: '/travel' },
    },
  };

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase();

    // Check courses
    for (const course in searchData.courses) {
      if (query.includes(searchData.courses[course].keyword)) {
        if (searchData.courses[course].url) {
          window.open(searchData.courses[course].url, '_blank');
        }
        window.location.href = searchData.courses[course].internalPath;
        setSearchQuery('');
        return;
      }
    }

    // Check destinations
    for (const destination in searchData.destinations) {
      if (query.includes(searchData.destinations[destination].keyword)) {
        if (searchData.destinations[destination].url) {
          window.open(searchData.destinations[destination].url, '_blank');
        }
        window.location.href = searchData.destinations[destination].internalPath;
        setSearchQuery('');
        return;
      }
    }

    // Check interests
    for (const interest in searchData.interests) {
      if (query.includes(searchData.interests[interest].keyword)) {
        if (searchData.interests[interest].url) {
          window.open(searchData.interests[interest].url, '_blank');
        }
        window.location.href = searchData.interests[interest].internalPath;
        setSearchQuery('');
        return;
      }
    }

    // Fallback if no match
    alert(`No results found for "${searchQuery}". Try "JLPT," "Tokyo," or "culture."`);
    setSearchQuery('');
  };

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
          className={`md:hidden fixed top-16 right-0 w-77 h-[calc(100vh-4rem)] bg-black/90 backdrop-blur-lg shadow-lg z-90 transition-transform duration-300 ease-in-out ${
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
                  📼 (Advanced) N1 Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 (Upper-Inter) N2 Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 (Mid-Level) N3 Course
                </a>
                <a
                  href="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk"
                  target="_blank"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  📼 (Lower-Inter) N4 Course
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
                  📄 Absolute Beginners
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

              {/* Destinations - Mobile Layout */}
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
                <div className="grid grid-cols-1 gap-2">
                  {regions.map((region) => (
                    <div key={region.name} className="space-y-1">
                      <h3 className="text-white font-semibold">{region.name}</h3>
                      {region.destinations.map((dest) => (
                        <a
                          key={dest.name}
                          href={dest.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          📍 {dest.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
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
          <div className="hidden md:flex justify-between items-center h-12 space-x-8">
            <div className="flex space-x-8">
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
                        📼 (Advanced) N1 Course
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link"
                        target="_blank"
                        className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                      >
                        📼 (Upper-Inter) N2 Course
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing"
                        target="_blank"
                        className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                      >
                        📼 (Mid-Level) N3 Course
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk"
                        target="_blank"
                        className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded-md transition-all hover:translate-x-1 duration-200"
                      >
                        📼 (Lower-Inter) N4 Course
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
                        📄 Absolute Beginner
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

              {/* Destinations Dropdown - Updated Layout */}
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
                  <div
                    className="absolute top-[calc(70%)] transform -translate-x mt-1 w-[800vw] max-w-[550px] bg-gray-800 rounded-md shadow-lg z-100 transition-all duration-300 ease-in-out"
                    style={{ top: 'calc(70%)' }} // Ensure it appears below the navbar
                  >
                    <div className="p-4">
                      {/* Grid Layout for Regions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {regions.map((region) => (
                          <div key={region.name} className="space-y-2">
                            <h3 className="text-white font-semibold text-base">{region.name}</h3>
                            {region.destinations.map((dest) => (
                              <a
                                key={dest.name}
                                href={dest.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-white hover:bg-white/20 rounded-md px-2 py-1 transition-colors duration-200"
                              >
                                📍 {dest.name}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* Divider and All Areas Link */}
                      <div className="border-t border-white/20 my-4"></div>
                      <a
                        href="https://matcha-jp.com/en/list/region"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-white hover:bg-white/20 rounded-md px-3 py-2 transition-colors duration-200"
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

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Nihongo Journey..."
                className="w-64 pl-10 pr-4 py-2 bg-gradient-to-r from-japan-navy to-japan-indigo text-white placeholder-gray-400 rounded-full border border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-japan-sakura transition-all duration-300 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_6px_8px_rgba(0,0,0,0.3)]"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-japan-sakura transition-colors duration-300"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Responsive spacer for fixed navbars */}
      <div className="h-16 md:h-28"></div>
    </header>
  );
};

export default Navbar;