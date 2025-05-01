import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactNumber, setContactNumber] = useState("");

  // Handle form submission with Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = {
      name,
      query,
      dateTime,
      message,
    };
    try {
      const response = await fetch('https://formspree.io/f/xaneodjg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for contacting us. We'll respond to your query soon!",
        });
        // Reset form fields on success
        setName('');
        setQuery('');
        setDateTime('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80"
            alt="Japan Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in-up">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          {/* Indians in Japan Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="/indians-in-japan"
              className="glass-button inline-flex items-center gap-2 relative group"
            >
              Indians in Japan
              {/* Animated Arrow */}
              <svg
                className="w-5 h-5 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1 animate-bounce-right"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-md mx-auto"> {/* Reduced width of the container */}
    {/* Centered Heading with Animated Underline */}
    <div className="text-center mb-8">
      <motion.h2 
        className="text-3xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-lg sm:text-base text-gray-600 mb-2"> {/* Allow text to wrap */}
          Please feel free to contact us with any questions or feedback.
        </p>
        <p className="text-gray-500 mb-2">
          Requests in Japanese or English will be responded to quicker.
        </p>
      </motion.div>

      {/* Animated Red Underline */}
      <motion.div
        className="relative mt-6 h-1"
        animate={{
          width: ["0%", "100%", "0%"], // Pulsate from 0 to full width and back
        }}
        transition={{
          repeat: Infinity,
          duration: 4, // Increased from 2.5s to 4s
          repeatDelay: 1.5, // Optional: adds a 1.5s pause before repeating
          ease: "easeInOut",
        }}
      >
        <div className="absolute h-full bg-japan-red left-0 right-0">
          <motion.div
            className="absolute -top-1 -left-1 w-3 h-3 bg-japan-red rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }} // Optional pulsing effect on dot
            transition={{
              repeat: Infinity,
              duration: 3.5,
              repeatDelay: 1.8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-japan-red rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }} // Optional matching pulse on end dot
            transition={{
              repeat: Infinity,
              duration: 3.5,
              repeatDelay: 1.8,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>

    {/* Form */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 sm:p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
            Query Topic
          </label>
          <input
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
            placeholder="Topic of your inquiry"
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
            placeholder="Please enter your message here..."
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary inline-flex items-center active:scale-95 transition-transform disabled:opacity-70"
          >
            {isSubmitting ? (
              <>Processing<span className="ml-2 animate-pulse">...</span></>
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

      {/* Direct Contact */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Connect With Us"
            subtitle="Follow us on social media or join our community groups."
            center
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 card-3d">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="space-y-4">
                <a
                  href="https://m.facebook.com/profile.php/?id=100041870123408&name=xhp_nt__fb__action__open_user"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors social-link"
                >
                  <Facebook className="text-[#1877F2] h-5 w-5" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/lucky_sonicosmos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors social-link"
                >
                  <Instagram className="text-[#E4405F] h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://x.com/LuckySonicosmos?t=QMS4G46Ai_jBZJ9LVjSyhg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors social-link"
                >
                  <Twitter className="text-[#1DA1F2] h-5 w-5" />
                  <span>Twitter</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/raj-anand-soni-037541212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors social-link"
                >
                  <Linkedin className="text-[#0A66C2] h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://youtube.com/@rajsoni1406?si=1RpgG_ktew93t2nX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors social-link"
                >
                  <Youtube className="text-[#FF0000] h-5 w-5" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 card-3d">
              <h3 className="text-xl font-semibold mb-4">Community Groups</h3>
              <div className="space-y-4">
                <a
                  href="https://rajsoni06.github.io/My_Site/My_Site.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center community-link"
                >
                  Connect with us
                </a>
                <a
                  href="https://x.com/IndianEmbTokyo?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center community-link"
                >
                  Embassy of India in Japan 🇮🇳 🇯🇵
                </a>
                <a
                  href="https://chat.whatsapp.com/JZu3yXhmwqMCoFxc9XZvKM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center community-link"
                >
                  Join India-Japan WhatsApp Group
                </a>
                <a
                  href="https://wa.me/qr/MSECXIUNBVMMC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center community-link"
                >
                  Direct WhatsApp Message
                </a>
                <a
                  href="https://raj-soni-portfolio-site.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center community-link"
                >
                  Raj Soni's Portfolio Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Ideas Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-indigo text-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="📢 Japanese Language Institutions"
            subtitle="Promote Your Japanese Language Courses with Us!"
            className="mb-10 text-white"
          />
          <div className="space-y-6">
            {/* Advertising Section */}
            <div className="glass p-6 rounded-xl card-3d">
              <h3 className="text-xl font-semibold mb-3">🎯 Japanese Language Institute Advertising</h3>
              <p className="mb-4">
                Promote your institute with banner ads, course listings, and exclusive promotions for just ₹300/month!
                Get maximum visibility and attract students looking for JLPT preparation, language immersion programs, and cultural courses.
              </p>
              <ul className="space-y-2">
                <li>✅ Dedicated "Language Schools" Directory Page – Get listed and stand out!</li>
                <li>📍 Premium Placement for Featured Institutes – Increase your exposure.</li>
                <li>📞 Direct Student Engagement – Receive inquiries through our platform.</li>
              </ul>
            </div>
            {/* Affiliate Marketing */}
            <div className="glass p-6 rounded-xl card-3d">
              <h3 className="text-xl font-semibold mb-3">🤝 Affiliate Marketing Partnerships</h3>
              <p className="mb-4">Businesses related to Japan can partner with us to promote their products and services.</p>
              <ul className="space-y-2">
                <li>📚 Japanese textbooks & learning materials (Amazon affiliates)</li>
                <li>🏨 Japan travel bookings (hotels, flights, JR Pass, guided tours)</li>
                <li>📱 Japanese language learning apps & platforms</li>
                <li>🔐 VPN services for accessing Japanese content</li>
              </ul>
            </div>
            {/* Premium Content & Services */}
            <div className="glass p-6 rounded-xl card-3d">
              <h3 className="text-xl font-semibold mb-3">💎 Premium Content & Services</h3>
              <p className="mb-4">We offer exclusive resources for premium members:</p>
              <ul className="space-y-2">
                <li>📖 JLPT Study Guides & Practice Tests</li>
                <li>✈️ Personalized Japan Travel Itineraries</li>
                <li>🗣️ Language Exchange Matching with Native Speakers</li>
                <li>🎓 Live Online Tutoring with Expert Instructors</li>
              </ul>
            </div>
            {/* Google AdSense & Digital Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl card-3d">
                <h3 className="text-xl font-semibold mb-3">💰 Google AdSense</h3>
                <p>
                  With targeted ads placed strategically across the website, we generate consistent passive income from our growing audience focused on Japanese language learning and travel.
                </p>
              </div>
              <div className="glass p-6 rounded-xl card-3d">
                <h3 className="text-xl font-semibold mb-3">📂 Digital Products</h3>
                <p>
                  We offer downloadable resources, including e-books, custom flashcards, vocabulary lists, and Japan travel guides for learners and travelers.
                </p>
              </div>
            </div>
            {/* Japan Tour Partnerships */}
            <div className="glass p-6 rounded-xl card-3d">
              <h3 className="text-xl font-semibold mb-3">🌏 Japan Tour Partnerships</h3>
              <p className="mb-4">
                We collaborate with Japan travel specialists to offer exclusive tour packages and earn referral commissions.
              </p>
              <ul className="space-y-2">
                <li>🎎 Cultural Experience Tours – Tea ceremonies, calligraphy, samurai training</li>
                <li>🗾 Language Immersion Programs – Study and practice Japanese in Japan</li>
                <li>🍣 Specialized Tours – Anime, gastronomy, traditional crafts, and more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

// Styles for the Indians in Japan Button
<style>
  {`
    /* Bounce Animation */
    @keyframes bounce-right {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(4px);
      }
    }
    /* Apply the animation to the arrow */
    .animate-bounce-right {
      animation: bounce-right 1.5s infinite;
    }
    /* Hover Effect for the Link */
    .glass-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 9999px;
      backdrop-filter: blur(10px);
      color: white;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
    }
    .glass-button:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.05);
    }
  `}
</style>