import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      content: (
        <span>
          Konnichiwa! Welcome to Nihongo Journey. Explore our{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>{' '}
          page, or let me help you with learning Japanese, traveling to Japan, or connecting with
          our community. How can I assist you today? (Try "learn", "travel", or "connect"!)
        </span>
      ),
    },
  ]);
  const [input, setInput] = useState('');
  const [currentTopic, setCurrentTopic] = useState(null);
  const chatbotRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const messagesEndRef = useRef(null);
  const [clickTimeout, setClickTimeout] = useState(null); // For double-click detection

// Links object
const links = {
  main: {
    home: { path: '/', name: 'Home' },
    learn: { path: '/learn', name: 'Learn Japanese' },
    travel: { path: '/travel', name: 'Travel Guide' },
    places: { path: '/places', name: 'Famous Places' },
    areas: { path: '/areas', name: 'Japan Areas' },
    contact: { path: '/contact', name: 'Contact Us' },
  },
  courses: {
    n1: {
      url: 'https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing',
      name: '(Super Advanced) N1 Course',
    },
    n2: {
      url: 'https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link',
      name: '(Advanced) N2 Course',
    },
    n3: {
      url: 'https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing',
      name: '(Intermediate) N3 Course',
    },
    n4: {
      url: 'https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk',
      name: '(Basic) N4 Course',
    },
    n5: {
      url: 'https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk',
      name: '(Most Basic) N5 Course',
    },
    beginner: {
      url: 'https://drive.google.com/file/d/1VNqheM7AI1TYL-Mow3mCHcCXPL_mk-nw/view?usp=sharing',
      name: 'Beginner Course',
    },
    absoluteBeginner: {
      url: 'https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk',
      name: 'Absolute Beginner Course',
    },
    alphabets: {
      url: 'https://drive.google.com/file/d/1_FgeXtrY8S-JRY7rhC3uIxyKxQGHYeVK/view?usp=sharing',
      name: 'Japanese Alphabets',
    },
  },
  destinations: {
    tokyo: { url: 'https://www.japan-guide.com/e/e2164.html', name: 'Tokyo' },
    osaka: { url: 'https://www.japan-guide.com/e/e2157.html', name: 'Osaka' },
    kyoto: { url: 'https://www.japan-guide.com/e/e2158.html', name: 'Kyoto' },
    yokohama: { url: 'https://www.japan-guide.com/e/e2156.html', name: 'Yokohama' },
    saitama: { url: 'https://en.japantravel.com/saitama', name: 'Saitama' },
    hiroshima: { url: 'https://www.japan-guide.com/e/e2160.html', name: 'Hiroshima' },
    sendai: { url: 'https://www.japan-guide.com/e/e5150.html', name: 'Sendai' },
    sapporo: { url: 'https://www.japan-guide.com/e/e2163.html', name: 'Sapporo' },
    nagasaki: { url: 'https://www.japan-guide.com/e/e2162.html', name: 'Nagasaki' },
    nara: { url: 'https://www.japan-guide.com/e/e2165.html', name: 'Nara' },
  },
  interests: {
    accommodation: { url: 'https://www.japan-guide.com/e/e2025.html', name: 'Accommodation' },
    food: {
      url: 'https://www.worldtravelguide.net/guides/asia/japan/food-and-drink/',
      name: 'Food and Drink',
    },
    thingsToDo: { url: 'https://traveltriangle.com/blog/things-to-do-in-japan/', name: 'Things to Do' },
    culture: { url: 'https://www.insidejapantours.com/japanese-culture/', name: 'Culture' },
  },
  connect: {
    contact: { path: '/contact', name: 'Contact Us' },
    whatsapp1: {
      url: 'https://chat.whatsapp.com/JXg1NAqgCKe6QPlr7K5xEq',
      name: 'India-Japan WhatsApp Group 1',
    },
    whatsapp2: {
      url: 'https://chat.whatsapp.com/JZu3yXhmwqMCoFxc9XZvKM',
      name: 'India-Japan WhatsApp Group 2',
    },
    portfolio: { url: 'https://raj-soni-portfolio-site.netlify.app', name: "Raj Soni's Portfolio Site" },
    embassy: { url: 'https://twitter.com/IndianEmbTokyo', name: 'Embassy of India in Japan' },
    facebook: {
      url: 'https://m.facebook.com/profile.php/?id=100041870123408&name=xhp_nt__fb__action__open_user',
      name: 'Facebook',
    },
    instagram: { url: 'https://www.instagram.com/lucky_sonicosmos/', name: 'Instagram' },
    twitter: { url: 'https://twitter.com/LuckySonicosmos', name: 'Twitter' },
    linkedin: { url: 'https://www.linkedin.com/in/raj-anand-soni-037541212', name: 'LinkedIn' },
    youtube: { url: 'https://www.youtube.com/', name: 'YouTube' },
  },
};

// Function to generate clickable city links dynamically
function generateCityLink(input) {
  // Convert input into lowercase and remove punctuation
  const formattedInput = input.toLowerCase().replace(/[^\w\s]/g, "");

  // Split input into words
  const words = formattedInput.split(/\s+/);

  for (const word of words) {
    // Normalize case and check if the city exists in destinations
    const cityKey = Object.keys(links.destinations).find(
      (key) => key.toLowerCase() === word.toLowerCase()
    );

    if (cityKey) {
      const city = links.destinations[cityKey];

      return (
        <span>
          Here’s a guide for{" "}
          <a
            href={city.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {city.name}
          </a>
          .
        </span>
      );
    }
  }
  return "City not found.";
}


  // Auto-scroll to bottom when messages update
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);

  // Close chatbot when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      closeChatbot();
    }
  };
  if (isOpen) document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen]);

const closeChatbot = () => {
  setIsClosing(true);
  setTimeout(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, 300); // Match animation duration
};

// Handle single and double clicks
const handleClick = () => {
  if (isOpen) {
    closeChatbot();
  } else {
    setIsOpen(true);
  }
};


  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate typing indicator
    setMessages((prev) => [...prev, { sender: 'bot', content: '...' }]);
    setTimeout(() => {
      const botResponse = generateResponse(input);
      setMessages((prev) => [...prev.slice(0, -1), { sender: 'bot', content: botResponse }]);
    }, 800);
  };

  const generateResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    // Gratitude responses
    if (/(thank you|thanks|thankyou|thank|bye)/i.test(lowerInput)) {
      return "You're welcome! Let me know if you need any help. 😊";
    }

    // Greeting
    if (/(Hii|Hello|hello|helow|hellow|hey|konnichiwa)/i.test(lowerInput)) {
      return (
        <span>
          Hi there! 👋 Welcome to Nihongo Journey. Check out our{' '}
          <Link to={links.main.home.path} className="text-blue-500 hover:underline">
            {links.main.home.name}
          </Link>{' '}
          page, or let me assist you with "learn", "travel", or "connect" options!
        </span>
      );
    }

    // Main topics
    if (lowerInput.includes('learn') || lowerInput.includes('course')) {
      setCurrentTopic('learn');
      return (
        <span>
          Great! Want to learn Japanese? Visit our{' '}
          <Link to={links.main.learn.path} className="text-blue-500 hover:underline">
            {links.main.learn.name}
          </Link>{' '}
          page, or tell me which level you're interested in (e.g., N1, N5, beginner).
        </span>
      );
    } else if (lowerInput.includes('travel') || lowerInput.includes('destination')) {
      setCurrentTopic('travel');
      return (
        <span>
          Planning a trip to Japan? Explore our{' '}
          <Link to={links.main.travel.path} className="text-blue-500 hover:underline">
            {links.main.travel.name}
          </Link>{' '}
          or tell me a city (e.g., Tokyo, Osaka).
        </span>
      );
    } else if (lowerInput.includes('connect') || lowerInput.includes('community')) {
      setCurrentTopic('connect');
      return (
        <span>
          Want to connect? Visit our{' '}
          <Link to={links.main.contact.path} className="text-blue-500 hover:underline">
            {links.main.contact.name}
          </Link>{' '}
          page or say "WhatsApp" for community groups.
        </span>
      );
    }
    
    // About Raj Soni
if (/(Raj|Rajsoni|Raj Soni|RajSoni|Soni)/i.test(lowerInput)) {
  return (
    <span>
      Raj Soni is the founder of <strong>Nihongo Journey</strong>, a platform revolutionizing the way people learn Japanese. His expertise and passion for innovation have made Nihongo Journey a go-to resource for learners worldwide.  
      <br />
      <br />
      You can connect with him from the below social links:
      <br />
      <a
        href={links.connect.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {links.connect.facebook.name}
      </a>
      <br />
      <a
        href={links.connect.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {links.connect.instagram.name}
      </a>
      <br />
      <a
        href={links.connect.twitter.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {links.connect.twitter.name}
      </a>
      <br />
      <a
        href={links.connect.linkedin.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {links.connect.linkedin.name}
      </a>
      <br />
      <a
        href={links.connect.portfolio.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {links.connect.portfolio.name}
      </a>
    </span>
  );
}

    // Subtopics for learn
    if (currentTopic === 'learn') {
      if (lowerInput.includes('n1')) {
        return (
          <span>
            Here’s our{' '}
            <a
              href={links.courses.n1.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.courses.n1.name}
            </a>
            .
          </span>
        );
      } else if (lowerInput.includes('n2')) {
        return (
          <span>
            Here’s our{' '}
            <a
              href={links.courses.n2.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.courses.n2.name}
            </a>
            .
          </span>
        );
      } else if (lowerInput.includes('n3')) {
        return (
          <span>
            Here’s our{' '}
            <a
              href={links.courses.n3.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.courses.n3.name}
            </a>
            .
          </span>
        );
      } else if (lowerInput.includes('n4')) {
        return (
          <span>
            Here’s our{' '}
            <a
              href={links.courses.n4.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.courses.n4.name}
            </a>
            .
          </span>
        );
      } else if (lowerInput.includes('n5')) {
        return (
          <span>
            Here’s our{' '}
            <a
              href={links.courses.n5.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.courses.n5.name}
            </a>
            .
          </span>
        );
      } else if (lowerInput.includes('beginner')) {
        return (
          <span>
            Try our{' '}
            <a
              href={links.courses.beginner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.courses.beginner.name}
            </a>{' '}
            or{' '}
            <a
              href={links.courses.absoluteBeginner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.courses.absoluteBeginner.name}
            </a>
            .
          </span>
        );
      } else if (lowerInput.includes('alphabet')) {
        return (
          <span>
            Learn the{' '}
            <a
              href={links.courses.alphabets.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.courses.alphabets.name}
            </a>
            .
          </span>
        );
      } else {
        return 'Please specify a level (e.g., N1, N5, beginner) or say "alphabet" for basics.';
      }
    }

    // Subtopics for travel
    if (currentTopic === 'travel') {
      if (lowerInput.includes('tokyo')) {
        return (
          <span>
            Here’s a guide for{' '}
            <a
              href={links.destinations.tokyo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.destinations.tokyo.name}
            </a>
            .
          </span>
        );
      } else if (lowerInput.includes('osaka')) {
        return (
          <span>
            Here’s a guide for{' '}
            <a
              href={links.destinations.osaka.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.destinations.osaka.name}
            </a>
            .
          </span>
        );
      } else if (lowerInput.includes('kyoto')) {
        return (
          <span>
            Here’s a guide for{' '}
            <a
              href={links.destinations.kyoto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {links.destinations.kyoto.name}
            </a>
            .
          </span>
        );
      } else {
        return 'Which city? Try Tokyo, Osaka, Kyoto, or others from our destinations.';
      }
    }

    // Remove duplicate function declaration
    // The `generateResponse` function is already defined above, so this block is redundant.
      // Remove punctuation (redundant declaration removed)
      const sanitizedInput = input.toLowerCase().replace(/[^\w\s]/g, "");
    
      // Check for the "connect" topic first
      if (currentTopic === "connect") {
        if (lowerInput.includes("whatsapp")) {
          return (
            <span>
              Join our community:
              <br />
              <a
                href={links.connect.whatsapp1.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {links.connect.whatsapp1.name}
              </a>
              <br />
              <a
                href={links.connect.whatsapp2.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {links.connect.whatsapp2.name}
              </a>
            </span>
          );
        } else if (lowerInput.includes("contact")) {
          return (
            <span>
              Reach out via our{" "}
              <Link to={links.main.contact.path} className="text-blue-500 hover:underline">
                {links.main.contact.name}
              </Link>{" "}
              page.
            </span>
          );
        } else if (lowerInput.includes("social")) {
          return (
            <span>
              Follow us on:
              <br />
              <a
                href={links.connect.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {links.connect.facebook.name}
              </a>
              <br />
              <a
                href={links.connect.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {links.connect.instagram.name}
              </a>
              <br />
              <a
                href={links.connect.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {links.connect.twitter.name}
              </a>
              <br />
              <a
                href={links.connect.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {links.connect.linkedin.name}
              </a>
              <br />
              <a
                href={links.connect.portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {links.connect.portfolio.name}
              </a>
            </span>
          );
        } else {
          return 'Say "WhatsApp" for groups, "contact" for our page, or "social" for media links.';
        }
      }
    
      // Check if the input contains a city name
      const words = lowerInput.split(/\s+/); // Split into words
      for (const word of words) {
        const cityKey = Object.keys(links.destinations).find(
          (key) => key.toLowerCase() === word.toLowerCase()
        );
    
        if (cityKey) {
          const city = links.destinations[cityKey];
    
          return (
            <span>
              Here’s a guide for{" "}
              <a
                href={city.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {city.name}
              </a>
              .
            </span>
          );
        }
      }
    
      // Default response
      return (
        <span>
          Hi there, I’m here to help! Try "learn" for courses, "travel" for destinations, or "connect" for
          community options. You can also visit our{" "}
          <Link to={links.main.home.path} className="text-blue-500 hover:underline">
            {links.main.home.name}
          </Link>
          .
        </span>
      );
    }
    

  return (
    <>
      {/* Floating Button with Label */}
<div className="fixed bottom-6 right-6 flex flex-col items-center space-y-1 z-50">
  {/* Chatbot Button */}
  <button
    onClick={handleClick}
    className="bg-gradient-to-r from-red-600 to-blue-700 p-4 rounded-full shadow-xl hover:scale-105 transition-transform ring-2 ring-white/20 animate-pulse"
  >
    <MessageCircle size={28} className="text-white" />
  </button>
  {/* Label: Always visible, smaller on mobile */}
  <span className="text-xs md:text-sm font-medium text-white bg-black/70 px-2 md:px-2.5 py-0.5 rounded-md shadow-md">
    Assistant
  </span>
</div>

      {/* Chatbot Window */}
      {isOpen && (
        <div
          ref={chatbotRef}
          className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-blue-900 p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="text-white font-semibold text-lg">Nihongo Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full">
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <div className="text-sm whitespace-pre-line">{msg.content}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="w-full p-2 pr-10 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-800"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Try: "learn", "travel", or "connect"
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;