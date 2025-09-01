"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import NumerologyReport from "@/components/numerology/NumerologyReport";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ReportContent() {
  const searchParams = useSearchParams();

  // Lấy dữ liệu từ URL parameters
  const fullName = searchParams.get("name") || "";
  const birthDate = searchParams.get("birthDate") || "";
  const lifePathNumber = parseInt(searchParams.get("lifePathNumber") || "0");
  const soulNumber = parseInt(searchParams.get("soulNumber") || "0");
  const expressionNumber = parseInt(
    searchParams.get("expressionNumber") || "0"
  );
  const birthdayNumber = parseInt(searchParams.get("birthdayNumber") || "0");
  const attitudeNumber = parseInt(searchParams.get("attitudeNumber") || "0");
  const personalYearNumber = parseInt(
    searchParams.get("personalYearNumber") || "0"
  );
  const isMasterNumber = searchParams.get("isMasterNumber") === "true";

  const personalityNumber = parseInt(
    searchParams.get("personalityNumber") || "0"
  );
  const hiddenPassionNumber = parseInt(
    searchParams.get("hiddenPassionNumber") || "0"
  );
  const karmicLessons =
    searchParams.get("karmicLessons")?.split(",").map(Number) || [];

  // Kiểm tra xem có đầy đủ dữ liệu không
  if (!fullName || !birthDate || lifePathNumber === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardContent className="text-center py-12">
            <div className="space-y-4">
              <div className="text-6xl">❌</div>
              <h2 className="text-2xl font-bold text-gray-700">
                Không tìm thấy dữ liệu báo cáo
              </h2>
              <p className="text-gray-600">
                Vui lòng quay lại tra cứu thần số học để tạo báo cáo mới.
              </p>
              <Link href="/calculator">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  🧮 Quay lại tra cứu
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Tạo objects cho component NumerologyReport
  const results = {
    lifePathNumber,
    soulNumber,
    expressionNumber,
    birthdayNumber,
    attitudeNumber,
    personalYearNumber,
    isMasterNumber,
  };

  const nameAnalysis = {
    name: fullName,
    soulNumber,
    expressionNumber,
    personalityNumber,
    hiddenPassionNumber,
    karmicLessons,
  };

  return (
    <NumerologyReport
      fullName={fullName}
      birthDate={birthDate}
      results={results}
      nameAnalysis={nameAnalysis}
    />
  );
}

export default function ReportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <Suspense
          fallback={
            <div className="max-w-4xl mx-auto p-6">
              <Card>
                <CardContent className="text-center py-12">
                  <div className="animate-spin text-4xl mb-4">⏳</div>
                  <p className="text-gray-600">Đang tải báo cáo...</p>
                </CardContent>
              </Card>
            </div>
          }
        >
          <ReportContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
