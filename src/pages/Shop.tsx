import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ShopSection from '@/components/Home/ShopSection';

const Shop = () => {
  useEffect(() => {
    document.title = 'ECN Shop - Environmental Resources & Tools';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional environmental tools, templates, training materials, and software for environmental consulting and research professionals.'
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">ECN Professional Shop</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Access premium environmental tools, templates, and training materials 
                designed by experts for environmental professionals.
              </p>
            </div>
          </div>
        </section>

        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;