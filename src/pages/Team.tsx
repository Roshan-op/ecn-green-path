import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Card } from '@/components/ui/card';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    document.title = 'Our Team - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Meet the dedicated team of environmental professionals at Environmental Concern Nepal, committed to sustainable development and environmental protection.'
      );
    }
  }, []);

  const teamMembers = [
    {
      name: "Dr. Ramesh Kumar Sharma",
      position: "Managing Director & Lead Environmental Consultant",
      education: "PhD in Environmental Science, MSc in Environmental Management",
      experience: "15+ years in environmental consulting and research",
      specialization: "EIA/IEE, Climate Change Adaptation, Policy Development",
      email: "ramesh@ecnepal.com",
      phone: "+977-9801234567",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ms. Priya Patel",
      position: "Senior GIS Specialist & Project Manager",
      education: "MSc in Geographic Information Systems, BSc in Environmental Science",
      experience: "10+ years in GIS applications and spatial analysis",
      specialization: "GIS Mapping, Remote Sensing, Land Use Planning",
      email: "priya@ecnepal.com",
      phone: "+977-9801234568",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c845?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Anita Gurung",
      position: "Senior Biodiversity & Conservation Specialist",
      education: "PhD in Ecology, MSc in Conservation Biology",
      experience: "12+ years in biodiversity conservation and research",
      specialization: "Biodiversity Assessment, Conservation Planning, Community Forestry",
      email: "anita@ecnepal.com",
      phone: "+977-9801234569",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mr. Bikash Thapa",
      position: "Disaster Risk Management Specialist",
      education: "MSc in Disaster Risk Management, BSc in Civil Engineering",
      experience: "8+ years in disaster risk assessment and management",
      specialization: "Flood Risk Assessment, Early Warning Systems, Community Resilience",
      email: "bikash@ecnepal.com",
      phone: "+977-9801234570",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ms. Sunita Rai",
      position: "Climate Change & Policy Analyst",
      education: "MSc in Climate Change and Development, BSc in Environmental Science",
      experience: "7+ years in climate policy and research",
      specialization: "Climate Adaptation, Policy Analysis, CSDP Development",
      email: "sunita@ecnepal.com",
      phone: "+977-9801234571",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mr. Rajesh Khadka",
      position: "Environmental Monitoring Specialist",
      education: "MSc in Environmental Chemistry, BSc in Chemistry",
      experience: "9+ years in environmental monitoring and assessment",
      specialization: "Air Quality Monitoring, Water Quality Assessment, Environmental Auditing",
      email: "rajesh@ecnepal.com",
      phone: "+977-9801234572",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Expert Team</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Meet the dedicated professionals who drive Environmental Concern Nepal's 
                mission to protect and preserve our environment for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-all duration-300">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="text-primary font-medium text-sm">{member.position}</p>
                    </div>
                    
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Education</h4>
                        <p className="text-muted-foreground">{member.education}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Experience</h4>
                        <p className="text-muted-foreground">{member.experience}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Specialization</h4>
                        <p className="text-muted-foreground">{member.specialization}</p>
                      </div>
                      
                      <div className="border-t border-border pt-4 mt-4">
                        <div className="flex items-center justify-between">
                          <a 
                            href={`mailto:${member.email}`} 
                            className="flex items-center text-primary hover:text-primary/80 transition-colors"
                          >
                            <Mail className="h-4 w-4 mr-1" />
                            <span className="text-xs">Email</span>
                          </a>
                          <a 
                            href={`tel:${member.phone}`} 
                            className="flex items-center text-primary hover:text-primary/80 transition-colors"
                          >
                            <Phone className="h-4 w-4 mr-1" />
                            <span className="text-xs">Call</span>
                          </a>
                          <a 
                            href="#" 
                            className="flex items-center text-primary hover:text-primary/80 transition-colors"
                          >
                            <Linkedin className="h-4 w-4 mr-1" />
                            <span className="text-xs">LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Are you passionate about environmental protection and sustainable development? 
                We're always looking for talented individuals to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors">
                  View Open Positions
                </a>
                <a href="mailto:careers@ecnepal.com" className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors">
                  Send Your CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;