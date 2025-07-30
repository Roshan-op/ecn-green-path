import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ProjectsSection from '@/components/Home/ProjectsSection';

const Projects = () => {
  useEffect(() => {
    document.title = 'Our Projects - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Explore ECN\'s portfolio of successful environmental projects across Nepal including EIA, climate adaptation, and conservation initiatives.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Discover our portfolio of impactful environmental projects that have 
                transformed communities and protected ecosystems across Nepal.
              </p>
            </div>
          </div>
        </section>

        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;