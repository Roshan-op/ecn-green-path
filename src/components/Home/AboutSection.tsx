import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified environmental professionals with decades of experience"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning solutions and successful project completions across Nepal"
    },
    {
      icon: Globe,
      title: "Comprehensive Coverage",
      description: "Services spanning all environmental and climate-related challenges"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="mb-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About ECN</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                Leading Environmental Consulting in Nepal
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              Environmental Concern Nepal Pvt. Ltd. (ECN) is a premier environmental consulting firm 
              dedicated to providing innovative solutions for sustainable development. With expertise 
              spanning environmental assessments, climate services, and disaster risk management, 
              we empower communities and organizations to build a resilient future.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Environmental Impact Assessments",
                "Climate Change Adaptation Strategies",
                "GIS and Remote Sensing Solutions",
                "Disaster Risk Reduction Planning"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Learn More About Us
              </Button>
              <Button className="btn-secondary">
                View Our Projects
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-soft hover-lift border border-border"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;