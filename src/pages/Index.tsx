
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import SectionHeading from '../components/SectionHeading';
import CardComponent from '../components/CardComponent';

const HomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Images for the slider
  const sliderImages = [
    {
      src: "https://e1.pxfuel.com/desktop-wallpaper/48/847/desktop-wallpaper-1680x1050-sensoji-temple-tokyo-tokyo.jpg",
      alt: "Sensoji Temple",
      caption: "Sensoji Temple - Tokyo's oldest temple, founded in 628 AD, attracts millions of visitors annually."
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/324/923/643/buddhist-temple-landmark-japanese-architecture-temple-wallpaper-preview.jpg",
      alt: "Sensoji Pagoda",
      caption: "Sensoji Pagoda - A symbol of peace and harmony in the heart of Tokyo."
    },
    {
      src: "https://e0.pxfuel.com/wallpapers/644/311/desktop-wallpaper-most-beautiful-places-in-japan-japanese-scenic.jpg",
      alt: "Matsumoto Castle",
      caption: "Matsumoto Castle - One of Japan's most complete and beautiful original castles."
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/888/85/317/japan-landscape-fall-cherry-trees-wallpaper-preview.jpg",
      alt: "Kyoto Garden",
      caption: "Kyoto Garden - Experience the beauty of traditional Japanese landscape design."
    },
    {
      src: "https://c1.wallpaperflare.com/preview/131/67/695/fushimi-inari-taisha-shrine-kyoto-japan-culture.jpg",
      alt: "Fushimi Inari Taisha",
      caption: "Fushimi Inari Taisha - Famous for its thousands of vermilion torii gates."
    },
    {
      src: "https://i.pinimg.com/originals/f0/ce/c0/f0cec0db80962ffd21c2bc92bcae842b.png",
      alt: "Seigantoji Pagoda",
      caption: "Seigantoji Pagoda - Three-story pagoda standing beside Nachi Falls."
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/45/471/815/bamboo-forest-wallpaper-preview.jpg",
      alt: "Bamboo Forest",
      caption: "Arashiyama Bamboo Forest - One of Kyoto's most iconic natural attractions."
    },
    {
      src: "https://c0.wallpaperflare.com/preview/536/18/486/person-neon-asia-city.jpg",
      alt: "Shibuya",
      caption: "Shibuya - Tokyo's vibrant commercial and entertainment district known for its crossing."
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://p4.wallpaperbetter.com/wallpaper/989/459/755/mountain-fujiyoshida-arakura-asia-wallpaper-preview.jpg" 
            alt="Mount Fuji with Pagoda" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <div className="glass p-10 rounded-2xl shadow-glass text-white backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="text-shimmer">EXPLORE JAPAN</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-8">AND LEARN JAPANESE</p>

              <Link 
                to="/learn" 
                className="button-primary text-lg inline-flex items-center group"
              >
                START NOW
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Site Introduction */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="A site for everything about Japan" center />
          <p className="text-lg text-gray-700 mt-6">
            Whether you're planning a trip, learning the language, or just fascinated by Japanese culture,
            Nihongo Journey provides comprehensive resources to guide your exploration. Dive into JLPT study
            materials, discover must-visit destinations, and immerse yourself in all aspects of Japan.
          </p>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Discover Breathtaking Japan" 
            subtitle="Explore iconic landmarks and hidden gems across the Land of the Rising Sun."
            center
          />
          
          <div className="mt-8">
            <ImageSlider images={sliderImages} />
          </div>
        </div>
      </section>

      {/* JLPT Section Preview */}
      <section id="learn-preview" className="py-16 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="JLPT Study Resources" subtitle="Comprehensive materials for all Japanese Language Proficiency Test levels." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <CardComponent
              image="https://65.media.tumblr.com/8c81e80f7abc90f59a61913284dda0a8/tumblr_inline_o7ckapQes21tqv1ik_500.gif"
              title="JLPT - N3"
              description="N3 is the intermediate level of the Japanese Language Proficiency Test and is described as the ability to understand Japanese used in everyday situations to a certain degree."
              externalLink="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing"
            />
            <CardComponent
              image="https://cotoacademy.com/app/uploads/2020/04/JLPT-N4-ta-bakari.png"
              title="JLPT - N4"
              description="N4 is the second level of the Japanese Language Proficiency Test (JLPT). To pass the JLPT N4, you need to be able to read 300 kanji and know about 1,500 vocabulary words."
              externalLink="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk"
            />
            <CardComponent
              image="https://www.attainj.co.jp/attain-online-japanese/material/images/jlpt-N5-en-1.jpg"
              title="JLPT - N5"
              description="N5 is the most basic level of the JLPT and just requires you to understand some basic Japanese like hiragana, katakana, and basic kanji as well as from spoken conversations."
              externalLink="https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk"
            />
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
          <SectionHeading 
            title="Featured Destinations" 
            subtitle="Experience Japan's most iconic locations and hidden treasures." 
            center 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <CardComponent
              image="https://ohh.okinawa/wpdir/wp-content/uploads/2019/07/2c3f1dcc6ff94338cc8d4cb470b96d97.gif"
              title="OKINAWA (沖縄)"
              description="Okinawa's climate is subtropical, with temperatures barely falling below 15 degrees in winter. The seas surrounding Okinawa's islands offer beautiful coral reefs and abundant marine wildlife."
              externalLink="https://www.japan-guide.com/e/e7101.html"
            />
            <CardComponent
              image="https://66.media.tumblr.com/4f7be749b7cd3ca69becbecb39a5124b/tumblr_py403w6jU71tjxoi0o2_500.gifv"
              title="KYOTO (京都)"
              description="Kyoto (京都) served as Japan's capital and the emperor's residence from 794 until 1868. It is one of the country's ten largest cities with a population of 1.5 million people and a modern face."
              externalLink="https://www.japan-guide.com/e/e2158.html"
            />
            <CardComponent
              image="https://www.michaelhaessig.com/assets/japan/kyoto-1/shinkansen.gif"
              title="BULLET TRAIN (新幹線)"
              description="Shinkansen (新幹線) in Japanese means 'new trunk line' or 'new main line', but this word is used to describe both the railway lines the trains run on. The trains are also known as the bullet train."
              externalLink="https://www.japan-guide.com/e/e2018.html"
            />
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/places" className="button-primary">
              Discover More Places
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-4 bg-gradient-indigo text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Japan Journey?</h2>
          <p className="text-lg mb-8">
            Dive into comprehensive resources for language learning, travel planning, cultural insights, and more.
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
