"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  calculateAllNumbers,
  analyzeName,
  NumerologyResult,
  NameAnalysis,
} from "@/lib/numerology";
import { numberMeanings, masterNumbers } from "@/data/numerology-data";
import {
  getBlogPostUrlForNumber,
  hasBlogPostForNumber,
} from "@/lib/blog-utils";
import NumerologyReport from "./NumerologyReport";
import Link from "next/link";

export default function NumerologyCalculator() {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [results, setResults] = useState<NumerologyResult | null>(null);
  const [nameAnalysis, setNameAnalysis] = useState<NameAnalysis | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [showReport, setShowReport] = useState(false);

  const resultsRef = useRef<HTMLDivElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (results && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [results]);

  useEffect(() => {
    if (selectedNumber && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedNumber]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fullName || !birthDate || isCalculating) return;
    handleCalculate();
  };

  const handleCalculate = () => {
    if (!fullName || !birthDate) return;

    setIsCalculating(true);

    try {
      const date = new Date(birthDate);
      const numerologyResults = calculateAllNumbers(date, fullName);
      const nameResults = analyzeName(fullName);

      setResults(numerologyResults);
      setNameAnalysis(nameResults);
    } catch (error) {
      console.error("Lỗi tính toán:", error);
    } finally {
      setIsCalculating(false);
    }
  };

  const getNumberMeaning = (number: number) => {
    const meaning = numberMeanings.find((m) => m.number === number);
    const masterMeaning = masterNumbers.find((m) => m.number === number);
    return masterMeaning || meaning;
  };

  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString("vi-VN", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });
  // };

  const handleNumberClick = (number: number) => {
    setSelectedNumber(selectedNumber === number ? null : number);
  };

  const getNumberColor = (number: number) => {
    if (masterNumbers.find((m) => m.number === number)) {
      return "from-purple-600 to-pink-600";
    }
    switch (number) {
      case 1:
        return "from-red-600 to-orange-600";
      case 2:
        return "from-blue-600 to-cyan-600";
      case 3:
        return "from-green-600 to-emerald-600";
      case 4:
        return "from-yellow-600 to-orange-600";
      case 5:
        return "from-purple-600 to-indigo-600";
      case 6:
        return "from-pink-600 to-rose-600";
      case 7:
        return "from-indigo-600 to-blue-600";
      case 8:
        return "from-gray-600 to-slate-600";
      case 9:
        return "from-amber-600 to-yellow-600";
      default:
        return "from-gray-600 to-slate-600";
    }
  };

  const handleGenerateReport = () => {
    setShowReport(true);
  };

  const handleBackToCalculator = () => {
    setShowReport(false);
  };

  // Nếu đang hiển thị báo cáo, render component báo cáo
  if (showReport && results && nameAnalysis) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <Button
            onClick={handleBackToCalculator}
            variant="outline"
            className="mb-6"
          >
            ← Quay lại máy tính
          </Button>
        </div>
        <NumerologyReport
          fullName={fullName}
          birthDate={birthDate}
          results={results}
          nameAnalysis={nameAnalysis}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Máy Tính Thần Số Học
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Khám phá bí ẩn của các con số trong cuộc sống bạn. Nhập tên và ngày
          sinh để nhận phân tích chi tiết về con số chủ đạo, số linh hồn và
          nhiều hơn nữa.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin cá nhân</CardTitle>
          <CardDescription>
            Nhập họ tên đầy đủ và ngày sinh để tính toán
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Họ và tên đầy đủ</Label>
              <Input
                id="fullName"
                placeholder="Ví dụ: Nguyễn Văn An"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Ngày sinh</Label>
              <Input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              disabled={!fullName || !birthDate || isCalculating}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {isCalculating ? "Đang tính toán..." : "Tính toán thần số học"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {results && (
        <div ref={resultsRef} className="space-y-6">
          {/* Kết quả chính */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Kết quả thần số học
                {results.isMasterNumber && (
                  <Badge variant="destructive" className="animate-pulse">
                    Master Number
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>
                Phân tích chi tiết các con số quan trọng trong cuộc sống bạn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  className="text-center p-4 border rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => handleNumberClick(results.lifePathNumber)}
                >
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${getNumberColor(
                      results.lifePathNumber
                    )} bg-clip-text text-transparent`}
                  >
                    {results.lifePathNumber}
                  </div>
                  <div className="text-sm font-medium">Số Chủ Đạo</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {getNumberMeaning(results.lifePathNumber)?.title}
                  </div>
                  <div className="text-xs text-blue-500 mt-2">
                    👆 Click để xem chi tiết
                  </div>
                </div>

                <div
                  className="text-center p-4 border rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => handleNumberClick(results.soulNumber)}
                >
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${getNumberColor(
                      results.soulNumber
                    )} bg-clip-text text-transparent`}
                  >
                    {results.soulNumber}
                  </div>
                  <div className="text-sm font-medium">Số Linh Hồn</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {getNumberMeaning(results.soulNumber)?.title}
                  </div>
                  <div className="text-xs text-blue-500 mt-2">
                    👆 Click để xem chi tiết
                  </div>
                </div>

                <div
                  className="text-center p-4 border rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => handleNumberClick(results.expressionNumber)}
                >
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${getNumberColor(
                      results.expressionNumber
                    )} bg-clip-text text-transparent`}
                  >
                    {results.expressionNumber}
                  </div>
                  <div className="text-sm font-medium">Số Biểu Đạt</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {getNumberMeaning(results.expressionNumber)?.title}
                  </div>
                  <div className="text-xs text-blue-500 mt-2">
                    👆 Click để xem chi tiết
                  </div>
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {results.birthdayNumber}
                  </div>
                  <div className="text-sm font-medium">Số Sinh Nhật</div>
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    {results.attitudeNumber}
                  </div>
                  <div className="text-sm font-medium">Số Thái Độ</div>
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    {results.personalYearNumber}
                  </div>
                  <div className="text-sm font-medium">Số Năm Cá Nhân</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nút tạo báo cáo tổng hợp */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="text-center py-8">
              <div className="space-y-4">
                <div className="text-4xl">📋</div>
                <h3 className="text-xl font-semibold text-green-700">
                  Muốn có cái nhìn tổng quát hơn?
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Tạo báo cáo chi tiết tổng hợp tất cả các con số và phân tích
                  dưới dạng một bài blog dễ đọc và dễ hiểu.
                </p>
                <Button
                  onClick={handleGenerateReport}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3"
                >
                  📊 Tạo Báo Cáo Tổng Hợp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Thông tin chi tiết số được chọn */}
          {selectedNumber && getNumberMeaning(selectedNumber) && (
            <div ref={detailRef}>
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold bg-gradient-to-r ${getNumberColor(
                        selectedNumber
                      )} text-white`}
                    >
                      {selectedNumber}
                    </div>
                    {masterNumbers.find((m) => m.number === selectedNumber) && (
                      <Badge
                        variant="destructive"
                        className="text-sm px-3 py-1"
                      >
                        Master Number
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl text-blue-600">
                    {getNumberMeaning(selectedNumber)?.title}
                  </CardTitle>
                  <CardDescription className="text-lg max-w-3xl mx-auto">
                    {getNumberMeaning(selectedNumber)?.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Từ khóa chính */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-blue-600">
                      Từ khóa chính
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {getNumberMeaning(selectedNumber)?.keywords.map(
                        (keyword, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="px-3 py-1 text-sm"
                          >
                            {keyword}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Điểm mạnh và thách thức */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-green-600 text-center">
                        Điểm mạnh
                      </h3>
                      <ul className="space-y-2">
                        {getNumberMeaning(selectedNumber)?.strengths.map(
                          (strength, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                            >
                              <span className="text-green-500 text-lg mt-0.5">
                                ✓
                              </span>
                              <span className="text-sm">{strength}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-orange-600 text-center">
                        Thách thức
                      </h3>
                      <ul className="space-y-2">
                        {getNumberMeaning(selectedNumber)?.challenges.map(
                          (challenge, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                            >
                              <span className="text-orange-500 text-lg mt-0.5">
                                ⚠
                              </span>
                              <span className="text-sm">{challenge}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  {/* Nghề nghiệp và tình yêu */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-blue-600 text-center">
                        Nghề nghiệp phù hợp
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {getNumberMeaning(selectedNumber)?.career.map(
                          (career, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="px-3 py-1"
                            >
                              {career}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-pink-600 text-center">
                        Tình yêu
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {getNumberMeaning(selectedNumber)?.love.map(
                          (love, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="px-3 py-1"
                            >
                              {love}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Thông tin bổ sung cho Master Numbers */}
                  {masterNumbers.find((m) => m.number === selectedNumber) && (
                    <>
                      <Separator />
                      <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-purple-600 mb-3">
                          Đặc biệt về Master Number {selectedNumber}
                        </h3>
                        <p className="text-muted-foreground">
                          Master Numbers là những con số đặc biệt trong thần số
                          học, mang năng lượng mạnh mẽ và ý nghĩa sâu sắc. Chúng
                          thường xuất hiện ở những người có sứ mệnh đặc biệt
                          hoặc có tiềm năng phát triển tâm linh cao.
                        </p>
                      </div>
                    </>
                  )}

                  {/* Nút hành động */}
                  <div className="text-center space-y-3">
                    {/* Link đến bài viết blog nếu có */}
                    {selectedNumber && hasBlogPostForNumber(selectedNumber) && (
                      <div>
                        <Link
                          href={getBlogPostUrlForNumber(selectedNumber)!}
                          className="inline-block"
                        >
                          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2">
                            📚 Đọc bài viết chi tiết về số {selectedNumber}
                          </Button>
                        </Link>
                        <p className="text-xs text-muted-foreground mt-2">
                          Khám phá thêm nhiều thông tin hữu ích về con số này
                        </p>
                      </div>
                    )}

                    <Button
                      variant="outline"
                      onClick={() => setSelectedNumber(null)}
                      className="px-6 py-2"
                    >
                      ✕ Đóng
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Phân tích chi tiết số chủ đạo */}
          {getNumberMeaning(results.lifePathNumber) && (
            <Card>
              <CardHeader>
                <CardTitle>
                  Phân tích chi tiết - Số {results.lifePathNumber}
                </CardTitle>
                <CardDescription>
                  {getNumberMeaning(results.lifePathNumber)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Từ khóa chính:</h4>
                  <div className="flex flex-wrap gap-2">
                    {getNumberMeaning(results.lifePathNumber)?.keywords.map(
                      (keyword, index) => (
                        <Badge key={index} variant="secondary">
                          {keyword}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">
                      Điểm mạnh:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {getNumberMeaning(results.lifePathNumber)?.strengths.map(
                        (strength, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            {strength}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">
                      Thách thức:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {getNumberMeaning(results.lifePathNumber)?.challenges.map(
                        (challenge, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="text-orange-500">⚠</span>
                            {challenge}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">
                      Nghề nghiệp phù hợp:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {getNumberMeaning(results.lifePathNumber)?.career.map(
                        (career, index) => (
                          <Badge key={index} variant="outline">
                            {career}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-pink-600">
                      Tình yêu:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {getNumberMeaning(results.lifePathNumber)?.love.map(
                        (love, index) => (
                          <Badge key={index} variant="outline">
                            {love}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Phân tích tên */}
          {nameAnalysis && (
            <Card>
              <CardHeader>
                <CardTitle>Phân tích tên: {nameAnalysis.name}</CardTitle>
                <CardDescription>
                  Khám phá ý nghĩa ẩn trong tên của bạn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {nameAnalysis.soulNumber}
                      </div>
                      <div className="text-sm font-medium">Số Linh Hồn</div>
                    </div>

                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-pink-600 mb-2">
                        {nameAnalysis.expressionNumber}
                      </div>
                      <div className="text-sm font-medium">Số Biểu Đạt</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {nameAnalysis.personalityNumber}
                      </div>
                      <div className="text-sm font-medium">Số Nhân Cách</div>
                    </div>

                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {nameAnalysis.hiddenPassionNumber}
                      </div>
                      <div className="text-sm font-medium">Số Đam Mê Ẩn</div>
                    </div>
                  </div>
                </div>

                {nameAnalysis.karmicLessons.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2 text-orange-600">
                      Bài học Karmic:
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Những con số thiếu trong tên của bạn, đại diện cho những
                      bài học cần học trong cuộc sống:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {nameAnalysis.karmicLessons.map((number, index) => (
                        <Badge key={index} variant="destructive">
                          {number}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
