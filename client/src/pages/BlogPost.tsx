import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import { BlogPost } from "@shared/schema";

const BlogPostPage = () => {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog-posts/slug', slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
        <Link href="/blog" className="text-navy hover:text-tomato mb-8 inline-block">
          <i className="fas fa-arrow-left mr-2"></i>Back to Articles
        </Link>
        <div className="text-center py-10">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-navy">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
        <Link href="/blog" className="text-navy hover:text-tomato mb-8 inline-block">
          <i className="fas fa-arrow-left mr-2"></i>Back to Articles
        </Link>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-10">
          <p>Failed to load blog post. The article might not exist or there was a problem loading it.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
      <Link href="/blog" className="text-navy hover:text-tomato mb-8 inline-block">
        <i className="fas fa-arrow-left mr-2"></i>Back to Articles
      </Link>
      
      <h1 className="text-4xl font-bold text-navy mb-4">{post.title}</h1>
      
      <div className="text-navy/60 mb-8">
        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })} • {post.viewCount.toLocaleString()} views
      </div>
      
      {post.imageUrl && (
        <div className="mb-8">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-auto rounded-lg object-cover max-h-96" 
          />
        </div>
      )}
      
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-navy mb-4">Share this article</h3>
        <div className="flex space-x-4">
          <button className="bg-[#3b5998] text-white px-4 py-2 rounded-full">
            <i className="fab fa-facebook-f mr-2"></i>Facebook
          </button>
          <button className="bg-[#1da1f2] text-white px-4 py-2 rounded-full">
            <i className="fab fa-twitter mr-2"></i>Twitter
          </button>
          <button className="bg-[#0e76a8] text-white px-4 py-2 rounded-full">
            <i className="fab fa-linkedin-in mr-2"></i>LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;