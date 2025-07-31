import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import portfolioImage from '@/assets/blog/project-portfolio.jpg';

const BlogPost10 = () => {
  useEffect(() => {
    document.title = 'ECN\'s Project Portfolio: 12+ Environmental Studies Across Nepal - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'ECN projects Nepal, environmental consulting portfolio. A roundup of ECN\'s recent and notable projects with impact highlights across Nepal.'
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
                  Portfolio
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  ECN's Project Portfolio: 12+ Environmental Studies Across Nepal
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Portfolio Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>November 10, 2024</span>
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
                  src={portfolioImage} 
                  alt="ECN Project Portfolio Overview" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Over the past years, ECN has completed more than 12 major environmental studies across Nepal's diverse regions, from the Terai plains to high mountain areas, supporting sustainable development through rigorous environmental assessment and planning.
                </p>

                <p className="mb-6">
                  Our project portfolio spans infrastructure development, climate adaptation, community forestry, disaster risk management, and urban planning, demonstrating ECN's comprehensive expertise in environmental consulting.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">View Our Complete Portfolio</h3>
                  <p className="mb-4">Explore ECN's full range of environmental consulting projects and impact.</p>
                  <Button className="btn-primary">
                    See All Projects
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

export default BlogPost10;