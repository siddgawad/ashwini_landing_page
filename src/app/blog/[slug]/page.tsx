"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Clock, Calendar, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { BlogPost } from "../../../types/blog";
import Link from "next/link";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const slug = params.slug as string;
    const savedPosts = localStorage.getItem("blog_posts");
    
    if (savedPosts) {
      const allPosts: BlogPost[] = JSON.parse(savedPosts);
      const foundPost = allPosts.find((p) => p.slug === slug && p.published);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Update page metadata
        document.title = `${foundPost.title} | Ashwini Gawad Blog`;
        
        // Set meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', foundPost.metaDescription);

        // Set meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', foundPost.metaKeywords);

        // Find related posts
        const related = allPosts
          .filter((p) => p.id !== foundPost.id && p.published && p.category === foundPost.category)
          .slice(0, 3);
        setRelatedPosts(related);
      } else {
        router.push("/blog");
      }
    }
  }, [params.slug, router]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const text = post?.title || '';
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    };
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                AG
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Ashwini Gawad</div>
                <div className="text-xs text-emerald-700 font-medium">MSc Clinical Dietitian</div>
              </div>
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              All Posts
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category & Meta */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
              AG
            </div>
            <div>
              <div className="font-bold text-gray-900">{post.author}</div>
              <div className="text-sm text-gray-600">MSc Clinical Dietitian • 25+ Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-xl text-gray-700 font-medium mb-8 leading-relaxed bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600">
              {post.excerpt}
            </div>
            
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-8 pb-8 border-b border-gray-200">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Share */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Share2 className="w-6 h-6" />
                Share this article
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Nutrition Advice?</h3>
            <p className="text-lg mb-6 text-white/90">
              Book a consultation with Ashwini Gawad for customized diet plans tailored to your health goals.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition shadow-xl"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2 hover:text-emerald-600 transition">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
