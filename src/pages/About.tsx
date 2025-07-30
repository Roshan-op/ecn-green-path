import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Learn about Environmental Concern Nepal - our mission, vision, expert team, and commitment to environmental excellence in Nepal.'
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Environmental Concern Nepal</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Leading Nepal's environmental consulting sector with innovative solutions, 
                expert knowledge, and unwavering commitment to sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Environmental Concern Nepal Pvt. Ltd. (ECN) was founded with a vision to bridge the gap 
                  between environmental science and sustainable development in Nepal. Since our inception, 
                  we have been at the forefront of environmental consulting, providing evidence-based 
                  solutions that balance economic growth with environmental protection.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our multidisciplinary team combines decades of experience in environmental science, 
                  climate research, GIS technology, and policy development to deliver comprehensive 
                  solutions for government agencies, development partners, and private sector clients.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded</span>
                    <span className="font-semibold">2008</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Headquarters</span>
                    <span className="font-semibold">Kathmandu, Nepal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size</span>
                    <span className="font-semibold">25+ Experts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-semibold">500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, science-based environmental consulting services that 
                  enable sustainable development while protecting Nepal's natural heritage for 
                  future generations.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Nepal's most trusted environmental consulting firm, recognized for 
                  excellence in environmental management, climate resilience, and sustainable 
                  development solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;