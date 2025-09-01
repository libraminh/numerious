"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PyramidChart from "@/components/numerology/PyramidChart";
import { calculateLifePyramid, LifePyramid } from "@/lib/numerology";

export default function PyramidPage() {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [pyramid, setPyramid] = useState<LifePyramid | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateAge = (birthDateString: string): number => {
    if (!birthDateString) return 0;
    const birth = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleCalculate = async () => {
    if (!fullName.trim() || !birthDate) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const birth = new Date(birthDate);
      const pyramidResult = calculateLifePyramid(birth);
      setPyramid(pyramidResult);
      setIsCalculating(false);
    }, 1000);
  };

  const currentAge = birthDate ? calculateAge(birthDate) : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-6xl mx-auto p-6 space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              🔺 Kim Tự Tháp Cuộc Đời
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá 4 giai đoạn quan trọng trong hành trình cuộc đời của bạn.
              Kim tự tháp cuộc đời sẽ giúp bạn hiểu rõ những thách thức, cơ hội
              và đặc điểm của từng giai đoạn để có kế hoạch phát triển phù hợp.
            </p>
          </div>

          {/* Input Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-purple-700 flex items-center justify-center gap-2">
                📝 Nhập thông tin của bạn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Họ và tên đầy đủ
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate" className="text-sm font-medium">
                  Ngày sinh
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full"
                />
              </div>

              {currentAge > 0 && (
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-700 text-sm">
                    🎂 Tuổi hiện tại của bạn: <strong>{currentAge} tuổi</strong>
                  </p>
                </div>
              )}

              <Button
                onClick={handleCalculate}
                disabled={isCalculating || !fullName.trim() || !birthDate}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                {isCalculating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Đang tính toán...
                  </div>
                ) : (
                  "🔺 Tạo Kim Tự Tháp Cuộc Đời"
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {pyramid && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-purple-700">
                  Kim Tự Tháp Cuộc Đời của {fullName}
                </h2>
                <p className="text-muted-foreground">
                  Dựa trên ngày sinh:{" "}
                  {new Date(birthDate).toLocaleDateString("vi-VN")}
                </p>
              </div>

              <PyramidChart pyramid={pyramid} currentAge={currentAge} />
            </div>
          )}

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center gap-2">
                  🧮 Cách tính kim tự tháp
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-600 text-sm space-y-2">
                <p>
                  • <strong>Giai đoạn 1:</strong> Tháng + Ngày sinh
                </p>
                <p>
                  • <strong>Giai đoạn 2:</strong> Ngày + Năm sinh
                </p>
                <p>
                  • <strong>Giai đoạn 3:</strong> Tháng + Năm sinh
                </p>
                <p>
                  • <strong>Giai đoạn 4:</strong> Số chủ đạo
                </p>
                <p className="text-xs mt-3 opacity-80">
                  Tuổi chuyển giai đoạn = 36 - Số chủ đạo
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  🎯 Ý nghĩa kim tự tháp
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-600 text-sm space-y-2">
                <p>• Hiểu rõ đặc điểm từng giai đoạn cuộc đời</p>
                <p>• Chuẩn bị cho những thách thức sắp tới</p>
                <p>• Tận dụng tối đa cơ hội phát triển</p>
                <p>• Lập kế hoạch dài hạn cho tương lai</p>
                <p>• Hiểu bản thân sâu sắc hơn</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <CardTitle className="text-purple-700 flex items-center gap-2">
                  💡 Lời khuyên sử dụng
                </CardTitle>
              </CardHeader>
              <CardContent className="text-purple-600 text-sm space-y-2">
                <p>• Tập trung vào giai đoạn hiện tại</p>
                <p>• Học hỏi từ giai đoạn đã qua</p>
                <p>• Chuẩn bị cho giai đoạn sắp tới</p>
                <p>• Không bỏ qua các mốc chuyển đổi</p>
                <p>• Kết hợp với các số thần số học khác</p>
              </CardContent>
            </Card>
          </div>

          {/* Feature Highlights */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-amber-700 text-center">
                🌟 Tại sao nên sử dụng Kim Tự Tháp Cuộc Đời?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800">
                        Hiểu rõ bản thân
                      </h4>
                      <p className="text-sm text-amber-700">
                        Khám phá những đặc điểm tính cách và năng lực trong từng
                        giai đoạn cuộc đời
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800">
                        Lập kế hoạch thông minh
                      </h4>
                      <p className="text-sm text-amber-700">
                        Biết được cơ hội và thách thức để có chiến lược phát
                        triển phù hợp
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800">
                        Chuẩn bị tâm lý
                      </h4>
                      <p className="text-sm text-amber-700">
                        Sẵn sàng cho những thay đổi và chuyển đổi quan trọng
                        trong cuộc đời
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800">
                        Tối ưu hóa tiềm năng
                      </h4>
                      <p className="text-sm text-amber-700">
                        Phát huy tối đa những năng lực và tài năng trong từng
                        giai đoạn
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          {!pyramid && (
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">
                Bắt đầu khám phá kim tự tháp cuộc đời của bạn ngay hôm nay!
              </h3>
              <p className="text-muted-foreground">
                Nhập thông tin của bạn ở phía trên để nhận được phân tích chi
                tiết về 4 giai đoạn quan trọng trong cuộc đời.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
