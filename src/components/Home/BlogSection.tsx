import { useState, useEffect, useRef } from 'react';
import { Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const articles = [
    {
      id: 1,
      title: "Climate Change Impacts on Nepal's Water Resources: A Comprehensive Analysis",
      excerpt: "Exploring the effects of climate change on Nepal's water systems and adaptation strategies for sustainable water management in the Himalayas.",
      author: "Dr. Ramesh Sharma",
      date: "2024-01-15",
      readTime: "8 min",
      category: "Climate Science",
      image: "https://images.unsplash.com/photo-1500375592092-4000x6000?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "GIS Applications in Environmental Impact Assessment: Best Practices",
      excerpt: "Learn how Geographic Information Systems are revolutionizing environmental impact assessments with spatial analysis and mapping technologies.",
      author: "Priya Patel",
      date: "2024-01-10",
      readTime: "6 min",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Biodiversity Conservation Strategies for Protected Areas in Nepal",
      excerpt: "Examining effective conservation approaches and community engagement strategies for protecting Nepal's rich biodiversity in national parks and reserves.",
      author: "Dr. Anita Gurung",
      date: "2024-01-05",
      readTime: "10 min",
      category: "Conservation",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Disaster Risk Reduction in Mountain Communities: Lessons from the Field",
      excerpt: "Real-world case studies and lessons learned from implementing disaster risk reduction programs in Nepal's mountain communities.",
      author: "Bikash Thapa",
      date: "2023-12-28",
      readTime: "7 min",
      category: "Disaster Management",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Development Goals: Nepal's Environmental Progress",
      excerpt: "Tracking Nepal's progress towards achieving the UN Sustainable Development Goals with a focus on environmental sustainability targets.",
      author: "Dr. Sunita Rai",
      date: "2023-12-20",
      readTime: "5 min",
      category: "Policy",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Air Quality Monitoring in Kathmandu Valley: Trends and Solutions",
      excerpt: "Analysis of air quality trends in Kathmandu Valley and innovative solutions for reducing urban air pollution in Nepal's capital.",
      author: "Dr. Rajesh Khadka",
      date: "2023-12-15",
      readTime: "9 min",
      category: "Environmental Health",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const categories = [
    "All",
    "Climate Science",
    "Technology",
    "Conservation",
    "Disaster Management",
    "Policy",
    "Environmental Health"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  return (
    <section id="blog" className="section-padding bg-muted" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Latest Insights</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Environmental News & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest research, insights, and developments in environmental 
            science, climate change, and sustainable development in Nepal and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 fade-in ${isVisible ? 'visible' : ''}`}>
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

        {/* Featured Article */}
        {featuredArticle && (
          <div className={`mb-16 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-primary font-medium text-sm">{featuredArticle.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                  </div>
                  <Button className="btn-primary group">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {otherArticles.slice(0, 6).map((article, index) => (
            <div
              key={article.id}
              className={`bg-card border border-border rounded-lg overflow-hidden hover-lift transition-all duration-300 fade-in ${
                isVisible ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
                
                <Button className="btn-secondary w-full group text-sm">
                  Read More
                  <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className={`bg-card-gradient border border-border rounded-lg p-8 text-center fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated with Environmental Insights
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest research, policy updates, 
            and environmental news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="btn-primary">
              Subscribe
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '1.2s' }}>
          <Button className="btn-secondary">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;