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

      setCompatibility({
        level: compatibilityLevel,
        person1Number: person1.lifePathNumber,
        person2Number: person2.lifePathNumber,
        matrixInfo,
      });
    } catch (error) {
      console.error("Lỗi tính toán:", error);
    } finally {
      setIsCalculating(false);
    }
  };

  const getCompatibilityColor = (level: string) => {
    switch (level) {
      case "best":
        return "text-green-600 bg-green-100";
      case "good":
        return "text-blue-600 bg-blue-100";
      case "challenging":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
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
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Kết quả tương thích</CardTitle>
                <CardDescription>
                  Phân tích chi tiết về mối quan hệ giữa hai người
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mức độ tương thích chính */}
                <div className="text-center">
                  <div
                    className={`inline-block px-6 py-3 rounded-full text-lg font-semibold ${getCompatibilityColor(
                      compatibility.level
                    )}`}
                  >
                    {getCompatibilityText(compatibility.level)}
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Mức độ tương thích:{" "}
                    {compatibility.level === "best"
                      ? "90-100%"
                      : compatibility.level === "good"
                      ? "70-89%"
                      : "50-69%"}
                  </p>
                </div>

                <div className="border-t my-4" />

                {/* Thông tin chi tiết */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {compatibility.person1Number}
                    </div>
                    <div className="text-sm font-medium">Số chủ đạo</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {getNumberMeaning(compatibility.person1Number)?.title}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      {compatibility.person2Number}
                    </div>
                    <div className="text-sm font-medium">Số chủ đạo</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {getNumberMeaning(compatibility.person2Number)?.title}
                    </div>
                  </div>
                </div>

                {/* Giải thích tương thích */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">
                    Giải thích tương thích
                  </h3>

                  {compatibility.level === "best" && (
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-green-700">
                        🎉 Hai bạn có sự tương thích rất cao! Mối quan hệ này có
                        tiềm năng phát triển mạnh mẽ và bền vững. Hãy tận dụng
                        sự hòa hợp này để xây dựng tương lai tốt đẹp.
                      </p>
                    </div>
                  )}

                  {compatibility.level === "good" && (
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-blue-700">
                        👍 Hai bạn có sự tương thích tốt. Mối quan hệ có thể
                        phát triển tích cực với sự thấu hiểu và nhường nhịn lẫn
                        nhau. Hãy kiên nhẫn và học hỏi từ nhau.
                      </p>
                    </div>
                  )}

                  {compatibility.level === "challenging" && (
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <p className="text-orange-700">
                        ⚠️ Hai bạn có thể gặp một số thách thức trong mối quan
                        hệ. Tuy nhiên, những thách thức này có thể trở thành cơ
                        hội để cả hai cùng trưởng thành. Hãy giao tiếp cởi mở và
                        tìm cách thỏa hiệp.
                      </p>
                    </div>
                  )}
                </div>

                {/* Lời khuyên */}
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-center">
                    💡 Lời khuyên
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Tương thích số học chỉ là một phần, quan trọng nhất vẫn
                      là sự nỗ lực của cả hai
                    </li>
                    <li>• Hãy tôn trọng sự khác biệt và học hỏi từ nhau</li>
                    <li>
                      • Giao tiếp cởi mở và chân thành là chìa khóa của mọi mối
                      quan hệ
                    </li>
                    <li>
                      • Sử dụng hiểu biết về thần số học để hiểu rõ hơn về đối
                      phương
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
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
