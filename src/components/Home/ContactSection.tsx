import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Butwal-06 Lumbini Province", "Nepal"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["980-2371916", "Nepal"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info.ecnepal@gmail.com", "Environmental Services"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: "Schedule Meeting"
    }
  ];

  const services = [
    "Environmental Assessment",
    "Climate Services",
    "GIS & Land Planning",
    "Disaster Risk Management",
    "Feasibility Studies",
    "Environmental Monitoring",
    "Policy & Research",
    "Training & Capacity Building",
    "Other"
  ];

  return (
    <section id="contact" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Ready to Start Your Environmental Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact our team of environmental experts to discuss your project requirements 
            and discover how we can help you achieve your sustainability goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className={`lg:col-span-2 fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+977-XXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your organization name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full"
                    placeholder="Please describe your project requirements, timeline, and any specific environmental challenges you're facing..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full group">
                  Send Message
                  <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-6 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button className="btn-secondary text-sm">
                      {info.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Emergency Environmental Services
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                For urgent environmental incidents or emergency consultations, 
                contact our 24/7 response team.
              </p>
              <Button className="btn-accent w-full">
                Emergency Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-16 bg-card border border-border rounded-lg p-8 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Our Location in Kathmandu
          </h3>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-foreground font-medium">Interactive Map</p>
              <p className="text-muted-foreground text-sm">
                Kathmandu Office Location
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;