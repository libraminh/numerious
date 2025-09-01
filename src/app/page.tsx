import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const features = [
    {
      title: "Máy tính thần số học",
      description:
        "Tính toán chính xác các con số quan trọng trong cuộc sống bạn",
      icon: "🧮",
      href: "/calculator",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Ý nghĩa các con số",
      description:
        "Khám phá ý nghĩa sâu sắc của từng con số từ 1-9 và master numbers",
      icon: "🔢",
      href: "/meanings",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Tương thích số học",
      description: "Kiểm tra mức độ tương thích giữa các con số và con người",
      icon: "💕",
      href: "/compatibility",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Tìm tên phù hợp",
      description: "Gợi ý tên phù hợp dựa trên số chủ đạo và ngày sinh",
      icon: "✨",
      href: "/name-finder",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Blog thần số học",
      description:
        "Kiến thức chuyên sâu về thần số học và ứng dụng trong cuộc sống",
      icon: "📚",
      href: "/blog",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Phân tích chi tiết",
      description: "Báo cáo toàn diện về tính cách, sự nghiệp và tình yêu",
      icon: "📊",
      href: "/calculator",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const benefits = [
    {
      title: "Hiểu rõ bản thân",
      description:
        "Khám phá tính cách, điểm mạnh và thách thức thông qua các con số",
      icon: "🎯",
    },
    {
      title: "Định hướng sự nghiệp",
      description: "Tìm ra nghề nghiệp phù hợp dựa trên số chủ đạo của bạn",
      icon: "💼",
    },
    {
      title: "Cải thiện mối quan hệ",
      description: "Hiểu rõ hơn về tương thích và cách hòa hợp với người khác",
      icon: "🤝",
    },
    {
      title: "Phát triển tâm linh",
      description: "Kết nối với bản chất sâu sắc và mục đích sống của bạn",
      icon: "🌟",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                ✨ Khám phá bí ẩn của các con số
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Thần Số Học
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Việt Nam
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Khám phá ý nghĩa sâu sắc của các con số trong cuộc sống bạn.
                Hiểu rõ bản thân, định hướng tương lai và cải thiện các mối quan
                hệ thông qua khoa học thần số học cổ xưa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6"
                >
                  🧮 Bắt đầu tính toán ngay
                </Button>
              </Link>
              <Link href="/meanings">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                >
                  📚 Tìm hiểu thêm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá tất cả các công cụ mạnh mẽ giúp bạn hiểu rõ hơn về thần
              số học
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl`}
                    >
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lợi ích của thần số học
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thần số học mang lại những hiểu biết sâu sắc giúp bạn sống tốt hơn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Sẵn sàng khám phá bí ẩn của các con số?
            </h2>
            <p className="text-xl text-purple-100">
              Bắt đầu hành trình khám phá bản thân thông qua thần số học ngay
              hôm nay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  🚀 Bắt đầu miễn phí
                </Button>
              </Link>
              <Link href="/meanings">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-purple-600"
                >
                  📖 Tìm hiểu thêm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
