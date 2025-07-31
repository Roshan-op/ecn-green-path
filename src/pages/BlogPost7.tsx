import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import youthEducationImage from '@/assets/blog/youth-education.jpg';

const BlogPost7 = () => {
  useEffect(() => {
    document.title = 'Empowering Youth Through Environmental Education & Field Training - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Environmental training Nepal, youth outreach. ECN\'s outreach and internship programs for students and young professionals in environmental science.'
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
                  Education
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Empowering Youth Through Environmental Education & Field Training
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Education Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>November 25, 2024</span>
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
                  src={youthEducationImage} 
                  alt="Youth Environmental Education Program by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Building Nepal's environmental future requires investing in young people who will become tomorrow's environmental leaders. ECN's youth education and outreach programs provide hands-on experience and practical skills for students and emerging professionals.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Youth Programs</h2>
                
                <p className="mb-6">
                  ECN's youth engagement programs span from university-level internships to community outreach initiatives that bring environmental science directly to young people across Nepal. Our programs combine theoretical learning with practical field experience in real environmental projects.
                </p>

                <p className="mb-6">
                  We partner with universities, colleges, and youth organizations to create meaningful learning opportunities that address both educational objectives and practical environmental challenges facing Nepal's communities.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Field-Based Learning Experiences</h2>
                
                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Environmental Assessment Training</h3>
                  <p>Students participate in real EIA and IEE projects, learning assessment methodologies while contributing to actual consulting work under experienced professional supervision.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">GIS and Remote Sensing Applications</h3>
                  <p>Hands-on training in Geographic Information Systems and remote sensing technologies, with applications in forest monitoring, land use planning, and disaster risk assessment.</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Community Engagement Skills</h3>
                  <p>Training in participatory research methods, community consultation, and stakeholder engagement essential for effective environmental consulting and policy work.</p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">Internship and Mentorship Programs</h2>
                
                <p className="mb-6">
                  ECN offers structured internship programs that place students directly within our project teams, providing mentorship from senior environmental professionals. Interns work on diverse projects from climate adaptation planning to biodiversity assessments.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>6-month structured internship programs with project-based learning</li>
                  <li>One-on-one mentorship with experienced environmental consultants</li>
                  <li>Professional development workshops on consulting skills and career planning</li>
                  <li>Research opportunities leading to publication and conference presentations</li>
                  <li>Networking with environmental professionals and potential employers</li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mb-6">Building Environmental Leadership</h2>
                
                <p className="mb-6">
                  Our programs emphasize developing leadership skills alongside technical expertise. Young participants learn project management, team coordination, and communication skills essential for environmental leadership roles.
                </p>

                <p className="mb-6">
                  Many ECN program alumni have gone on to establish their own environmental consulting firms, secure positions with international organizations, or pursue advanced studies in environmental science and policy.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Community Outreach and Awareness</h2>
                
                <p className="mb-6">
                  Beyond professional training, ECN supports youth-led environmental awareness initiatives in schools and communities. We provide technical support and educational materials for youth environmental clubs and student research projects.
                </p>

                <p className="mb-6">
                  Our outreach programs have reached over 1,000 young people across Nepal, from rural schools to urban universities, building environmental awareness and inspiring the next generation of environmental professionals.
                </p>

                <p className="mb-8">
                  Through comprehensive youth engagement, ECN is helping build the human capacity needed for Nepal's environmental challenges while inspiring young people to pursue careers in environmental science and sustainability.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Join Our Youth Programs</h3>
                  <p className="mb-4">Learn about internship and training opportunities with ECN's environmental education programs.</p>
                  <Button className="btn-primary">
                    Apply for Programs
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

export default BlogPost7;