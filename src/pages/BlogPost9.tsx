import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import wetlandsImage from '@/assets/blog/floating-wetlands.jpg';

const BlogPost9 = () => {
  useEffect(() => {
    document.title = 'Floating Wetlands & Nature-Based Solutions: ECN\'s Green Innovation - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Floating wetlands Nepal, eco-solutions. ECN\'s use of wetlands and green infrastructure for water purification and environmental restoration.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <a href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </a>
              
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  <Tag className="h-3 w-3 mr-1" />
                  Innovation
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Floating Wetlands & Nature-Based Solutions: ECN's Green Innovation
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Innovation Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>November 15, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <img 
                  src={wetlandsImage} 
                  alt="Floating Wetlands Innovation by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  ECN pioneers nature-based solutions in Nepal through innovative floating wetland systems and green infrastructure that provide cost-effective water treatment while supporting biodiversity and community livelihoods.
                </p>

                <p className="mb-6">
                  Our floating wetland projects demonstrate how engineered natural systems can address water pollution, support aquatic ecosystems, and provide sustainable treatment solutions for Nepal's water bodies.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Explore Green Solutions</h3>
                  <p className="mb-4">Learn about ECN's nature-based infrastructure innovations.</p>
                  <Button className="btn-primary">
                    Contact Innovation Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost9;