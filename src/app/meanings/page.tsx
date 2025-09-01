"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { numberMeanings, masterNumbers } from "@/data/numerology-data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MeaningsPage() {
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  const allNumbers = [...numberMeanings, ...masterNumbers];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-6xl mx-auto p-6 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ý Nghĩa Các Con Số
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá ý nghĩa sâu sắc của từng con số trong thần số học. Từ số
              1 đến số 9 và các Master Numbers đặc biệt.
            </p>
          </div>

          <Tabs
            value={selectedNumber.toString()}
            onValueChange={(value) => setSelectedNumber(parseInt(value))}
          >
            <TabsList className="grid w-full grid-cols-12 mb-8">
              {numberMeanings.map((number) => (
                <TabsTrigger
                  key={number.number}
                  value={number.number.toString()}
                  className="text-sm"
                >
                  {number.number}
                </TabsTrigger>
              ))}
              {masterNumbers.map((number) => (
                <TabsTrigger
                  key={number.number}
                  value={number.number.toString()}
                  className="text-sm bg-gradient-to-r from-purple-100 to-pink-100"
                >
                  {number.number}
                </TabsTrigger>
              ))}
            </TabsList>

            {allNumbers.map((number) => (
              <TabsContent key={number.number} value={number.number.toString()}>
                <Card>
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold ${
                          masterNumbers.find((m) => m.number === number.number)
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                            : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                        }`}
                      >
                        {number.number}
                      </div>
                      {masterNumbers.find(
                        (m) => m.number === number.number
                      ) && (
                        <Badge
                          variant="destructive"
                          className="text-sm px-3 py-1"
                        >
                          Master Number
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-3xl">{number.title}</CardTitle>
                    <CardDescription className="text-lg max-w-3xl mx-auto">
                      {number.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Từ khóa chính */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-center">
                        Từ khóa chính
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {number.keywords.map((keyword, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="px-3 py-1 text-sm"
                          >
                            {keyword}
                          </Badge>
                        ))}
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
                          {number.strengths.map((strength, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                            >
                              <span className="text-green-500 text-lg mt-0.5">
                                ✓
                              </span>
                              <span className="text-sm">{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-orange-600 text-center">
                          Thách thức
                        </h3>
                        <ul className="space-y-2">
                          {number.challenges.map((challenge, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                            >
                              <span className="text-orange-500 text-lg mt-0.5">
                                ⚠
                              </span>
                              <span className="text-sm">{challenge}</span>
                            </li>
                          ))}
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
                          {number.career.map((career, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="px-3 py-1"
                            >
                              {career}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-pink-600 text-center">
                          Tình yêu
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {number.love.map((love, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="px-3 py-1"
                            >
                              {love}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Thông tin bổ sung cho Master Numbers */}
                    {masterNumbers.find((m) => m.number === number.number) && (
                      <>
                        <Separator />
                        <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                          <h3 className="text-xl font-semibold text-purple-600 mb-3">
                            Đặc biệt về Master Number {number.number}
                          </h3>
                          <p className="text-muted-foreground">
                            Master Numbers là những con số đặc biệt trong thần
                            số học, mang năng lượng mạnh mẽ và ý nghĩa sâu sắc.
                            Chúng thường xuất hiện ở những người có sứ mệnh đặc
                            biệt hoặc có tiềm năng phát triển tâm linh cao.
                          </p>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Thông tin bổ sung */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="text-center text-blue-600">
                💡 Hiểu về thần số học
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Cách tính số chủ đạo:
                  </h4>
                  <p className="text-sm text-blue-600">
                    Cộng tất cả các chữ số trong ngày sinh, tháng sinh và năm
                    sinh. Tiếp tục rút gọn cho đến khi còn 1 chữ số (trừ Master
                    Numbers 11, 22, 33).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Ý nghĩa của Master Numbers:
                  </h4>
                  <p className="text-sm text-blue-600">
                    Master Numbers 11, 22, 33 là những con số đặc biệt với năng
                    lượng mạnh mẽ. Chúng không được rút gọn và giữ nguyên ý
                    nghĩa đặc biệt.
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
