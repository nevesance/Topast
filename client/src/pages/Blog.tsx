import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { BlogPost } from "@shared/schema";

const BlogPage = () => {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-8">
        <div className="bg-navy p-6 md:p-10 text-white text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">BLOG ARTICLES</h1>
        </div>
        <div className="text-center py-10">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-navy">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-8">
        <div className="bg-navy p-6 md:p-10 text-white text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">BLOG ARTICLES</h1>
        </div>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-10">
          <p>Failed to load blog posts. Please try again later.</p>
        </div>
      </div>
    );
  }

  const featuredPost = blogPosts?.[0];
  const popularPosts = [...(blogPosts || [])].sort((a, b) => b.viewCount - a.viewCount).slice(0, 3);

  return (
    <section className="py-16 px-4 md:px-8 mb-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-navy p-6 md:p-10 text-white text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">BLOG ARTICLES</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Blog Articles */}
            <div className="space-y-8">
              {blogPosts?.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="blog-article block">
                  <h2 className="blog-title mb-4 text-xl font-medium text-navy hover:text-tomato transition-colors">{post.title}</h2>
                  <p className="text-navy/70 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between mt-4 text-sm text-navy/60">
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="views-counter">{post.viewCount.toLocaleString()} views</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            {/* Featured Article Image */}
            {featuredPost && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title} 
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-navy mb-4">{featuredPost.title}</h3>
                <p className="text-navy/80 mb-6">
                  {featuredPost.summary}
                </p>
                <Link href={`/blog/${featuredPost.slug}`} className="text-navy font-bold hover:text-tomato transition-colors flex items-center">
                  Read more <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            )}
            
            {/* Popular Posts */}
            <div className="bg-pastel/60 p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-xl font-bold text-navy mb-4">Popular Articles</h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={post.id} className="flex items-start">
                    <div className="text-navy font-bold mr-3 text-lg">{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <Link href={`/blog/${post.slug}`} className="text-navy hover:text-tomato transition-colors font-medium">
                        {post.title}
                      </Link>
                      <p className="text-sm text-navy/60">{post.viewCount.toLocaleString()} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;