"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  calculateLifePathNumber,
  calculateCompatibility,
  calculateDetailedCompatibility,
} from "@/lib/numerology";
import { numberMeanings, compatibilityMatrix } from "@/data/numerology-data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CompatibilityPage() {
  const [person1, setPerson1] = useState({
    name: "",
    birthDate: "",
    lifePathNumber: 0,
  });
  const [person2, setPerson2] = useState({
    name: "",
    birthDate: "",
    lifePathNumber: 0,
  });
  const [compatibility, setCompatibility] = useState<{
    level: string;
    person1Number: number;
    person2Number: number;
    matrixInfo: {
      best: number[];
      good: number[];
      challenging: number[];
    };
    detailedInfo?: {
      percentage: number;
      title: string;
      description: string;
      strengths: string[];
      challenges: string[];
      advice: string[];
      loveCompatibility: string;
      careerCompatibility: string;
      friendshipCompatibility: string;
    };
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculatePerson1 = () => {
    if (!person1.name || !person1.birthDate) return;

    try {
      const date = new Date(person1.birthDate);
      const lifePathNumber = calculateLifePathNumber(date);
      setPerson1((prev) => ({ ...prev, lifePathNumber }));
    } catch (error) {
      console.error("Lỗi tính toán:", error);
    }
  };

  const handleCalculatePerson2 = () => {
    if (!person2.name || !person1.birthDate) return;

    try {
      const date = new Date(person2.birthDate);
      const lifePathNumber = calculateLifePathNumber(date);
      setPerson2((prev) => ({ ...prev, lifePathNumber }));
    } catch (error) {
      console.error("Lỗi tính toán:", error);
    }
  };

  const handleCalculateCompatibility = () => {
    if (person1.lifePathNumber === 0 || person2.lifePathNumber === 0) return;

    setIsCalculating(true);

    try {
      const compatibilityLevel = calculateCompatibility(
        person1.lifePathNumber,
        person2.lifePathNumber
      );
      const matrixInfo =
        compatibilityMatrix[
          person1.lifePathNumber as keyof typeof compatibilityMatrix
        ];

      // Tính toán thông tin chi tiết
      const detailedInfo = calculateDetailedCompatibility(
        person1.lifePathNumber,
        person2.lifePathNumber
      );

      setCompatibility({
        level: compatibilityLevel,
        person1Number: person1.lifePathNumber,
        person2Number: person2.lifePathNumber,
        matrixInfo,
        detailedInfo,
      });
    } catch (error) {
      console.error("Lỗi tính toán:", error);
    } finally {
      setIsCalculating(false);
    }
  };

  const getCompatibilityText = (level: string) => {
    switch (level) {
      case "best":
        return "Rất tương thích";
      case "good":
        return "Tương thích tốt";
      case "challenging":
        return "Cần cố gắng";
      default:
        return "Không xác định";
    }
  };

  const getNumberMeaning = (number: number) => {
    return numberMeanings.find((m) => m.number === number);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-6xl mx-auto p-6 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Kiểm Tra Tương Thích Số Học
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá mức độ tương thích giữa hai người dựa trên số chủ đạo của
              họ. Hiểu rõ hơn về mối quan hệ và cách cải thiện sự hòa hợp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Người thứ nhất */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-purple-600">
                  Người thứ nhất
                </CardTitle>
                <CardDescription>
                  Nhập thông tin để tính số chủ đạo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="person1Name">Họ và tên</Label>
                  <Input
                    id="person1Name"
                    placeholder="Ví dụ: Nguyễn Văn An"
                    value={person1.name}
                    onChange={(e) =>
                      setPerson1((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="person1BirthDate">Ngày sinh</Label>
                  <Input
                    id="person1BirthDate"
                    type="date"
                    value={person1.birthDate}
                    onChange={(e) =>
                      setPerson1((prev) => ({
                        ...prev,
                        birthDate: e.target.value,
                      }))
                    }
                  />
                </div>

                <Button
                  onClick={handleCalculatePerson1}
                  disabled={!person1.name || !person1.birthDate}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Tính số chủ đạo
                </Button>

                {person1.lifePathNumber > 0 && (
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {person1.lifePathNumber}
                    </div>
                    <div className="text-sm font-medium">Số Chủ Đạo</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {getNumberMeaning(person1.lifePathNumber)?.title}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Người thứ hai */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-pink-600">
                  Người thứ hai
                </CardTitle>
                <CardDescription>
                  Nhập thông tin để tính số chủ đạo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="person2Name">Họ và tên</Label>
                  <Input
                    id="person2Name"
                    placeholder="Ví dụ: Trần Thị Bình"
                    value={person2.name}
                    onChange={(e) =>
                      setPerson2((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="person2BirthDate">Ngày sinh</Label>
                  <Input
                    id="person2BirthDate"
                    type="date"
                    value={person2.birthDate}
                    onChange={(e) =>
                      setPerson2((prev) => ({
                        ...prev,
                        birthDate: e.target.value,
                      }))
                    }
                  />
                </div>

                <Button
                  onClick={handleCalculatePerson2}
                  disabled={!person2.name || !person2.birthDate}
                  className="w-full bg-pink-600 hover:bg-pink-700"
                >
                  Tính số chủ đạo
                </Button>

                {person2.lifePathNumber > 0 && (
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-2xl font-bold text-pink-600 mb-2">
                      {person2.lifePathNumber}
                    </div>
                    <div className="text-sm font-medium">Số Chủ Đạo</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {getNumberMeaning(person2.lifePathNumber)?.title}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Nút tính tương thích */}
          {person1.lifePathNumber > 0 && person2.lifePathNumber > 0 && (
            <div className="text-center">
              <Button
                onClick={handleCalculateCompatibility}
                disabled={isCalculating}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6"
              >
                {isCalculating
                  ? "Đang tính toán..."
                  : "🔮 Kiểm tra tương thích"}
              </Button>
            </div>
          )}

          {/* Kết quả tương thích */}
          {compatibility && (
            <div className="space-y-6">
              {/* Header với hiệu ứng động */}
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    🔮 Kết Quả Tương Thích
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Phân tích chi tiết về mối quan hệ giữa hai người
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Mức độ tương thích chính với thanh tiến trình */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {compatibility.detailedInfo?.title ||
                          `${compatibility.person1Number} & ${compatibility.person2Number}`}
                      </h2>

                      {/* Thanh tiến trình tương thích */}
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 ease-out ${
                            compatibility.level === "best"
                              ? "bg-gradient-to-r from-green-400 to-green-600"
                              : compatibility.level === "good"
                              ? "bg-gradient-to-r from-blue-400 to-blue-600"
                              : "bg-gradient-to-r from-orange-400 to-orange-600"
                          }`}
                          style={{
                            width: `${
                              compatibility.detailedInfo?.percentage || 70
                            }%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">0%</span>
                        <div className="text-center">
                          <div
                            className={`text-3xl font-bold ${
                              compatibility.level === "best"
                                ? "text-green-600"
                                : compatibility.level === "good"
                                ? "text-blue-600"
                                : "text-orange-600"
                            }`}
                          >
                            {compatibility.detailedInfo?.percentage || 70}%
                          </div>
                          <div
                            className={`text-lg font-semibold ${
                              compatibility.level === "best"
                                ? "text-green-600"
                                : compatibility.level === "good"
                                ? "text-blue-600"
                                : "text-orange-600"
                            }`}
                          >
                            {getCompatibilityText(compatibility.level)}
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">100%</span>
                      </div>
                    </div>

                    {/* Mô tả chi tiết */}
                    {compatibility.detailedInfo?.description && (
                      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        {compatibility.detailedInfo.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Thông tin chi tiết về hai người */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <CardContent className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-20 h-20 mx-auto bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {compatibility.person1Number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-800">
                          Người thứ nhất
                        </h3>
                        <p className="text-purple-600 font-medium">
                          {getNumberMeaning(compatibility.person1Number)?.title}
                        </p>
                        <p className="text-sm text-purple-500 mt-2">
                          {
                            getNumberMeaning(compatibility.person1Number)
                              ?.description
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                  <CardContent className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-20 h-20 mx-auto bg-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {compatibility.person2Number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-pink-800">
                          Người thứ hai
                        </h3>
                        <p className="text-pink-600 font-medium">
                          {getNumberMeaning(compatibility.person2Number)?.title}
                        </p>
                        <p className="text-sm text-pink-500 mt-2">
                          {
                            getNumberMeaning(compatibility.person2Number)
                              ?.description
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phân tích chi tiết */}
              {compatibility.detailedInfo && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Điểm mạnh */}
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center gap-2">
                        <span className="text-2xl">💪</span>
                        Điểm Mạnh
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {compatibility.detailedInfo.strengths.map(
                          (strength, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="text-green-600 mt-1">✓</span>
                              <span className="text-green-700 text-sm">
                                {strength}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Thách thức */}
                  <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-800 flex items-center gap-2">
                        <span className="text-2xl">⚠️</span>
                        Thách Thức
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {compatibility.detailedInfo.challenges.map(
                          (challenge, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="text-orange-600 mt-1">!</span>
                              <span className="text-orange-700 text-sm">
                                {challenge}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Lời khuyên */}
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800 flex items-center gap-2">
                        <span className="text-2xl">💡</span>
                        Lời Khuyên
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {compatibility.detailedInfo.advice.map(
                          (advice, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="text-blue-600 mt-1">💡</span>
                              <span className="text-blue-700 text-sm">
                                {advice}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Tương thích theo từng khía cạnh */}
              {compatibility.detailedInfo && (
                <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
                  <CardHeader>
                    <CardTitle className="text-center text-indigo-800 text-2xl">
                      🎯 Tương Thích Theo Khía Cạnh
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl mb-2">💕</div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Tình Yêu
                        </h4>
                        <p className="text-sm text-gray-600">
                          {compatibility.detailedInfo.loveCompatibility}
                        </p>
                      </div>

                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl mb-2">💼</div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Sự Nghiệp
                        </h4>
                        <p className="text-sm text-gray-600">
                          {compatibility.detailedInfo.careerCompatibility}
                        </p>
                      </div>

                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Tình Bạn
                        </h4>
                        <p className="text-sm text-gray-600">
                          {compatibility.detailedInfo.friendshipCompatibility}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Lưu ý quan trọng */}
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-yellow-800 flex items-center justify-center gap-2">
                      <span className="text-2xl">⚠️</span>
                      Lưu Ý Quan Trọng
                    </h3>
                    <div className="max-w-4xl mx-auto space-y-3 text-yellow-700">
                      <p>
                        • Tương thích số học chỉ là một phần, quan trọng nhất
                        vẫn là sự nỗ lực của cả hai
                      </p>
                      <p>• Hãy tôn trọng sự khác biệt và học hỏi từ nhau</p>
                      <p>
                        • Giao tiếp cởi mở và chân thành là chìa khóa của mọi
                        mối quan hệ
                      </p>
                      <p>
                        • Sử dụng hiểu biết về thần số học để hiểu rõ hơn về đối
                        phương
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Thông tin bổ sung */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="text-center text-blue-600">
                📚 Về tương thích số học
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Cách hoạt động:
                  </h4>
                  <p className="text-sm text-blue-600">
                    Tương thích số học dựa trên việc so sánh số chủ đạo của hai
                    người. Các con số có thể hòa hợp, bổ sung hoặc tạo ra thách
                    thức cho nhau.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Lưu ý quan trọng:
                  </h4>
                  <p className="text-sm text-blue-600">
                    Kết quả này chỉ mang tính chất tham khảo. Mối quan hệ thực
                    tế phụ thuộc vào nhiều yếu tố khác như giao tiếp, tình cảm
                    và sự nỗ lực của cả hai.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
