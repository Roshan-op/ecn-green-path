import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ecnLogo from '@/assets/ecn-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Environmental Assessments', href: '/services/environmental-assessments' },
        { name: 'Climate Services', href: '/services/climate-services' },
        { name: 'GIS & Land Planning', href: '/services/gis-planning' },
        { name: 'Disaster Risk Management', href: '/services/disaster-risk' },
        { name: 'Feasibility Studies', href: '/services/feasibility-studies' },
        { name: 'Environmental Monitoring', href: '/services/monitoring' },
        { name: 'Policy & Research', href: '/services/policy-research' },
        { name: 'Training & Capacity Building', href: '/services/training' }
      ]
    },
    { name: 'Training', href: '/training' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { 
      name: 'Our Team',
      href: '/team',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Meet Our Team', href: '/team' },
        { name: 'Leadership', href: '/team#leadership' },
        { name: 'Join Our Team', href: '/team#careers' }
      ]
    },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-border' 
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={ecnLogo} alt="ECN Logo" className="h-10 w-10 lg:h-12 lg:w-12" />
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-primary">ECN</h1>
              <p className="text-xs lg:text-sm text-muted-foreground leading-tight">
                Environmental Concern Nepal
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onMouseEnter={() => {
                    if (item.name === 'Services') setIsServicesOpen(true);
                    if (item.name === 'Our Team') setIsTeamOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'Services') setIsServicesOpen(false);
                    if (item.name === 'Our Team') setIsTeamOpen(false);
                  }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                
                {/* Dropdown Menus */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-strong transition-all duration-300 z-50 ${
                      (item.name === 'Services' && isServicesOpen) || (item.name === 'Our Team' && isTeamOpen) 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => {
                      if (item.name === 'Services') setIsServicesOpen(true);
                      if (item.name === 'Our Team') setIsTeamOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') setIsServicesOpen(false);
                      if (item.name === 'Our Team') setIsTeamOpen(false);
                    }}
                  >
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={typeof dropdownItem === 'string' ? `#service-${index}` : dropdownItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Button className="btn-primary ml-4">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-border bg-background/95 backdrop-blur-md">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button className="btn-primary w-full">
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;