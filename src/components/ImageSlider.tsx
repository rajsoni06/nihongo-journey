import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Image = {
  src: string;
  alt: string;
  caption: string;
};

interface ImageSliderProps {
  images: Image[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageSlider = ({
  images,
  autoPlay = true,
  autoPlayInterval = 4000,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(images.length).fill(false));
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Preload images
  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        setLoadedImages((prev) => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
    });
  }, [images]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle touch events for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(goToNext, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval, goToNext]);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[400px] overflow-hidden rounded-xl shadow-xl">
      {/* Main slider container */}
      <div
        className="h-full w-full relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image only renders if loaded to prevent flickering */}
            {loadedImages[index] ? (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover brightness-110 contrast-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Loading...</span>
              </div>
            )}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white p-3 transform translate-y-0 transition-transform duration-300">
              <p className="text-sm md:text-base font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-14 left-0 w-full z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
