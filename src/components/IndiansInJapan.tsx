import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { youtubers } from '../data/youtubersData';

const IndiansInJapan = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  if (!youtubers?.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 flex items-center justify-center">
        <p className="text-white text-xl">No YouTubers found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Home Button */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to="/"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 inline-flex items-center gap-2 mb-12"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v10a2 2 0 002 2h4a2 2 0 002-2V14m-6 0h6" />
          </svg>
          Nihongo Journey Home
        </Link>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-6 text-white font-oswald tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Indians in Japan
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Discover inspiring stories of Indians thriving in Japan's unique culture.
        </motion.p>
      </motion.div>

      {/* Content Grid for Indian YouTubers */}
<motion.div
  ref={ref}
  className="max-w-7xl mx-auto mb-16"
  variants={container}
  initial="hidden"
  animate={controls}
>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {youtubers.filter(y => [1, 2, 3, 4].includes(y.id)).map((youtuber) => (
      <motion.div
        key={youtuber.id}
        variants={item}
        className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-80 mx-auto"
      >
        {/* Image Container */}
        <div className="relative w-full h-80 overflow-hidden rounded-t-2xl flex items-center justify-center">
          {youtuber.images?.[0] ? (
            <motion.img
              src={youtuber.images[0]}
              alt={youtuber.name}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <p className="text-white text-sm">No Image Available</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-white">{youtuber.name}</h2>
            {youtuber.subscribers && (
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                {youtuber.subscribers.toLocaleString()} Subscribers
              </span>
            )}
          </div>

          {youtuber.id === 1 && (
            <div className="mb-4">
              <p className="text-gray-300 text-sm italic">
                
              </p>
            </div>
          )}

          <p className="text-gray-300 text-sm mb-4 line-clamp-4">
            {youtuber.extendedDescription || youtuber.shortDescription}
          </p>

          <Link
            to={`/youtubers/${youtuber.id}`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group"
          >
            Explore Journey
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Heading for Japanese Influencers */}
<motion.div
  className="mt-16 text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  <motion.h2
    className="text-3xl font-bold text-white mb-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    Japanese Influencers Promoting India
  </motion.h2>
  <motion.p
    className="text-lg text-gray-100 max-w-3xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
  >
    Discover Japanese influencers who know Hindi and explore India.
  </motion.p>
</motion.div>

<br />
<br />

{/* Content Grid for Japanese Influencers Promoting India */}
<motion.div
  className="max-w-7xl mx-auto mb-16"
  variants={container}
  initial="hidden"
  animate={controls}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {youtubers.filter(y => ["Mayo Hitomi", "MaharaJapan", "Namaste Kohei"].includes(y.name)).map((youtuber) => (
      <motion.div
        key={youtuber.id}
        variants={item}
        className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-80 mx-auto"
      >
        {/* Image Container */}
        <div className="relative w-full h-80 overflow-hidden rounded-t-2xl flex items-center justify-center">
          {youtuber.images?.[0] ? (
            <motion.img
              src={youtuber.images[0]}
              alt={youtuber.name}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <p className="text-white text-sm">No Image Available</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-white">{youtuber.name}</h2>
          </div>

          <p className="text-gray-300 text-sm mb-4 line-clamp-4">
            {youtuber.shortDescription}
          </p>

          <Link
            to={`/youtubers/${youtuber.id}`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group"
          >
            Explore Journey
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

      {/* Bottom Home Button */}
      <motion.div
        className="p-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link
          to="/"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 inline-flex items-center gap-2"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v10a2 2 0 002 2h4a2 2 0 002-2V14m-6 0h6" />
          </svg>
          Back to Home
        </Link>
      </motion.div>

      {/* Back to Top Button */}
<motion.div
  className="fixed bottom-32 right-8" // <-- changed from bottom-8 to bottom-24
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
>
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
    aria-label="Back to top"
  >
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</motion.div>

    </div>
  );
};

export default IndiansInJapan;