
import { useEffect, useState } from 'react';

const CherryBlossomsEffect = () => {
  const [blossoms, setBlossoms] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    // Create new cherry blossoms every few seconds
    const interval = setInterval(() => {
      if (blossoms.length < 20) { // Limit the number of blossoms
        const newBlossom = {
          id: Date.now(),
          style: {
            left: `${Math.random() * 100}vw`,
            animationDuration: `${8 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.7 + 0.3,
          },
        };
        setBlossoms(prev => [...prev, newBlossom]);
      }
    }, 500);

    // Remove blossoms after they fall (animation completes)
    const cleanupInterval = setInterval(() => {
      setBlossoms(prev => prev.filter(blossom => Date.now() - blossom.id < 15000));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanupInterval);
    };
  }, [blossoms.length]);

  return (
    <div className="cherry-blossom-container fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {blossoms.map(blossom => (
        <div 
          key={blossom.id} 
          className="cherry-blossom" 
          style={blossom.style}
        />
      ))}
    </div>
  );
};

export default CherryBlossomsEffect;
