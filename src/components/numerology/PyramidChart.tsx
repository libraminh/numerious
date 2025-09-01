"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LifePyramid, LifePeriod } from "@/lib/numerology";

interface PyramidChartProps {
  pyramid: LifePyramid;
  currentAge?: number;
}

export default function PyramidChart({
  pyramid,
  currentAge = 0,
}: PyramidChartProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<LifePeriod | null>(null);

  const getCurrentPeriod = (): LifePeriod | null => {
    return (
      pyramid.periods.find(
        (period) => currentAge >= period.startAge && currentAge <= period.endAge
      ) || null
    );
  };

  const getPeriodColor = (period: LifePeriod, isSelected: boolean): string => {
    const currentPeriod = getCurrentPeriod();
    const isCurrent = currentPeriod?.period === period.period;

    if (isSelected) {
      return "from-purple-600 to-pink-600 text-white";
    }

    if (isCurrent) {
      return "from-green-500 to-emerald-500 text-white";
    }

    switch (period.period) {
      case 1:
        return "from-blue-400 to-blue-500 text-white";
      case 2:
        return "from-orange-400 to-orange-500 text-white";
      case 3:
        return "from-teal-400 to-teal-500 text-white";
      case 4:
        return "from-indigo-400 to-indigo-500 text-white";
      default:
        return "from-gray-400 to-gray-500 text-white";
    }
  };

  const getPeriodIcon = (period: number): string => {
    switch (period) {
      case 1:
        return "🌱";
      case 2:
        return "🌳";
      case 3:
        return "🏆";
      case 4:
        return "🌟";
      default:
        return "📍";
    }
  };

  return (
    <div className="space-y-6">
      {/* Tiêu đề */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🔺 Kim Tự Tháp Cuộc Đời
        </h2>
        <p className="text-muted-foreground">
          Khám phá 4 giai đoạn quan trọng trong hành trình cuộc đời của bạn
        </p>
        {currentAge > 0 && (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-300"
          >
            Tuổi hiện tại: {currentAge}
          </Badge>
        )}
      </div>

      {/* Biểu đồ kim tự tháp */}
      <div className="relative">
        <div className="grid grid-cols-1 gap-4">
          {/* Giai đoạn 4 - Đỉnh kim tự tháp */}
          <div className="flex justify-center">
            <Card
              className={`w-64 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${getPeriodColor(
                pyramid.periods[3],
                selectedPeriod?.period === 4
              )}`}
              onClick={() =>
                setSelectedPeriod(
                  selectedPeriod?.period === 4 ? null : pyramid.periods[3]
                )
              }
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{getPeriodIcon(4)}</div>
                <div className="text-lg font-bold">Giai đoạn 4</div>
                <div className="text-sm opacity-90">
                  {pyramid.periods[3].startAge}+ tuổi
                </div>
                <div className="text-xs opacity-80 mt-1">
                  Số chu kỳ: {pyramid.periods[3].cycleNumber}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Giai đoạn 3 */}
          <div className="flex justify-center gap-4">
            <div className="w-24"></div>
            <Card
              className={`w-64 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${getPeriodColor(
                pyramid.periods[2],
                selectedPeriod?.period === 3
              )}`}
              onClick={() =>
                setSelectedPeriod(
                  selectedPeriod?.period === 3 ? null : pyramid.periods[2]
                )
              }
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{getPeriodIcon(3)}</div>
                <div className="text-lg font-bold">Giai đoạn 3</div>
                <div className="text-sm opacity-90">
                  {pyramid.periods[2].startAge}-{pyramid.periods[2].endAge} tuổi
                </div>
                <div className="text-xs opacity-80 mt-1">
                  Số chu kỳ: {pyramid.periods[2].cycleNumber}
                </div>
              </CardContent>
            </Card>
            <div className="w-24"></div>
          </div>

          {/* Giai đoạn 2 */}
          <div className="flex justify-center gap-4">
            <Card
              className={`w-56 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${getPeriodColor(
                pyramid.periods[1],
                selectedPeriod?.period === 2
              )}`}
              onClick={() =>
                setSelectedPeriod(
                  selectedPeriod?.period === 2 ? null : pyramid.periods[1]
                )
              }
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{getPeriodIcon(2)}</div>
                <div className="text-lg font-bold">Giai đoạn 2</div>
                <div className="text-sm opacity-90">
                  {pyramid.periods[1].startAge}-{pyramid.periods[1].endAge} tuổi
                </div>
                <div className="text-xs opacity-80 mt-1">
                  Số chu kỳ: {pyramid.periods[1].cycleNumber}
                </div>
              </CardContent>
            </Card>
            <Card
              className={`w-56 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${getPeriodColor(
                pyramid.periods[1],
                selectedPeriod?.period === 2
              )}`}
              onClick={() =>
                setSelectedPeriod(
                  selectedPeriod?.period === 2 ? null : pyramid.periods[1]
                )
              }
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{getPeriodIcon(2)}</div>
                <div className="text-lg font-bold">Giai đoạn 2</div>
                <div className="text-sm opacity-90">
                  {pyramid.periods[1].startAge}-{pyramid.periods[1].endAge} tuổi
                </div>
                <div className="text-xs opacity-80 mt-1">
                  Số chu kỳ: {pyramid.periods[1].cycleNumber}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Giai đoạn 1 - Đáy kim tự tháp */}
          <div className="flex justify-center gap-2">
            <Card
              className={`w-48 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${getPeriodColor(
                pyramid.periods[0],
                selectedPeriod?.period === 1
              )}`}
              onClick={() =>
                setSelectedPeriod(
                  selectedPeriod?.period === 1 ? null : pyramid.periods[0]
                )
              }
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{getPeriodIcon(1)}</div>
                <div className="text-lg font-bold">Giai đoạn 1</div>
                <div className="text-sm opacity-90">
                  {pyramid.periods[0].startAge}-{pyramid.periods[0].endAge} tuổi
                </div>
                <div className="text-xs opacity-80 mt-1">
                  Số chu kỳ: {pyramid.periods[0].cycleNumber}
                </div>
              </CardContent>
            </Card>
            <Card
              className={`w-48 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${getPeriodColor(
                pyramid.periods[0],
                selectedPeriod?.period === 1
              )}`}
              onClick={() =>
                setSelectedPeriod(
                  selectedPeriod?.period === 1 ? null : pyramid.periods[0]
                )
              }
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{getPeriodIcon(1)}</div>
                <div className="text-lg font-bold">Giai đoạn 1</div>
                <div className="text-sm opacity-90">
                  {pyramid.periods[0].startAge}-{pyramid.periods[0].endAge} tuổi
                </div>
                <div className="text-xs opacity-80 mt-1">
                  Số chu kỳ: {pyramid.periods[0].cycleNumber}
                </div>
              </CardContent>
            </Card>
            <Card
              className={`w-48 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${getPeriodColor(
                pyramid.periods[0],
                selectedPeriod?.period === 1
              )}`}
              onClick={() =>
                setSelectedPeriod(
                  selectedPeriod?.period === 1 ? null : pyramid.periods[0]
                )
              }
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{getPeriodIcon(1)}</div>
                <div className="text-lg font-bold">Giai đoạn 1</div>
                <div className="text-sm opacity-90">
                  {pyramid.periods[0].startAge}-{pyramid.periods[0].endAge} tuổi
                </div>
                <div className="text-xs opacity-80 mt-1">
                  Số chu kỳ: {pyramid.periods[0].cycleNumber}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chú thích */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Nhấp vào từng giai đoạn để xem thông tin chi tiết</p>
          {currentAge > 0 && (
            <p className="text-green-600 font-medium mt-1">
              🎯 Giai đoạn hiện tại được đánh dấu màu xanh
            </p>
          )}
        </div>
      </div>

      {/* Thông tin chi tiết giai đoạn được chọn */}
      {selectedPeriod && (
        <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <span className="text-2xl">
                {getPeriodIcon(selectedPeriod.period)}
              </span>
              <div>
                <div>
                  Giai đoạn {selectedPeriod.period}:{" "}
                  {selectedPeriod.description}
                </div>
                <div className="text-base font-normal text-purple-600">
                  Độ tuổi:{" "}
                  {selectedPeriod.startAge === 0
                    ? "Từ sinh"
                    : selectedPeriod.startAge}
                  -
                  {selectedPeriod.endAge === 100
                    ? "cuối đời"
                    : `${selectedPeriod.endAge} tuổi`}{" "}
                  | Số chu kỳ: {selectedPeriod.cycleNumber}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Đặc điểm */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-purple-700 flex items-center gap-2">
                ✨ Đặc điểm nổi bật
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedPeriod.characteristics.map((char, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="p-2 text-sm bg-white border-purple-200"
                  >
                    {char}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Cơ hội */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-700 flex items-center gap-2">
                🎯 Cơ hội phát triển
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedPeriod.opportunities.map((opp, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="p-2 text-sm bg-green-50 border-green-200 text-green-700"
                  >
                    {opp}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Thách thức */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-orange-700 flex items-center gap-2">
                ⚠️ Thách thức cần vượt qua
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedPeriod.challenges.map((challenge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="p-2 text-sm bg-orange-50 border-orange-200 text-orange-700"
                  >
                    {challenge}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <Button
                variant="outline"
                onClick={() => setSelectedPeriod(null)}
                className="bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
              >
                Đóng thông tin chi tiết
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Thông tin chuyển đổi giai đoạn */}
      {pyramid.transitions.length > 0 && (
        <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardHeader>
            <CardTitle className="text-blue-700 flex items-center gap-2">
              🔄 Các mốc chuyển đổi quan trọng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pyramid.transitions.map((transition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-white rounded-lg border border-blue-200"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    {transition.age}
                  </div>
                  <div>
                    <div className="font-medium text-blue-900">
                      Tuổi {transition.age}
                    </div>
                    <div className="text-sm text-blue-700">
                      {transition.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Hướng dẫn sử dụng */}
      <Card className="bg-gradient-to-r from-amber-50 to-yellow-50">
        <CardHeader>
          <CardTitle className="text-amber-700 flex items-center gap-2">
            💡 Cách hiểu kim tự tháp cuộc đời
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-amber-800">
            <strong>Kim tự tháp cuộc đời</strong> chia cuộc đời thành 4 giai
            đoạn chính, mỗi giai đoạn có những đặc điểm, cơ hội và thách thức
            riêng:
          </p>
          <ul className="space-y-2 text-amber-700">
            <li className="flex items-start gap-2">
              <span>🌱</span>
              <span>
                <strong>Giai đoạn 1:</strong> Hình thành và học hỏi - Từ sinh
                đến tuổi trưởng thành
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>🌳</span>
              <span>
                <strong>Giai đoạn 2:</strong> Phát triển sự nghiệp - Xây dựng
                nền tảng cuộc sống
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>🏆</span>
              <span>
                <strong>Giai đoạn 3:</strong> Trưởng thành và ổn định - Đạt được
                thành tựu chính
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>🌟</span>
              <span>
                <strong>Giai đoạn 4:</strong> Trí tuệ và chia sẻ - Để lại di sản
                cho thế hệ sau
              </span>
            </li>
          </ul>
          <p className="text-amber-800 text-sm mt-4">
            <em>
              Lưu ý: Các tuổi chuyển đổi được tính dựa trên số chủ đạo cá nhân
              và có thể khác nhau giữa các cá nhân.
            </em>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
