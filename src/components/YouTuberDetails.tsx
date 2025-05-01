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
    name: youtuber.name,
    description: youtuber.shortDescription,
    url: window.location.href,
    sameAs: Object.values(youtuber.socialMedia || {}),
    image: youtuber.images?.[0] || "",
    jobTitle: "YouTuber, Content Creator",
    worksFor: {
      "@type": "Organization",
      name: youtuber.name === "Rom Rom Ji" ? "RRJ Academy" : `${youtuber.name} Channel`,
    },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800, // Slightly slower transition for smoother effect
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Increased duration for better viewing
    arrows: false,
    // Custom dots styling
    appendDots: dots => (
      <div className="pb-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2.5 h-2.5 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition-all duration-300"></div>
    ),
    // Fade effect instead of slide
    fade: true,
    // Smooth easing
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  };
  // Dynamic content generation functions
  const getEarlyLifeAndEducation = () => {
    switch (youtuber.id) {
      case 1:
        return "Originally from Faridabad, Haryana, India, Pawan Lohomord moved to Japan in 2014 after studying Japanese at the Shinjuku Japanese Language Institute in Tokyo. He later pursued filmmaking and music at Osaka University of Arts, balancing part-time jobs to support his education.";
      case 2:
        return "Ajay Pandey grew up in India with a passion for art and technology. While specific details of his early education are not widely shared, his skills as a digital sculptor and character artist suggest a strong background in creative arts, likely honed through self-study and professional experience.";
      case 3:
        return "Taba Yam Ana hails from Arunachal Pradesh, India, where she initially pursued a law degree. Her passion for travel and storytelling led her to pivot from a legal career to becoming a full-time content creator, exploring cultures across Asia and beyond.";
      case 4:
        return "Ankit Purohit hails from Maharashtra, India. He earned a Bachelor's degree in Computer Engineering from Nagpur University, followed by a Master's in Mechatronics from Savitribai Phule Pune University. Currently, he is pursuing an MBA in Analytics at the Indian Institute of Management Kashipur.";
      case 5:
        return "Born near Fukuoka, Japan, Mayo Hitomi developed an interest in Hindi inspired by her father, Goro Hitomi, a Himalayan climber who frequently visited India. She pursued Hindi studies at Osaka University and spent a year at Kendriya Hindi Sansthan in India to deepen her language skills.";
      case 6:
        return "MaharaJapan is a YouTube channel run by Japanese students who have spent time in India. The team members, Fumiko, Ren, and Izumi, have diverse backgrounds but share a passion for cultural exchange. They developed a deep connection to Indian culture during their stay, which inspired them to share their experiences with a wider audience.";
      case 7:
        return "Kohei Takamatsu, born in Zushi, Kanagawa, Japan, began playing the violin at age three. He studied at the Tokyo College of Music. Inspired by A.R. Rahman's music in Slumdog Millionaire, he moved to India and studied Hindi at the Central Hindi Institute in Mysore.";
      default:
        return "Information not available.";
    }
  };

  const getYouTubeCareer = () => {
    switch (youtuber.id) {
      case 1:
        return "Pawan launched his YouTube channel on February 22, 2017, under the name Rom Rom Ji, a satirical take on the Hindu greeting 'Rām Rām Jī.' His channel features vlogs about daily life, camping trips, and cultural comparisons between India and Japan, reaching 613,000 subscribers by April 26, 2025.";
      case 2:
        return "Ajay began his YouTube journey in March 2011, showcasing his freelance sculpting work and thrilling motorbike adventures across Japan. With over 340,000 subscribers, his channel has become a go-to for those interested in digital art and Japanese road culture.";
      case 3:
        return "Taba Yam Ana started her YouTube channel to document her travels across ten countries, including South Korea, Japan, and the Philippines. Her channel inspires viewers to explore the world as curious adventurers, building a community of like-minded travelers.";
      case 4:
        return "Ankit launched his YouTube channel, @ankitpurohitvlogs, on October 7, 2018. His content focuses on travel vlogs, fitness routines, and cultural experiences in Japan and other countries. As of December 2024, he has over 83,000 subscribers and continues to grow his audience by sharing engaging and motivational content.";
      case 5:
        return "Mayo started her YouTube journey teaching Hindi to Japanese audiences but shifted to creating Japanese language tutorials and cultural vlogs in Hindi for Indian viewers. Her viral Holi festival video in Nishikasai, Japan, gained her over 50,000 subscribers overnight, leading to over 3.5 million subscribers today.";
      case 6:
        return "MaharaJapan was launched on October 26, 2020. The channel has grown significantly, amassing over 167K subscribers and more than 52 million views. Their content primarily focuses on engaging with Indian culture, with a mix of challenges, reactions, and cultural comparisons, helping bridge the gap between Japanese and Indian communities.";
      case 7:
        return "Kohei launched his YouTube channel, Namaste Kohei, in October 2016, initially sharing violin covers of Bollywood songs. Over time, he expanded his content to include mashups, cultural reaction videos, and street interviews, often conversing in Hindi with Indian tourists in Japan. His unique blend of music and cross-cultural content garnered him over 2.6 million subscribers.";
      default:
        return "Information not available.";
    }
  };

  const getContentStyle = () => {
    switch (youtuber.id) {
      case 1:
        return "Pawan’s content style blends vlogging with cultural education, offering a unique Indian perspective on Japanese daily life and traditions. He also founded RRJ Academy, providing courses in languages, vlogging, music, manga, anime, film, and fitness.";
      case 2:
        return "Ajay’s content style merges digital artistry with real-world exploration, featuring his sculpting projects alongside motorbike travel vlogs. His storytelling and authentic content inspire aspiring artists and travel enthusiasts.";
      case 3:
        return "Ana’s content style focuses on curated travel itineraries, cultural experiences, and practical travel tips. She uses high-quality equipment like the DJI Pocket 3 and iPhone 16 Pro Max to create vibrant vlogs, emphasizing authentic cultural connections.";
      case 4:
        return "Ankit's content style is a blend of travel, fitness, and cultural exploration. He offers viewers an authentic look into life in Japan, shares his fitness journey, and provides motivational insights, all aimed at inspiring a healthier and more adventurous lifestyle.";
      case 5:
        return "Mayo’s content blends language education, cultural vlogs, and dance videos, bridging Japanese and Indian cultures. She also promotes Japanese brands and runs the Ani Mayo Channel to introduce anime to Indian audiences.";
      case 6:
        return "The content on MaharaJapan blends fun challenges, cultural exchanges, and lighthearted reactions to Indian life and traditions. The videos often feature the hosts interacting with locals, exploring cultural differences, and introducing aspects of Japanese culture to their Indian audience, making the channel relatable and entertaining for both cultures.";
      case 7:
        return "Kohei's content combines musical performances and cultural exploration. He's known for violin renditions of Hindi film songs, reaction videos to Indian culture, and street interviews. His ability to connect through music and language has made him a beloved figure in Indo-Japanese cultural exchanges.";
      default:
        return "Information not available.";
    }
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
        <meta property="og:image" content={youtuber.images?.[0] || ""} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://nihongojourney.com/youtubers/${youtuber.id}`} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <div>
        <motion.div
          className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-8 px-4 md:px-6 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Larger Container */}
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Home Button and Slider Container */}
            <div className="flex flex-col">
              {/* Home Button */}
              <div className="p-4 text-center">
                <Link
                  to="/"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5"
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
                  Nihongo Journey Home
                </Link>
              </div>
              {/* Mobile Slider (shown only on mobile) */}
              <div className="md:hidden px-4 pb-4">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-800">{youtuber.name}</h2>
                <Slider {...sliderSettings}>
                  {youtuber.images?.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <img
                        src={img}
                        alt={`${youtuber.name} - Image ${index + 1}`}
                        className="w-[90%] mx-auto h-[200px] md:h-[380px] rounded-[20px] object-contain"
                      />
                    </motion.div>
                  ))}
                </Slider>
              </div>
            </div>
            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10">
              {/* Left Side: Details */}
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
                {/* Audio Section - Only for Rom Rom Ji (ID 1) */}
                {youtuber.id === 1 && (
                  <motion.div
                    className="mb-6 bg-gray-100 p-4 rounded-xl shadow-inner"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Famous Intro Clip</h2>
                    <audio controls className="w-full">
                      <source src="/RomRomJi.mp3" type="audio/mp3" />
                      <source src="/RomRomJi.ogg" type="audio/ogg" />
                      Your browser does not support the audio element.
                    </audio>
                    <p className="text-gray-600 mt-2 italic text-sm">
                      "रोम रोम जी और क्या मौज आ रही है? आ भी रही है कि वैसे ही वकत कट रहा है, हें?" <br />
                      "Rom Rom Ji! What's good? Is there anything or are you just killing time?"
                    </p>
                  </motion.div>
                )}
                {/* Full Description */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {youtuber.fullDescription.split("\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-700 text-base md:text-lg mb-4">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
                {/* Mobile-only content (Early Life, Career, Content Style) */}
                <motion.div
                  className="md:hidden mt-6 bg-gray-50 p-4 rounded-lg shadow-inner"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-base font-semibold mb-2 text-gray-800">Early Life and Education</h3>
                  <p className="text-gray-700 text-sm mb-4">{getEarlyLifeAndEducation()}</p>
                  <h3 className="text-base font-semibold mb-2 text-gray-800">YouTube Career</h3>
                  <p className="text-gray-700 text-sm mb-4">{getYouTubeCareer()}</p>
                  <h3 className="text-base font-semibold mb-2 text-gray-800">Content Style</h3>
                  <p className="text-gray-700 text-sm">{getContentStyle()}</p>
                </motion.div>
              </div>
              {/* Right Side: Desktop Image Slider */}
              <div className="hidden md:block md:w-1/2">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">{youtuber.name}</h2>
                <div className="md:px-4">
                  <Slider {...sliderSettings}>
                    {youtuber.images?.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <img
                          src={img}
                          alt={`${youtuber.name} - Image ${index + 1}`}
                          className="w-[90%] mx-auto h-[300px] md:h-[380px] rounded-[20px] object-contain"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>
                {/* Desktop-only content (Early Life, Career, Content Style) */}
                <motion.div
                  className="hidden md:block mt-6 bg-gray-50 p-4 rounded-lg shadow-inner"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Early Life and Education</h3>
                  <p className="text-gray-700 text-sm mb-4">{getEarlyLifeAndEducation()}</p>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">YouTube Career</h3>
                  <p className="text-gray-700 text-sm mb-4">{getYouTubeCareer()}</p>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Content Style</h3>
                  <p className="text-gray-700 text-sm">{getContentStyle()}</p>
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
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                Featured Videos
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {youtuber.videoUrls?.map((url, index) => (
                  <div key={index} className="relative" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                      src={url}
                      title={`${youtuber.name}'s Featured Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Buttons */}
<motion.div
className="p-4 md:p-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 1 }}
>
<a
  href={youtuber.link}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 text-xs sm:text-sm md:text-base inline-flex items-center justify-center"
>
  Visit YouTube Channel
</a>
<a
  href={youtuber.rrjAcademyLink}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full shadow-md hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 text-xs sm:text-sm md:text-base inline-flex items-center justify-center"
>
  Explore Courses
</a>
</motion.div>

<style>
{`
  /* Default Styles */
  a {
    padding: 0.5em 1em; /* Dynamic padding based on text size */
    white-space: nowrap; /* Prevent text wrapping */
    font-size: clamp(0.75rem, 2vw, 1rem); /* Responsive font size */
  }

  /* Media Queries for Responsive Design */
  @media (max-width: 640px) {
    .motion-div {
      padding: 1rem; /* Reduce padding on small screens */
    }
    a {
      font-size: 0.75rem; /* Smaller font size for buttons */
      padding: 0.5em 1em; /* Reduced padding for buttons */
    }
  }

  @media (min-width: 641px) and (max-width: 768px) {
    .motion-div {
      padding: 1.5rem; /* Slightly larger padding for medium screens */
    }
    a {
      font-size: 0.875rem; /* Medium font size for buttons */
      padding: 0.6em 1.2em; /* Adjusted padding for buttons */
    }
  }

  @media (min-width: 769px) {
    .motion-div {
      padding: 2rem; /* Default padding for larger screens */
    }
    a {
      font-size: 1rem; /* Default font size for buttons */
      padding: 0.75em 1.5em; /* Default padding for buttons */
    }
  }
`}
</style>
            


            {/* Social Media Section */}
<motion.div
  className="p-6 md:p-10 bg-gray-100 rounded-b-2xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1.2 }}
>
  <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4 text-center">
    Connect with {youtuber.name}
  </h2>
  <div className="flex justify-center gap-4 flex-wrap">
    {youtuber.socialMedia?.instagram && (
      <a
        href={youtuber.socialMedia.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 text-sm md:text-base shadow-sm hover:shadow-md"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
        Instagram
      </a>
    )}
    {youtuber.socialMedia?.threads && (
      <a
        href={youtuber.socialMedia.threads}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:from-gray-800 hover:to-gray-950 transition-all duration-300 text-sm md:text-base shadow-sm hover:shadow-md"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2c-2.236 0-4.43.18-6.57.524C3.18 2.755 2 4.014 2 5.426v13.148c0 1.413 1.192 2.673 2.822 2.94 1.629.267 3.31.486 5.178.486s3.548-.22 5.178-.487c1.63-.267 2.822-1.526 2.822-2.94V5.426c0-1.412-1.192-2.67-2.822-2.902C16.43 2.18 14.236 2 12 2zM9 8h6v2H9V8zm0 4h6v2H9v-2z" clipRule="evenodd" />
        </svg>
        Threads
      </a>
    )}
    {youtuber.socialMedia?.linkedin && (
      <a
        href={youtuber.socialMedia.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-sm md:text-base shadow-sm hover:shadow-md"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
        LinkedIn
      </a>
    )}
  </div>
</motion.div>



            {/* Home Button Bottom */}
            <motion.div
              className="p-6 md:p-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Link
                to="/"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
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
      </div>
    </>
  );
};

export default YouTuberDetails;