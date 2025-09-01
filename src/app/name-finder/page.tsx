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

import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { calculateLifePathNumber, findCompatibleNames } from "@/lib/numerology";
import { numberMeanings } from "@/data/numerology-data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NameFinderPage() {
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [lifePathNumber, setLifePathNumber] = useState(0);
  const [suggestedNames, setSuggestedNames] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculateLifePath = () => {
    if (!birthDate) return;

    try {
      const date = new Date(birthDate);
      const number = calculateLifePathNumber(date);
      setLifePathNumber(number);
    } catch (error) {
      console.error("Lỗi tính toán:", error);
    }
  };

  const handleFindNames = () => {
    if (lifePathNumber === 0) return;

    setIsCalculating(true);

    try {
      const names = findCompatibleNames(lifePathNumber, gender);
      setSuggestedNames(names);
    } catch (error) {
      console.error("Lỗi tìm tên:", error);
    } finally {
      setIsCalculating(false);
    }
  };

  const getNumberMeaning = (number: number) => {
    return numberMeanings.find((m) => m.number === number);
  };

  const getGenderText = (gender: "male" | "female") => {
    return gender === "male" ? "Nam" : "Nữ";
  };

  const getGenderEmoji = (gender: "male" | "female") => {
    return gender === "male" ? "👨" : "👩";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-4xl mx-auto p-6 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tìm Tên Phù Hợp
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá những tên phù hợp với số chủ đạo của bạn. Tên phù hợp sẽ
              giúp tăng cường năng lượng tích cực và hỗ trợ bạn trong cuộc sống.
            </p>
          </div>

          {/* Form nhập thông tin */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cơ bản</CardTitle>
              <CardDescription>
                Nhập ngày sinh và chọn giới tính để tìm tên phù hợp
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Ngày sinh</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Giới tính</Label>
                  <Select
                    value={gender}
                    onValueChange={(value: "male" | "female") =>
                      setGender(value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">👨 Nam</SelectItem>
                      <SelectItem value="female">👩 Nữ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleCalculateLifePath}
                disabled={!birthDate}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                🧮 Tính số chủ đạo
              </Button>
            </CardContent>
          </Card>

          {/* Hiển thị số chủ đạo */}
          {lifePathNumber > 0 && (
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Số chủ đạo của bạn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                    {lifePathNumber}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600">
                      {getNumberMeaning(lifePathNumber)?.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {getNumberMeaning(lifePathNumber)?.description}
                    </p>
                  </div>

                  <Button
                    onClick={handleFindNames}
                    disabled={isCalculating}
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    {isCalculating ? "Đang tìm kiếm..." : "✨ Tìm tên phù hợp"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Kết quả tìm tên */}
          {suggestedNames.length > 0 && (
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-600">
                  Tên phù hợp cho {getGenderText(gender)} - Số {lifePathNumber}
                </CardTitle>
                <CardDescription>
                  Những tên này sẽ tăng cường năng lượng tích cực của số chủ đạo{" "}
                  {lifePathNumber}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Danh sách tên */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {suggestedNames.map((name, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-white rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors"
                      >
                        <div className="text-2xl mb-2">
                          {getGenderEmoji(gender)}
                        </div>
                        <div className="text-lg font-semibold text-green-700">
                          {name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Tên phù hợp
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Giải thích */}
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-center text-green-600">
                      💡 Tại sao những tên này phù hợp?
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong>Số chủ đạo {lifePathNumber}</strong> đại diện
                        cho{" "}
                        {getNumberMeaning(lifePathNumber)
                          ?.keywords.join(", ")
                          .toLowerCase()}
                        . Những tên được gợi ý sẽ:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li>• Tăng cường năng lượng tích cực của số chủ đạo</li>
                        <li>• Hỗ trợ phát triển tính cách và tài năng</li>
                        <li>• Tạo sự cân bằng và hài hòa trong cuộc sống</li>
                        <li>• Giúp bạn dễ dàng đạt được mục tiêu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Thông tin bổ sung */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="text-center text-blue-600">
                📚 Về tên và số chủ đạo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Tên ảnh hưởng như thế nào?
                  </h4>
                  <p className="text-sm text-blue-600">
                    Tên của bạn có ảnh hưởng đến năng lượng và tính cách. Tên
                    phù hợp với số chủ đạo sẽ tăng cường những phẩm chất tích
                    cực và giúp bạn phát triển tốt hơn.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Cách chọn tên phù hợp:
                  </h4>
                  <p className="text-sm text-blue-600">
                    Tên phù hợp thường có số linh hồn hoặc số biểu đạt tương
                    thích với số chủ đạo. Điều này tạo ra sự hài hòa và cân bằng
                    trong cuộc sống của bạn.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lưu ý */}
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-center text-orange-600">
                ⚠️ Lưu ý quan trọng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-orange-700">
                <p>
                  • Kết quả này chỉ mang tính chất tham khảo, không nên thay đổi
                  tên một cách vội vàng
                </p>
                <p>
                  • Tên hiện tại của bạn vẫn có thể phù hợp nếu bạn cảm thấy hài
                  lòng với nó
                </p>
                <p>
                  • Việc thay đổi tên nên được cân nhắc kỹ lưỡng và có thể tham
                  khảo ý kiến chuyên gia
                </p>
                <p>
                  • Quan trọng nhất vẫn là sự nỗ lực và phát triển bản thân của
                  bạn
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
