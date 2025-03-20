
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ScrollDownIndicatorProps {
  targetId?: string;
}

const ScrollDownIndicator = ({ targetId = 'learn-preview' }: ScrollDownIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTarget}
        className="flex flex-col items-center justify-center cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-white/80 text-sm mb-1 group-hover:text-white">Scroll down</span>
        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full animate-bounce group-hover:bg-white/30">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </button>
    </div>
  );
};

export default ScrollDownIndicator;
