import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';

interface RegionInfo {
  id: string;
  name: string;
  japName: string;
  description: string;
  highlights: string[];
  image: string;
}

const AreasPage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: RegionInfo[] = [
    {
      id: 'hokkaido',
      name: 'Hokkaido',
      japName: '北海道',
      description: 'Japan\'s northernmost island, known for its stunning natural beauty, skiing, hot springs, and delicious seafood. Hokkaido has a cooler climate than the rest of Japan, making it popular for winter sports.',
      highlights: [
        'Sapporo - Famous for its annual snow festival and beer',
        'Daisetsuzan National Park - Japan\'s largest national park',
        'Furano - Known for lavender fields in summer',
        'Niseko - Premier ski resort area',
        'Shiretoko Peninsula - UNESCO World Heritage site known for diverse wildlife',
      ],
      image: 'https://images.unsplash.com/photo-1578321926907-715ae0383858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'tohoku',
      name: 'Tohoku',
      japName: '東北',
      description: 'The northeastern region of Honshu, consisting of six prefectures. It\'s known for its rural landscapes, hot springs, historic castles, and samurai districts. Tohoku is famous for its summer festivals and winter snow.',
      highlights: [
        'Hirosaki - Home to one of Japan\'s most beautiful cherry blossom spots',
        'Sendai - The region\'s largest city',
        'Aomori - Famous for its Nebuta Festival',
        'Yamadera - Mountain temple with stunning views',
        'Kakunodate - Well-preserved samurai district',
      ],
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'kanto',
      name: 'Kanto',
      japName: '関東',
      description: 'The most populous and economically developed region, home to Tokyo, Japan\'s capital. The Kanto Plain is the largest flat area in Japan, supporting a high population density and agricultural productivity.',
      highlights: [
        'Tokyo - Japan\'s vibrant capital city',
        'Yokohama - Japan\'s second-largest city with a scenic harbor area',
        'Kamakura - Historic city with many temples and the Great Buddha',
        'Nikko - UNESCO World Heritage site with elaborate shrines',
        'Mount Fuji - Japan\'s highest mountain (shared with Chubu region)',
      ],
      image: 'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    },
    {
      id: 'chubu',
      name: 'Chubu',
      japName: '中部',
      description: 'The central region of Honshu, featuring the Japanese Alps. It\'s a mountainous area known for its traditional crafts, historic villages, and outdoor activities. The region also includes the major industrial center of Nagoya.',
      highlights: [
        'Nagoya - Japan\'s fourth-largest city and manufacturing hub',
        'Kanazawa - Known for preserved samurai and geisha districts',
        'Shirakawa-go - UNESCO World Heritage village with traditional gassho-zukuri farmhouses',
        'Japanese Alps - Popular for hiking and skiing',
        'Matsumoto - Home to one of Japan\'s oldest original castles',
      ],
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'kinki',
      name: 'Kinki/Kansai',
      japName: '近畿/関西',
      description: 'The cultural and historical heart of Japan, home to the ancient capitals of Kyoto and Nara. Kansai is known for its distinct dialect, cuisine, and cultural identity that differs from the Kanto region.',
      highlights: [
        'Kyoto - Japan\'s cultural capital with numerous temples and shrines',
        'Osaka - Known for its food culture and outgoing people',
        'Nara - Japan\'s first permanent capital with historic temples and free-roaming deer',
        'Kobe - Cosmopolitan port city famous for its beef',
        'Mount Koya - Sacred Buddhist mountain with temple lodgings',
      ],
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'chugoku',
      name: 'Chugoku',
      japName: '中国',
      description: 'The westernmost region of Honshu, divided by mountains into the San\'in (north) and San\'yo (south) areas. The region is known for its rich history, including Hiroshima, and beautiful landscapes along the Seto Inland Sea.',
      highlights: [
        'Hiroshima - Site of the atomic bombing and now a city of peace',
        'Miyajima Island - Home to the iconic floating torii gate',
        'Himeji - Location of Japan\'s most spectacular castle',
        'Tottori - Famous for its sand dunes',
        'Izumo - Site of one of Japan\'s most important shrines',
      ],
      image: 'https://images.unsplash.com/photo-1575862922759-fe4d53901e63?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    },
    {
      id: 'shikoku',
      name: 'Shikoku',
      japName: '四国',
      description: 'The smallest of Japan\'s four main islands, known for its mountainous landscape, udon noodles, and the 88-temple pilgrimage route. Shikoku has maintained much of its traditional character and rural charm.',
      highlights: [
        'Matsuyama - Largest city on the island and home to Dogo Onsen, one of Japan\'s oldest hot springs',
        'Takamatsu - Gateway to Shikoku with famous Ritsurin Garden',
        'Iya Valley - Remote valley with vine bridges and traditional farmhouses',
        'Naruto - Known for its whirlpools',
        'The 88 Temple Pilgrimage - Famous Buddhist pilgrimage route',
      ],
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'kyushu',
      name: 'Kyushu & Okinawa',
      japName: '九州・沖縄',
      description: 'Kyushu is the southernmost of Japan\'s main islands, known for hot springs, volcanoes, and a subtropical climate. Okinawa consists of islands stretching toward Taiwan, with a distinct culture, tropical climate, and beautiful beaches.',
      highlights: [
        'Fukuoka - Kyushu\'s largest city known for its food and friendly atmosphere',
        'Nagasaki - Historic port city with international influences',
        'Kumamoto - Home to one of Japan\'s most impressive castles',
        'Beppu and Yufuin - Famous hot spring towns',
        'Okinawa - Tropical beaches, unique culture, and American influence',
      ],
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Japan Regions Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Regions of Japan
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up">
            Explore the diverse geographical areas that make up the Land of the Rising Sun.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Japan's Regions"
            subtitle="Japan is officially divided into eight distinct regions, each with its own culture, cuisine, and attractions."
          />
          <div className="prose prose-sm sm:prose-lg max-w-none mb-8">
            <p>
              From the snow-covered mountains of Hokkaido in the north to the tropical beaches of Okinawa in the south,
              Japan’s regions offer incredible diversity in landscapes, climates, and cultural experiences. Each region
              has developed its own unique identity while maintaining connections to the broader Japanese culture.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://s3-ap-northeast-1.amazonaws.com/bhive-jp/media/yabai/article/2098/2098_1_map_prefectures.jpg"
              alt="Japan Map with Prefectures"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Regions Interactive Map/List */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Region List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 sticky top-4 sm:top-32">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Select a Region</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {regions.map((region) => (
                    <li key={region.id}>
                      <button
                        onClick={() => setSelectedRegion(region.id)}
                        className={`w-full text-left px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-all duration-300 ${
                          selectedRegion === region.id
                            ? 'bg-japan-red text-white shadow-md'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <span className="font-medium text-sm sm:text-base">{region.name}</span>{' '}
                        <span className="text-xs sm:text-sm">{region.japName}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Region Details */}
            <div className="lg:col-span-2">
              {selectedRegion ? (
                <div className="bg-white rounded-xl shadow-md overflow-hidden card-3d">
                  {regions.find((r) => r.id === selectedRegion) && (
                    <>
                      <div className="relative h-48 sm:h-64 md:h-80">
                        <img
                          src={regions.find((r) => r.id === selectedRegion)?.image}
                          alt={regions.find((r) => r.id === selectedRegion)?.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                            {regions.find((r) => r.id === selectedRegion)?.name}{' '}
                            <span className="text-sm sm:text-lg md:text-xl">
                              {regions.find((r) => r.id === selectedRegion)?.japName}
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                          {regions.find((r) => r.id === selectedRegion)?.description}
                        </p>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Highlights:</h3>
                        <ul className="space-y-2">
                          {regions.find((r) => r.id === selectedRegion)?.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start text-sm sm:text-base">
                              <span className="text-japan-red mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] text-center">
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/bhive-jp/media/yabai/article/2098/2098_1_map_prefectures.jpg"
                    alt="Japan Map"
                    className="w-full max-w-xs sm:max-w-md mx-auto mb-4 sm:mb-6 rounded-lg"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Select a Region</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Choose a region from the list to see detailed information about its geography, culture, and highlights.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Prefectures Overview */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Japan's 47 Prefectures"
            subtitle="Each region is divided into prefectures, which are the primary administrative divisions in Japan."
            className="mb-8 sm:mb-10"
          />
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-4 sm:p-6 lg:p-8">
                <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                  Japan is divided into 47 prefectures (都道府県, todōfuken), which are the first-level administrative divisions.
                  They include 43 prefectures proper (県, ken), two urban prefectures (府, fu: Osaka and Kyoto), one "circuit" or
                  "territory" (道, dō: Hokkaido), and one metropolis (都, to: Tokyo).
                </p>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Prefecture Types:</h3>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-japan-red font-bold mr-2">都 (to):</span>
                    <span>Tokyo Metropolis (Tokyo-to) - the capital</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-japan-red font-bold mr-2">道 (dō):</span>
                    <span>Hokkaido - the northern island</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-japan-red font-bold mr-2">府 (fu):</span>
                    <span>Osaka and Kyoto - historically important urban prefectures</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-japan-red font-bold mr-2">県 (ken):</span>
                    <span>The remaining 43 prefectures</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base">
                  Each prefecture is further divided into cities, towns, and villages. Each has its own local government and is
                  overseen by a governor and a unicameral prefecture assembly, both elected by the people.
                </p>
              </div>
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px]">
                <img
                  src="https://www.researchgate.net/publication/351106013/figure/fig2/AS:1017070426812417@1619499894313/Map-of-Japanese-prefectures-The-Japanese-prefectures-were-divided-into-nine-regions-in_Q320.jpg"
                  alt="Japan Prefectures Map"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-indigo text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Explore Japan?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Discover more about each region’s unique attractions, cuisine, and cultural experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://www.japan-guide.com/e/e623a.html"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-3"
            >
              Regions of Japan Guide
            </a>
            <a
              href="https://matcha-jp.com/en/list/region"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-3"
            >
              Explore All Areas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasPage;