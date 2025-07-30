import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import BlogSection from '@/components/Home/BlogSection';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog & Insights - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Latest environmental research, insights, and news from Nepal. Stay updated with climate science, policy developments, and conservation efforts.'
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Environmental Insights</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Stay informed with the latest research, policy updates, and environmental 
                developments from Nepal and around the world.
              </p>
            </div>
          </div>
        </section>

        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;