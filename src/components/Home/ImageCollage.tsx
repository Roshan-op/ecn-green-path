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

const ImageCollage = () => {
  const images = [
    { src: eiaTrainingImg, alt: "EIA Training Workshop" },
    { src: infrastructureImg, alt: "Infrastructure Assessment" },
    { src: communityForestryImg, alt: "Community Forestry" },
    { src: climatePlanningImg, alt: "Climate Planning" },
    { src: wastewaterImg, alt: "Wastewater Management" },
    { src: disasterRiskImg, alt: "Disaster Risk Management" },
    { src: youthEducationImg, alt: "Youth Education" },
    { src: sustainableTransportImg, alt: "Sustainable Transport" },
    { src: floatingWetlandsImg, alt: "Floating Wetlands" },
    { src: projectPortfolioImg, alt: "Project Portfolio" },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Environmental Projects Across Nepal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive environmental consulting projects that are making 
            a positive impact across Nepal's diverse landscapes and communities.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 ${
                index === 0 ? 'md:row-span-2' : ''
              } ${
                index === 3 ? 'lg:col-span-2' : ''
              } ${
                index === 6 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`aspect-square overflow-hidden ${
                index === 0 ? 'md:aspect-[1/2]' : ''
              } ${
                index === 3 ? 'lg:aspect-[2/1]' : ''
              } ${
                index === 6 ? 'md:aspect-[2/1]' : ''
              }`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium text-sm">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View Complete Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;