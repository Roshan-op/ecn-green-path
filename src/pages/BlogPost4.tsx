import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import climatePlanningImage from '@/assets/blog/climate-planning.jpg';

const BlogPost4 = () => {
  useEffect(() => {
    document.title = 'Climate Change Planning: ECN\'s Approach to Resilient Communities - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Climate planning Nepal, disaster risk resilience. ECN helps local governments plan for climate risks using CSDPs and GIS data for community resilience.'
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
                  Climate
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Climate Change Planning: ECN's Approach to Resilient Communities
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Climate Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 5, 2024</span>
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
                  src={climatePlanningImage} 
                  alt="Climate Change Planning Workshop by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Climate change poses unprecedented challenges to Nepal's communities, from glacial lake outburst floods in the mountains to extreme weather events across the country. ECN works with local governments to develop comprehensive climate adaptation strategies.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Community Settlement Development Plans (CSDPs)</h2>
                
                <p className="mb-6">
                  ECN specializes in developing Climate-Smart Community Settlement Development Plans (CSDPs) that integrate climate risk assessment with local development planning. These plans help communities prepare for climate impacts while pursuing sustainable development goals.
                </p>

                <p className="mb-6">
                  Our CSDP approach combines detailed climate vulnerability assessments with participatory planning processes, ensuring that local knowledge and priorities are integrated with scientific climate projections and risk analysis.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">GIS-Based Climate Risk Mapping</h2>
                
                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Hazard Mapping</h3>
                  <p>We create detailed maps of climate-related hazards including flood zones, landslide-prone areas, drought risk regions, and extreme temperature exposure areas using advanced GIS analysis.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Vulnerability Assessment</h3>
                  <p>Our analysis identifies the most vulnerable populations, infrastructure, and economic activities, helping prioritize adaptation interventions where they're needed most.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Adaptive Capacity Evaluation</h3>
                  <p>We assess existing community resources, institutions, and capabilities that can support climate adaptation, building on local strengths and addressing capacity gaps.</p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">Multi-Level Planning Integration</h2>
                
                <p className="mb-6">
                  ECN's climate planning approach works across multiple governance levels, from ward-level community plans to municipal and provincial climate strategies. This multi-level integration ensures that local adaptation needs are connected to broader policy frameworks and funding mechanisms.
                </p>

                <p className="mb-6">
                  We facilitate coordination between local governments, community organizations, and sectoral agencies to create coherent climate responses that address interconnected risks and opportunities.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Implementation and Monitoring</h2>
                
                <p className="mb-6">
                  Beyond planning, ECN supports implementation of climate adaptation measures through project design, funding proposal development, and monitoring system establishment. Our approach emphasizes adaptive management that can adjust to changing climate conditions and community needs.
                </p>

                <p className="mb-6">
                  We have supported climate planning initiatives in over 50 communities across Nepal's diverse geographical regions, from the Terai plains to high mountain settlements, each with tailored approaches to their specific climate risks and adaptation priorities.
                </p>

                <p className="mb-8">
                  Through systematic climate planning, ECN helps build community resilience that protects lives and livelihoods while supporting sustainable development in an era of climate change.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Build Climate Resilience</h3>
                  <p className="mb-4">Contact ECN to develop climate adaptation plans for your community or organization.</p>
                  <Button className="btn-primary">
                    Start Climate Planning
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

export default BlogPost4;