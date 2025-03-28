
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  images: string[];
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(slideTimer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return <div className="slide-container bg-gray-800">No images available</div>;
  }

  return (
    <div className="slide-container relative h-full w-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide absolute inset-0 h-full w-full transition-opacity duration-1000 flex items-center justify-center bg-darkBg ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="max-h-full max-w-full object-contain" 
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-3 w-3 rounded-full ${
              index === currentSlide ? 'bg-orange' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
