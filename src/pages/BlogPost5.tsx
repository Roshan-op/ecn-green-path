import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import wastewaterImage from '@/assets/blog/wastewater-management.jpg';

const BlogPost5 = () => {
  useEffect(() => {
    document.title = 'ECN\'s Role in Urban Wastewater & Sanitation Management - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'WASH Nepal, wastewater management consulting. ECN\'s drainage studies, FSM planning, and urban wastewater solutions for sustainable sanitation.'
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
                  Sanitation
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  ECN's Role in Urban Wastewater & Sanitation Management
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN WASH Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 3, 2024</span>
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
                  src={wastewaterImage} 
                  alt="Urban Wastewater Management Assessment by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  As Nepal's urban population grows rapidly, effective wastewater and sanitation management becomes critical for public health and environmental protection. ECN provides comprehensive solutions for urban WASH (Water, Sanitation, and Hygiene) challenges across Nepal's municipalities.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Urban WASH Services</h2>
                
                <p className="mb-6">
                  ECN's urban wastewater management expertise spans from initial assessments and system design to implementation support and monitoring. Our integrated approach addresses the full sanitation value chain, from household-level services to municipal treatment and disposal systems.
                </p>

                <p className="mb-6">
                  Our team combines engineering expertise with environmental science and social analysis to develop sustainable sanitation solutions that work within Nepal's diverse urban contexts, from growing municipalities to established city centers.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Drainage Studies and Infrastructure Planning</h2>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Comprehensive drainage system assessments for urban flood management</li>
                  <li>Stormwater and wastewater separation system design</li>
                  <li>Geographic Information System (GIS) mapping of existing infrastructure</li>
                  <li>Climate-resilient drainage planning for extreme weather events</li>
                  <li>Integration with urban development and land use planning</li>
                </ul>

                <p className="mb-6">
                  Our drainage studies help municipalities understand their current infrastructure capacity and plan for future growth while managing flood risks and protecting water quality in receiving water bodies.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Fecal Sludge Management (FSM) Planning</h2>
                
                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">FSM Value Chain Analysis</h3>
                  <p>We assess the entire fecal sludge management chain from containment and emptying to transport, treatment, and safe disposal or reuse, identifying bottlenecks and improvement opportunities.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Treatment Technology Selection</h3>
                  <p>Our analysis considers local conditions, capacity requirements, and cost factors to recommend appropriate treatment technologies that are technically feasible and financially sustainable.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Business Model Development</h3>
                  <p>We help municipalities develop sustainable business models for FSM services, including tariff structures, private sector engagement, and regulatory frameworks.</p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">Integrated Urban Water Management</h2>
                
                <p className="mb-6">
                  ECN's approach to urban wastewater management integrates with broader water resource management, considering interactions between water supply, wastewater treatment, and environmental protection. This integrated approach helps maximize resource efficiency and minimize environmental impacts.
                </p>

                <p className="mb-6">
                  Our solutions incorporate nature-based treatment options where appropriate, including constructed wetlands, decentralized treatment systems, and resource recovery approaches that turn waste into valuable resources.
                </p>

                <p className="mb-8">
                  Through systematic assessment and planning, ECN helps Nepal's growing cities develop sanitation systems that protect public health, preserve environmental quality, and support sustainable urban development.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Improve Your City's Sanitation</h3>
                  <p className="mb-4">Contact ECN for comprehensive urban wastewater and sanitation management solutions.</p>
                  <Button className="btn-primary">
                    Get WASH Consultation
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

export default BlogPost5;