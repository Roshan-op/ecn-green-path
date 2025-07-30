import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ServicesSection from '@/components/Home/ServicesSection';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Comprehensive environmental consulting services including EIA, climate services, GIS planning, and disaster risk management in Nepal.'
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive environmental consulting solutions designed to meet 
                the diverse needs of development projects across Nepal.
              </p>
            </div>
          </div>
        </section>

        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;