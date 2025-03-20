import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import CardComponent from '../components/CardComponent';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
const LearnPage = () => {
  const [activeTab, setActiveTab] = useState('jlpt');
  const isMobile = useIsMobile();
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Japanese Study Books" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Japanese Language Learning</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up">
            Comprehensive resources for all Japanese language learners, from absolute beginners to advanced speakers preparing for the JLPT.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setActiveTab('jlpt')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'jlpt' ? 'bg-japan-red text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              JLPT Levels
            </button>
            <button onClick={() => setActiveTab('beginners')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'beginners' ? 'bg-japan-red text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              For Beginners
            </button>
            <button onClick={() => setActiveTab('resources')} className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'resources' ? 'bg-japan-red text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
              Additional Resources
            </button>
          </div>
        </div>
      </section>

      {/* JLPT Levels Content */}
      {activeTab === 'jlpt' && <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="JLPT - Levels" subtitle="The Japanese Language Proficiency Test has five levels, with N5 being the easiest and N1 the most difficult." className="mb-12" />
            
            <div className="mb-12">
              <div className="bg-white shadow-md rounded-xl overflow-hidden">
                <img src="https://www.jlpt.jp/e/about/img/levelsummary_h1.gif" alt="N1-N5: Summary of Linguistic Competence Required for Each Level" className="w-full max-w-full h-auto" />
                <img src="https://www.jlpt.jp/e/about/img/levelsummary_lvlbar.gif" width="665" height="52" alt="N1 difficult ←→ easy N5" className="w-full max-w-full h-auto" />
                <div className="p-6">
                  <p className="mb-4">
                    N4 and N5 measure the level of understanding of basic Japanese mainly learned in class. N1 and N2 measure the level of understanding of Japanese used in a broad range of scenes in actual everyday life. N3 is a bridging level between N1/N2 and N4/N5.
                  </p>
                  <p>
                    Linguistic competence required for the JLPT is expressed in terms of language activities, such as Reading and Listening, as shown in the table below. While not noted in the table, Language Knowledge, such as Vocabulary and Grammar, is also required for successful execution of these activities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <CardComponent image="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" title="JLPT - N1" description="The most advanced level of the Japanese Language Proficiency Test. Passing N1 demonstrates the ability to understand Japanese used in a variety of complicated situations." externalLink="https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing" />
              <CardComponent image="https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" title="JLPT - N2" description="The second-highest level of the JLPT. N2 certifies that you can understand Japanese used in everyday situations, and in a variety of circumstances to a certain degree." externalLink="https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link" />
              <CardComponent image="https://65.media.tumblr.com/8c81e80f7abc90f59a61913284dda0a8/tumblr_inline_o7ckapQes21tqv1ik_500.gif" title="JLPT - N3" description="N3 is the intermediate level of the Japanese Language Proficiency Test and is described as the ability to understand Japanese used in everyday situations to a certain degree." externalLink="https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing" />
              <CardComponent image="https://cotoacademy.com/app/uploads/2020/04/JLPT-N4-ta-bakari.png" title="JLPT - N4" description="N4 is the second level of the Japanese Language Proficiency Test (JLPT). To pass the JLPT N4, you need to be able to read 300 kanji and know about 1,500 vocabulary words." externalLink="https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk" />
              <CardComponent image="https://www.attainj.co.jp/attain-online-japanese/material/images/jlpt-N5-en-1.jpg" title="JLPT - N5" description="N5 is the most basic level of the JLPT and just requires you to understand some basic Japanese like hiragana, katakana, and basic kanji as well as from spoken conversations." externalLink="https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk" />
              <div className="glass-card p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-semibold mb-4">Looking for Official JLPT Information?</h3>
                <p className="mb-4">Visit the official JLPT website for test dates, registration information, and official sample questions.</p>
                <a href="https://www.jlpt.jp/e/index.html" target="_blank" rel="noopener noreferrer" className="button-primary">
                  Visit Official JLPT Site
                </a>
              </div>
            </div>
          </div>
        </section>}

      {/* For Beginners Content */}
      {activeTab === 'beginners' && <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="For Beginners" subtitle="Getting started with Japanese language study" className="mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CardComponent image="https://images.unsplash.com/photo-1627465688839-f639a8ff6003?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" title="Japanese Alphabets" description="Learn the three Japanese writing systems: Hiragana, Katakana, and Kanji. This beginner-friendly guide will help you master the basics of Japanese writing." externalLink="https://drive.google.com/file/d/1_FgeXtrY8S-JRY7rhC3uIxyKxQGHYeVK/view?usp=sharing" />
              <CardComponent image="https://images.unsplash.com/photo-1633412792811-20a28152f28e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" title="Absolute Beginner Course" description="Start your Japanese learning journey with this comprehensive guide for absolute beginners, covering basic phrases, greetings, and essential vocabulary." externalLink="https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk" />
              <CardComponent image="https://images.unsplash.com/photo-1600716946898-1fc80f9a14cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" title="Beginner Course" description="Once you've mastered the basics, take your Japanese to the next level with this beginner course focused on everyday conversation and practical phrases." externalLink="https://drive.google.com/file/d/1VNqheM7AI1TYL-Mow3mCHcCXPL_mk-nw/view?usp=sharing" />
            </div>
            
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Tips for Beginners</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-japan-red font-bold mr-2">1.</span>
                  <span>Start with hiragana and katakana before moving to kanji.</span>
                </li>
                <li className="flex">
                  <span className="text-japan-red font-bold mr-2">2.</span>
                  <span>Practice speaking from day one, even if it's just basic greetings.</span>
                </li>
                <li className="flex">
                  <span className="text-japan-red font-bold mr-2">3.</span>
                  <span>Use spaced repetition to memorize vocabulary efficiently.</span>
                </li>
                <li className="flex">
                  <span className="text-japan-red font-bold mr-2">4.</span>
                  <span>Immerse yourself in the language with Japanese media (anime, podcasts, music).</span>
                </li>
                <li className="flex">
                  <span className="text-japan-red font-bold mr-2">5.</span>
                  <span>Find a language exchange partner for conversation practice.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>}

      {/* Additional Resources Content */}
      {activeTab === 'resources' && <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Additional Resources" subtitle="Tools and resources to enhance your Japanese language learning journey" className="mb-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-4">Online Learning Platforms</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.duolingo.com/course/ja/en/Learn-Japanese" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Duolingo</a> - Free, gamified language learning app
                  </li>
                  <li>
                    <a href="https://www.japanesepod101.com/" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">JapanesePod101</a> - Audio and video lessons for all levels
                  </li>
                  <li>
                    <a href="https://www.wanikani.com/" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">WaniKani</a> - Specialized platform for learning kanji
                  </li>
                  <li>
                    <a href="https://bunpro.jp/" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">BunPro</a> - Grammar-focused spaced repetition system
                  </li>
                  <li>
                    <a href="https://www.tofugu.com/" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Tofugu</a> - Blog with excellent Japanese learning resources
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://apps.apple.com/us/app/japanese/id290664053" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Japanese</a> - Comprehensive dictionary app
                  </li>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.mindtwisted.kanjistudy" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Kanji Study</a> - In-depth kanji learning app (Android)
                  </li>
                  <li>
                    <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Anki</a> - Powerful flashcard app for spaced repetition
                  </li>
                  <li>
                    <a href="https://apps.apple.com/us/app/hellotalk-language-exchange/id557130558" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">HelloTalk</a> - Connect with native speakers for language exchange
                  </li>
                  <li>
                    <a href="https://itazuraneko.neocities.org/learn/anki.html" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Itazuraneko</a> - Collection of free Anki decks for Japanese
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-4">Books & Textbooks</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">Genki</span> - Popular textbook series for beginners
                  </li>
                  <li>
                    <span className="font-medium">Minna no Nihongo</span> - Comprehensive textbook series used in many Japanese schools
                  </li>
                  <li>
                    <span className="font-medium">Tobira</span> - Intermediate to advanced textbook after finishing Genki
                  </li>
                  <li>
                    <span className="font-medium">A Dictionary of Basic/Intermediate/Advanced Japanese Grammar</span> - The "Japanese grammar bible" series
                  </li>
                  <li>
                    <span className="font-medium">Kodansha Kanji Learner's Course</span> - Systematic approach to learning 2,300 kanji
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-4">YouTube Channels</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.youtube.com/c/JapanesePod101" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">JapanesePod101</a> - Lessons for all skill levels
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/TokiniAndy" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Tokini Andy</a> - Grammar lessons following Genki textbooks
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/dogen" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Dogen</a> - Japanese pronunciation and pitch accent
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/YUYU%E3%81%AE%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%95%99%E5%AE%A4" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">YU Japanese</a> - Lessons in simple Japanese
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/ComprehensibleJapanese" target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">Comprehensible Japanese</a> - Input-based learning for beginners
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <div className="md:flex md:items-center md:justify-between">
                <div className="mb-6 md:mb-0 md:max-w-md">
                  <h3 className="text-2xl font-semibold mb-4">Looking for a Study Partner?</h3>
                  <p className="mb-6 md:mb-0">
                    Join our WhatsApp group to connect with other Japanese language learners and native speakers.
                  </p>
                </div>
                <Button className="bg-japan-red hover:bg-japan-red/90 text-white w-full md:w-auto px-4 py-2 md:px-8" asChild>
                  <a href="https://chat.whatsapp.com/JZu3yXhmwqMCoFxc9XZvKM" target="_blank" rel="noopener noreferrer">
                    Join India-Japan WhatsApp Group
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>}

      {/* Monetization Strategies Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-japan-navy to-japan-darkBlue text-white bg-gray-600">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Monetization Strategies" subtitle="Multiple revenue streams to turn your passion for Japan into a sustainable business" className="mb-12 text-white" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Language Institute Partnerships */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Language Institute Partnerships</h3>
              <p className="text-white/90 mb-4">
                Partner with Japanese language schools for monthly advertising (₹300/month). Highlight their courses, teachers, and success stories.
              </p>
              <div className="mt-auto">
                <p className="inline-block mt-2 text-white font-semibold">
                  Potential: With 20 schools, earn ₹6,000 monthly.
                </p>
              </div>
            </div>
            
            {/* Affiliate Marketing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Affiliate Marketing</h3>
              <p className="text-white/90 mb-4">
                Join Amazon, Rakuten, and JTB affiliate programs to earn commissions from Japanese language textbooks, travel gear, and tour bookings.
              </p>
              <div className="mt-auto">
                <p className="inline-block mt-2 text-white font-semibold">
                  Potential: Earn 3-10% commission on each sale.
                </p>
              </div>
            </div>
            
            {/* Display Advertising */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Display Advertising</h3>
              <p className="text-white/90 mb-4">
                Implement Google AdSense to display targeted ads related to Japan travel, language learning, and cultural experiences.
              </p>
              <div className="mt-auto">
                <p className="inline-block mt-2 text-white font-semibold">
                  Potential: Generate revenue based on impressions and clicks.
                </p>
              </div>
            </div>
            
            {/* Premium Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Premium Content</h3>
              <p className="text-white/90 mb-4">
                Create a members-only section with exclusive learning materials, travel itineraries, and cultural insights for a monthly subscription fee.
              </p>
              <div className="mt-auto">
                <p className="inline-block mt-2 text-white font-semibold">
                  Potential: Charge ₹199/month for premium access.
                </p>
              </div>
            </div>
            
            {/* Travel Agency Partnerships */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Travel Agency Partnerships</h3>
              <p className="text-white/90 mb-4">
                Partner with travel agencies specializing in Japan tours to offer special packages to your audience.
              </p>
              <div className="mt-auto">
                <p className="inline-block mt-2 text-white font-semibold">
                  Potential: Earn referral fees for each booking made through your site.
                </p>
              </div>
            </div>
            
            {/* Connect with us call-to-action */}
            <div className="bg-gradient-to-r from-japan-red to-japan-lightRed rounded-xl p-6 shadow-lg border border-white/20 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-semibold mb-3 text-white">Ready to Monetize Your Passion?</h3>
              <p className="mb-6 text-white">
                Contact us to discuss partnership opportunities and start earning from your Japanese language knowledge.
              </p>
              <Button className="bg-white text-japan-red hover:bg-white/90" asChild>
                <a href="#Contact" className="text-japan-white">Contact Us Today</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default LearnPage;