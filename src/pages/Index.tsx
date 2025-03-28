import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import SectionHeading from '../components/SectionHeading';
import CardComponent from '../components/CardComponent';
import ScrollDownIndicator from '../components/ScrollDownIndicator';

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Images for the slider in Hero Section with enhanced brightness and saturation
  const heroImages = [
    {
      src: "Mount_Fuji.jpg",
      alt: "Mount Fuji and Chureito Pagoda",
      title: "Mount Fuji & Chureito Pagoda",
      style: { filter: 'brightness(1.3) saturate(1.4)' },
    },
    {
      src: "Seigantoji_Pagoda.jpg",
      alt: "Seigantoji Pagoda, Japan",
      title: "Seigantoji Pagoda",
      style: { filter: "brightness(1.3) saturate(1.4)" }
    },
    {
      src: "Motonosumi_Inari_Shrine.jpg",
      alt: "Motonosumi Inari Shrine, Japan",
      title: "Motonosumi Inari Shrine",
      style: { filter: "brightness(1.3) saturate(1.4)" }
    },    
    {
      src: "Asakusa.jpeg",
      alt: "Asakusa, Tokyo",
      title: "Asakusa Temple, Tokyo",
      style: { filter: "brightness(1.3) saturate(1.4)" }
    },
    {
      src: "Fukuoka_Castle.jpeg",
      alt: "Fukuoka Castle, Japan",
      title: "Fukuoka Castle Ruins",
      style: { filter: "brightness(1.3) saturate(1.4)" }
    },    
    {
      src: "Arashiyama_bamboo_forest.jpg",
      alt: "Arashiyama Bamboo Grove, Kyoto",
      title: "Arashiyama Bamboo Grove",
      style: { filter: 'brightness(1.3) saturate(1.4)' },
    },
    {
      src: "meguro_river.jpg",
      alt: "Meguro River, Tokyo",
      title: "Meguro River",
      style: { filter: 'brightness(1.3) saturate(1.4)' },
    },
    {
      src: "Osaka_castle.jpg",
      alt: "Shibuya Crossing, Tokyo",
      title: "Shibuya Crossing",
      style: { filter: 'brightness(1.3) saturate(1.4)' },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Images for the Discover Breathtaking Japan Slider
  const sliderImages = [
    {
      src: "https://e1.pxfuel.com/desktop-wallpaper/48/847/desktop-wallpaper-1680x1050-sensoji-temple-tokyo-tokyo.jpg",
      alt: "Sensoji Temple",
      caption: "Sensoji Temple - Tokyo's oldest temple, founded in 628 AD.",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/324/923/643/buddhist-temple-landmark-japanese-architecture-temple-wallpaper-preview.jpg",
      alt: "Sensoji Pagoda",
      caption: "Sensoji Pagoda - A symbol of peace in Tokyo.",
    },
    {
      src: "https://e0.pxfuel.com/wallpapers/644/311/desktop-wallpaper-most-beautiful-places-in-japan-japanese-scenic.jpg",
      alt: "Matsumoto Castle",
      caption: "Matsumoto Castle - A beautiful original castle.",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/888/85/317/japan-landscape-fall-cherry-trees-wallpaper-preview.jpg",
      alt: "Kyoto Garden",
      caption: "Kyoto Garden - Traditional Japanese beauty.",
    },
    {
      src: "https://c1.wallpaperflare.com/preview/131/67/695/fushimi-inari-taisha-shrine-kyoto-japan-culture.jpg",
      alt: "Fushimi Inari Taisha",
      caption: "Fushimi Inari Taisha - Famous for torii gates.",
    },
    {
      src: "https://i.pinimg.com/originals/f0/ce/c0/f0cec0db80962ffd21c2bc92bcae842b.png",
      alt: "Seigantoji Pagoda",
      caption: "Seigantoji Pagoda - Beside Nachi Falls.",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/45/471/815/bamboo-forest-wallpaper-preview.jpg",
      alt: "Bamboo Forest",
      caption: "Arashiyama Bamboo Forest - Iconic nature.",
    },
    {
      src: "https://c0.wallpaperflare.com/preview/536/18/486/person-neon-asia-city.jpg",
      alt: "Shibuya",
      caption: "Shibuya - Tokyo's vibrant district.",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Shorter height */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex].src}
            alt={heroImages[currentImageIndex].alt}
            className="w-full h-full object-cover"
            style={heroImages[currentImageIndex].style}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-2 left-2 text-white text-xs sm:text-sm md:text-base font-semibold bg-black/50 p-1 sm:p-2 rounded-md">
            {heroImages[currentImageIndex].title}
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <div className="glass p-2 sm:p-4 md:p-6 rounded-2xl shadow-glass text-white backdrop-blur-md mx-2 sm:mx-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Enhanced Explore Japan Text */}
              <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-pink-600 drop-shadow-lg"
                initial={{ rotateX: -90 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 1 }}
              >
                EXPLORE JAPAN
              </motion.h1>
              <p className="text-base sm:text-lg md:text-xl mb-6">AND LEARN JAPANESE</p>

              <Link
                to="/learn"
                className="button-primary text-sm sm:text-base inline-flex items-center group transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
              >
                START NOW
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        <ScrollDownIndicator />
      </section>

      {/* Site Introduction */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="A site for everything about Japan" center />
          <p className="text-base sm:text-lg text-gray-700 mt-6">
            Whether you're planning a trip, learning the language, or just fascinated by Japanese culture,
            Nihongo Journey provides comprehensive resources to guide your exploration.
          </p>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Discover Breathtaking Japan
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Explore iconic landmarks and hidden gems across Japan.
            </p>
          </div>
          <div className="mt-8">
            <ImageSlider images={sliderImages} />
          </div>
        </div>
      </section>

      {/* JLPT Section Preview */}
      <section id="learn-preview" className="py-16 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="JLPT Study Resources"
            subtitle="Comprehensive materials for all JLPT levels."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardComponent
                image="https://65.media.tumblr.com/8c81e80f7abc90f59a61913284dda0a8/tumblr_inline_o7ckapQes21tqv1ik_500.gif"
                title="JLPT - N3"
                description="Intermediate level to understand everyday Japanese."
                externalLink="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardComponent
                image="https://i.ytimg.com/vi/uHdJn_ENpIo/hq720.jpg"
                title="JLPT - N4"
                description="Requires reading 300 kanji and 1,500 vocabulary words."
                externalLink="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardComponent
                image="https://www.attainj.co.jp/attain-online-japanese/material/images/jlpt-N5-en-1.jpg"
                title="JLPT - N5"
                description="Basic level with hiragana, katakana, and simple kanji."
                externalLink="https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk"
              />
            </motion.div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/learn" className="button-primary">
              Explore All JLPT Levels
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Places Preview */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Featured Destinations
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Experience Japan's iconic locations and hidden treasures.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardComponent
                image="https://ohh.okinawa/wpdir/wp-content/uploads/2019/07/2c3f1dcc6ff94338cc8d4cb470b96d97.gif"
                title="OKINAWA (沖縄)"
                description="Subtropical climate with stunning coral reefs."
                externalLink="https://www.japan-guide.com/e/e7101.html"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardComponent
                image="https://66.media.tumblr.com/4f7be749b7cd3ca69becbecb39a5124b/tumblr_py403w6jU71tjxoi0o2_500.gifv"
                title="KYOTO (京都)"
                description="Japan's historic capital with a modern face."
                externalLink="https://www.japan-guide.com/e/e2158.html"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardComponent
                image="https://www.michaelhaessig.com/assets/japan/kyoto-1/shinkansen.gif"
                title="BULLET TRAIN (新幹線)"
                description="High-speed rail known as the bullet train."
                externalLink="https://www.japan-guide.com/e/e2018.html"
              />
            </motion.div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/places" className="button-primary">
              Discover More Places
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Japan Journey?
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Dive into resources for language learning, travel planning, and cultural insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/learn" className="button-primary">
              Start Learning Japanese
            </Link>
            <Link to="/travel" className="glass-button">
              Explore Travel Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;