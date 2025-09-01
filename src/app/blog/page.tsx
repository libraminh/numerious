"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts, getFeaturedPosts } from "@/data/blog-posts";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  // Lấy các categories độc đáo từ dữ liệu
  const categories = [
    "Tất cả",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  // Lọc bài viết theo category và search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Tất cả" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const featuredPosts = getFeaturedPosts();
  const getPostCount = (category: string) => {
    if (category === "Tất cả") return blogPosts.length;
    return blogPosts.filter((post) => post.category === category).length;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getImageForPost = (post: {
    category: string;
    tags: string[];
  }): string => {
    // Tạo emoji dựa trên category hoặc tags
    if (post.tags.includes("master numbers")) return "⭐";
    if (post.tags.includes("lãnh đạo")) return "👑";
    if (post.tags.includes("sáng tạo")) return "🎨";
    if (post.tags.includes("tổ chức")) return "📋";
    if (post.tags.includes("tự do")) return "🌍";
    if (post.tags.includes("hợp tác")) return "🤝";
    if (post.category.includes("trẻ em")) return "👶";
    if (post.category.includes("nâng cao")) return "🔮";
    if (post.category.includes("hướng dẫn")) return "📖";
    return "🔢";
  };

  const getColorForPost = (post: {
    category: string;
    tags: string[];
  }): string => {
    // Tạo màu gradient dựa trên category
    if (post.category.includes("trẻ em")) return "from-pink-500 to-rose-500";
    if (post.category.includes("nâng cao"))
      return "from-purple-500 to-indigo-500";
    if (post.category.includes("hướng dẫn")) return "from-blue-500 to-cyan-500";
    if (post.tags.includes("master numbers"))
      return "from-yellow-500 to-orange-500";
    return "from-green-500 to-emerald-500";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-6 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Blog Thần Số Học
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá kiến thức chuyên sâu về thần số học từ cơ bản đến nâng cao.
            Hiểu rõ hơn về bản thân và cách ứng dụng thần số học trong cuộc
            sống.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category} ({getPostCount(category)})
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === "Tất cả" &&
          searchTerm === "" &&
          featuredPosts.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center">
                📌 Bài viết nổi bật
              </h2>
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    {featuredPosts[0].category} • {featuredPosts[0].readTime}{" "}
                    phút đọc
                  </Badge>
                  <CardTitle className="text-3xl max-w-3xl mx-auto">
                    {featuredPosts[0].title}
                  </CardTitle>
                  <CardDescription className="text-lg max-w-2xl mx-auto">
                    {featuredPosts[0].excerpt}
                  </CardDescription>
                  <div className="text-sm text-muted-foreground">
                    {formatDate(featuredPosts[0].publishDate)}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <Link href={`/blog/${featuredPosts[0].id}`}>
                    <div
                      className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${getColorForPost(
                        featuredPosts[0]
                      )} flex items-center justify-center text-5xl mb-4 hover:scale-105 transition-transform`}
                    >
                      {getImageForPost(featuredPosts[0])}
                    </div>
                    <Badge
                      variant="outline"
                      className="px-6 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Đọc bài viết →
                    </Badge>
                  </Link>
                </CardContent>
              </Card>
            </div>
          )}

        {/* Search Results */}
        {searchTerm && (
          <div className="text-center">
            <p className="text-muted-foreground">
              Tìm thấy {filteredPosts.length} bài viết cho &quot;{searchTerm}
              &quot;
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="space-y-6">
          {selectedCategory !== "Tất cả" || searchTerm !== "" ? (
            <h2 className="text-2xl font-bold text-center">
              {selectedCategory !== "Tất cả"
                ? `📚 ${selectedCategory}`
                : "🔍 Kết quả tìm kiếm"}
            </h2>
          ) : (
            <h2 className="text-2xl font-bold text-center">
              📖 Tất cả bài viết
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime} phút
                      </span>
                    </div>
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${getColorForPost(
                        post
                      )} flex items-center justify-center text-2xl mb-3`}
                    >
                      {getImageForPost(post)}
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="line-clamp-3 mb-4">
                      {post.excerpt}
                    </CardDescription>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {formatDate(post.publishDate)}
                      </span>
                      <Badge
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Đọc thêm →
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">
                Không tìm thấy bài viết
              </h3>
              <p className="text-muted-foreground">
                Hãy thử tìm kiếm với từ khóa khác hoặc chọn category khác.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">📬 Đăng ký nhận tin tức</CardTitle>
            <CardDescription className="text-blue-100">
              Nhận những bài viết mới nhất về thần số học và các mẹo hữu ích
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 text-gray-900 placeholder-gray-500"
              />
              <button className="px-6 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Đăng ký
              </button>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-center text-green-600">
              📚 Về blog thần số học Numerious
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">
                  🎯 Mục tiêu của chúng tôi:
                </h4>
                <p className="text-sm text-green-600">
                  Cung cấp kiến thức chính xác và dễ hiểu về thần số học, giúp
                  mọi người hiểu rõ hơn về bản thân và ứng dụng trong cuộc sống
                  hàng ngày.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">
                  ✨ Nội dung chất lượng:
                </h4>
                <p className="text-sm text-green-600">
                  Tất cả bài viết đều được nghiên cứu kỹ lưỡng, dựa trên kiến
                  thức thần số học truyền thống và kinh nghiệm thực tế từ các
                  chuyên gia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
