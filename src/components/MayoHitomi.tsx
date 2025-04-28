import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { youtubers } from "../data/youtubersData";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YouTuberDetails = () => {
  const { id } = useParams();
  const youtuber = youtubers.find((y) => y.id === parseInt(id));

  if (!youtuber) {
    return <div className="text-white text-center py-16">YouTuber not found</div>;
  }

  // Generate schema.org markup for rich snippets
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": youtuber.name,
    "description": youtuber.shortDescription,
    "url": window.location.href,
    "sameAs": Object.values(youtuber.socialMedia),
    "image": youtuber.images[0],
    "jobTitle": "YouTuber, Language Educator, Mayo Japan",
    "worksFor": {
      "@type": "Organization",
      "name": "Mayo Japan Channel"
    },
  };

  // Slider settings for automatic image carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <Helmet>
        <title>{youtuber.name} | Nihongo Journey - Japanese Culture & Language</title>
        <meta
          name="description"
          content={`Learn about ${youtuber.name}, ${youtuber.shortDescription}. Discover Japanese culture through an Indian perspective.`}
        />
        <meta property="og:title" content={`${youtuber.name} | Nihongo Journey`} />
        <meta property="og:description" content={youtuber.shortDescription} />
        <meta property="og:image" content={youtuber.images[0]} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://nihongojourney.com/youtubers/${youtuber.id}`} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-16 px-6 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Larger Container */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Home Button and Slider Container */}
          <div className="flex flex-col">
            {/* Home Button */}
            <div className="p-6 text-center">
              <Link
                to="/"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7m-9 2v10a2 2 0 002 2h4a2 2 0 002-2V14m-6 0h6"
                  />
                </svg>
                Nihongo Journey Home Page
              </Link>
            </div>

            {/* Mobile Slider (shown only on mobile) */}
            <div className="md:hidden px-6 pb-6">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">{youtuber.name}</h2>
              <Slider {...sliderSettings}>
                {youtuber.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src={img}
                      alt={`Mayo Hitomi (Mayo Japan) - Image ${index + 1}`}
                      className="w-[90%] mx-auto h-[300px] md:h-[380px] rounded-[20px] object-contain"
                    />
                  </motion.div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 p-10">
            {/* Left Side: Details and Audio */}
            <div className="md:w-1/2">
              {/* YouTuber Name (hidden on mobile since we show it above slider) */}
              <motion.h1
                className="hidden md:block text-5xl font-extrabold text-gray-900 mb-6 text-center bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {youtuber.name}
              </motion.h1>

              {/* Audio Section */}
              <motion.div
                className="mb-8 bg-gray-100 p-6 rounded-xl shadow-inner"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Famous Intro Clip</h2>
                <audio controls className="w-full">
                  <source src={youtuber.audioClip} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-gray-600 mt-2 italic">
                  "Main Hindi bolne wali Japani ladki hun (मैं हिंदी बोलने वाली जापानी लड़की हूँ) – I am a Hindi speaking Japanese girl"
                </p>
              </motion.div>

              {/* Full Description Split into Paragraphs */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {youtuber.fullDescription.split("\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-lg mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Mobile-only content (Early Life, Career, Methodology) */}
              <motion.div
                className="md:hidden mt-8 bg-gray-50 p-6 rounded-lg shadow-inner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Early Life and Education</h3>
                <p className="text-gray-700 mb-4">
                  Mayo Hitomi was born near Fukuoka, Japan, and developed an interest in Hindi inspired by her father, Goro Hitomi, a Himalayan climber. She pursued Hindi studies at Osaka University and spent a year at Kendriya Hindi Sansthan in India to deepen her language skills.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">YouTube Career</h3>
                <p className="text-gray-700 mb-4">
                  Starting with Hindi lessons for Japanese audiences, Mayo transitioned to teaching Japanese in Hindi for Indian viewers. Her viral Holi festival video in Nishikasai, Japan, gained her over 50,000 subscribers overnight, leading to over 3 million subscribers today.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">Content Style</h3>
                <p className="text-gray-700">
                  Mayo’s content blends language education, cultural vlogs, and dance videos, bridging Japanese and Indian cultures. She also promotes Japanese brands and runs the Ani Mayo Channel to introduce anime to Indian audiences.
                </p>
              </motion.div>
            </div>

            {/* Right Side: Desktop Image Slider */}
            <div className="hidden md:block md:w-1/2">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">{youtuber.name}</h2>
              <div className="md:px-8">
                <Slider {...sliderSettings}>
                  {youtuber.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <img
                        src={img}
                        alt={`Mayo Hitomi (Mayo Japan) - Image ${index + 1}`}
                        className="w-[90%] mx-auto h-[300px] md:h-[380px] rounded-[20px] object-contain"
                      />
                    </motion.div>
                  ))}
                </Slider>
              </div>

              {/* Desktop-only content (Early Life, Career, Methodology) */}
              <motion.div
                className="hidden md:block mt-8 bg-gray-50 p-6 rounded-lg shadow-inner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Early Life and Education</h3>
                <p className="text-gray-700 mb-4">
                  Mayo Hitomi was born near Fukuoka, Japan, and developed an interest in Hindi inspired by her father, Goro Hitomi, a Himalayan climber. She pursued Hindi studies at Osaka University and spent a year at Kendriya Hindi Sansthan in India to deepen her language skills.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">YouTube Career</h3>
                <p className="text-gray-700 mb-4">
                  Starting with Hindi lessons for Japanese audiences, Mayo transitioned to teaching Japanese in Hindi for Indian viewers. Her viral Holi festival video in Nishikasai, Japan, gained her over 50,000 subscribers overnight, leading to over 3 million subscribers today.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">Content Style</h3>
                <p className="text-gray-700">
                  Mayo’s content blends language education, cultural vlogs, and dance videos, bridging Japanese and Indian cultures. She also promotes Japanese brands and runs the Ani Mayo Channel to introduce anime to Indian audiences.
                </p>
              </motion.div>
            </div>
          </div>

          {/* YouTube Video Section */}
          <motion.div
            className="p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Video 1 */}
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                  src={youtuber.videoUrls[0]}
                  title={`${youtuber.name}'s Featured Video 1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Video 2 */}
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                  src={youtuber.videoUrls[1]}
                  title={`${youtuber.name}'s Featured Video 2`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="p-10 flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href={youtuber.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 text-lg font-semibold"
            >
              Visit YouTube Channel
            </a>
            <a
              href={youtuber.rrjAcademyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full shadow-md hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 text-lg font-semibold"
            >
              Explore Courses
            </a>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            className="p-10 bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Connect with Mayo Hitomi
            </h2>
            <div className="flex justify-center gap-6">
              <a
                href={youtuber.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium"
              >
                Instagram
              </a>
              <a
                href={youtuber.socialMedia.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium"
              >
                Threads
              </a>
            </div>
          </motion.div>

          {/* Home Button Bottom */}
          <motion.div
            className="p-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link
              to="/"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7m-9 2v10a2 2 0 002 2h4a2 2 0 002-2V14m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default YouTuberDetails;