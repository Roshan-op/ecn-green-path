import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: hero1,
    title: "Innovative Solutions for a Sustainable Future",
    subtitle: "Leading environmental consulting in Nepal with cutting-edge technology and expert knowledge",
    cta: "Discover Our Services"
  },
  {
    id: 2,
    image: hero2,
    title: "Expert Consulting in Environment, Climate & Disaster Risk",
    subtitle: "Comprehensive environmental assessments and climate adaptation strategies for resilient development",
    cta: "Learn More"
  },
  {
    id: 3,
    image: hero3,
    title: "Empowering Development Through Science & Strategy",
    subtitle: "Evidence-based solutions for environmental challenges and sustainable resource management",
    cta: "View Projects"
  },
  {
    id: 4,
    image: hero4,
    title: "Building Resilient Communities",
    subtitle: "Integrating environmental planning with disaster risk reduction for safer, sustainable futures",
    cta: "Get Consultation"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay-dark h-full flex items-center">
                <div className="container-custom">
                  <div className="max-w-4xl">
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-300 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      {slide.title}
                    </h1>
                    <p className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed transition-all duration-1000 delay-500 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      {slide.subtitle}
                    </p>
                    <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                      <Button className="btn-primary bg-accent hover:bg-accent-light text-accent-foreground">
                        {slide.cta}
                      </Button>
                      <Button className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
                        Contact Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Control */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-8 right-8 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        <Play className={`h-5 w-5 transition-transform ${isPlaying ? 'scale-0' : 'scale-100'}`} />
        <div className={`absolute inset-0 flex items-center justify-center transition-transform ${isPlaying ? 'scale-100' : 'scale-0'}`}>
          <div className="w-1 h-4 bg-white rounded-full mr-1"></div>
          <div className="w-1 h-4 bg-white rounded-full"></div>
        </div>
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 text-white">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm opacity-80">Scroll</span>
          <div className="w-0.5 h-8 bg-white/50 rounded-full">
            <div className="w-full h-4 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;