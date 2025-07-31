import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import infrastructureImage from '@/assets/blog/infrastructure-assessment.jpg';

const BlogPost2 = () => {
  useEffect(() => {
    document.title = 'How ECN Assesses Infrastructure Projects for Sustainable Growth - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Infrastructure EIA Nepal, environmental project audit. ECN\'s role in road, hydropower, and bridge environmental assessments for sustainable development.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Blog Header */}
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
                  Infrastructure
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  How ECN Assesses Infrastructure Projects for Sustainable Growth
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Engineering Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 10, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <img 
                  src={infrastructureImage} 
                  alt="Infrastructure Environmental Assessment by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  As Nepal undergoes rapid infrastructure development, Environmental Concern Nepal (ECN) plays a crucial role in ensuring that roads, hydropower projects, and bridges are developed sustainably with minimal environmental impact.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Infrastructure Assessment</h2>
                
                <p className="mb-6">
                  ECN's infrastructure assessment methodology combines rigorous environmental impact evaluation with practical engineering solutions. Our team evaluates projects from initial planning through construction and operation phases, ensuring compliance with Nepal's environmental standards and international best practices.
                </p>

                <p className="mb-6">
                  Our assessments cover critical infrastructure sectors including transportation networks, hydropower facilities, bridge construction, and urban development projects. Each assessment is tailored to the specific environmental context and potential impacts of the project location.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Multi-Sector Expertise</h2>
                
                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Transportation Infrastructure</h3>
                  <p>ECN has assessed numerous road projects across Nepal's diverse terrain, from hill roads to major highway expansions. Our assessments consider slope stability, soil erosion, water resource impacts, and biodiversity conservation.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Hydropower Development</h3>
                  <p>With Nepal's abundant water resources, hydropower projects require careful environmental evaluation. ECN assesses water flow impacts, aquatic ecosystem effects, and community displacement considerations.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Bridge and Urban Projects</h3>
                  <p>Bridge construction and urban infrastructure require specialized assessment of geological stability, water quality impacts, and integration with existing environmental systems.</p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">Sustainable Development Integration</h2>
                
                <p className="mb-6">
                  ECN's approach goes beyond regulatory compliance to promote genuinely sustainable infrastructure development. We work closely with project developers to identify opportunities for environmental enhancement and community benefit integration.
                </p>

                <p className="mb-6">
                  Our assessments include detailed mitigation measures, environmental monitoring plans, and adaptive management strategies that ensure long-term environmental sustainability while supporting Nepal's development goals.
                </p>

                <p className="mb-8">
                  Through systematic environmental assessment, ECN helps ensure that Nepal's infrastructure development contributes to national prosperity while preserving the country's remarkable natural heritage for future generations.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Planning an Infrastructure Project?</h3>
                  <p className="mb-4">Contact ECN for comprehensive environmental assessment services.</p>
                  <Button className="btn-primary">
                    Get Assessment Quote
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

export default BlogPost2;