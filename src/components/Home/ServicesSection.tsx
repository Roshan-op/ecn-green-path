import { useState, useEffect, useRef } from 'react';
import { 
  Leaf, 
  CloudRain, 
  Map, 
  Shield, 
  FileText, 
  Activity, 
  BookOpen, 
  Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
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

  const services = [
    {
      icon: Leaf,
      title: "Environmental Assessments",
      description: "Comprehensive EIA, IEE, and environmental auditing services for sustainable development",
      features: ["Impact Assessment", "Environmental Auditing", "Compliance Monitoring"]
    },
    {
      icon: CloudRain,
      title: "Climate Services",
      description: "Climate change adaptation, mitigation strategies, and vulnerability assessments",
      features: ["Climate Modeling", "Adaptation Planning", "Carbon Footprint"]
    },
    {
      icon: Map,
      title: "GIS & Land Use Planning",
      description: "Advanced GIS mapping, spatial analysis, and land use optimization solutions",
      features: ["Spatial Analysis", "Land Mapping", "Resource Planning"]
    },
    {
      icon: Shield,
      title: "Disaster Risk Management",
      description: "Comprehensive disaster risk assessment and resilience building strategies",
      features: ["Risk Assessment", "Early Warning", "Resilience Building"]
    },
    {
      icon: FileText,
      title: "Feasibility Studies",
      description: "Technical and environmental feasibility analysis for development projects",
      features: ["Technical Analysis", "Environmental Review", "Project Viability"]
    },
    {
      icon: Activity,
      title: "Environmental Monitoring",
      description: "Continuous monitoring and reporting of environmental parameters and compliance",
      features: ["Air Quality", "Water Quality", "Soil Assessment"]
    },
    {
      icon: BookOpen,
      title: "Policy & Research",
      description: "Environmental policy development, research, and strategic planning services",
      features: ["Policy Development", "Research Studies", "Strategic Planning"]
    },
    {
      icon: Users,
      title: "Training & Capacity Building",
      description: "Professional training programs and institutional capacity development",
      features: ["Professional Training", "Institutional Development", "Knowledge Transfer"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Environmental Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end environmental consulting services to help organizations 
            achieve sustainable development goals while ensuring regulatory compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-lg p-6 hover-lift transition-all duration-300 group fade-in ${
                isVisible ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="p-3 bg-primary/10 rounded-lg inline-flex group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-card-gradient border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom Environmental Solutions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to develop tailored solutions for your specific 
              environmental challenges. Contact us for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="btn-primary">
                  Request Consultation
                </Button>
              </a>
              <a href="/services">
                <Button className="btn-secondary">
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;