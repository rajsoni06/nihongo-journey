import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the regions and destinations with provided URLs
const regions = [
  {
    name: 'Hokkaido Region',
    destinations: [
      { name: 'Sapporo', url: 'https://www.japan-guide.com/e/e2163.html' },
      { name: 'Hakodate', url: 'https://www.japan-guide.com/e/e5350.html' },
    ],
  },
  {
    name: 'Tohoku Region',
    destinations: [
      { name: 'Aomori', url: 'https://www.japan-guide.com/e/e3750.html' },
      { name: 'Akita', url: 'https://www.japan-guide.com/e/e3600.html' },
      { name: 'Iwate (Morioka)', url: 'https://www.japan-guide.com/e/e5050.html' },
      { name: 'Yamagata', url: 'https://www.japan-guide.com/e/e9175.html' },
      { name: 'Miyagi (Sendai)', url: 'https://www.japan-guide.com/e/e5150.html' },
      { name: 'Fukushima', url: 'https://www.japan-guide.com/e/e6450.html' },
    ],
  },
  {
    name: 'Kanto Region',
    destinations: [
      { name: 'Tokyo', url: 'https://www.japan-guide.com/e/e2164.html' },
      { name: 'Kanagawa (Yokohama)', url: 'https://www.japan-guide.com/e/e2156.html' },
      { name: 'Chiba', url: 'https://www.japan-guide.com/e/e6400.html' },
      { name: 'Saitama', url: 'https://www.japan-guide.com/e/e6500.html' },
      { name: 'Ibaraki', url: 'https://www.japan-guide.com/e/e6200.html' },
      { name: 'Tochigi (Nikko)', url: 'https://www.japan-guide.com/e/e3800.html' },
      { name: 'Gunma', url: 'https://www.japan-guide.com/e/e6300.html' },
    ],
  },
  {
    name: 'Kansai Region',
    destinations: [
      { name: 'Osaka', url: 'https://www.japan-guide.com/e/e2157.html' },
      { name: 'Kyoto', url: 'https://www.japan-guide.com/e/e2158.html' },
    ],
  },
  {
    name: 'Chugoku Region',
    destinations: [
      { name: 'Hiroshima', url: 'https://www.japan-guide.com/e/e2160.html' },
      { name: 'Shimane (Matsue)', url: 'https://www.japan-guide.com/e/e5800.html' },
    ],
  },
  {
    name: 'Shikoku Region',
    destinations: [
      { name: 'Kumano Kodo', url: 'https://www.japan-guide.com/e/e4950.html' },
    ],
  },
  {
    name: 'Kyushu Region',
    destinations: [
      { name: 'Beppu', url: 'https://www.japan-guide.com/e/e4700.html' },
      { name: 'Amami Oshima', url: 'https://www.japan-guide.com/e/e4690.html' },
    ],
  },
  {
    name: 'Islands',
    destinations: [
      { name: 'Sado Island', url: 'https://www.japan-guide.com/e/e7725.html' },
    ],
  },
  {
    name: 'Hot Spring Retreats',
    destinations: [
      { name: 'Hakone', url: 'https://www.japan-guide.com/e/e5200.html' },
    ],
  },
];

const Destinations = () => {
  const [openRegion, setOpenRegion] = useState<string | null>(null);

  // Toggle the open state of a region
  const toggleRegion = (regionName: string) => {
    setOpenRegion(openRegion === regionName ? null : regionName);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {regions.map((region) => (
        <div
          key={region.name}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <button
            className="w-full p-4 text-left font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex justify-between items-center"
            onClick={() => toggleRegion(region.name)}
          >
            {region.name}
            <span className="ml-2">
              {openRegion === region.name ? '−' : '+'}
            </span>
          </button>
          <AnimatePresence>
            {openRegion === region.name && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="p-4 space-y-2 bg-gray-50">
                  {region.destinations.map((dest) => (
                    <li key={dest.name}>
                      <a
                        href={dest.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                      >
                        {dest.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Destinations;