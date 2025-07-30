import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ShopSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<{[key: number]: number}>({});
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

  const products = [
    {
      id: 1,
      name: "Environmental Assessment Toolkit",
      description: "Comprehensive digital toolkit with templates, checklists, and guidelines for environmental impact assessments.",
      price: 2500,
      originalPrice: 3000,
      category: "Digital Resources",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
      bestseller: true
    },
    {
      id: 2,
      name: "Climate Data Analysis Software",
      description: "Professional software package for climate data analysis, modeling, and visualization with Nepal-specific datasets.",
      price: 15000,
      originalPrice: 18000,
      category: "Software",
      rating: 4.9,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
      bestseller: false
    },
    {
      id: 3,
      name: "GIS Mapping Training Course",
      description: "Online training course with video tutorials, exercises, and certification for GIS applications in environmental planning.",
      price: 5000,
      originalPrice: 6000,
      category: "Training",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
      bestseller: true
    },
    {
      id: 4,
      name: "Environmental Compliance Handbook",
      description: "Digital handbook covering Nepal's environmental laws, regulations, and compliance requirements with regular updates.",
      price: 1500,
      originalPrice: 2000,
      category: "Digital Resources",
      rating: 4.6,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop",
      bestseller: false
    },
    {
      id: 5,
      name: "Disaster Risk Assessment Templates",
      description: "Ready-to-use templates and frameworks for conducting disaster risk assessments in mountain and urban areas.",
      price: 3000,
      originalPrice: 3500,
      category: "Templates",
      rating: 4.5,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=300&h=200&fit=crop",
      bestseller: false
    },
    {
      id: 6,
      name: "Biodiversity Monitoring Kit",
      description: "Complete digital kit with field forms, species identification guides, and data collection tools for biodiversity surveys.",
      price: 4000,
      originalPrice: 4800,
      category: "Digital Resources",
      rating: 4.8,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=200&fit=crop",
      bestseller: false
    }
  ];

  const categories = ['All', 'Digital Resources', 'Software', 'Training', 'Templates'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <section id="shop" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">ECN Shop</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Professional Environmental Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our curated collection of professional tools, templates, and training materials 
            designed to enhance your environmental consulting and research capabilities.
          </p>
        </div>

        {/* Shop Controls */}
        <div className={`flex flex-col lg:flex-row justify-between items-center mb-12 gap-6 fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 w-64"
              />
            </div>
            <Button className="btn-secondary relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-card border border-border rounded-lg overflow-hidden hover-lift transition-all duration-300 fade-in ${
                isVisible ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.bestseller && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs font-medium">
                      Bestseller
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-primary text-xs font-medium">{product.category}</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                  {product.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-warning fill-current'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-foreground">
                      NPR {product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      NPR {product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={() => addToCart(product.id)}
                  className="btn-primary w-full group"
                >
                  <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Benefits */}
        <div className={`bg-card-gradient border border-border rounded-lg p-8 mb-12 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="p-3 bg-primary/10 rounded-full inline-flex mb-4">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Instant Access</h4>
              <p className="text-muted-foreground text-sm">
                Download your purchases immediately after payment completion
              </p>
            </div>
            <div>
              <div className="p-3 bg-primary/10 rounded-full inline-flex mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Expert Quality</h4>
              <p className="text-muted-foreground text-sm">
                All resources developed by experienced environmental professionals
              </p>
            </div>
            <div>
              <div className="p-3 bg-primary/10 rounded-full inline-flex mb-4">
                <Filter className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Regular Updates</h4>
              <p className="text-muted-foreground text-sm">
                Get free updates and new versions of your purchased resources
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? We offer custom development of templates, 
            tools, and training materials tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              Request Custom Development
            </Button>
            <Button className="btn-secondary">
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;