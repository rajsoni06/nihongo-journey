
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Github, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-japan-navy to-black text-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-japan-sakura">Nihongo Journey</h3>
            <p className="text-sm text-gray-300">
              Discover Japan through language and culture. Whether you're planning a trip or starting 
              your Japanese learning journey, we're here to guide you every step of the way.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://m.facebook.com/profile.php/?id=100041870123408&name=xhp_nt__fb__action__open_user" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-japan-sakura transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/lucky_sonicosmos/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-japan-sakura transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/LuckySonicosmos" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-japan-sakura transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/raj-anand-soni-037541212" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-japan-sakura transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-japan-sakura transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-japan-sakura">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/learn" className="text-gray-300 hover:text-white transition-colors">Learn Japanese</Link>
              </li>
              <li>
                <Link to="/travel" className="text-gray-300 hover:text-white transition-colors">Travel Guide</Link>
              </li>
              <li>
                <Link to="/places" className="text-gray-300 hover:text-white transition-colors">Famous Places</Link>
              </li>
              <li>
                <Link to="/areas" className="text-gray-300 hover:text-white transition-colors">Japan Areas</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-japan-sakura">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://twitter.com/IndianEmbTokyo"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-center"
              >
                Embassy of India in Japan 🇮🇳 🇯🇵
              </a>
              <a
                href="https://rajsoni06.github.io/My_Site/My_Site.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-center"
              >
                Connect with us
              </a>
              <a
                href="https://chat.whatsapp.com/JZu3yXhmwqMCoFxc9XZvKM"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-center"
              >
                Join India-Japan WhatsApp Group
              </a>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mb-6">
          <button 
            onClick={scrollToTop}
            className="p-3 bg-japan-red rounded-full shadow-lg hover:bg-japan-lightRed transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/10">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nihongo Journey. All Rights Reserved.</p>
          <p className="text-sm text-gray-400 mt-1">Made with ❤️ in India by Raj Soni</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
