import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import transportImage from '@/assets/blog/sustainable-transport.jpg';

const BlogPost8 = () => {
  useEffect(() => {
    document.title = 'ECN & the Future of Sustainable Transport in Nepal - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Electric vehicles Nepal, transport sustainability. ECN\'s EV policy research, clean transport studies, and emission analysis for sustainable mobility.'
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
                  Transport
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  ECN & the Future of Sustainable Transport in Nepal
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Transport Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>November 20, 2024</span>
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
                  src={transportImage} 
                  alt="Sustainable Transport Research by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transportation is a major source of air pollution and greenhouse gas emissions in Nepal's growing cities. ECN is working to accelerate the transition to sustainable transport through policy research, emission studies, and electric vehicle promotion.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Electric Vehicle Policy and Research</h2>
                
                <p className="mb-6">
                  ECN conducts comprehensive research on electric vehicle adoption in Nepal, analyzing policy barriers, infrastructure needs, and market development opportunities. Our work supports government agencies and private sector stakeholders in advancing clean transport solutions.
                </p>

                <p className="mb-6">
                  Our EV research covers multiple vehicle categories from electric motorcycles and cars to public transport buses and commercial vehicles, considering Nepal's unique geography, economic conditions, and energy infrastructure.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Emission Studies and Air Quality Analysis</h2>
                
                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Vehicle Emission Monitoring</h3>
                  <p>We conduct detailed emission testing and analysis of different vehicle types, fuel qualities, and driving conditions to quantify transport sector contributions to air pollution.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Air Quality Impact Assessment</h3>
                  <p>Our studies analyze the relationship between transport emissions and urban air quality, helping cities understand the health and environmental impacts of current transport patterns.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Clean Transport Benefits Analysis</h3>
                  <p>We quantify the potential air quality, health, and climate benefits of shifting to electric and other clean transport technologies in Nepal's urban areas.</p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">Infrastructure Planning for Electric Mobility</h2>
                
                <p className="mb-6">
                  ECN supports planning for electric vehicle charging infrastructure, conducting feasibility studies for charging station networks and analyzing grid integration requirements for large-scale EV adoption.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Charging station location optimization using GIS analysis</li>
                  <li>Electrical grid capacity assessment for EV charging loads</li>
                  <li>Economic analysis of public and private charging business models</li>
                  <li>Integration with renewable energy for clean charging infrastructure</li>
                  <li>Policy recommendations for charging infrastructure development</li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mb-6">Public Transport Electrification</h2>
                
                <p className="mb-6">
                  ECN works with municipalities and transport operators to assess opportunities for electric public transport, including bus rapid transit systems, electric bus fleets, and integrated transport planning that supports sustainable mobility.
                </p>

                <p className="mb-6">
                  Our public transport research considers operational requirements, route optimization, depot infrastructure, and financing mechanisms needed to make electric public transport viable in Nepal's cities.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Integrated Transport and Land Use Planning</h2>
                
                <p className="mb-6">
                  Sustainable transport requires integrated planning that considers land use patterns, urban development, and transport demand management. ECN supports municipalities in developing transport plans that reduce travel demand while improving mobility options.
                </p>

                <p className="mb-6">
                  Our approach emphasizes transit-oriented development, non-motorized transport infrastructure, and integrated planning processes that align transport investments with sustainable urban development goals.
                </p>

                <p className="mb-8">
                  Through research, policy analysis, and planning support, ECN is helping accelerate Nepal's transition to sustainable transport systems that reduce emissions, improve air quality, and support economic development.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Advance Sustainable Transport</h3>
                  <p className="mb-4">Contact ECN for transport sustainability research and planning services.</p>
                  <Button className="btn-primary">
                    Get Transport Consultation
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

export default BlogPost8;