import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Maximizing your AI implementation ROI",
    description: "Discover strategies to enhance your AI return on investment effectively and sustainably in modern business environments.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    date: "Mar 15, 2024",
    readTime: "5 min read",
    content: `
      <p>In today's rapidly evolving business landscape, artificial intelligence has become a cornerstone of operational efficiency and innovation. Companies investing in AI technologies are discovering that the key to success lies not just in implementation, but in maximizing return on investment through strategic planning and execution.</p>
      
      <h2>1. Strategic Planning for AI Implementation</h2>
      <p>Before diving into AI solutions, organizations must establish clear objectives and metrics for success. This involves identifying specific business challenges that AI can address, setting realistic timelines, and creating measurable KPIs that align with overall business goals.</p>
      
      <h2>2. Data Quality and Preparation</h2>
      <p>The foundation of any successful AI implementation is high-quality data. Companies that invest time and resources in data cleaning, standardization, and governance see significantly higher returns on their AI investments. This preparation phase, while sometimes overlooked, is crucial for long-term success.</p>
      
      <h2>3. Continuous Monitoring and Optimization</h2>
      <p>AI systems require ongoing attention and refinement. Organizations that establish robust monitoring frameworks and continuously optimize their AI models based on performance data achieve better results and maintain competitive advantages over time.</p>
      
      <p>By following these strategic approaches, businesses can ensure their AI investments deliver meaningful returns and drive sustainable growth in an increasingly digital world.</p>
    `
  },
  {
    id: 2,
    title: "Building resilience in AI-driven business operations",
    description: "Learn how to create robust AI systems that can adapt and thrive in uncertain business environments.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    date: "Mar 10, 2024",
    readTime: "7 min read",
    content: `
      <p>As organizations increasingly rely on AI-driven operations, building resilience into these systems becomes paramount. Resilient AI systems can adapt to changing conditions, recover from failures, and continue delivering value even in uncertain environments.</p>
      
      <h2>1. Designing for Adaptability</h2>
      <p>Resilient AI systems are built with adaptability at their core. This means creating models that can learn from new data patterns, adjust to changing business conditions, and evolve with organizational needs. Flexibility in system architecture allows for quick pivots when market conditions change.</p>
      
      <h2>2. Implementing Robust Testing Frameworks</h2>
      <p>Comprehensive testing is essential for AI resilience. This includes stress testing under various scenarios, validation against edge cases, and continuous monitoring for performance degradation. Organizations should implement automated testing pipelines that catch issues before they impact operations.</p>
      
      <h2>3. Creating Fallback Mechanisms</h2>
      <p>Even the most sophisticated AI systems can encounter unexpected situations. Building effective fallback mechanisms ensures business continuity when primary AI systems face challenges. This might include alternative algorithms, human oversight protocols, or simplified decision trees.</p>
      
      <p>By prioritizing resilience in AI system design, organizations can build sustainable competitive advantages that withstand market volatility and technological changes.</p>
    `
  },
  {
    id: 3,
    title: "Leveraging Data-Driven Strategies for Business Growth",
    description: "Discover how data analytics can unlock new opportunities and drive sustainable business expansion across industries.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    date: "Mar 5, 2024",
    readTime: "6 min read",
    content: `
      <p>In the modern business world, data has emerged as one of the most valuable assets for driving growth and innovation. Companies that harness the power of data-driven strategies gain a competitive advantage by making informed decisions, optimizing operations, and identifying new opportunities.</p>
      
      <h2>1. Enhancing Decision-Making with Analytics</h2>
      <p>Data-driven decision-making allows businesses to move beyond intuition and rely on actionable insights. By analyzing customer behavior, market trends, and operational performance, companies can make strategic choices that drive revenue and efficiency.</p>
      
      <p>For example, e-commerce businesses use data analytics to personalize customer experiences, adjusting product recommendations and pricing strategies based on real-time data.</p>
      
      <h2>2. Identifying Growth Opportunities</h2>
      <p>Data helps uncover hidden patterns and emerging trends, allowing businesses to identify new markets and revenue streams. Predictive analytics, for instance, can forecast demand fluctuations and guide product development, ensuring that companies stay ahead of the curve.</p>
      
      <h2>3. Optimizing Marketing Strategies</h2>
      <p>A data-driven approach revolutionizes marketing by providing clear insights into campaign performance, customer preferences, and engagement rates. Businesses can track key metrics—like conversion rates and customer acquisition costs—to refine their marketing tactics and boost ROI.</p>
      
      <p>Additionally, segmenting audiences based on data allows for highly targeted campaigns, increasing the effectiveness of promotional efforts.</p>
      
      <p>By embracing data-driven strategies, businesses unlock new levels of efficiency, innovation, and growth—empowering them to navigate today's dynamic marketplace with confidence and precision.</p>
    `
  },
  {
    id: 4,
    title: "Effective team management in AI transformation",
    description: "Learn how to lead teams through AI adoption and ensure successful organizational change management.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    date: "Feb 28, 2024",
    readTime: "8 min read",
    content: `
      <p>Successfully implementing AI technologies requires more than just technical expertise—it demands effective leadership and team management throughout the transformation process. Organizations that invest in proper change management see significantly higher success rates in their AI initiatives.</p>
      
      <h2>1. Building AI-Ready Teams</h2>
      <p>Creating teams capable of working with AI technologies involves both hiring the right talent and upskilling existing employees. This includes data scientists, AI engineers, domain experts, and change management specialists who can bridge the gap between technology and business objectives.</p>
      
      <h2>2. Managing Resistance to Change</h2>
      <p>AI transformation often meets resistance from employees concerned about job displacement or workflow changes. Effective leaders address these concerns through transparent communication, comprehensive training programs, and by demonstrating how AI can augment rather than replace human capabilities.</p>
      
      <h2>3. Establishing Clear Governance</h2>
      <p>AI projects require clear governance structures that define roles, responsibilities, and decision-making processes. This includes establishing data governance policies, ethical AI guidelines, and performance monitoring frameworks that ensure accountability throughout the transformation.</p>
      
      <p>By focusing on people alongside technology, organizations can create sustainable AI transformations that deliver lasting value and competitive advantage.</p>
    `
  },
  {
    id: 5,
    title: "Mastering Financial Intelligence in AI Projects",
    description: "Explore key tactics to optimize financial strategies and maintain budget control during AI implementation projects.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    date: "Feb 20, 2024",
    readTime: "6 min read",
    content: `
      <p>Financial management is a critical aspect of successful AI implementation projects. Organizations that master financial intelligence in their AI initiatives can maximize returns while minimizing risks and ensuring sustainable growth.</p>
      
      <h2>1. Budget Planning and Resource Allocation</h2>
      <p>Effective AI project management begins with comprehensive budget planning that accounts for all project phases, from initial research and development to deployment and maintenance. This includes hardware costs, software licensing, talent acquisition, and ongoing operational expenses.</p>
      
      <h2>2. ROI Measurement and Tracking</h2>
      <p>Establishing clear metrics for measuring return on investment is essential for demonstrating the value of AI initiatives. This involves setting baseline measurements, defining success criteria, and implementing tracking systems that monitor financial performance throughout the project lifecycle.</p>
      
      <h2>3. Risk Management and Contingency Planning</h2>
      <p>AI projects often involve uncertainties and potential cost overruns. Successful financial management includes identifying potential risks, creating contingency budgets, and establishing governance processes that enable quick decision-making when financial adjustments are needed.</p>
      
      <p>By maintaining financial discipline and strategic oversight, organizations can ensure their AI investments deliver sustainable value and support long-term business objectives.</p>
    `
  },
  {
    id: 6,
    title: "The Power of Strategic Partnerships in AI Innovation",
    description: "Learn how building strong collaborations can accelerate AI adoption and unlock new revenue streams in competitive markets.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: {
      name: "James Parker",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    date: "Feb 15, 2024",
    readTime: "7 min read",
    content: `
      <p>Strategic partnerships have become a cornerstone of successful AI innovation, enabling organizations to accelerate development, share risks, and access specialized expertise that would be difficult to develop in-house.</p>
      
      <h2>1. Identifying the Right Partners</h2>
      <p>Successful AI partnerships begin with identifying organizations that complement your capabilities and share similar values and objectives. This might include technology vendors, research institutions, industry specialists, or even competitors in non-competing markets.</p>
      
      <h2>2. Collaborative Innovation Models</h2>
      <p>Effective partnerships leverage different collaboration models, from joint research and development projects to shared AI platforms and data consortiums. These models enable partners to pool resources, share knowledge, and accelerate innovation cycles.</p>
      
      <h2>3. Managing Partnership Dynamics</h2>
      <p>Successful AI partnerships require clear governance structures, intellectual property agreements, and performance metrics. Organizations must balance collaboration with protection of core competitive advantages while ensuring mutual value creation.</p>
      
      <p>By leveraging strategic partnerships, organizations can access new markets, accelerate AI adoption, and create sustainable competitive advantages in rapidly evolving technology landscapes.</p>
    `
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-600 mb-8">
            OUR BLOG
          </div>
          <h1 className="text-4xl md:text-5xl font-bold fulcrum-text mb-6">
            Featured insights and articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in AI transformation and digital innovation.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 rounded-xl group cursor-pointer h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold fulcrum-text mb-3 group-hover:text-fulcrum-red transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}