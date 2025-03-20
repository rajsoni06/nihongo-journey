
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll respond to your query soon!",
      });
      
      // Reset form
      setName('');
      setQuery('');
      setDateTime('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80" 
            alt="Japan Contact" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up">
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Please feel free to contact us with any questions or feedback." 
            center
            className="mb-8"
          />
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <p className="text-center mb-6 text-muted-foreground">
                Request in Japanese or English will be responded to quicker.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Date and Time (if applicable)
                  </label>
                  <input
                    id="dateTime"
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
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
                    className="button-primary inline-flex items-center"
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
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Connect With Us" 
            subtitle="Follow us on social media or join our community groups." 
            center
            className="mb-10"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="space-y-4">
                <a href="https://m.facebook.com/profile.php/?id=100041870123408&name=xhp_nt__fb__action__open_user" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Facebook className="text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/lucky_sonicosmos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Instagram className="text-[#E4405F]" />
                  <span>Instagram</span>
                </a>
                <a href="https://twitter.com/LuckySonicosmos?t=DRkKGcpRjZUthL6_DDbdIQ&s=09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Twitter className="text-[#1DA1F2]" />
                  <span>Twitter</span>
                </a>
                <a href="https://www.linkedin.com/in/raj-anand-soni-037541212" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Linkedin className="text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Youtube className="text-[#FF0000]" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Community Groups</h3>
              <div className="space-y-4">
                <a href="https://twitter.com/IndianEmbTokyo?t=9TKl9283oRPpKy49YyzkjQ&s=09" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center">
                  Embassy of India in Japan 🇮🇳 🇯🇵
                </a>
                <a href="https://rajsoni06.github.io/My_Site/My_Site.html" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center">
                  Connect with us
                </a>
                <a href="https://chat.whatsapp.com/JZu3yXhmwqMCoFxc9XZvKM" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center">
                  Join India-Japan WhatsApp Group
                </a>
                <a href="https://wa.me/qr/MSECXIUNBVMMC1" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-center">
                  Direct WhatsApp Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Ideas Section */}
      <section className="py-16 px-4 bg-gradient-indigo text-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Monetization Opportunities" 
            subtitle="Ways to generate revenue from Nihongo Journey" 
            className="mb-10 text-white"
          />
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Japanese Language Institute Advertising</h3>
              <p className="mb-4">
                Offer advertising space to Japanese language schools and institutes. Charge ₹300/month for featuring 
                their banners, course information, and promotional content on your website.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Contact language schools in major cities via social media</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Offer premium positioning for featured schools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Create a dedicated "Language Schools" directory page</span>
                </li>
              </ul>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Affiliate Marketing</h3>
              <p className="mb-4">
                Partner with Japan-related businesses to earn commission on referrals. Good options include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Japanese textbooks and learning materials (Amazon affiliates)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Japan travel booking sites (hotels, flights, JR Pass)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Japanese language learning apps and platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>VPN services for accessing Japanese content</span>
                </li>
              </ul>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Premium Content & Services</h3>
              <p className="mb-4">
                Create exclusive content and services for paying members:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Premium JLPT study guides and practice tests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Personalized travel itinerary planning service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Language exchange matching with Japanese speakers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Online Japanese language tutoring sessions</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
                <p>
                  Implement targeted Google ads throughout the website. With growing traffic focused on Japanese 
                  language learning and travel, you can generate consistent passive income.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Digital Products</h3>
                <p>
                  Create and sell downloadable resources like e-books, custom flashcards, vocabulary lists, 
                  Japan travel guides, and Japanese culture insights.
                </p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Japan Tour Partnerships</h3>
              <p className="mb-4">
                Collaborate with tour operators specializing in Japan travel. Earn referral fees by directing 
                your website visitors to their tour packages and services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Feature cultural experience tours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Promote language immersion programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-sakura mr-2">•</span>
                  <span>Highlight specialized tours (anime, gastronomy, traditional crafts)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
