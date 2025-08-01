import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import BlogPost7 from "./pages/BlogPost7";
import BlogPost8 from "./pages/BlogPost8";
import BlogPost9 from "./pages/BlogPost9";
import BlogPost10 from "./pages/BlogPost10";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-post-1" element={<BlogPost1 />} />
          <Route path="/blog-post-2" element={<BlogPost2 />} />
          <Route path="/blog-post-3" element={<BlogPost3 />} />
          <Route path="/blog-post-4" element={<BlogPost4 />} />
          <Route path="/blog-post-5" element={<BlogPost5 />} />
          <Route path="/blog-post-6" element={<BlogPost6 />} />
          <Route path="/blog-post-7" element={<BlogPost7 />} />
          <Route path="/blog-post-8" element={<BlogPost8 />} />
          <Route path="/blog-post-9" element={<BlogPost9 />} />
          <Route path="/blog-post-10" element={<BlogPost10 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
