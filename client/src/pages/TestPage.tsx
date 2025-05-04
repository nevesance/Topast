import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';

const TestPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/blog-posts')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        return res.json();
      })
      .then(data => {
        setBlogPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Test Page - Blog Post List</h1>
      
      {isLoading && <p>Loading...</p>}
      
      {error && <p className="text-red-500">Error: {error}</p>}
      
      {!isLoading && !error && (
        <div className="mt-8">
          <ul className="space-y-4">
            {blogPosts.map((post: any) => (
              <li key={post.id} className="border p-4 rounded-lg">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="mt-2">{post.summary}</p>
                <div className="mt-4">
                  <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                    Read more
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TestPage;