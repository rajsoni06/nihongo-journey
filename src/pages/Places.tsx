
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CardComponent from '../components/CardComponent';

const PlacesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Places' },
    { id: 'cities', name: 'Cities' },
    { id: 'nature', name: 'Nature & Parks' },
    { id: 'historical', name: 'Historical Sites' },
    { id: 'cultural', name: 'Cultural Experiences' }
  ];

  const places = [
    {
      id: 1,
      image: "https://ohh.okinawa/wpdir/wp-content/uploads/2019/07/2c3f1dcc6ff94338cc8d4cb470b96d97.gif",
      title: "OKINAWA (沖縄)",
      description: "Okinawa's climate is subtropical, with temperatures barely falling below 15 degrees in winter. The seas surrounding Okinawa's islands offer beautiful coral reefs and abundant marine wildlife.",
      link: "https://www.japan-guide.com/e/e7101.html",
      category: "nature"
    },
    {
      id: 2,
      image: "https://66.media.tumblr.com/4f7be749b7cd3ca69becbecb39a5124b/tumblr_py403w6jU71tjxoi0o2_500.gifv",
      title: "KYOTO (京都)",
      description: "Kyoto (京都) served as Japan's capital and the emperor's residence from 794 until 1868. It is one of the country's ten largest cities with a population of 1.5 million people and a modern face.",
      link: "https://www.japan-guide.com/e/e2158.html",
      category: "cities"
    },
    {
      id: 3,
      image: "https://www.michaelhaessig.com/assets/japan/kyoto-1/shinkansen.gif",
      title: "BULLET TRAIN (新幹線)",
      description: "Shinkansen (新幹線) in Japanese means 'new trunk line' or 'new main line', but this word is used to describe both the railway lines the trains run on. The trains are also known as the bullet train.",
      link: "https://www.japan-guide.com/e/e2018.html",
      category: "cultural"
    },
    {
      id: 4,
      image: "https://media.istockphoto.com/id/543973306/photo/fushimi-inari-taisha.jpg?s=612x612&w=0&k=20&c=h9SsC4YyDj1cl8Rs1Sy2K1SuysWjlvdnaV2TTvzJV9M=",
      title: "FUSHIMI INARI SHRINE (伏見稲荷大社)",
      description: "Famous for its thousands of vermilion torii gates, Fushimi Inari is the most important shrine dedicated to Inari, the Shinto god of rice. The shrine sits at the base of Mount Inari, and the hike to the summit takes 2-3 hours.",
      link: "https://www.japan-guide.com/e/e3915.html",
      category: "historical"
    },
    {
      id: 5,
      image: "https://media.istockphoto.com/id/502617555/photo/world-heritage-mount-fuji-and-lake-shoji.jpg?s=612x612&w=0&k=20&c=1aA-Z53dHEqc59HBiIwKJnQUKBX69BKa5dCU3E3Ck8w=",
      title: "MOUNT FUJI (富士山)",
      description: "Japan's highest mountain at 3,776 meters, the perfectly symmetrical volcanic cone of Mount Fuji is a national symbol and UNESCO World Heritage site. Climbing season runs from early July to mid-September.",
      link: "https://www.japan-guide.com/e/e2172.html",
      category: "nature"
    },
    {
      id: 6,
      image: "https://cdn.pixabay.com/photo/2017/08/07/13/43/building-2603950_640.jpg",
      title: "TOKYO SKYTREE (東京スカイツリー)",
      description: "Tokyo Skytree is a broadcasting and observation tower in Sumida, Tokyo. At 634 meters, it is the tallest structure in Japan and the second tallest in the world at the time of its completion in 2012.",
      link: "https://www.japan-guide.com/e/e3064.html",
      category: "cities"
    },
    {
      id: 7,
      image: "https://media.istockphoto.com/id/577308518/photo/kyoto-bamboo-forest.jpg?s=612x612&w=0&k=20&c=0B33yX07VpHO9k4-yExKDGDxESvFzmYSGst-MDpuugg=",
      title: "ARASHIYAMA BAMBOO GROVE (嵐山)",
      description: "Located in western Kyoto, the Arashiyama Bamboo Grove is one of Japan's most photographed sights. The path through the towering bamboo is magical, especially early in the morning or on a rainy day.",
      link: "https://www.japan-guide.com/e/e3912.html",
      category: "nature"
    },
    {
      id: 8,
      image: "https://media.istockphoto.com/id/466734064/photo/nara-deer-roam-free-in-nara-park-japan.jpg?s=612x612&w=0&k=20&c=mVSsK8x8sEY7ka5sJ77Wc8v4u_MJ-dZWHsx1vT31dhc=",
      title: "NARA PARK (奈良公園)",
      description: "Home to hundreds of freely roaming deer, Nara Park is a large public park and one of the main attractions of Nara. The deer are considered sacred messengers of the gods in Shinto.",
      link: "https://www.japan-guide.com/e/e4103.html",
      category: "nature"
    },
    {
      id: 9,
      image: "https://www.japan-guide.com/g21/3501_11.jpg",
      title: "HIMEJI CASTLE (姫路城)",
      description: "Widely considered Japan's most beautiful castle, Himeji Castle is a UNESCO World Heritage site and a national treasure. Its white exterior earned it the nickname 'White Heron Castle'.",
      link: "https://www.japan-guide.com/e/e3501.html",
      category: "historical"
    },
    {
      id: 10,
      image: "https://static.vecteezy.com/system/resources/previews/002/057/710/non_2x/imperial-palace-in-tokyo-japan-free-photo.jpg",
      title: "TOKYO IMPERIAL PALACE (皇居)",
      description: "The primary residence of the Emperor of Japan, the Tokyo Imperial Palace is a large park-like area located in the Chiyoda ward of Tokyo. The public East Gardens and Outer Gardens offer beautiful landscapes year-round.",
      link: "https://www.japan-guide.com/e/e3017.html",
      category: "historical"
    },
    {
      id: 11,
      image: "https://media.istockphoto.com/id/522473665/photo/osaka-japan-at-dotonbori-canal.jpg?s=612x612&w=0&k=20&c=V0yJFfSYnR7Hui-WVTUP9w9E9E37IGWDGywqHmy6o_Q=",
      title: "DOTONBORI (道頓堀)",
      description: "Osaka's most famous entertainment district, Dotonbori is known for its bright neon lights, extravagant signage, and food culture. Don't miss the iconic Glico Running Man sign and the giant mechanical crab.",
      link: "https://www.japan-guide.com/e/e4001.html",
      category: "cities"
    },
    {
      id: 12,
      image: "https://www.signify.com/content/dam/signify/en-us/blog/posts/Spotlight/team-lab.jpg",
      title: "TEAMLAB BORDERLESS (チームラボ ボーダレス)",
      description: "A digital art museum created by the art collective teamLab, featuring immersive interactive installations that move out of rooms and communicate with other artworks, creating a borderless world of art.",
      link: "https://borderless.teamlab.art/",
      category: "cultural"
    }
  ];

  const filteredPlaces = activeCategory === 'all' 
    ? places 
    : places.filter(place => place.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Japan Travel - Mount Fuji" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Iconic Places in Japan</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up">
            From ancient temples to futuristic cityscapes, discover Japan's most captivating destinations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b sticky top-28 z-30 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-japan-red text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title={
              activeCategory === 'all' ? 'All Places' : 
              activeCategory === 'cities' ? 'Cities' :
              activeCategory === 'nature' ? 'Nature & Parks' :
              activeCategory === 'historical' ? 'Historical Sites' : 'Cultural Experiences'
            } 
            subtitle="Explore Japan's most remarkable destinations" 
            className="mb-10"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map(place => (
              <CardComponent
                key={place.id}
                image={place.image}
                title={place.title}
                description={place.description}
                externalLink={place.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Planning Section */}
      <section className="py-16 px-4 bg-gradient-indigo text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Japan Adventure</h2>
          <p className="text-lg mb-8">
            Ready to experience these breathtaking places in person? Connect with our community for travel tips, itinerary planning, and insider advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.japan-guide.com/e/e623a.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button inline-flex items-center"
            >
              Japan Travel Guide <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="https://chat.whatsapp.com/JZu3yXhmwqMCoFxc9XZvKM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button"
            >
              Join Travel Community
            </a>
          </div>
        </div>
      </section>

      {/* Seasonal Recommendations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Seasonal Highlights" 
            subtitle="The best places to visit during each season in Japan" 
            className="mb-10"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-0 overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://voyeglobal.com/wp-content/uploads/2025/02/thumbnail-c882a9af-23fa-46be-80d4-f8e87022f315.jpg" 
                  alt="Cherry Blossoms in Spring" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Spring (March-May)</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Spring brings cherry blossoms (sakura) throughout Japan. The pink flowers typically bloom from late March to early April.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Kyoto:</strong> Philosopher's Path, Maruyama Park</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Tokyo:</strong> Ueno Park, Shinjuku Gyoen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Hirosaki:</strong> Hirosaki Castle Park (late April)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-0 overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://i0.wp.com/tokyotreatblog.wpcomstaging.com/wp-content/uploads/2023/09/hanabi-matsuri-thumbnail.png?fit=1024%2C683&ssl=1" 
                  alt="Summer Festivals" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Summer (June-August)</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Summer is festival (matsuri) season in Japan, with fireworks displays (hanabi) and colorful celebrations throughout the country.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Kyoto:</strong> Gion Matsuri (July)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Osaka:</strong> Tenjin Matsuri (July)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Hokkaido:</strong> Lavender fields of Furano</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-0 overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://blog.sakura.co/wp-content/uploads/2023/09/autumn-in-japan-thumbnail.png" 
                  alt="Autumn Foliage" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Autumn (September-November)</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Autumn brings vivid red and gold foliage to Japan's mountains and gardens, creating stunning scenery throughout the country.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Kyoto:</strong> Arashiyama, Tofukuji Temple</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Nikko:</strong> Shrines and temples amid autumn colors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Hakone:</strong> Lake Ashi with Mt. Fuji views</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-0 overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://www.datocms-assets.com/101439/1700746278-skiing.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.46&fp-y=0.57&h=800&w=1200" 
                  alt="Winter Snow" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Winter (December-February)</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Winter transforms Japan with snow-covered landscapes, illuminations, and the perfect season for hot springs (onsen) and skiing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Hokkaido:</strong> Sapporo Snow Festival (February)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Nagano:</strong> Snow monkeys at Jigokudani</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-japan-red mr-2">•</span>
                    <span><strong>Shirakawa-go:</strong> Snow-covered traditional houses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacesPage;
