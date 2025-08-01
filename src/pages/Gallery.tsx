import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import eiaTrainingImg from '@/assets/blog/eia-training.jpg';
import infrastructureImg from '@/assets/blog/infrastructure-assessment.jpg';
import communityForestryImg from '@/assets/blog/community-forestry.jpg';
import climatePlanningImg from '@/assets/blog/climate-planning.jpg';
import wastewaterImg from '@/assets/blog/wastewater-management.jpg';
import disasterRiskImg from '@/assets/blog/disaster-risk.jpg';
import youthEducationImg from '@/assets/blog/youth-education.jpg';
import sustainableTransportImg from '@/assets/blog/sustainable-transport.jpg';
import floatingWetlandsImg from '@/assets/blog/floating-wetlands.jpg';
import projectPortfolioImg from '@/assets/blog/project-portfolio.jpg';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Explore Environmental Concern Nepal\'s project gallery showcasing our environmental consulting work, training programs, and sustainable development initiatives across Nepal.'
      );
    }
  }, []);

  const galleryImages = [
    {
      src: eiaTrainingImg,
      title: "EIA & IEE Training Workshop",
      description: "Hands-on training sessions for environmental professionals",
      category: "Training"
    },
    {
      src: infrastructureImg,
      title: "Infrastructure Assessment",
      description: "Environmental assessment of major infrastructure projects",
      category: "Assessment"
    },
    {
      src: communityForestryImg,
      title: "Community Forestry Project",
      description: "Supporting local communities in forest management",
      category: "Forestry"
    },
    {
      src: climatePlanningImg,
      title: "Climate Planning Initiative",
      description: "Strategic climate adaptation and resilience planning",
      category: "Climate"
    },
    {
      src: wastewaterImg,
      title: "Wastewater Management",
      description: "Urban sanitation and wastewater treatment solutions",
      category: "WASH"
    },
    {
      src: disasterRiskImg,
      title: "Disaster Risk Management",
      description: "Community-level disaster preparedness and mapping",
      category: "DRM"
    },
    {
      src: youthEducationImg,
      title: "Youth Environmental Education",
      description: "Engaging young minds in environmental conservation",
      category: "Education"
    },
    {
      src: sustainableTransportImg,
      title: "Sustainable Transport Study",
      description: "Research on clean transportation solutions",
      category: "Transport"
    },
    {
      src: floatingWetlandsImg,
      title: "Floating Wetlands Project",
      description: "Innovative nature-based water treatment solutions",
      category: "Innovation"
    },
    {
      src: projectPortfolioImg,
      title: "Project Portfolio Overview",
      description: "Comprehensive view of our environmental projects",
      category: "Portfolio"
    }
  ];

  const categories = ["All", "Training", "Assessment", "Forestry", "Climate", "WASH", "DRM", "Education", "Transport", "Innovation", "Portfolio"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Project Gallery</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Explore our environmental projects and initiatives across Nepal. 
                From training workshops to field assessments, discover how we're making a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="inline-block px-2 py-1 bg-accent rounded text-xs font-medium mb-2">
                        {image.category}
                      </span>
                      <h3 className="font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-white/90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;