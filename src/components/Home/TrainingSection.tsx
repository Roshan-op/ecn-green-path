import { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, Award, Calendar, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrainingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      id: 1,
      title: "Environmental Impact Assessment Certification",
      description: "Comprehensive training on EIA methodologies, regulatory frameworks, and best practices for environmental professionals.",
      duration: "5 days",
      level: "Professional",
      participants: "25",
      rating: 4.9,
      price: "NPR 15,000",
      features: [
        "Hands-on field exercises",
        "Case study analysis",
        "Certification upon completion",
        "Expert instructors"
      ]
    },
    {
      id: 2,
      title: "Climate Change Adaptation Planning",
      description: "Advanced training on climate vulnerability assessment, adaptation strategies, and community-based adaptation approaches.",
      duration: "3 days",
      level: "Intermediate",
      participants: "30",
      rating: 4.8,
      price: "NPR 12,000",
      features: [
        "Climate modeling tools",
        "Adaptation frameworks",
        "Risk assessment methods",
        "Policy integration"
      ]
    },
    {
      id: 3,
      title: "GIS for Environmental Planning",
      description: "Practical training on GIS applications in environmental planning, spatial analysis, and mapping for environmental projects.",
      duration: "4 days",
      level: "Beginner to Intermediate",
      participants: "20",
      rating: 4.7,
      price: "NPR 18,000",
      features: [
        "Software training (ArcGIS/QGIS)",
        "Spatial data analysis",
        "Map design principles",
        "Project-based learning"
      ]
    }
  ];

  const audiences = [
    {
      icon: Users,
      title: "Government Officials",
      description: "Environmental officers, planners, and policy makers from federal, provincial, and local governments"
    },
    {
      icon: BookOpen,
      title: "Students & Researchers",
      description: "University students, researchers, and academics in environmental sciences and related fields"
    },
    {
      icon: Award,
      title: "Private Sector",
      description: "Environmental consultants, engineers, and sustainability professionals in private organizations"
    }
  ];

  return (
    <section id="training" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Training & Capacity Building</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Empowering Environmental Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build expertise and advance your career with our comprehensive training programs 
            designed for environmental professionals at all levels.
          </p>
        </div>

        {/* Target Audiences */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-lg hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 bg-primary/10 rounded-full inline-flex mb-4">
                <audience.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Training Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`bg-card border border-border rounded-lg p-6 hover-lift transition-all duration-300 fade-in ${
                isVisible ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              {/* Program Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                    {program.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="text-sm font-medium text-foreground">{program.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
              </div>

              {/* Program Details */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {program.description}
              </p>

              {/* Program Meta */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-accent" />
                    Duration
                  </div>
                  <span className="font-medium text-foreground">{program.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    Max Participants
                  </div>
                  <span className="font-medium text-foreground">{program.participants}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    Investment
                  </div>
                  <span className="font-semibold text-primary">{program.price}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Program Highlights:</h4>
                <ul className="space-y-1">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button className="btn-primary w-full">
                Register Now
              </Button>
            </div>
          ))}
        </div>

        {/* Training Stats */}
        <div className={`bg-primary text-primary-foreground rounded-lg p-8 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-light mb-2">2000+</div>
              <div className="text-primary-foreground/90 text-sm">Professionals Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-light mb-2">50+</div>
              <div className="text-primary-foreground/90 text-sm">Training Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-light mb-2">98%</div>
              <div className="text-primary-foreground/90 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-light mb-2">15+</div>
              <div className="text-primary-foreground/90 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Custom Training Solutions Available
            </h3>
            <p className="text-muted-foreground mb-6">
              Need specialized training for your organization? We offer customized training programs 
              tailored to your specific requirements and delivered at your preferred location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Request Custom Training
              </Button>
              <Button className="btn-secondary">
                View Training Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;