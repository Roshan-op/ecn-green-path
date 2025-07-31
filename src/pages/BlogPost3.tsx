import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import forestryImage from '@/assets/blog/community-forestry.jpg';

const BlogPost3 = () => {
  useEffect(() => {
    document.title = 'Strengthening Community Forestry Through Research and GIS Tools - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Community forestry Nepal, GIS forest management. ECN\'s support of community forestry groups using data and mapping tools for sustainable forest management.'
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
                  Forestry
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Strengthening Community Forestry Through Research and GIS Tools
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Forestry Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 8, 2024</span>
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
                  src={forestryImage} 
                  alt="Community Forestry Training and GIS Mapping by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Nepal's community forestry program has been a global model for participatory forest management. Environmental Concern Nepal (ECN) supports these initiatives through advanced research methodologies and Geographic Information Systems (GIS) tools that empower local communities.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Empowering Communities with Data</h2>
                
                <p className="mb-6">
                  ECN works directly with Community Forest User Groups (CFUGs) across Nepal to strengthen their forest management capabilities through scientific research and modern mapping technologies. Our approach combines traditional forest knowledge with cutting-edge GIS analysis to create comprehensive forest management plans.
                </p>

                <p className="mb-6">
                  Through detailed forest inventories, biodiversity assessments, and carbon stock evaluations, we help communities understand their forest resources better and make informed management decisions that balance conservation with sustainable utilization.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">GIS Technology for Forest Management</h2>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>High-resolution forest mapping using satellite imagery and field surveys</li>
                  <li>Species distribution modeling and biodiversity hotspot identification</li>
                  <li>Forest health monitoring and change detection analysis</li>
                  <li>Carbon sequestration potential assessment for REDD+ programs</li>
                  <li>Watershed analysis and erosion risk mapping</li>
                </ul>

                <p className="mb-6">
                  Our GIS-based tools enable communities to visualize forest changes over time, identify degraded areas for restoration, and plan harvesting activities that maintain forest cover and biodiversity. These technologies make complex scientific data accessible to community forest managers.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Capacity Building and Training</h2>
                
                <p className="mb-6">
                  ECN provides hands-on training to CFUG members in basic GIS operations, GPS use, and forest monitoring techniques. This capacity building ensures that communities can continue to apply these tools independently and update their forest management plans as conditions change.
                </p>

                <p className="mb-6">
                  Our training programs have reached over 200 community forestry groups across Nepal's hills and mountains, covering areas from the Terai to high-altitude forests. Each training is adapted to local forest types and community needs.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Sustainable Forest Outcomes</h2>
                
                <p className="mb-6">
                  Communities working with ECN have reported improved forest regeneration, better wildlife conservation outcomes, and increased income from sustainable forest products. The combination of scientific analysis and community knowledge creates robust forest management strategies.
                </p>

                <p className="mb-8">
                  These collaborative efforts demonstrate how modern technology can strengthen traditional forest management systems, creating more effective conservation outcomes while supporting community livelihoods and climate change mitigation goals.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Support Your Community Forest</h3>
                  <p className="mb-4">Learn how ECN can help strengthen your community forestry initiative with research and GIS tools.</p>
                  <Button className="btn-primary">
                    Contact Our Forestry Team
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

export default BlogPost3;