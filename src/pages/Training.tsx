import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import TrainingSection from '@/components/Home/TrainingSection';

const Training = () => {
  useEffect(() => {
    document.title = 'Training & Capacity Building - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional environmental training programs and capacity building services for government officials, students, and private sector professionals in Nepal.'
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Training & Capacity Building</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Empowering environmental professionals through comprehensive training programs 
                and institutional capacity development initiatives.
              </p>
            </div>
          </div>
        </section>

        <TrainingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Training;