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
      title: "Building Expertise: ECN's Ongoing EIA & IEE Training Workshops",
      excerpt: "Covers ECN's hands-on workshops for environmental professionals and students in Kathmandu and beyond.",
      author: "ECN Training Team",
      date: "2024-12-01",
      readTime: "5 min",
      category: "Training",
      link: "/blog-post-1",
      image: "/src/assets/blog/eia-training.jpg",
      featured: true
    },
    {
      id: 2,
      title: "How ECN Assesses Infrastructure Projects for Sustainable Growth",
      excerpt: "Shows ECN's role in road, hydropower, and bridge environmental assessments.",
      author: "ECN Infrastructure Team",
      date: "2024-11-30",
      readTime: "6 min",
      category: "Infrastructure",
      link: "/blog-post-2",
      image: "/src/assets/blog/infrastructure-assessment.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Strengthening Community Forestry Through Research and GIS Tools",
      excerpt: "Discusses ECN's support of community forestry groups using data and mapping tools.",
      author: "ECN Forestry Team",
      date: "2024-11-29",
      readTime: "5 min",
      category: "Forestry",
      link: "/blog-post-3",
      image: "/src/assets/blog/community-forestry.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Climate Change Planning: ECN's Approach to Resilient Communities",
      excerpt: "Explores how ECN helps local governments plan for climate risks using CSDPs and GIS data.",
      author: "ECN Climate Team",
      date: "2024-11-28",
      readTime: "7 min",
      category: "Climate",
      link: "/blog-post-4",
      image: "/src/assets/blog/climate-planning.jpg",
      featured: false
    },
    {
      id: 5,
      title: "ECN's Role in Urban Wastewater & Sanitation Management",
      excerpt: "Highlights ECN's drainage studies, FSM planning, and urban wastewater solutions.",
      author: "ECN WASH Team",
      date: "2024-11-27",
      readTime: "6 min",
      category: "Sanitation",
      link: "/blog-post-5",
      image: "/src/assets/blog/wastewater-management.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Disaster Risk Management in Action: ECN's Fieldwork Approach",
      excerpt: "Details ECN's community-level disaster assessments and flood risk mapping.",
      author: "ECN Disaster Risk Team",
      date: "2024-11-28",
      readTime: "8 min",
      category: "Disaster Risk",
      link: "/blog-post-6",
      image: "/src/assets/blog/disaster-risk.jpg",
      featured: false
    },
    {
      id: 7,
      title: "Empowering Youth Through Environmental Education & Field Training",
      excerpt: "Covers ECN's outreach and internship programs for students and young professionals.",
      author: "ECN Education Team",
      date: "2024-11-25",
      readTime: "6 min",
      category: "Education",
      link: "/blog-post-7",
      image: "/src/assets/blog/youth-education.jpg",
      featured: false
    },
    {
      id: 8,
      title: "ECN & the Future of Sustainable Transport in Nepal",
      excerpt: "Discusses EV policy, ECN's clean transport research, and emission studies.",
      author: "ECN Transport Team",
      date: "2024-11-20",
      readTime: "7 min",
      category: "Transport",
      link: "/blog-post-8",
      image: "/src/assets/blog/sustainable-transport.jpg",
      featured: false
    },
    {
      id: 9,
      title: "Floating Wetlands & Nature-Based Solutions: ECN's Green Innovation",
      excerpt: "Describes ECN's use of wetlands and green infrastructure for water purification.",
      author: "ECN Innovation Team",
      date: "2024-11-15",
      readTime: "5 min",
      category: "Innovation",
      link: "/blog-post-9",
      image: "/src/assets/blog/floating-wetlands.jpg",
      featured: false
    },
    {
      id: 10,
      title: "ECN's Project Portfolio: 12+ Environmental Studies Across Nepal",
      excerpt: "A roundup of ECN's recent and notable projects with impact highlights.",
      author: "ECN Portfolio Team",
      date: "2024-11-10",
      readTime: "6 min",
      category: "Portfolio",
      link: "/blog-post-10",
      image: "/src/assets/blog/project-portfolio.jpg",
      featured: false
    }
  ];

  const categories = [
    "All",
    "Training",
    "Infrastructure", 
    "Forestry",
    "Climate",
    "Sanitation",
    "Disaster Risk",
    "Education",
    "Transport",
    "Innovation",
    "Portfolio"
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
                  <a href={featuredArticle.link}>
                    <Button className="btn-primary group">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
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
                
                <a href={article.link}>
                  <Button className="btn-secondary w-full group text-sm">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
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