import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogActionButtons from "@/components/blog/BlogActionButtons";
import { getPostById, blogPosts } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: "Bài viết không tồn tại - Numerious",
      description: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.",
    };
  }

  return {
    title: `${post.title} - Blog Thần Số Học | Numerious`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getImageForPost = (post: { category: string; tags: string[] }) => {
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

  const getColorForPost = (post: { category: string; tags: string[] }) => {
    if (post.category.includes("trẻ em")) return "from-pink-500 to-rose-500";
    if (post.category.includes("nâng cao"))
      return "from-purple-500 to-indigo-500";
    if (post.category.includes("hướng dẫn")) return "from-blue-500 to-cyan-500";
    if (post.tags.includes("master numbers"))
      return "from-yellow-500 to-orange-500";
    return "from-green-500 to-emerald-500";
  };

  const parseMarkdown = (content: string): string => {
    // Split content theo lines để xử lý từng dòng
    const lines = content.split("\n");
    const htmlLines: string[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        htmlLines.push(
          `<ul class='list-disc list-inside space-y-2 mb-6 ml-4'>`
        );
        listItems.forEach((item) => htmlLines.push(item));
        htmlLines.push("</ul>");
        listItems = [];
      }
    };

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (trimmedLine === "") {
        if (inList) {
          flushList();
          inList = false;
        }
        return; // Skip empty lines
      }

      // Headers
      if (trimmedLine.startsWith("### ")) {
        if (inList) {
          flushList();
          inList = false;
        }
        const text = trimmedLine.replace(/^### /, "");
        htmlLines.push(
          `<h3 class='text-xl font-semibold mt-8 mb-4 text-gray-800'>${text}</h3>`
        );
      } else if (trimmedLine.startsWith("## ")) {
        if (inList) {
          flushList();
          inList = false;
        }
        const text = trimmedLine.replace(/^## /, "");
        htmlLines.push(
          `<h2 class='text-2xl font-bold mt-10 mb-6 text-gray-900'>${text}</h2>`
        );
      } else if (trimmedLine.startsWith("# ")) {
        if (inList) {
          flushList();
          inList = false;
        }
        const text = trimmedLine.replace(/^# /, "");
        htmlLines.push(
          `<h1 class='text-3xl font-bold mt-12 mb-8 text-gray-900'>${text}</h1>`
        );
      }
      // List items
      else if (trimmedLine.startsWith("- ")) {
        if (!inList) {
          inList = true;
        }
        const text = trimmedLine.replace(/^- /, "");
        // Process bold/italic in list items
        const processedText = text
          .replace(
            /\*\*(.*?)\*\*/g,
            "<strong class='font-semibold text-gray-900'>$1</strong>"
          )
          .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>");
        listItems.push(`<li class='ml-4 mb-2'>${processedText}</li>`);
      }
      // Regular paragraphs
      else {
        if (inList) {
          flushList();
          inList = false;
        }
        // Process bold/italic in paragraphs
        const processedText = trimmedLine
          .replace(
            /\*\*(.*?)\*\*/g,
            "<strong class='font-semibold text-gray-900'>$1</strong>"
          )
          .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>");
        htmlLines.push(`<p class='mb-4 leading-relaxed'>${processedText}</p>`);
      }
    });

    // Flush any remaining list
    if (inList) {
      flushList();
    }

    return htmlLines.join("");
  };

  // Lấy bài viết liên quan (cùng category, loại trừ bài hiện tại)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto p-6 py-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Trang chủ
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span>/</span>
          <span className="text-foreground">{post.category}</span>
        </nav>

        {/* Article Header */}
        <Card className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 border-0 shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${getColorForPost(
                  post
                )} flex items-center justify-center text-4xl`}
              >
                {getImageForPost(post)}
              </div>
            </div>

            <div className="space-y-2">
              <Badge variant="secondary" className="text-sm">
                {post.category}
              </Badge>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>👤</span>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span>{post.readTime} phút đọc</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
        </Card>

        {/* Article Content */}
        <Card>
          <CardContent className="prose prose-lg max-w-none p-8">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(post.content),
              }}
            />
          </CardContent>
        </Card>

        {/* Share and Action Buttons */}
        <Card>
          <CardContent className="py-6">
            <BlogActionButtons
              title={post.title}
              excerpt={post.excerpt}
              url={`http://localhost:3000/blog/${post.id}`}
            />
          </CardContent>
        </Card>

        {/* Author Info */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-center text-green-600">
              ✍️ Về tác giả
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl text-white">
                👨‍💻
              </div>
              <div>
                <h3 className="font-semibold text-green-700">{post.author}</h3>
                <p className="text-sm text-green-600">
                  Đội ngũ chuyên gia thần số học tại Numerious, với nhiều năm
                  kinh nghiệm nghiên cứu và ứng dụng thần số học trong cuộc
                  sống.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6">
            <Separator />
            <h2 className="text-2xl font-bold text-center">
              📚 Bài viết liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${getColorForPost(
                        relatedPost
                      )} flex items-center justify-center text-xl mb-3`}
                    >
                      {getImageForPost(relatedPost)}
                    </div>
                    <CardTitle className="text-base line-clamp-2">
                      {relatedPost.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="line-clamp-2 mb-4 text-sm">
                      {relatedPost.excerpt}
                    </CardDescription>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Badge
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Đọc thêm →
                      </Badge>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              ← Quay lại blog
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
