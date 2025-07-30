import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSlider from '@/components/Hero/HeroSlider';
import AboutSection from '@/components/Home/AboutSection';
import ServicesSection from '@/components/Home/ServicesSection';
import StatsSection from '@/components/Home/StatsSection';
import ProjectsSection from '@/components/Home/ProjectsSection';
import TrainingSection from '@/components/Home/TrainingSection';
import BlogSection from '@/components/Home/BlogSection';
import ShopSection from '@/components/Home/ShopSection';
import ContactSection from '@/components/Home/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = 'Environmental Concern Nepal - Leading Environmental Consulting Firm';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'ECN - Nepal\'s premier environmental consulting firm providing expert environmental assessments, climate services, GIS planning, and disaster risk management solutions.'
      );
    }

    // Add Open Graph meta tags
    const addMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('og:title', 'Environmental Concern Nepal - Expert Environmental Consulting');
    addMetaTag('og:description', 'Leading environmental consulting firm in Nepal providing comprehensive solutions for sustainable development, climate adaptation, and environmental compliance.');
    addMetaTag('og:type', 'website');
    addMetaTag('og:site_name', 'Environmental Concern Nepal');
    
    // Add Twitter meta tags
    const addTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addTwitterMeta('twitter:card', 'summary_large_image');
    addTwitterMeta('twitter:title', 'Environmental Concern Nepal - Expert Environmental Consulting');
    addTwitterMeta('twitter:description', 'Leading environmental consulting firm in Nepal providing comprehensive solutions for sustainable development.');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ProjectsSection />
        <TrainingSection />
        <BlogSection />
        <ShopSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
