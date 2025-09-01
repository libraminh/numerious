"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { NumerologyResult, NameAnalysis } from "@/lib/numerology";
import { numberMeanings, masterNumbers } from "@/data/numerology-data";
import {
  getBlogPostUrlForNumber,
  hasBlogPostForNumber,
} from "@/lib/blog-utils";
import { useState } from "react";
import Link from "next/link";

interface NumerologyReportProps {
  fullName: string;
  birthDate: string;
  results: NumerologyResult;
  nameAnalysis: NameAnalysis;
}

export default function NumerologyReport({
  fullName,
  birthDate,
  results,
  nameAnalysis,
}: NumerologyReportProps) {
  const getNumberMeaning = (number: number) => {
    const meaning = numberMeanings.find((m) => m.number === number);
    const masterMeaning = masterNumbers.find((m) => m.number === number);
    return masterMeaning || meaning;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getPersonalityInsights = () => {
    const lifePathMeaning = getNumberMeaning(results.lifePathNumber);
    const soulMeaning = getNumberMeaning(results.soulNumber);
    const expressionMeaning = getNumberMeaning(results.expressionNumber);

    return {
      lifePathMeaning,
      soulMeaning,
      expressionMeaning,
    };
  };

  const { lifePathMeaning, soulMeaning, expressionMeaning } =
    getPersonalityInsights();

  const [copied, setCopied] = useState(false);

  const generateShareableLink = () => {
    const params = new URLSearchParams({
      name: fullName,
      birthDate: birthDate,
      lifePathNumber: results.lifePathNumber.toString(),
      soulNumber: results.soulNumber.toString(),
      expressionNumber: results.expressionNumber.toString(),
      birthdayNumber: results.birthdayNumber.toString(),
      attitudeNumber: results.attitudeNumber.toString(),
      personalYearNumber: results.personalYearNumber.toString(),
      isMasterNumber: results.isMasterNumber.toString(),
      personalityNumber: nameAnalysis.personalityNumber.toString(),
      hiddenPassionNumber: nameAnalysis.hiddenPassionNumber.toString(),
      karmicLessons: nameAnalysis.karmicLessons.join(","),
    });

    return `${window.location.origin}/report?${params.toString()}`;
  };

  const handleShare = async () => {
    const shareUrl = generateShareableLink();

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Không thể copy link:", err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header của báo cáo */}
      <Card className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 border-0 shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="space-y-4">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-4xl text-white">✨</span>
            </div>
            <div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Báo Cáo Thần Số Học
              </CardTitle>
              <CardDescription className="text-xl font-medium text-gray-700">
                Khám phá bí ẩn số học của {fullName}
              </CardDescription>
              <p className="text-sm text-gray-500 mt-2">
                Ngày sinh: {formatDate(birthDate)} | Ngày tạo báo cáo:{" "}
                {formatDate(new Date().toISOString().split("T")[0])}
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Nút chia sẻ và in */}
      <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
        <CardContent className="py-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleShare}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3"
            >
              {copied ? (
                <>
                  <span className="text-green-500">✓</span>
                  Đã copy link!
                </>
              ) : (
                <>
                  <span>🔗</span>
                  Chia sẻ báo cáo
                </>
              )}
            </Button>

            <Button
              onClick={handlePrint}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3"
            >
              <span>🖨️</span>
              In báo cáo
            </Button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Chia sẻ báo cáo này với bạn bè hoặc in ra để lưu trữ
          </p>
        </CardContent>
      </Card>

      {/* Tóm tắt con số chính */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            📊 Tóm Tắt Các Con Số Chính
          </CardTitle>
          <CardDescription>
            Dưới đây là các con số quan trọng nhất trong thần số học của bạn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-3">
                {results.lifePathNumber}
              </div>
              <h3 className="font-semibold text-purple-700 mb-2">Số Chủ Đạo</h3>
              <p className="text-sm text-gray-600">
                Định hướng cuộc sống và sứ mệnh
              </p>
              {results.isMasterNumber && (
                <Badge variant="destructive" className="mt-2">
                  Master Number
                </Badge>
              )}
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-3">
                {results.soulNumber}
              </div>
              <h3 className="font-semibold text-blue-700 mb-2">Số Linh Hồn</h3>
              <p className="text-sm text-gray-600">
                Mong muốn sâu thẳm trong tâm hồn
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-3">
                {results.expressionNumber}
              </div>
              <h3 className="font-semibold text-green-700 mb-2">Số Biểu Đạt</h3>
              <p className="text-sm text-gray-600">
                Tài năng và khả năng bẩm sinh
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phân tích tính cách tổng quan */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            🎭 Phân Tích Tính Cách Tổng Quan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">
              Chào <strong>{fullName}</strong>! Dựa trên ngày sinh{" "}
              <strong>{formatDate(birthDate)}</strong> và tên của bạn, chúng tôi
              đã phân tích các con số trong thần số học để tạo ra bức tranh tổng
              thể về tính cách và tiềm năng của bạn.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                🌟 Con Người Của Bạn Qua Góc Nhìn Thần Số Học
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Với <strong>số chủ đạo {results.lifePathNumber}</strong>, bạn là
                một người {lifePathMeaning?.description?.toLowerCase()}. Số linh
                hồn {results.soulNumber} cho thấy trong tâm hồn, bạn khao khát{" "}
                {soulMeaning?.keywords.join(", ").toLowerCase()}. Còn số biểu
                đạt {results.expressionNumber} tiết lộ rằng bạn có khả năng tự
                nhiên về {expressionMeaning?.keywords.join(", ").toLowerCase()}.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Số chủ đạo - Phân tích chi tiết */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <span className="text-3xl">{results.lifePathNumber}</span>
            Số Chủ Đạo - Hành Trình Cuộc Sống
          </CardTitle>
          <CardDescription className="text-lg">
            {lifePathMeaning?.title}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              {lifePathMeaning?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600">
                💪 Điểm Mạnh Của Bạn
              </h3>
              <ul className="space-y-3">
                {lifePathMeaning?.strengths.map((strength, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                  >
                    <span className="text-green-500 text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-600">
                ⚡ Thách Thức Cần Vượt Qua
              </h3>
              <ul className="space-y-3">
                {lifePathMeaning?.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg"
                  >
                    <span className="text-orange-500 text-lg mt-0.5">⚠</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link đến bài viết blog chi tiết */}
          {hasBlogPostForNumber(results.lifePathNumber) && (
            <div className="text-center pt-4 border-t">
              <Link href={getBlogPostUrlForNumber(results.lifePathNumber)!}>
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-blue-200 text-blue-700"
                >
                  📖 Đọc bài viết chi tiết về Số Chủ Đạo{" "}
                  {results.lifePathNumber}
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Số linh hồn và số biểu đạt */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Số linh hồn */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="text-2xl">{results.soulNumber}</span>
              Số Linh Hồn - Khao Khát Tâm Hồn
            </CardTitle>
            <CardDescription>{soulMeaning?.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Số linh hồn tiết lộ những mong muốn sâu kín nhất trong tâm hồn
              bạn.
              {soulMeaning?.description}
            </p>

            <div>
              <h4 className="font-semibold mb-2 text-pink-600">
                💖 Trong Tình Yêu
              </h4>
              <div className="flex flex-wrap gap-2">
                {soulMeaning?.love.map((love, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-pink-600 border-pink-300"
                  >
                    {love}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Link đến bài viết blog chi tiết */}
            {hasBlogPostForNumber(results.soulNumber) && (
              <div className="text-center pt-4 border-t">
                <Link href={getBlogPostUrlForNumber(results.soulNumber)!}>
                  <Button
                    variant="outline"
                    className="bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 border-pink-200 text-pink-700"
                  >
                    📖 Đọc bài viết về Số Linh Hồn {results.soulNumber}
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Số biểu đạt */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="text-2xl">{results.expressionNumber}</span>
              Số Biểu Đạt - Tài Năng Bẩm Sinh
            </CardTitle>
            <CardDescription>{expressionMeaning?.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Số biểu đạt cho thấy những tài năng và khả năng tự nhiên mà bạn
              mang trong mình.
              {expressionMeaning?.description}
            </p>

            <div>
              <h4 className="font-semibold mb-2 text-blue-600">
                💼 Nghề Nghiệp Phù Hợp
              </h4>
              <div className="flex flex-wrap gap-2">
                {expressionMeaning?.career.map((career, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-blue-600 border-blue-300"
                  >
                    {career}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Link đến bài viết blog chi tiết */}
            {hasBlogPostForNumber(results.expressionNumber) && (
              <div className="text-center pt-4 border-t">
                <Link href={getBlogPostUrlForNumber(results.expressionNumber)!}>
                  <Button
                    variant="outline"
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-blue-200 text-blue-700"
                  >
                    📖 Đọc bài viết về Số Biểu Đạt {results.expressionNumber}
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Phân tích tên */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            🏷️ Phân Tích Tên: &quot;{nameAnalysis.name}&quot;
          </CardTitle>
          <CardDescription>
            Khám phá những bí ẩn ẩn giấu trong tên của bạn
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                {nameAnalysis.soulNumber}
              </div>
              <div className="text-sm font-medium">Số Linh Hồn</div>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {nameAnalysis.expressionNumber}
              </div>
              <div className="text-sm font-medium">Số Biểu Đạt</div>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {nameAnalysis.personalityNumber}
              </div>
              <div className="text-sm font-medium">Số Nhân Cách</div>
            </div>

            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">
                {nameAnalysis.hiddenPassionNumber}
              </div>
              <div className="text-sm font-medium">Số Đam Mê Ẩn</div>
            </div>
          </div>

          {nameAnalysis.karmicLessons.length > 0 && (
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-700 mb-3">
                🎯 Bài Học Karmic - Những Con Số Thiếu
              </h3>
              <p className="text-gray-700 mb-3">
                Những con số sau đây không xuất hiện trong tên của bạn, đại diện
                cho những bài học mà cuộc sống muốn bạn học hỏi:
              </p>
              <div className="flex flex-wrap gap-2">
                {nameAnalysis.karmicLessons.map((number, index) => (
                  <Badge key={index} variant="destructive" className="text-sm">
                    Số {number}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Các con số phụ */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            🔢 Các Con Số Phụ Trong Cuộc Sống
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-gray-600 mb-3">
                {results.birthdayNumber}
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Số Sinh Nhật</h3>
              <p className="text-sm text-gray-600">
                Tài năng đặc biệt từ ngày sinh
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-3">
                {results.attitudeNumber}
              </div>
              <h3 className="font-semibold text-orange-700 mb-2">Số Thái Độ</h3>
              <p className="text-sm text-gray-600">
                Cách bạn tiếp cận cuộc sống
              </p>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-3">
                {results.personalYearNumber}
              </div>
              <h3 className="font-semibold text-indigo-700 mb-2">
                Số Năm Cá Nhân
              </h3>
              <p className="text-sm text-gray-600">
                Chủ đề của năm {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lời khuyên tổng hợp */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700">
            🌟 Lời Khuyên Tổng Hợp
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>{fullName}</strong>, báo cáo thần số học này là một bức
              tranh tổng thể về con người bạn qua góc nhìn của các con số. Hãy
              nhớ rằng:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-lg">🎯</span>
                <span>
                  Sử dụng những điểm mạnh từ số chủ đạo {results.lifePathNumber}{" "}
                  để phát triển bản thân
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-lg">💖</span>
                <span>
                  Lắng nghe tiếng gọi của số linh hồn {results.soulNumber} để
                  tìm thấy hạnh phúc đích thực
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 text-lg">✨</span>
                <span>
                  Phát huy tài năng từ số biểu đạt {results.expressionNumber}{" "}
                  trong công việc và sáng tạo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">⚡</span>
                <span>
                  Chấp nhận và vượt qua những thách thức để trưởng thành hơn
                </span>
              </li>
            </ul>

            <div className="bg-white p-6 rounded-lg mt-6 border-l-4 border-green-500">
              <p className="text-lg font-medium text-green-700 mb-2">
                Nhớ rằng thần số học chỉ là một công cụ hỗ trợ!
              </p>
              <p className="text-gray-700">
                Cuộc sống của bạn được định hình bởi những lựa chọn, nỗ lực và
                cách bạn đối mặt với thử thách. Hãy sử dụng những hiểu biết này
                như một la bàn để định hướng, không phải như một quy luật cứng
                nhắc.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0">
        <CardContent className="text-center py-8">
          <p className="text-gray-600 mb-4">
            Báo cáo này được tạo bởi Numerious - Website thần số học Việt Nam
          </p>
          <p className="text-sm text-gray-500">
            Ngày tạo: {formatDate(new Date().toISOString().split("T")[0])} |
            Phiên bản: 1.0 | © 2024 Numerious.vn
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
