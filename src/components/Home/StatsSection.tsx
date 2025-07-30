import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, MapPin } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experts: 0,
    clients: 0,
    coverage: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = {
    projects: 500,
    experts: 25,
    clients: 150,
    coverage: 75
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepTime = duration / steps;

    const timers = Object.keys(targetValues).map((key) => {
      const target = targetValues[key as keyof typeof targetValues];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        current = Math.min(step * increment, target);
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));

        if (step >= steps) {
          clearInterval(timers[Object.keys(targetValues).indexOf(key)]);
        }
      }, stepTime);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);

  const stats = [
    {
      icon: TrendingUp,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered environmental projects across Nepal'
    },
    {
      icon: Users,
      value: counters.experts,
      suffix: '+',
      label: 'Expert Team Members',
      description: 'Qualified environmental professionals and specialists'
    },
    {
      icon: Award,
      value: counters.clients,
      suffix: '+',
      label: 'Satisfied Clients',
      description: 'Government agencies, NGOs, and private organizations'
    },
    {
      icon: MapPin,
      value: counters.coverage,
      suffix: '%',
      label: 'Nepal Coverage',
      description: 'Geographic coverage across different provinces'
    }
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
            Driving Environmental Excellence
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Our commitment to environmental sustainability is reflected in our track record 
            of successful projects and satisfied clients across Nepal.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary-foreground/10 rounded-full">
                  <stat.icon className="h-8 w-8 text-accent-light" />
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-accent-light">
                  {stat.suffix}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                {stat.label}
              </h3>
              
              <p className="text-primary-foreground/80 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Partner with Nepal's Leading Environmental Consultants?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let us help you achieve 
              your environmental and sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent bg-accent hover:bg-accent-light text-accent-foreground">
                Start Your Project
              </button>
              <button className="btn-secondary bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;