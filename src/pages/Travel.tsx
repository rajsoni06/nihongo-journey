import SectionHeading from '../components/SectionHeading';
import CardComponent from '../components/CardComponent';
import Destinations from '../components/Destinations'; // Added import

const TravelPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Japan Travel - Shibuya Crossing" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Discover Japan</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up">
            Explore Japan's vibrant cities, serene countryside, and everything in between with our comprehensive travel guides.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Japan is Calling You" 
            subtitle="Plan your perfect journey through the Land of the Rising Sun" 
          />
          
          <div className="prose prose-lg max-w-none">
            <p>
              Spread across 7000 islands and dotted with megacities, mountain ranges, and mighty national parks, Japan can appear a little intimidating to explore at first glance.
            </p>
            <p>
              But look a little closer, and you'll find this Asian powerhouse is a delight to travel around, whether by train, ferry or using a hired set of wheels. The ten biggest cities in Japan are Tokyo, Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kawasaki, Kobe, Kyoto and Saitama. Here we profile each of them.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Major Cities" 
            subtitle="Explore Japan's vibrant urban centers" 
            className="mb-10"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardComponent
              image="https://static.toiimg.com/photo/47145223.cms"
              title="TOKYO (東京)"
              description="Tokyo (東京) is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures, consisting of 23 central city wards, multiple cities, towns and villages west of the city center."
              externalLink="https://www.japan-guide.com/e/e2164.html"
            />
            <CardComponent
              image="https://e0.pxfuel.com/wallpapers/842/840/desktop-wallpaper-osaka-dotonbori-japan-nightlife.jpg"
              title="OSAKA (大阪)"
              description="Osaka (大阪) is Japan's second largest metropolitan area after Tokyo. It has been the economic powerhouse of the Kansai Region for many centuries. Osaka was formerly known as Naniwa."
              externalLink="https://www.japan-guide.com/e/e2157.html"
            />
            <CardComponent
              image="https://e0.pxfuel.com/wallpapers/438/767/desktop-wallpaper-yokohama-1-1920-x-1080.jpg"
              title="YOKOHAMA (横浜)"
              description="Yokohama (横浜市) is the capital of Kanagawa Prefecture, Japan's largest city after Tokyo, located in the Kantō region of the main island of Honshū. It's known for its futuristic Minato Mirai waterfront district and harbor area."
              externalLink="https://www.japan-guide.com/e/e2156.html"
            />
            <CardComponent
              image="https://wallpaperaccess.com/full/1611493.jpg"
              title="NAGOYA (名古屋)"
              description="Nagoya (名古屋) is Japan's fourth most populated city after Tokyo, Yokohama and Osaka. It is the capital of Aichi Prefecture and the principal city of the Nobi plain, one of Honshu's three large plains and metropolitan centers."
              externalLink="https://www.japan-guide.com/e/e2155.html"
            />
            <CardComponent
              image="https://wallpaperaccess.com/full/1946131.jpg"
              title="SAPPORO (札幌)"
              description="Sapporo (札幌) is the capital of Hokkaido and Japan's fifth largest city. Sapporo is also one of the nation's youngest major cities. Sapporo became world famous in 1972 when the Olympic Winter Games were held there."
              externalLink="https://www.japan-guide.com/e/e2163.html"
            />
            <CardComponent
              image="https://wallpaperaccess.com/full/1634914.jpg"
              title="FUKUOKA (福岡)"
              description="Fukuoka (福岡) is Kyushu's largest and one of Japan's ten most populated cities. Fukuoka has been an important harbor city for centuries and was chosen by the Mongol invasion forces as their landing point in the 13th century."
              externalLink="https://www.japan-guide.com/e/e2161.html"
            />
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Explore Destinations" 
            subtitle="Discover the beauty of Japan's diverse regions" 
            className="mb-10"
          />
          <Destinations />
        </div>
      </section>

      {/* Transportation Guide */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Transportation Guide" 
            subtitle="Getting around Japan efficiently and comfortably" 
            className="mb-10"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/039/989/medium/shutterstock_129691451_%282%29_%281%29.jpg?2020" 
                  alt="Japan Rail Pass" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Japan Rail Pass</h3>
                <p className="text-gray-700 mb-4">
                  The Japan Rail Pass offers unlimited travel on JR trains nationwide, including most shinkansen (bullet trains). It's one of the best deals for international visitors planning to explore multiple regions.
                </p>
                <a 
                  href="https://www.japan-guide.com/e/e2361.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-japan-red font-medium hover:underline"
                >
                  Learn more about the Japan Rail Pass →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://www.japanlivingguide.com/media/xrofouit/ic-card-in-japan.jpeg" 
                  alt="IC Cards" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">IC Cards (Suica, PASMO, ICOCA)</h3>
                <p className="text-gray-700 mb-4">
                  Prepaid IC cards make traveling on public transportation in Japan convenient. Simply tap the card when entering and exiting stations. These cards can also be used for purchases at convenience stores and vending machines.
                </p>
                <a 
                  href="https://www.japan-guide.com/e/e2359_003.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-japan-red font-medium hover:underline"
                >
                  Learn more about IC Cards →
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Shinkansen (Bullet Train)</h3>
              <p className="text-gray-700 mb-4">
                Japan's high-speed rail network connects major cities with trains reaching speeds up to 320 km/h (200 mph). The shinkansen is known for its punctuality, comfort, and efficiency.
              </p>
              <a 
                href="https://www.japan-guide.com/e/e2018.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-japan-red font-medium hover:underline"
              >
                Shinkansen Guide →
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Local Trains & Subway</h3>
              <p className="text-gray-700 mb-4">
                Japan's extensive network of local trains and subway systems makes getting around cities and regions convenient. Major cities have comprehensive subway networks with English signage.
              </p>
              <a 
                href="https://www.japan-guide.com/e/e2019.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-japan-red font-medium hover:underline"
              >
                Local Transportation Guide →
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Buses & Ferries</h3>
              <p className="text-gray-700 mb-4">
                Highway buses offer budget-friendly travel between cities, while local buses serve areas not covered by trains. Ferries connect Japan's many islands and can be a scenic travel option.
              </p>
              <a 
                href="https://www.japan-guide.com/e/e2022.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-japan-red font-medium hover:underline"
              >
                Bus Travel Guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Essential Travel Tips" 
            subtitle="Make the most of your Japanese adventure" 
            className="mb-10"
          />
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
              <p className="text-gray-700">
                Spring (March to May) for cherry blossoms and fall (September to November) for autumn foliage are the most popular seasons. Summer (June to August) can be hot and humid with festivals, while winter (December to February) offers skiing and hot springs with fewer tourists.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Etiquette & Customs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Remove shoes when entering homes, traditional ryokan inns, and some restaurants</li>
                <li>• Bow when greeting people (the deeper the bow, the more respect shown)</li>
                <li>• Tipping is not customary and can sometimes cause confusion</li>
                <li>• Be mindful of noise levels on public transportation</li>
                <li>• Always carry trash with you as public trash bins are limited</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Connectivity & Navigation</h3>
              <p className="text-gray-700 mb-4">
                Rent a pocket WiFi device or get a travel SIM card for internet access. Download offline maps and translation apps to help navigate. Japan's Google Maps is extremely accurate for public transportation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.japan-guide.com/e/e2279.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-japan-red hover:underline"
                >
                  Internet Access Guide
                </a>
                <span className="text-gray-400">|</span>
                <a 
                  href="https://www.japan-guide.com/e/e2355.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-japan-red hover:underline"
                >
                  Communication Tips
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Money & Payment</h3>
              <p className="text-gray-700 mb-4">
                Japan is still largely a cash-based society, especially outside major cities. Carry sufficient cash for daily expenses. Credit cards are increasingly accepted in tourist areas, hotels, and larger establishments.
              </p>
              <a 
                href="https://www.japan-guide.com/e/e2208.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-japan-red hover:underline"
              >
                Currency & Money Guide
              </a>
            </div>
          </div>
          
          <div className="mt-10 p-4 sm:p-8 bg-gradient-indigo rounded-xl shadow-lg text-white text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Need More Travel Advice?</h3>
            <p className="mb-6 text-sm sm:text-base">
              Join our community to connect with experienced travelers and locals who can help plan your perfect Japan trip.
            </p>
            <a 
              href="https://chat.whatsapp.com/JZu3yXhmwqMCoFxc9XZvKM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button"
            >
              <span className="hidden sm:inline">Join Our Japan Travel Community</span>
              <span className="sm:hidden">Join Community</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelPage;