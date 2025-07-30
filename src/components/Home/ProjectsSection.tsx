import { useState, useEffect, useRef } from 'react';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
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

  const projects = [
    {
      id: 1,
      title: "Kathmandu Valley Environmental Assessment",
      description: "Comprehensive environmental impact assessment for urban development project in Kathmandu Valley, covering air quality, water resources, and biodiversity.",
      location: "Kathmandu, Nepal",
      year: "2023",
      beneficiaries: "2.5M people",
      category: "Environmental Assessment",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Climate Resilience Planning - Terai Region",
      description: "Climate vulnerability assessment and adaptation planning for agricultural communities in the Terai region, focusing on flood risk management.",
      location: "Terai, Nepal",
      year: "2023",
      beneficiaries: "500K farmers",
      category: "Climate Services",
      image: "https://images.unsplash.com/photo-1500375592092-4000x6000?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Himalayan Ecosystem Conservation",
      description: "Biodiversity conservation planning and ecosystem services assessment for high-altitude regions, including wildlife corridor mapping.",
      location: "Himalayas, Nepal",
      year: "2022",
      beneficiaries: "Protected ecosystems",
      category: "Conservation Planning",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Hydropower Environmental Compliance",
      description: "Environmental monitoring and compliance assessment for renewable energy infrastructure, ensuring minimal ecological impact.",
      location: "Multiple Sites, Nepal",
      year: "2023",
      beneficiaries: "Clean energy access",
      category: "Renewable Energy",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Projects</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Transforming Nepal Through Environmental Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful environmental projects that have made a lasting 
            impact on communities and ecosystems across Nepal.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-card border border-border rounded-lg overflow-hidden hover-lift transition-all duration-300 fade-in ${
                isVisible ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    {project.year}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    {project.beneficiaries}
                  </div>
                </div>

                {/* Project Action */}
                <Button className="btn-secondary w-full group">
                  View Project Details
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className={`bg-card-gradient border border-border rounded-lg p-8 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">75+</div>
              <div className="text-foreground font-medium mb-1">Districts Covered</div>
              <div className="text-sm text-muted-foreground">Across all seven provinces of Nepal</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5M+</div>
              <div className="text-foreground font-medium mb-1">Lives Impacted</div>
              <div className="text-sm text-muted-foreground">Through sustainable development projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-foreground font-medium mb-1">Hectares Protected</div>
              <div className="text-sm text-muted-foreground">Environmental conservation efforts</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.6s' }}>
          <Button className="btn-primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;