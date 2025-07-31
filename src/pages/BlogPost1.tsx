import { useEffect } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import eiaTrainingImage from '@/assets/blog/eia-training.jpg';

const BlogPost1 = () => {
  useEffect(() => {
    document.title = 'Building Expertise: ECN\'s Ongoing EIA & IEE Training Workshops - Environmental Concern Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Training in EIA/IEE, environmental workshop Nepal. ECN\'s hands-on workshops for environmental professionals and students in Kathmandu and beyond.'
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
                  Training
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Building Expertise: ECN's Ongoing EIA & IEE Training Workshops
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>ECN Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 15, 2024</span>
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
                  src={eiaTrainingImage} 
                  alt="EIA IEE Training Workshop by ECN" 
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Environmental Concern Nepal (ECN) has been at the forefront of building environmental expertise across Nepal through comprehensive Environmental Impact Assessment (EIA) and Initial Environmental Examination (IEE) training workshops.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Training Programs</h2>
                
                <p className="mb-6">
                  Our training workshops are designed to meet the growing demand for skilled environmental professionals in Nepal. With rapid infrastructure development and increasing environmental awareness, there's a critical need for experts who can conduct thorough environmental assessments and ensure sustainable development practices.
                </p>

                <p className="mb-6">
                  ECN's training programs cover both theoretical foundations and practical fieldwork, ensuring participants gain hands-on experience with real-world projects. Our workshops have trained over 500 professionals, including government officials, consultants, and university students.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Workshop Highlights</h2>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Comprehensive coverage of EIA/IEE methodologies and Nepal's environmental regulations</li>
                  <li>Hands-on field training with modern surveying and monitoring equipment</li>
                  <li>Case studies from ECN's extensive project portfolio across Nepal</li>
                  <li>Interactive sessions with experienced environmental consultants</li>
                  <li>Certification upon successful completion of training modules</li>
                </ul>

                <p className="mb-6">
                  Our training locations span from Kathmandu to remote districts, ensuring accessibility for professionals across the country. We adapt our training methods to local contexts while maintaining international standards and best practices.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">Building Nepal's Environmental Future</h2>
                
                <p className="mb-6">
                  Through these capacity-building initiatives, ECN is contributing to Nepal's long-term environmental sustainability goals. Our trained professionals go on to work on critical infrastructure projects, helping ensure that development proceeds in harmony with environmental protection.
                </p>

                <p className="mb-8">
                  For information about upcoming training workshops or to register for our programs, contact ECN directly. We welcome participants from all sectors committed to advancing environmental science and sustainable development in Nepal.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Ready to Join Our Next Workshop?</h3>
                  <p className="mb-4">Contact ECN to learn about upcoming EIA/IEE training opportunities.</p>
                  <Button className="btn-primary">
                    Get Training Information
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

export default BlogPost1;