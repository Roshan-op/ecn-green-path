import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import disasterRiskImage from '@/assets/blog/disaster-risk.jpg';

const BlogPost6 = () => {
  useEffect(() => {
    document.title = 'Disaster Risk Management in Action: ECN\'s Fieldwork Approach - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Flood planning Nepal, disaster risk consulting. ECN\'s community-level disaster assessments and flood risk mapping for resilient development.'
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
                  Disaster Risk
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Disaster Risk Management in Action: ECN's Fieldwork Approach
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Disaster Risk Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>November 28, 2024</span>
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
                  src={disasterRiskImage} 
                  alt="Disaster Risk Assessment Fieldwork by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Nepal's location in a seismically active region and diverse topography creates complex disaster risks. ECN's disaster risk management approach combines detailed fieldwork with community engagement to develop effective risk reduction strategies.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Community-Level Risk Assessment</h2>
                
                <p className="mb-6">
                  ECN's disaster risk management begins with comprehensive community-level assessments that identify specific hazards, vulnerabilities, and capacities. Our field teams work directly with communities to understand local risk perceptions and existing coping mechanisms.
                </p>

                <p className="mb-6">
                  These assessments go beyond technical hazard analysis to examine social, economic, and institutional factors that influence disaster risk. We map local knowledge alongside scientific data to create comprehensive risk profiles.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Flood Risk Mapping and Analysis</h2>
                
                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Hydrological Assessment</h3>
                  <p>We conduct detailed watershed analysis, river flow modeling, and flood plain mapping using both field measurements and remote sensing data to identify flood-prone areas.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Community Flood Mapping</h3>
                  <p>Working with local communities, we create participatory flood risk maps that combine technical analysis with community knowledge of historical flood patterns and impacts.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Early Warning Systems</h3>
                  <p>Our flood risk work includes design of community-based early warning systems that can provide timely alerts and support evacuation planning for flood-prone areas.</p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">Multi-Hazard Risk Integration</h2>
                
                <p className="mb-6">
                  Nepal faces multiple natural hazards including earthquakes, landslides, floods, and drought. ECN's approach considers these interconnected risks and their potential cascade effects, helping communities prepare for compound disasters.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Seismic risk assessment and earthquake-induced landslide mapping</li>
                  <li>Climate change impact analysis on disaster risk patterns</li>
                  <li>Infrastructure vulnerability assessment for critical facilities</li>
                  <li>Economic impact modeling for different disaster scenarios</li>
                  <li>Social vulnerability analysis focusing on marginalized populations</li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mb-6">Participatory Risk Reduction Planning</h2>
                
                <p className="mb-6">
                  ECN facilitates participatory processes that engage communities in developing their own disaster risk reduction plans. These plans build on local knowledge and priorities while incorporating technical risk analysis and best practices from disaster risk reduction.
                </p>

                <p className="mb-6">
                  Our approach emphasizes building local capacity for ongoing risk assessment and adaptation, ensuring that communities can update their risk reduction strategies as conditions change and new information becomes available.
                </p>

                <p className="mb-6">
                  We have supported disaster risk assessments and planning in over 100 communities across Nepal, from mountain villages vulnerable to glacial lake outburst floods to Terai communities facing recurring river flooding.
                </p>

                <p className="mb-8">
                  Through systematic field-based assessment and community engagement, ECN helps build disaster resilience that protects lives and livelihoods while supporting sustainable development in hazard-prone areas.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Assess Your Disaster Risk</h3>
                  <p className="mb-4">Contact ECN for comprehensive disaster risk assessment and reduction planning services.</p>
                  <Button className="btn-primary">
                    Get Risk Assessment
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

export default BlogPost6;