import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function GallerySection() {
  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      alt: "Modern website design on laptop",
      title: "E-commerce Redesign",
      description: "A modern shopping experience with intuitive navigation"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Dashboard interface design",
      title: "Analytics Dashboard",
      description: "Data visualization with interactive charts and filters"
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      alt: "Mobile app interface",
      title: "Portfolio Website",
      description: "Showcasing creative work with an elegant design"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Update slider position when current slide changes
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      const slidesEl = document.getElementById('gallery-slides');
      if (slidesEl) {
        slidesEl.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    }
  }, [currentSlide]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const slideWidth = sliderRef.current.clientWidth;
        const slidesEl = document.getElementById('gallery-slides');
        if (slidesEl) {
          slidesEl.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Gallery</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Browse through some of our recent web design projects
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto" ref={sliderRef}>
          <div id="gallery-slider" className="overflow-hidden rounded-xl shadow-xl">
            <div 
              id="gallery-slides" 
              className="flex transition-transform duration-500 ease-in-out" 
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="min-w-full relative">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gallery Controls */}
            <Button
              onClick={goToPrevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 dark:bg-black/30 text-white p-3 rounded-full hover:bg-white/50 dark:hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 h-auto"
              size="icon"
              variant="ghost"
            >
              <i className="fas fa-chevron-left"></i>
            </Button>
            <Button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 dark:bg-black/30 text-white p-3 rounded-full hover:bg-white/50 dark:hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 h-auto"
              size="icon"
              variant="ghost"
            >
              <i className="fas fa-chevron-right"></i>
            </Button>
          </div>
          
          {/* Gallery Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === currentSlide 
                    ? 'bg-primary opacity-100' 
                    : 'bg-gray-300 dark:bg-gray-600 opacity-50 hover:opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
