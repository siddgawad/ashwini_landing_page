"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, FileText, Edit, Trash2, Eye, LogOut } from "lucide-react";
import { BlogPost } from "../../../types/blog";

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Authentication Check
    const isAuthenticated = localStorage.getItem("admin_authenticated");
    
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }

    // 2. Load Data
    // We strictly run this once on mount to avoid cascading renders
    try {
      const savedPosts = localStorage.getItem("blog_posts");
      if (savedPosts) {
        setPosts(JSON.parse(savedPosts));
      }
    } catch (error) {
      console.error("Failed to parse blog posts:", error);
    } finally {
      setLoading(false);
    }
  }, []); // CHANGED: Empty dependency array ensures this runs once on mount.

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    localStorage.removeItem("admin_email");
    router.push("/admin/login");
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem("blog_posts", JSON.stringify(updatedPosts));
    }
  };

  const togglePublish = (id: string) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, published: !post.published } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem("blog_posts", JSON.stringify(updatedPosts));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold">
              AG
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Blog Dashboard</h1>
              <p className="text-xs text-gray-500">Ashwini Gawad - Clinical Dietitian</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Blog Posts</h2>
            <p className="text-gray-600 mt-1">Manage your blog content</p>
          </div>
          <a
            href="/admin/posts/new"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            New Post
          </a>
        </div>

        <div className="grid gap-6">
          {posts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-6">Create your first blog post to get started!</p>
              <a
                href="/admin/posts/new"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition"
              >
                <PlusCircle className="w-5 h-5" />
                Create First Post
              </a>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.published
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {post.category}
                      </span>
                      <span>Published: {new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                      title="View"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                    <a
                      href={`/admin/posts/${post.id}`}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => togglePublish(post.id)}
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                      title={post.published ? "Unpublish" : "Publish"}
                    >
                      {post.published ? "📤" : "📥"}
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}