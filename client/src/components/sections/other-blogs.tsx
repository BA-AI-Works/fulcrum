import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@shared/schema";

interface OtherBlogsProps {
  currentSlug?: string;
  limit?: number;
}

export default function OtherBlogs({ currentSlug, limit = 3 }: OtherBlogsProps) {
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: async () => {
      const response = await fetch('/api/blog/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      return response.json() as Promise<BlogPost[]>;
    }
  });

  // Filter out current post and limit results
  const otherPosts = blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);

  if (isLoading || otherPosts.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Other Blogs</h2>
          <p className="text-lg text-gray-600">
            Discover more insights and stories from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 rounded-xl group cursor-pointer bg-white flex flex-col h-full">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400";
                    }}
                  />
                  {/* Date badge on image */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                    <span className="text-xs font-medium text-gray-700">
                      {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'short', day: 'numeric' })} • {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold blog-title mb-3 group-hover:text-fulcrum-red transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs text-gray-500">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Author info */}
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <img 
                      src={post.avatar} 
                      alt={post.author}
                      className="w-8 h-8 rounded-full mr-3 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/default-avatar.svg";
                      }}
                    />
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">{post.author}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}