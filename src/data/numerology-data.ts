export interface NumberMeaning {
  number: number;
  title: string;
  description: string;
  keywords: string[];
  strengths: string[];
  challenges: string[];
  career: string[];
  love: string[];
}

export const numberMeanings: NumberMeaning[] = [
  {
    number: 1,
    title: "Số 1 - Người Lãnh Đạo",
    description:
      "Số 1 đại diện cho sự độc lập, sáng tạo và khả năng lãnh đạo. Bạn là người tiên phong, có tinh thần doanh nhân mạnh mẽ.",
    keywords: ["Độc lập", "Sáng tạo", "Lãnh đạo", "Quyết đoán", "Tham vọng"],
    strengths: ["Tự tin", "Can đảm", "Sáng tạo", "Quyết đoán", "Độc lập"],
    challenges: ["Cứng đầu", "Thiếu kiên nhẫn", "Độc đoán", "Tự cao"],
    career: ["Doanh nhân", "Lãnh đạo", "Quản lý", "Sáng tạo", "Tư vấn"],
    love: ["Trung thành", "Nồng nhiệt", "Bảo vệ", "Cần không gian riêng"],
  },
  {
    number: 2,
    title: "Số 2 - Người Hợp Tác",
    description:
      "Số 2 đại diện cho sự hợp tác, nhạy cảm và khả năng ngoại giao. Bạn là người hòa giải, có trực giác mạnh mẽ.",
    keywords: ["Hợp tác", "Nhạy cảm", "Ngoại giao", "Hòa giải", "Trực giác"],
    strengths: ["Nhạy cảm", "Hợp tác", "Ngoại giao", "Trực giác", "Kiên nhẫn"],
    challenges: [
      "Thiếu quyết đoán",
      "Dễ bị tổn thương",
      "Phụ thuộc",
      "Nhạy cảm quá mức",
    ],
    career: ["Ngoại giao", "Tư vấn", "Giáo dục", "Y tế", "Dịch vụ"],
    love: ["Lãng mạn", "Tận tâm", "Nhạy cảm", "Cần sự an toàn"],
  },
  {
    number: 3,
    title: "Số 3 - Người Sáng Tạo",
    description:
      "Số 3 đại diện cho sự sáng tạo, giao tiếp và niềm vui. Bạn là người lạc quan, có khiếu hài hước và tài năng nghệ thuật.",
    keywords: ["Sáng tạo", "Giao tiếp", "Lạc quan", "Hài hước", "Nghệ thuật"],
    strengths: ["Sáng tạo", "Giao tiếp", "Lạc quan", "Hài hước", "Nhiệt huyết"],
    challenges: [
      "Thiếu tập trung",
      "Thiếu kiên nhẫn",
      "Dễ chán",
      "Thiếu thực tế",
    ],
    career: ["Nghệ sĩ", "Nhà văn", "Diễn giả", "Giáo viên", "Truyền thông"],
    love: ["Lãng mạn", "Vui vẻ", "Sáng tạo", "Cần sự tự do"],
  },
  {
    number: 4,
    title: "Số 4 - Người Thực Tế",
    description:
      "Số 4 đại diện cho sự ổn định, thực tế và làm việc chăm chỉ. Bạn là người đáng tin cậy, có tổ chức và kiên nhẫn.",
    keywords: ["Ổn định", "Thực tế", "Chăm chỉ", "Đáng tin cậy", "Tổ chức"],
    strengths: [
      "Đáng tin cậy",
      "Có tổ chức",
      "Kiên nhẫn",
      "Thực tế",
      "Chăm chỉ",
    ],
    challenges: [
      "Cứng nhắc",
      "Thiếu linh hoạt",
      "Chậm thay đổi",
      "Thiếu sáng tạo",
    ],
    career: ["Kỹ sư", "Kế toán", "Luật sư", "Quản lý", "Xây dựng"],
    love: ["Trung thành", "Ổn định", "Đáng tin cậy", "Cần thời gian"],
  },
  {
    number: 5,
    title: "Số 5 - Người Phiêu Lưu",
    description:
      "Số 5 đại diện cho sự tự do, phiêu lưu và thay đổi. Bạn là người năng động, thích khám phá và có tinh thần mạo hiểm.",
    keywords: ["Tự do", "Phiêu lưu", "Thay đổi", "Năng động", "Mạo hiểm"],
    strengths: [
      "Năng động",
      "Linh hoạt",
      "Thích khám phá",
      "Thích nghi",
      "Tự do",
    ],
    challenges: [
      "Thiếu ổn định",
      "Thiếu kiên nhẫn",
      "Dễ chán",
      "Thiếu cam kết",
    ],
    career: ["Du lịch", "Báo chí", "Thể thao", "Kinh doanh", "Nghệ thuật"],
    love: ["Tự do", "Phiêu lưu", "Năng động", "Cần không gian"],
  },
  {
    number: 6,
    title: "Số 6 - Người Chăm Sóc",
    description:
      "Số 6 đại diện cho sự chăm sóc, trách nhiệm và hài hòa. Bạn là người có trách nhiệm, yêu thương và có khả năng chữa lành.",
    keywords: ["Chăm sóc", "Trách nhiệm", "Hài hòa", "Yêu thương", "Chữa lành"],
    strengths: [
      "Có trách nhiệm",
      "Yêu thương",
      "Chăm sóc",
      "Hài hòa",
      "Chữa lành",
    ],
    challenges: [
      "Quá lo lắng",
      "Thiếu ranh giới",
      "Dễ bị lợi dụng",
      "Quá hoàn hảo",
    ],
    career: ["Y tế", "Giáo dục", "Tư vấn", "Dịch vụ xã hội", "Nghệ thuật"],
    love: ["Tận tâm", "Chăm sóc", "Trung thành", "Cần sự công nhận"],
  },
  {
    number: 7,
    title: "Số 7 - Người Tìm Kiếm",
    description:
      "Số 7 đại diện cho sự tìm kiếm, trí tuệ và tâm linh. Bạn là người có trực giác mạnh mẽ, thích nghiên cứu và tìm hiểu sâu.",
    keywords: ["Tìm kiếm", "Trí tuệ", "Tâm linh", "Trực giác", "Nghiên cứu"],
    strengths: ["Trực giác", "Trí tuệ", "Tìm kiếm", "Phân tích", "Tâm linh"],
    challenges: ["Cô lập", "Thiếu thực tế", "Quá nghi ngờ", "Khó gần gũi"],
    career: ["Nghiên cứu", "Khoa học", "Tâm lý", "Triết học", "Tâm linh"],
    love: ["Sâu sắc", "Trung thành", "Cần không gian", "Khó thể hiện"],
  },
  {
    number: 8,
    title: "Số 8 - Người Thành Công",
    description:
      "Số 8 đại diện cho sự thành công, quyền lực và thịnh vượng. Bạn là người có tham vọng, có tổ chức và có khả năng lãnh đạo.",
    keywords: [
      "Thành công",
      "Quyền lực",
      "Thịnh vượng",
      "Tham vọng",
      "Tổ chức",
    ],
    strengths: ["Tham vọng", "Có tổ chức", "Lãnh đạo", "Thực tế", "Kiên nhẫn"],
    challenges: [
      "Quá tham vọng",
      "Thiếu cân bằng",
      "Quá nghiêm túc",
      "Thiếu linh hoạt",
    ],
    career: ["Kinh doanh", "Tài chính", "Luật", "Quản lý", "Bất động sản"],
    love: ["Trung thành", "Có trách nhiệm", "Bảo vệ", "Cần sự ổn định"],
  },
  {
    number: 9,
    title: "Số 9 - Người Hoàn Thiện",
    description:
      "Số 9 đại diện cho sự hoàn thiện, từ bi và phục vụ. Bạn là người có trái tim nhân hậu, có tầm nhìn rộng và muốn giúp đỡ người khác.",
    keywords: ["Hoàn thiện", "Từ bi", "Phục vụ", "Nhân hậu", "Tầm nhìn"],
    strengths: ["Từ bi", "Có tầm nhìn", "Phục vụ", "Nhân hậu", "Trí tuệ"],
    challenges: [
      "Quá lý tưởng",
      "Thiếu thực tế",
      "Dễ bị tổn thương",
      "Khó buông bỏ",
    ],
    career: ["Từ thiện", "Tư vấn", "Giáo dục", "Y tế", "Nghệ thuật"],
    love: ["Tận tâm", "Từ bi", "Có tầm nhìn", "Cần sự hiểu biết"],
  },
];

export const masterNumbers = [
  {
    number: 11,
    title: "Số 11 - Người Thầy Tâm Linh",
    description:
      "Số 11 là số chủ đạo tâm linh, đại diện cho trực giác siêu phàm và khả năng truyền cảm hứng.",
    keywords: [
      "Tâm linh",
      "Trực giác",
      "Truyền cảm hứng",
      "Sáng tạo",
      "Nhạy cảm",
    ],
    strengths: [
      "Trực giác mạnh mẽ",
      "Truyền cảm hứng",
      "Sáng tạo",
      "Nhạy cảm",
      "Tâm linh",
    ],
    challenges: [
      "Quá nhạy cảm",
      "Thiếu thực tế",
      "Dễ bị tổn thương",
      "Căng thẳng",
    ],
    career: ["Tâm linh", "Truyền cảm hứng", "Nghệ thuật", "Tư vấn", "Giáo dục"],
    love: ["Sâu sắc", "Tâm linh", "Nhạy cảm", "Cần sự hiểu biết"],
  },
  {
    number: 22,
    title: "Số 22 - Người Xây Dựng",
    description:
      "Số 22 là số chủ đạo xây dựng, đại diện cho khả năng biến ước mơ thành hiện thực trên quy mô lớn.",
    keywords: ["Xây dựng", "Thực hiện", "Quy mô lớn", "Tham vọng", "Sáng tạo"],
    strengths: ["Xây dựng", "Thực hiện", "Quy mô lớn", "Tham vọng", "Sáng tạo"],
    challenges: ["Quá tham vọng", "Áp lực cao", "Thiếu cân bằng", "Căng thẳng"],
    career: [
      "Xây dựng",
      "Kiến trúc",
      "Kinh doanh lớn",
      "Chính trị",
      "Nghiên cứu",
    ],
    love: ["Tận tâm", "Có trách nhiệm", "Bảo vệ", "Cần sự ổn định"],
  },
  {
    number: 33,
    title: "Số 33 - Người Thầy Từ Bi",
    description:
      "Số 33 là số chủ đạo từ bi, đại diện cho tình yêu vô điều kiện và khả năng chữa lành.",
    keywords: ["Từ bi", "Chữa lành", "Tình yêu", "Phục vụ", "Tâm linh"],
    strengths: ["Từ bi", "Chữa lành", "Tình yêu", "Phục vụ", "Tâm linh"],
    challenges: [
      "Quá từ bi",
      "Thiếu ranh giới",
      "Dễ bị lợi dụng",
      "Căng thẳng",
    ],
    career: ["Chữa lành", "Từ thiện", "Tư vấn", "Y tế", "Tâm linh"],
    love: ["Từ bi", "Chữa lành", "Tận tâm", "Cần sự hiểu biết"],
  },
];

export const compatibilityMatrix = {
  1: { best: [1, 5, 7], good: [3, 8], challenging: [2, 4, 6, 9] },
  2: { best: [2, 4, 6, 8], good: [1, 7], challenging: [3, 5, 9] },
  3: { best: [1, 5, 7], good: [2, 6], challenging: [4, 8, 9] },
  4: { best: [2, 4, 6, 8], good: [1, 7], challenging: [3, 5, 9] },
  5: { best: [1, 3, 7], good: [6, 9], challenging: [2, 4, 8] },
  6: { best: [2, 4, 6, 8], good: [3, 5], challenging: [1, 7, 9] },
  7: { best: [1, 3, 5], good: [2, 4], challenging: [6, 8, 9] },
  8: { best: [2, 4, 6, 8], good: [1, 7], challenging: [3, 5, 9] },
  9: { best: [2, 6, 9], good: [5], challenging: [1, 3, 4, 7, 8] },
};
