import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto p-6 py-16">
        <Card>
          <CardContent className="text-center py-16">
            <div className="space-y-6">
              <div className="text-8xl">📝</div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  Bài viết không tồn tại
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Hãy
                  quay lại trang blog để khám phá những bài viết khác.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    📚 Quay lại blog
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg">
                    🏠 Về trang chủ
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
