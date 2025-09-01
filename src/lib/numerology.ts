export interface NumerologyResult {
  lifePathNumber: number;
  soulNumber: number;
  expressionNumber: number;
  birthdayNumber: number;
  attitudeNumber: number;
  personalYearNumber: number;
  isMasterNumber: boolean;
}

export interface NameAnalysis {
  name: string;
  soulNumber: number;
  expressionNumber: number;
  personalityNumber: number;
  hiddenPassionNumber: number;
  karmicLessons: number[];
}

// Chuyển đổi chữ cái thành số theo bảng thần số học
const letterToNumber: { [key: string]: number } = {
  A: 1,
  J: 1,
  S: 1,
  B: 2,
  K: 2,
  T: 2,
  C: 3,
  L: 3,
  U: 3,
  D: 4,
  M: 4,
  V: 4,
  E: 5,
  N: 5,
  W: 5,
  F: 6,
  O: 6,
  X: 6,
  G: 7,
  P: 7,
  Y: 7,
  H: 8,
  Q: 8,
  Z: 8,
  I: 9,
  R: 9,
};

// Tính tổng các chữ số của một số
export function sumDigits(num: number): number {
  if (num < 10) return num;
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Tính số chủ đạo từ ngày sinh
export function calculateLifePathNumber(birthDate: Date): number {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const year = birthDate.getFullYear();

  let daySum = sumDigits(day);
  let monthSum = sumDigits(month);
  let yearSum = sumDigits(year);

  // Nếu là số master (11, 22, 33) thì giữ nguyên
  if (daySum === 11 || daySum === 22 || daySum === 33) daySum = day;
  if (monthSum === 11 || monthSum === 22 || monthSum === 33) monthSum = month;
  if (yearSum === 11 || yearSum === 22 || yearSum === 33) yearSum = year;

  let total = daySum + monthSum + yearSum;

  // Tiếp tục rút gọn cho đến khi < 10 hoặc là master number
  while (total >= 10 && ![11, 22, 33].includes(total)) {
    total = sumDigits(total);
  }

  return total;
}

// Tính số linh hồn từ nguyên âm trong tên
export function calculateSoulNumber(fullName: string): number {
  const vowels = fullName.toUpperCase().match(/[AEIOU]/g) || [];
  let sum = vowels.reduce((total, vowel) => total + letterToNumber[vowel], 0);

  while (sum >= 10 && ![11, 22, 33].includes(sum)) {
    sum = sumDigits(sum);
  }

  return sum;
}

// Tính số biểu đạt từ tất cả chữ cái trong tên
export function calculateExpressionNumber(fullName: string): number {
  const letters = fullName
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("");
  let sum = letters.reduce(
    (total, letter) => total + letterToNumber[letter],
    0
  );

  while (sum >= 10 && ![11, 22, 33].includes(sum)) {
    sum = sumDigits(sum);
  }

  return sum;
}

// Tính số sinh nhật từ ngày sinh
export function calculateBirthdayNumber(birthDate: Date): number {
  const day = birthDate.getDate();
  return sumDigits(day);
}

// Tính số thái độ từ tháng và ngày sinh
export function calculateAttitudeNumber(birthDate: Date): number {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  let sum = day + month;

  while (sum >= 10) {
    sum = sumDigits(sum);
  }

  return sum;
}

// Tính số năm cá nhân
export function calculatePersonalYearNumber(
  birthDate: Date,
  currentYear: number
): number {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  // const year = birthDate.getFullYear();

  const daySum = sumDigits(day);
  const monthSum = sumDigits(month);
  // const yearSum = sumDigits(year);

  let total = daySum + monthSum + sumDigits(currentYear);

  while (total >= 10) {
    total = sumDigits(total);
  }

  return total;
}

// Kiểm tra có phải master number không
export function isMasterNumber(num: number): boolean {
  return [11, 22, 33].includes(num);
}

// Tính toán tất cả các số thần số học
export function calculateAllNumbers(
  birthDate: Date,
  fullName: string
): NumerologyResult {
  const lifePathNumber = calculateLifePathNumber(birthDate);
  const soulNumber = calculateSoulNumber(fullName);
  const expressionNumber = calculateExpressionNumber(fullName);
  const birthdayNumber = calculateBirthdayNumber(birthDate);
  const attitudeNumber = calculateAttitudeNumber(birthDate);
  const personalYearNumber = calculatePersonalYearNumber(
    birthDate,
    new Date().getFullYear()
  );

  return {
    lifePathNumber,
    soulNumber,
    expressionNumber,
    birthdayNumber,
    attitudeNumber,
    personalYearNumber,
    isMasterNumber: isMasterNumber(lifePathNumber),
  };
}

// Phân tích tên
export function analyzeName(fullName: string): NameAnalysis {
  const soulNumber = calculateSoulNumber(fullName);
  const expressionNumber = calculateExpressionNumber(fullName);

  // Tính số nhân cách (consonants)
  const consonants =
    fullName.toUpperCase().match(/[BCDFGHJKLMNPQRSTVWXYZ]/g) || [];
  let personalitySum = consonants.reduce(
    (total, consonant) => total + letterToNumber[consonant],
    0
  );
  while (personalitySum >= 10 && ![11, 22, 33].includes(personalitySum)) {
    personalitySum = sumDigits(personalitySum);
  }

  // Tính số đam mê ẩn (số xuất hiện nhiều nhất)
  const letterCounts: { [key: number]: number } = {};
  const letters = fullName
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("");
  letters.forEach((letter) => {
    const num = letterToNumber[letter];
    letterCounts[num] = (letterCounts[num] || 0) + 1;
  });

  let maxCount = 0;
  let hiddenPassionNumber = 0;
  Object.entries(letterCounts).forEach(([num, count]) => {
    if (count > maxCount) {
      maxCount = count;
      hiddenPassionNumber = parseInt(num);
    }
  });

  // Tính bài học karmic (số thiếu trong tên)
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const karmicLessons = allNumbers.filter(
    (num) => !letters.some((letter) => letterToNumber[letter] === num)
  );

  return {
    name: fullName,
    soulNumber,
    expressionNumber,
    personalityNumber: personalitySum,
    hiddenPassionNumber,
    karmicLessons,
  };
}

// Tính tương thích giữa hai số
export function calculateCompatibility(
  num1: number,
  num2: number
): "best" | "good" | "challenging" {
  // Rút gọn về số cơ bản nếu không phải master number
  const baseNum1 = isMasterNumber(num1) ? num1 : sumDigits(num1);
  const baseNum2 = isMasterNumber(num2) ? num2 : sumDigits(num2);

  // Logic tương thích đơn giản
  if (baseNum1 === baseNum2) return "best";
  if (Math.abs(baseNum1 - baseNum2) <= 2) return "good";
  return "challenging";
}

// Tính tương thích chi tiết giữa hai số
export function calculateDetailedCompatibility(
  num1: number,
  num2: number
): {
  level: "best" | "good" | "challenging";
  percentage: number;
  title: string;
  description: string;
  strengths: string[];
  challenges: string[];
  advice: string[];
  loveCompatibility: string;
  careerCompatibility: string;
  friendshipCompatibility: string;
} {
  // Rút gọn về số cơ bản nếu không phải master number
  const baseNum1 = isMasterNumber(num1) ? num1 : sumDigits(num1);
  const baseNum2 = isMasterNumber(num2) ? num2 : sumDigits(num2);

  // Tạo key cho cặp số (số nhỏ hơn trước)
  const key =
    baseNum1 <= baseNum2
      ? `${baseNum1}-${baseNum2}`
      : `${baseNum2}-${baseNum1}`;

  // Import detailedCompatibility từ data file
  const {
    detailedCompatibility,
    additionalCompatibilityPairs,
  } = require("../data/numerology-data");

  // Tìm thông tin chi tiết
  const detailedInfo =
    detailedCompatibility[key] || additionalCompatibilityPairs[key];

  if (detailedInfo) {
    return detailedInfo;
  }

  // Fallback cho các cặp chưa có thông tin chi tiết
  const level = calculateCompatibility(num1, num2);
  const percentage = level === "best" ? 85 : level === "good" ? 65 : 45;

  return {
    level,
    percentage,
    title: `Số ${baseNum1} và Số ${baseNum2}`,
    description: `Mối quan hệ giữa số ${baseNum1} và số ${baseNum2} có mức độ tương thích ${
      level === "best" ? "rất cao" : level === "good" ? "tốt" : "cần cố gắng"
    }.`,
    strengths: [
      "Có thể học hỏi từ nhau",
      "Bổ sung kỹ năng cho nhau",
      "Tạo ra sự cân bằng",
    ],
    challenges: [
      "Cần thời gian để hiểu nhau",
      "Có thể có xung đột về quan điểm",
      "Cần nỗ lực để duy trì mối quan hệ",
    ],
    advice: [
      "Hãy tôn trọng sự khác biệt của nhau",
      "Giao tiếp cởi mở và chân thành",
      "Tìm điểm chung để xây dựng mối quan hệ",
    ],
    loveCompatibility:
      level === "best"
        ? "Cao - Tình yêu có tiềm năng phát triển tốt"
        : level === "good"
        ? "Trung bình - Cần nỗ lực để hiểu nhau"
        : "Thấp - Cần nỗ lực lớn để duy trì",
    careerCompatibility:
      level === "best"
        ? "Tốt - Có thể hợp tác hiệu quả"
        : level === "good"
        ? "Khá - Cần thời gian để hiểu nhau"
        : "Trung bình - Cần nỗ lực để hợp tác",
    friendshipCompatibility:
      level === "best"
        ? "Tốt - Tình bạn có thể phát triển"
        : level === "good"
        ? "Khá - Cần thời gian để hiểu nhau"
        : "Trung bình - Cần nỗ lực để duy trì",
  };
}

// Tìm tên phù hợp dựa trên số chủ đạo
export function findCompatibleNames(
  lifePathNumber: number,
  gender: "male" | "female"
): string[] {
  // Đây là danh sách mẫu, có thể mở rộng
  const nameSuggestions: {
    [key: number]: { male: string[]; female: string[] };
  } = {
    1: {
      male: ["An", "Bình", "Cường", "Dũng", "Hùng"],
      female: ["Anh", "Bích", "Cẩm", "Dung", "Hương"],
    },
    2: {
      male: ["Bảo", "Duy", "Giang", "Hải", "Minh"],
      female: ["Bảo", "Duyên", "Giang", "Hà", "Minh"],
    },
    3: {
      male: ["Đức", "Huy", "Khải", "Linh", "Phúc"],
      female: ["Đức", "Huyền", "Khánh", "Linh", "Phương"],
    },
    4: {
      male: ["Công", "Hòa", "Kiên", "Lâm", "Thành"],
      female: ["Cẩm", "Hòa", "Kiều", "Lâm", "Thảo"],
    },
    5: {
      male: ["Đạt", "Hưng", "Khang", "Long", "Phát"],
      female: ["Đan", "Hương", "Khang", "Linh", "Phương"],
    },
    6: {
      male: ["Bảo", "Duy", "Giang", "Hải", "Minh"],
      female: ["Bảo", "Duyên", "Giang", "Hà", "Minh"],
    },
    7: {
      male: ["Đức", "Huy", "Khải", "Linh", "Phúc"],
      female: ["Đức", "Huyền", "Khánh", "Linh", "Phương"],
    },
    8: {
      male: ["Công", "Hòa", "Kiên", "Lâm", "Thành"],
      female: ["Cẩm", "Hòa", "Kiều", "Lâm", "Thảo"],
    },
    9: {
      male: ["Bảo", "Duy", "Giang", "Hải", "Minh"],
      female: ["Bảo", "Duyên", "Giang", "Hà", "Minh"],
    },
  };

  return nameSuggestions[lifePathNumber]?.[gender] || [];
}

// Interface cho kim tự tháp cuộc đời
export interface LifePyramid {
  periods: LifePeriod[];
  transitions: TransitionAge[];
}

export interface LifePeriod {
  period: number;
  startAge: number;
  endAge: number;
  cycleNumber: number;
  description: string;
  characteristics: string[];
  challenges: string[];
  opportunities: string[];
}

export interface TransitionAge {
  age: number;
  description: string;
}

// Tính toán kim tự tháp cuộc đời (4 giai đoạn chính)
export function calculateLifePyramid(birthDate: Date): LifePyramid {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const year = birthDate.getFullYear();

  // Tính Life Path Number để xác định chu kỳ
  const lifePathNumber = calculateLifePathNumber(birthDate);

  // Tính tuổi chuyển đổi giai đoạn
  const firstTransition = 36 - lifePathNumber;
  const secondTransition = firstTransition + 9;
  const thirdTransition = secondTransition + 9;

  // Tính số chu kỳ cho từng giai đoạn
  const firstCycle = sumDigitsToSingle(month + day);
  const secondCycle = sumDigitsToSingle(day + year);
  const thirdCycle = sumDigitsToSingle(month + year);
  const fourthCycle = lifePathNumber;

  const periods: LifePeriod[] = [
    {
      period: 1,
      startAge: 0,
      endAge: firstTransition,
      cycleNumber: firstCycle,
      description: "Giai đoạn hình thành và học hỏi",
      characteristics: getPeriodCharacteristics(firstCycle, 1),
      challenges: getPeriodChallenges(firstCycle, 1),
      opportunities: getPeriodOpportunities(firstCycle, 1),
    },
    {
      period: 2,
      startAge: firstTransition + 1,
      endAge: secondTransition,
      cycleNumber: secondCycle,
      description: "Giai đoạn phát triển sự nghiệp và xây dựng",
      characteristics: getPeriodCharacteristics(secondCycle, 2),
      challenges: getPeriodChallenges(secondCycle, 2),
      opportunities: getPeriodOpportunities(secondCycle, 2),
    },
    {
      period: 3,
      startAge: secondTransition + 1,
      endAge: thirdTransition,
      cycleNumber: thirdCycle,
      description: "Giai đoạn trưởng thành và ổn định",
      characteristics: getPeriodCharacteristics(thirdCycle, 3),
      challenges: getPeriodChallenges(thirdCycle, 3),
      opportunities: getPeriodOpportunities(thirdCycle, 3),
    },
    {
      period: 4,
      startAge: thirdTransition + 1,
      endAge: 100,
      cycleNumber: fourthCycle,
      description: "Giai đoạn trí tuệ và chia sẻ",
      characteristics: getPeriodCharacteristics(fourthCycle, 4),
      challenges: getPeriodChallenges(fourthCycle, 4),
      opportunities: getPeriodOpportunities(fourthCycle, 4),
    },
  ];

  const transitions: TransitionAge[] = [
    {
      age: firstTransition,
      description: "Chuyển từ giai đoạn học hỏi sang xây dựng sự nghiệp",
    },
    {
      age: secondTransition,
      description: "Chuyển từ giai đoạn xây dựng sang ổn định và trưởng thành",
    },
    {
      age: thirdTransition,
      description: "Chuyển sang giai đoạn chia sẻ trí tuệ và kinh nghiệm",
    },
  ];

  return {
    periods,
    transitions,
  };
}

// Hàm rút gọn số về 1 chữ số (không giữ master numbers)
function sumDigitsToSingle(num: number): number {
  while (num >= 10) {
    num = sumDigits(num);
  }
  return num;
}

// Lấy đặc điểm của từng giai đoạn dựa trên số chu kỳ
function getPeriodCharacteristics(
  cycleNumber: number,
  period: number
): string[] {
  const characteristics: { [key: number]: { [period: number]: string[] } } = {
    1: {
      1: [
        "Tinh thần độc lập mạnh mẽ",
        "Khả năng lãnh đạo bẩm sinh",
        "Sự sáng tạo và đổi mới",
      ],
      2: [
        "Tập trung vào sự nghiệp cá nhân",
        "Xây dựng danh tiếng",
        "Phát triển kỹ năng lãnh đạo",
      ],
      3: [
        "Ổn định trong vai trò lãnh đạo",
        "Trở thành người cố vấn",
        "Phát triển tầm nhìn dài hạn",
      ],
      4: [
        "Chia sẻ kinh nghiệm lãnh đạo",
        "Trở thành người cố vấn",
        "Tạo di sản cho thế hệ sau",
      ],
    },
    2: {
      1: [
        "Tính hợp tác và nhạy cảm",
        "Kỹ năng ngoại giao tự nhiên",
        "Khả năng làm việc nhóm",
      ],
      2: [
        "Xây dựng mối quan hệ trong công việc",
        "Phát triển kỹ năng đàm phán",
        "Hỗ trợ và hợp tác",
      ],
      3: [
        "Trở thành người hòa giải",
        "Ổn định trong mối quan hệ",
        "Phát triển trí tuệ cảm xúc",
      ],
      4: [
        "Chia sẻ khả năng hòa giải",
        "Trở thành người cố vấn quan hệ",
        "Giúp đỡ người khác",
      ],
    },
    3: {
      1: [
        "Sự sáng tạo và biểu đạt",
        "Tính lạc quan và vui vẻ",
        "Khả năng giao tiếp tốt",
      ],
      2: [
        "Phát triển tài năng sáng tạo",
        "Xây dựng mạng lưới xã hội",
        "Thể hiện bản thân",
      ],
      3: [
        "Ổn định trong sáng tạo",
        "Trở thành nguồn cảm hứng",
        "Phát triển nghệ thuật",
      ],
      4: [
        "Chia sẻ tài năng sáng tạo",
        "Truyền cảm hứng cho người khác",
        "Để lại di sản nghệ thuật",
      ],
    },
    4: {
      1: [
        "Tính thực tế và có tổ chức",
        "Sự kiên nhẫn và bền bỉ",
        "Khả năng lập kế hoạch",
      ],
      2: [
        "Xây dựng nền tảng vững chắc",
        "Phát triển kỹ năng quản lý",
        "Tạo dựng ổn định",
      ],
      3: [
        "Ổn định trong công việc",
        "Trở thành chuyên gia",
        "Phát triển hệ thống",
      ],
      4: [
        "Chia sẻ kinh nghiệm thực tế",
        "Trở thành người cố vấn",
        "Tạo di sản bền vững",
      ],
    },
    5: {
      1: [
        "Tinh thần tự do và phiêu lưu",
        "Sự linh hoạt và thích nghi",
        "Khả năng giao tiếp",
      ],
      2: [
        "Khám phá cơ hội mới",
        "Phát triển đa dạng kỹ năng",
        "Mở rộng tầm nhìn",
      ],
      3: [
        "Ổn định trong tự do",
        "Trở thành người dẫn đường",
        "Phát triển trí tuệ",
      ],
      4: [
        "Chia sẻ kinh nghiệm phiêu lưu",
        "Truyền cảm hứng khám phá",
        "Để lại di sản tự do",
      ],
    },
    6: {
      1: [
        "Tính chăm sóc và trách nhiệm",
        "Tình yêu gia đình",
        "Khả năng nuôi dưỡng",
      ],
      2: [
        "Xây dựng gia đình và sự nghiệp",
        "Phát triển trách nhiệm xã hội",
        "Chăm sóc cộng đồng",
      ],
      3: [
        "Ổn định trong vai trò chăm sóc",
        "Trở thành trụ cột gia đình",
        "Phát triển từ bi",
      ],
      4: [
        "Chia sẻ tình yêu thương",
        "Trở thành người cố vấn gia đình",
        "Tạo di sản yêu thương",
      ],
    },
    7: {
      1: [
        "Tính tìm tòi và nghiên cứu",
        "Trí tuệ và phân tích",
        "Khả năng tập trung sâu",
      ],
      2: [
        "Phát triển chuyên môn",
        "Nghiên cứu và học hỏi",
        "Xây dựng kiến thức",
      ],
      3: [
        "Ổn định trong nghiên cứu",
        "Trở thành chuyên gia",
        "Phát triển trí tuệ",
      ],
      4: [
        "Chia sẻ kiến thức chuyên môn",
        "Trở thành thầy giáo",
        "Để lại di sản tri thức",
      ],
    },
    8: {
      1: [
        "Tham vọng và quyền lực",
        "Khả năng tổ chức và quản lý",
        "Tinh thần kinh doanh",
      ],
      2: [
        "Xây dựng đế chế kinh doanh",
        "Phát triển quyền lực",
        "Tạo dựng thành công vật chất",
      ],
      3: [
        "Ổn định trong thành công",
        "Trở thành nhà lãnh đạo",
        "Phát triển ảnh hưởng",
      ],
      4: [
        "Chia sẻ kinh nghiệm kinh doanh",
        "Trở thành người cố vấn",
        "Tạo di sản thịnh vượng",
      ],
    },
    9: {
      1: ["Tính nhân đạo và từ bi", "Tầm nhìn toàn cầu", "Khả năng phục vụ"],
      2: [
        "Phát triển sự nghiệp phục vụ",
        "Xây dựng ảnh hưởng tích cực",
        "Giúp đỡ nhân loại",
      ],
      3: [
        "Ổn định trong phục vụ",
        "Trở thành nhà từ thiện",
        "Phát triển từ bi",
      ],
      4: [
        "Chia sẻ tình yêu nhân loại",
        "Trở thành người cố vấn tâm linh",
        "Để lại di sản từ bi",
      ],
    },
  };

  return (
    characteristics[cycleNumber]?.[period] || ["Đặc điểm chưa được xác định"]
  );
}

// Lấy thách thức của từng giai đoạn
function getPeriodChallenges(cycleNumber: number, period: number): string[] {
  const challenges: { [key: number]: { [period: number]: string[] } } = {
    1: {
      1: [
        "Học cách hợp tác với người khác",
        "Kiểm soát tính cứng đầu",
        "Phát triển kiên nhẫn",
      ],
      2: [
        "Cân bằng công việc và mối quan hệ",
        "Tránh trở nên độc đoán",
        "Học cách lắng nghe",
      ],
      3: [
        "Duy trì động lực lãnh đạo",
        "Tránh trở nên quá nghiêm khắc",
        "Phát triển sự đồng cảm",
      ],
      4: [
        "Chấp nhận sự thay đổi",
        "Tránh trở nên bảo thủ",
        "Học cách buông bỏ quyền lực",
      ],
    },
    2: {
      1: [
        "Xây dựng sự tự tin",
        "Tránh quá nhạy cảm",
        "Học cách đưa ra quyết định",
      ],
      2: [
        "Cân bằng giữa cho và nhận",
        "Tránh trở nên phụ thuộc",
        "Phát triển tính độc lập",
      ],
      3: [
        "Duy trì ranh giới cá nhân",
        "Tránh hy sinh quá nhiều",
        "Học cách nói không",
      ],
      4: [
        "Chấp nhận sự cô đơn",
        "Tránh trở nên tiêu cực",
        "Học cách tự chăm sóc bản thân",
      ],
    },
    3: {
      1: [
        "Tập trung vào một mục tiêu",
        "Tránh phân tán năng lượng",
        "Phát triển kỷ luật",
      ],
      2: [
        "Cân bằng sáng tạo và thực tế",
        "Tránh trở nên hời hợt",
        "Xây dựng sự kiên trì",
      ],
      3: [
        "Duy trì động lực sáng tạo",
        "Tránh trở nên tự mãn",
        "Phát triển chiều sâu",
      ],
      4: [
        "Chấp nhận sự già đi",
        "Tránh sống trong quá khứ",
        "Học cách truyền đạt",
      ],
    },
    4: {
      1: [
        "Học cách linh hoạt",
        "Tránh trở nên cứng nhắc",
        "Phát triển sự sáng tạo",
      ],
      2: [
        "Cân bằng công việc và cuộc sống",
        "Tránh trở nên quá căng thẳng",
        "Học cách thư giãn",
      ],
      3: [
        "Duy trì sự đổi mới",
        "Tránh trở nên lỗi thời",
        "Phát triển khả năng thích nghi",
      ],
      4: [
        "Chấp nhận công nghệ mới",
        "Tránh trở nên bảo thủ",
        "Học cách thay đổi",
      ],
    },
    5: {
      1: ["Học cách cam kết", "Tránh trở nên bất ổn", "Phát triển trách nhiệm"],
      2: [
        "Cân bằng tự do và nghĩa vụ",
        "Tránh trở nên vô trách nhiệm",
        "Xây dựng sự ổn định",
      ],
      3: [
        "Duy trì sự tươi mới",
        "Tránh trở nên chán nản",
        "Phát triển sự kiên trì",
      ],
      4: [
        "Chấp nhận sự hạn chế",
        "Tránh trở nên bồn chồn",
        "Học cách hài lòng",
      ],
    },
    6: {
      1: [
        "Cân bằng chăm sóc bản thân và người khác",
        "Tránh trở nên quá bảo vệ",
        "Phát triển ranh giới",
      ],
      2: [
        "Cân bằng gia đình và sự nghiệp",
        "Tránh hy sinh quá nhiều",
        "Học cách ủy quyền",
      ],
      3: [
        "Duy trì sức khỏe cá nhân",
        "Tránh trở nên kiệt sức",
        "Phát triển sự tự chăm sóc",
      ],
      4: [
        "Chấp nhận sự phụ thuộc",
        "Tránh cảm thấy không cần thiết",
        "Học cách nhận giúp đỡ",
      ],
    },
    7: {
      1: [
        "Học cách giao tiếp xã hội",
        "Tránh trở nên cô lập",
        "Phát triển kỹ năng xã hội",
      ],
      2: [
        "Cân bằng nghiên cứu và thực tế",
        "Tránh trở nên quá lý thuyết",
        "Ứng dụng kiến thức",
      ],
      3: [
        "Duy trì sự liên kết",
        "Tránh trở nên xa cách",
        "Phát triển sự đồng cảm",
      ],
      4: [
        "Chấp nhận sự đơn giản",
        "Tránh trở nên phức tạp hóa",
        "Học cách chia sẻ đơn giản",
      ],
    },
    8: {
      1: [
        "Học cách khiêm tốn",
        "Tránh trở nên quá tham vọng",
        "Phát triển sự cân bằng",
      ],
      2: [
        "Cân bằng vật chất và tinh thần",
        "Tránh trở nên tham lam",
        "Xây dựng giá trị",
      ],
      3: [
        "Duy trì sự chính trực",
        "Tránh trở nên không đạo đức",
        "Phát triển trách nhiệm",
      ],
      4: [
        "Chấp nhận sự mất mát",
        "Tránh bám víu vào quyền lực",
        "Học cách buông bỏ",
      ],
    },
    9: {
      1: [
        "Học cách thực tế",
        "Tránh trở nên quá lý tưởng",
        "Phát triển tính thực tiễn",
      ],
      2: [
        "Cân bằng cho và nhận",
        "Tránh cạn kiệt cảm xúc",
        "Xây dựng ranh giới",
      ],
      3: [
        "Duy trì hy vọng",
        "Tránh trở nên thất vọng",
        "Phát triển sự kiên trì",
      ],
      4: [
        "Chấp nhận bất hoàn hảo",
        "Tránh trở nên bi quan",
        "Học cách tha thứ",
      ],
    },
  };

  return challenges[cycleNumber]?.[period] || ["Thách thức chưa được xác định"];
}

// Lấy cơ hội của từng giai đoạn
function getPeriodOpportunities(cycleNumber: number, period: number): string[] {
  const opportunities: { [key: number]: { [period: number]: string[] } } = {
    1: {
      1: [
        "Phát triển khả năng lãnh đạo",
        "Khởi nghiệp và sáng tạo",
        "Xây dựng sự tự tin",
      ],
      2: [
        "Thăng tiến trong sự nghiệp",
        "Tạo dựng thành công cá nhân",
        "Phát triển ảnh hưởng",
      ],
      3: [
        "Trở thành chuyên gia hàng đầu",
        "Dẫn dắt tổ chức",
        "Tạo di sản lãnh đạo",
      ],
      4: ["Cố vấn cho thế hệ trẻ", "Chia sẻ kinh nghiệm", "Để lại di sản"],
    },
    2: {
      1: [
        "Phát triển kỹ năng hợp tác",
        "Xây dựng mối quan hệ",
        "Học cách đồng cảm",
      ],
      2: [
        "Trở thành người hòa giải",
        "Phát triển nhóm làm việc",
        "Xây dựng đối tác",
      ],
      3: [
        "Dẫn dắt thông qua hợp tác",
        "Tạo môi trường hòa hợp",
        "Phát triển cộng đồng",
      ],
      4: [
        "Cố vấn về mối quan hệ",
        "Chia sẻ trí tuệ tình cảm",
        "Tạo di sản hòa hợp",
      ],
    },
    3: {
      1: [
        "Phát triển tài năng sáng tạo",
        "Biểu đạt bản thân",
        "Xây dựng niềm vui",
      ],
      2: [
        "Thành công trong nghệ thuật",
        "Tạo tác phẩm ý nghĩa",
        "Truyền cảm hứng",
      ],
      3: [
        "Trở thành nghệ sĩ nổi tiếng",
        "Dẫn dắt xu hướng",
        "Tạo ảnh hưởng văn hóa",
      ],
      4: ["Cố vấn sáng tạo", "Chia sẻ tài năng", "Để lại di sản nghệ thuật"],
    },
    4: {
      1: [
        "Xây dựng nền tảng vững chắc",
        "Phát triển kỹ năng thực tế",
        "Tạo dựng ổn định",
      ],
      2: [
        "Thành công trong quản lý",
        "Xây dựng hệ thống hiệu quả",
        "Tạo dựng tổ chức",
      ],
      3: ["Trở thành chuyên gia tin cậy", "Dẫn dắt dự án lớn", "Tạo chuẩn mực"],
      4: [
        "Cố vấn về tổ chức",
        "Chia sẻ kinh nghiệm thực tế",
        "Tạo di sản bền vững",
      ],
    },
    5: {
      1: ["Khám phá thế giới", "Phát triển đa dạng kỹ năng", "Trải nghiệm mới"],
      2: [
        "Thành công trong du lịch/truyền thông",
        "Mở rộng tầm nhìn",
        "Kết nối văn hóa",
      ],
      3: ["Trở thành người dẫn đường", "Chia sẻ kinh nghiệm", "Tạo cầu nối"],
      4: [
        "Cố vấn về khám phá",
        "Truyền cảm hứng phiêu lưu",
        "Để lại di sản tự do",
      ],
    },
    6: {
      1: [
        "Xây dựng gia đình hạnh phúc",
        "Phát triển tình yêu thương",
        "Chăm sóc người khác",
      ],
      2: [
        "Thành công trong giáo dục/y tế",
        "Tạo môi trường ấm áp",
        "Phục vụ cộng đồng",
      ],
      3: [
        "Trở thành trụ cột gia đình",
        "Dẫn dắt với tình yêu",
        "Tạo di sản gia đình",
      ],
      4: [
        "Cố vấn về gia đình",
        "Chia sẻ tình yêu thương",
        "Để lại di sản yêu thương",
      ],
    },
    7: {
      1: ["Phát triển trí tuệ", "Nghiên cứu chuyên sâu", "Khám phá bí ẩn"],
      2: [
        "Thành công trong nghiên cứu",
        "Trở thành chuyên gia",
        "Tạo phát hiện mới",
      ],
      3: ["Dẫn dắt trong khoa học", "Chia sẻ kiến thức", "Tạo đột phá"],
      4: ["Cố vấn học thuật", "Truyền đạt trí tuệ", "Để lại di sản tri thức"],
    },
    8: {
      1: [
        "Xây dựng tham vọng",
        "Phát triển kỹ năng kinh doanh",
        "Tạo dựng quyền lực",
      ],
      2: ["Thành công tài chính", "Xây dựng đế chế", "Tạo ảnh hưởng kinh tế"],
      3: [
        "Trở thành nhà lãnh đạo quyền lực",
        "Dẫn dắt thị trường",
        "Tạo di sản kinh doanh",
      ],
      4: [
        "Cố vấn kinh doanh",
        "Chia sẻ kinh nghiệm thành công",
        "Để lại di sản thịnh vượng",
      ],
    },
    9: {
      1: [
        "Phát triển lòng từ bi",
        "Phục vụ nhân loại",
        "Tạo ảnh hưởng tích cực",
      ],
      2: [
        "Thành công trong từ thiện",
        "Giúp đỡ nhiều người",
        "Tạo thay đổi xã hội",
      ],
      3: [
        "Trở thành nhà nhân đạo",
        "Dẫn dắt phong trào",
        "Tạo di sản nhân văn",
      ],
      4: ["Cố vấn tâm linh", "Chia sẻ tình yêu thương", "Để lại di sản từ bi"],
    },
  };

  return opportunities[cycleNumber]?.[period] || ["Cơ hội chưa được xác định"];
}
