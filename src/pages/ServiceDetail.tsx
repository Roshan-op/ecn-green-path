import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const ServiceDetail = () => {
  const { service } = useParams();

  const services = {
    'environmental-assessments': {
      title: 'Environmental Impact Assessment (EIA) & Initial Environmental Examination (IEE)',
      description: 'Comprehensive environmental assessments ensuring sustainable development and regulatory compliance',
      features: [
        'Environmental Impact Assessment (EIA) for major projects',
        'Initial Environmental Examination (IEE) for medium-scale developments',
        'Environmental Management Plans (EMP)',
        'Environmental Audit and Compliance Monitoring',
        'Biodiversity Impact Assessment',
        'Social Impact Assessment',
        'Cumulative Impact Assessment',
        'Public Consultation and Stakeholder Engagement'
      ],
      process: [
        'Project Screening and Scoping',
        'Baseline Environmental Data Collection',
        'Impact Prediction and Assessment',
        'Mitigation Measures Development',
        'Environmental Management Plan Preparation',
        'Public Consultation Process',
        'Report Preparation and Submission',
        'Follow-up and Monitoring'
      ],
      benefits: [
        'Regulatory compliance and approval facilitation',
        'Risk identification and mitigation',
        'Enhanced project sustainability',
        'Stakeholder confidence building',
        'Cost-effective environmental management',
        'Improved project design and implementation'
      ]
    },
    'climate-services': {
      title: 'Climate Change Services & Adaptation Planning',
      description: 'Building climate resilience through scientific assessment and adaptive planning',
      features: [
        'Climate Risk and Vulnerability Assessment',
        'Climate Change Adaptation Planning',
        'Greenhouse Gas Inventory and Carbon Footprint',
        'Climate Modeling and Projections',
        'Community Settlement Development Plans (CSDP)',
        'Climate-Smart Agriculture Planning',
        'Disaster Risk Reduction Integration',
        'Climate Finance and Project Development'
      ],
      process: [
        'Climate Data Analysis and Projections',
        'Vulnerability and Risk Assessment',
        'Adaptation Options Identification',
        'Cost-Benefit Analysis of Interventions',
        'Participatory Planning Workshops',
        'Implementation Strategy Development',
        'Monitoring and Evaluation Framework',
        'Capacity Building and Training'
      ],
      benefits: [
        'Enhanced climate resilience',
        'Reduced vulnerability to climate risks',
        'Access to climate finance opportunities',
        'Improved adaptive capacity',
        'Science-based decision making',
        'Community engagement and ownership'
      ]
    },
    'gis-planning': {
      title: 'GIS Mapping & Spatial Planning',
      description: 'Advanced geospatial solutions for informed decision-making and sustainable development',
      features: [
        'Land Use and Land Cover Mapping',
        'Digital Terrain Modeling',
        'Watershed and Basin Analysis',
        'Forest Resource Mapping',
        'Urban Planning and Development',
        'Infrastructure Planning and Design',
        'Natural Resource Assessment',
        'Spatial Database Development'
      ],
      process: [
        'Data Requirements Assessment',
        'Remote Sensing and Field Data Collection',
        'Spatial Data Processing and Analysis',
        'Map Production and Visualization',
        'Spatial Database Development',
        'Decision Support System Development',
        'Training and Technology Transfer',
        'Ongoing Support and Maintenance'
      ],
      benefits: [
        'Improved spatial decision making',
        'Cost-effective resource mapping',
        'Enhanced planning accuracy',
        'Better resource management',
        'Reduced project risks',
        'Informed policy development'
      ]
    },
    'disaster-risk': {
      title: 'Disaster Risk Management & Assessment',
      description: 'Comprehensive disaster risk assessment and resilience building for communities and infrastructure',
      features: [
        'Multi-Hazard Risk Assessment',
        'Flood Risk Mapping and Modeling',
        'Earthquake and Landslide Risk Assessment',
        'Early Warning System Design',
        'Community-Based Disaster Risk Reduction',
        'Infrastructure Vulnerability Assessment',
        'Emergency Response Planning',
        'Business Continuity Planning'
      ],
      process: [
        'Hazard Identification and Characterization',
        'Vulnerability and Exposure Assessment',
        'Risk Analysis and Modeling',
        'Risk Mapping and Visualization',
        'Community Risk Assessment',
        'Mitigation Strategy Development',
        'Preparedness Planning',
        'Monitoring and Review'
      ],
      benefits: [
        'Reduced disaster losses',
        'Enhanced community resilience',
        'Improved emergency preparedness',
        'Better resource allocation',
        'Informed development planning',
        'Reduced insurance costs'
      ]
    },
    'feasibility-studies': {
      title: 'Environmental & Technical Feasibility Studies',
      description: 'Comprehensive feasibility analysis ensuring project viability and environmental sustainability',
      features: [
        'Technical Feasibility Assessment',
        'Environmental Feasibility Analysis',
        'Economic and Financial Viability',
        'Social Feasibility and Acceptance',
        'Regulatory and Legal Compliance',
        'Risk Assessment and Management',
        'Alternative Analysis and Comparison',
        'Investment Decision Support'
      ],
      process: [
        'Project Concept Review',
        'Multi-criteria Feasibility Analysis',
        'Stakeholder Consultation',
        'Technical and Environmental Assessment',
        'Economic and Financial Analysis',
        'Risk and Sensitivity Analysis',
        'Recommendations and Decision Support',
        'Implementation Planning'
      ],
      benefits: [
        'Informed investment decisions',
        'Risk minimization',
        'Regulatory compliance assurance',
        'Optimized project design',
        'Enhanced project success rate',
        'Stakeholder confidence'
      ]
    },
    'monitoring': {
      title: 'Environmental Monitoring & Compliance',
      description: 'Continuous environmental monitoring ensuring compliance and sustainable operations',
      features: [
        'Air Quality Monitoring and Assessment',
        'Water Quality Testing and Analysis',
        'Soil Contamination Assessment',
        'Noise and Vibration Monitoring',
        'Biodiversity and Ecological Monitoring',
        'Compliance Auditing and Reporting',
        'Environmental Management System',
        'Real-time Monitoring Solutions'
      ],
      process: [
        'Monitoring Plan Development',
        'Baseline Data Collection',
        'Regular Monitoring Implementation',
        'Data Analysis and Interpretation',
        'Compliance Assessment',
        'Reporting and Documentation',
        'Corrective Action Recommendations',
        'Continuous Improvement'
      ],
      benefits: [
        'Regulatory compliance maintenance',
        'Early problem detection',
        'Environmental performance improvement',
        'Risk management',
        'Stakeholder transparency',
        'Cost-effective operations'
      ]
    },
    'policy-research': {
      title: 'Environmental Policy & Research',
      description: 'Evidence-based policy development and cutting-edge environmental research',
      features: [
        'Environmental Policy Analysis',
        'Regulatory Framework Development',
        'Applied Environmental Research',
        'Policy Impact Assessment',
        'Stakeholder Engagement and Consultation',
        'Best Practices Documentation',
        'Capacity Building and Training',
        'Knowledge Management Systems'
      ],
      process: [
        'Research Design and Methodology',
        'Literature Review and Analysis',
        'Primary Data Collection',
        'Stakeholder Consultation',
        'Policy Analysis and Review',
        'Evidence Synthesis',
        'Recommendation Development',
        'Dissemination and Implementation'
      ],
      benefits: [
        'Evidence-based policy making',
        'Improved regulatory frameworks',
        'Enhanced institutional capacity',
        'Better environmental outcomes',
        'Informed decision making',
        'Knowledge advancement'
      ]
    },
    'training': {
      title: 'Training & Capacity Building',
      description: 'Professional development and institutional strengthening for environmental management',
      features: [
        'EIA/IEE Training Workshops',
        'GIS and Remote Sensing Training',
        'Climate Change Awareness Programs',
        'Disaster Risk Management Training',
        'Environmental Monitoring Techniques',
        'Policy Development Workshops',
        'Institutional Capacity Building',
        'Youth Environmental Education'
      ],
      process: [
        'Training Needs Assessment',
        'Curriculum Development',
        'Training Material Preparation',
        'Expert Trainer Assignment',
        'Interactive Workshop Delivery',
        'Practical Field Exercises',
        'Assessment and Certification',
        'Follow-up and Support'
      ],
      benefits: [
        'Enhanced technical competency',
        'Improved institutional capacity',
        'Better project implementation',
        'Career advancement opportunities',
        'Knowledge transfer and sharing',
        'Sustainable development outcomes'
      ]
    }
  };

  const currentService = service ? services[service as keyof typeof services] : null;

  useEffect(() => {
    if (currentService) {
      document.title = `${currentService.title} - Environmental Concern Nepal`;
    }
  }, [currentService]);

  if (!currentService) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container-custom py-16">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground">The requested service could not be found.</p>
            <Button className="btn-primary mt-4">
              <a href="/services">Back to Services</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{currentService.title}</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                {currentService.description}
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Services Include</h2>
                <div className="space-y-4">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Process</h2>
                <div className="space-y-4">
                  {currentService.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground pt-1">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contact our expert team to discuss your project requirements and learn how we can help 
                you achieve your environmental and sustainability goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary group">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 980-2371916
                </Button>
                <Button className="btn-secondary group">
                  <Mail className="h-4 w-4 mr-2" />
                  Email: info.ecnepal@gmail.com
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;