import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Markdown from "markdown-to-jsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getBlogPostBySlug } from "@/data/blog-posts";
import type { BlogPost } from "@shared/schema";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const isLoading = false;
  const error = !post && slug ? new Error('Blog post not found') : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog yazısı bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız blog yazısı mevcut değil veya kaldırılmış olabilir.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Blog'a Geri Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 -ml-4 hover:bg-gray-100">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Blog'a Geri Dön
          </Button>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('tr-TR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-xl mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400";
              }}
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <Markdown
            options={{
              overrides: {
                h1: {
                  props: {
                    className: "text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0"
                  }
                },
                h2: {
                  props: {
                    className: "text-2xl font-bold text-gray-900 mt-10 mb-4"
                  }
                },
                h3: {
                  props: {
                    className: "text-xl font-bold text-gray-900 mt-8 mb-3"
                  }
                },
                p: {
                  props: {
                    className: "text-gray-700 leading-relaxed mb-6"
                  }
                },
                ul: {
                  props: {
                    className: "text-gray-700 space-y-2 mb-6 pl-6"
                  }
                },
                ol: {
                  props: {
                    className: "text-gray-700 space-y-2 mb-6 pl-6"
                  }
                },
                li: {
                  props: {
                    className: "leading-relaxed"
                  }
                },
                blockquote: {
                  props: {
                    className: "border-l-4 border-fulcrum-red pl-6 italic text-gray-600 my-8"
                  }
                },
                img: {
                  props: {
                    className: "rounded-lg my-8 w-full"
                  }
                },
                code: {
                  props: {
                    className: "bg-gray-100 px-2 py-1 rounded text-sm"
                  }
                }
              }
            }}
          >
            {post.content}
          </Markdown>
        </div>

        {/* Author Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center">
            <img 
              src={post.avatar} 
              alt={post.author}
              className="w-16 h-16 rounded-full mr-4 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/default-avatar.svg";
              }}
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
              <p className="text-gray-600">Fulcrum AI Uzmanı</p>
            </div>
          </div>
        </div>

        {/* Navigation to other posts */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <Link href="/blog">
            <Button size="lg" className="bg-fulcrum-red hover:bg-fulcrum-red/90">
              Diğer Blog Yazılarını Keşfet
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}