import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  created_at: string;
  featured_image?: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, content, created_at, featured_image')
        .eq('slug', postSlug)
        .eq('status', 'published')
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <main className="protocol-section">
          <div className="protocol-container max-w-4xl">
            <div className="animate-pulse">
              <div className="h-6 bg-muted rounded w-32 mb-8"></div>
              <div className="h-12 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-muted rounded w-48 mb-8"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-4 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen">
        <main className="protocol-section">
          <div className="protocol-container max-w-4xl text-center">
            <h1 className="text-2xl font-heading mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="protocol-section">
        <div className="protocol-container max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Journal
          </Link>

          <article>
            <header className="mb-12">
              <div className="mb-4">
                <Badge variant="secondary">
                  {format(new Date(post.created_at), 'MMMM d, yyyy')}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-6">
                {post.title}
              </h1>

              {post.featured_image && (
                <div className="aspect-video overflow-hidden rounded-lg mb-8">
                  <img 
                    src={post.featured_image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {post.content}
              </div>
            </div>

            <footer className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  More Articles
                </Link>
                
                <div className="text-sm text-muted-foreground">
                  Published {format(new Date(post.created_at), 'MMMM d, yyyy')}
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;