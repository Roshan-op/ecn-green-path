import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ContactSection from '@/components/Home/ContactSection';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Contact Environmental Concern Nepal for environmental consulting services. Get in touch with our expert team for your project needs.'
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Ready to start your environmental project? Get in touch with our 
                expert team for consultation and project development.
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;