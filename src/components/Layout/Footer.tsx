import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import ecnLogo from '@/assets/ecn-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Environmental Assessment',
    'Climate Services',
    'GIS & Land Planning',
    'Disaster Risk Management',
    'Feasibility Studies',
    'Policy & Research'
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Environmental-Concern-Nepal/61558705857205/', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={ecnLogo} alt="ECN Logo" className="h-12 w-12" />
                <div>
                  <h3 className="text-2xl font-bold">ECN</h3>
                  <p className="text-primary-foreground/80">Environmental Concern Nepal Pvt. Ltd.</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-6 max-w-md">
                Welcome to Environmental Concern Nepal! We're your go-to team for eco-friendly solutions. 
                Whether it's reducing negative impact or embracing green practices, we're here to guide you 
                every step of the way🌍
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-primary-foreground/80">Butwal-06 Lumbini Province, Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-primary-foreground/80">980-2371916</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-primary-foreground/80">info.ecnepal@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80">
              © 2024 Environmental Concern Nepal Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;