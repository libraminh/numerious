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

// Chi tiết tương thích cho từng cặp số
export const detailedCompatibility = {
  "1-1": {
    level: "best",
    percentage: 95,
    title: "Hai Người Lãnh Đạo",
    description:
      "Cả hai đều có tinh thần lãnh đạo mạnh mẽ, tạo nên một cặp đôi quyền lực và đầy tham vọng.",
    strengths: [
      "Cùng chia sẻ tầm nhìn và mục tiêu",
      "Hỗ trợ lẫn nhau trong sự nghiệp",
      "Tạo động lực mạnh mẽ cho nhau",
      "Có khả năng xây dựng đế chế cùng nhau",
    ],
    challenges: [
      "Có thể tranh giành quyền lãnh đạo",
      "Cần học cách nhường nhịn",
      "Tránh cạnh tranh không lành mạnh",
    ],
    advice: [
      "Hãy phân chia vai trò rõ ràng trong mối quan hệ",
      "Học cách lắng nghe và tôn trọng ý kiến của nhau",
      "Tạo không gian riêng cho mỗi người phát triển",
    ],
    loveCompatibility: "Rất cao - Tình yêu nồng nhiệt và đầy đam mê",
    careerCompatibility:
      "Xuất sắc - Có thể trở thành đối tác kinh doanh tuyệt vời",
    friendshipCompatibility:
      "Tốt - Tình bạn dựa trên sự tôn trọng và ngưỡng mộ",
  },
  "1-2": {
    level: "challenging",
    percentage: 45,
    title: "Lãnh Đạo và Hợp Tác",
    description:
      "Sự khác biệt về tính cách có thể tạo ra thách thức, nhưng cũng có thể bổ sung cho nhau.",
    strengths: [
      "Số 1 mang lại sự quyết đoán",
      "Số 2 mang lại sự nhạy cảm và hòa giải",
      "Có thể cân bằng lẫn nhau",
    ],
    challenges: [
      "Số 1 có thể quá độc đoán",
      "Số 2 có thể quá nhạy cảm",
      "Khác biệt về cách tiếp cận vấn đề",
    ],
    advice: [
      "Số 1 cần học cách kiên nhẫn và lắng nghe",
      "Số 2 cần học cách quyết đoán hơn",
      "Tìm điểm chung và tôn trọng sự khác biệt",
    ],
    loveCompatibility: "Trung bình - Cần nỗ lực để hiểu nhau",
    careerCompatibility: "Tốt - Bổ sung kỹ năng cho nhau",
    friendshipCompatibility: "Khá - Có thể học hỏi từ nhau",
  },
  "1-3": {
    level: "good",
    percentage: 75,
    title: "Lãnh Đạo và Sáng Tạo",
    description:
      "Một cặp đôi năng động với sự kết hợp giữa tham vọng và sáng tạo.",
    strengths: [
      "Cùng có tinh thần tích cực",
      "Số 1 cung cấp định hướng, số 3 mang lại sự sáng tạo",
      "Có thể tạo ra những dự án thú vị",
    ],
    challenges: [
      "Cả hai đều có thể thiếu kiên nhẫn",
      "Cần học cách tập trung vào mục tiêu",
    ],
    advice: [
      "Hãy kết hợp tham vọng với sáng tạo",
      "Học cách kiên nhẫn và hoàn thành dự án",
      "Tận dụng năng lượng tích cực của nhau",
    ],
    loveCompatibility: "Cao - Tình yêu đầy năng lượng và niềm vui",
    careerCompatibility: "Rất tốt - Có thể tạo ra những sản phẩm sáng tạo",
    friendshipCompatibility: "Tốt - Tình bạn vui vẻ và đầy cảm hứng",
  },
  "1-4": {
    level: "challenging",
    percentage: 50,
    title: "Lãnh Đạo và Thực Tế",
    description:
      "Sự khác biệt giữa tinh thần mạo hiểm và thực tế có thể tạo ra xung đột.",
    strengths: [
      "Số 1 mang lại tầm nhìn, số 4 mang lại sự ổn định",
      "Có thể tạo ra sự cân bằng tốt",
    ],
    challenges: [
      "Số 1 có thể thấy số 4 quá chậm chạp",
      "Số 4 có thể thấy số 1 quá mạo hiểm",
      "Khác biệt về tốc độ và cách tiếp cận",
    ],
    advice: [
      "Học cách tôn trọng phong cách của nhau",
      "Số 1 cần kiên nhẫn, số 4 cần linh hoạt hơn",
      "Tìm cách kết hợp tầm nhìn với thực tế",
    ],
    loveCompatibility: "Trung bình - Cần thời gian để hiểu nhau",
    careerCompatibility: "Tốt - Có thể tạo ra dự án bền vững",
    friendshipCompatibility: "Khá - Có thể học hỏi từ nhau",
  },
  "1-5": {
    level: "best",
    percentage: 90,
    title: "Lãnh Đạo và Phiêu Lưu",
    description: "Một cặp đôi hoàn hảo với sự kết hợp giữa tham vọng và tự do.",
    strengths: [
      "Cùng yêu thích tự do và phiêu lưu",
      "Có thể tạo ra những dự án đầy thú vị",
      "Hỗ trợ lẫn nhau trong việc khám phá",
    ],
    challenges: ["Cả hai đều có thể thiếu cam kết", "Cần học cách ổn định"],
    advice: [
      "Hãy tận dụng năng lượng tích cực của nhau",
      "Học cách cân bằng tự do và trách nhiệm",
      "Tạo ra những trải nghiệm thú vị cùng nhau",
    ],
    loveCompatibility: "Rất cao - Tình yêu đầy phiêu lưu và đam mê",
    careerCompatibility: "Xuất sắc - Có thể tạo ra những dự án đổi mới",
    friendshipCompatibility: "Tuyệt vời - Tình bạn đầy thú vị và khám phá",
  },
  "1-6": {
    level: "challenging",
    percentage: 40,
    title: "Lãnh Đạo và Chăm Sóc",
    description:
      "Sự khác biệt về ưu tiên có thể tạo ra thách thức trong mối quan hệ.",
    strengths: [
      "Số 1 mang lại tham vọng, số 6 mang lại sự chăm sóc",
      "Có thể tạo ra sự cân bằng",
    ],
    challenges: [
      "Số 1 có thể thấy số 6 quá bảo thủ",
      "Số 6 có thể thấy số 1 quá ích kỷ",
      "Khác biệt về ưu tiên cuộc sống",
    ],
    advice: [
      "Học cách tôn trọng giá trị của nhau",
      "Số 1 cần học cách chăm sóc người khác",
      "Số 6 cần học cách ủng hộ tham vọng của đối phương",
    ],
    loveCompatibility: "Thấp - Cần nỗ lực lớn để hiểu nhau",
    careerCompatibility: "Trung bình - Có thể bổ sung kỹ năng",
    friendshipCompatibility: "Khá - Có thể học hỏi từ nhau",
  },
  "1-7": {
    level: "best",
    percentage: 85,
    title: "Lãnh Đạo và Tìm Kiếm",
    description:
      "Một cặp đôi trí tuệ với sự kết hợp giữa tham vọng và trí tuệ.",
    strengths: [
      "Cùng có tinh thần độc lập",
      "Số 1 mang lại hành động, số 7 mang lại trí tuệ",
      "Có thể tạo ra những dự án sâu sắc",
    ],
    challenges: [
      "Cả hai đều có thể quá độc lập",
      "Cần học cách giao tiếp tốt hơn",
    ],
    advice: [
      "Hãy tận dụng trí tuệ của nhau",
      "Học cách chia sẻ suy nghĩ và cảm xúc",
      "Tạo ra không gian riêng nhưng vẫn kết nối",
    ],
    loveCompatibility: "Cao - Tình yêu sâu sắc và trí tuệ",
    careerCompatibility: "Xuất sắc - Có thể tạo ra những dự án đột phá",
    friendshipCompatibility: "Tốt - Tình bạn dựa trên sự tôn trọng trí tuệ",
  },
  "1-8": {
    level: "good",
    percentage: 70,
    title: "Lãnh Đạo và Thành Công",
    description:
      "Một cặp đôi quyền lực với sự kết hợp giữa tham vọng và thành công.",
    strengths: [
      "Cùng có tinh thần thành công",
      "Có thể tạo ra đế chế kinh doanh",
      "Hỗ trợ lẫn nhau trong sự nghiệp",
    ],
    challenges: [
      "Có thể cạnh tranh quyền lực",
      "Cần học cách chia sẻ thành công",
    ],
    advice: [
      "Hãy trở thành đối tác thay vì đối thủ",
      "Học cách chia sẻ quyền lực và thành công",
      "Tạo ra mục tiêu chung",
    ],
    loveCompatibility: "Cao - Tình yêu dựa trên sự tôn trọng và thành công",
    careerCompatibility: "Xuất sắc - Có thể tạo ra đế chế kinh doanh",
    friendshipCompatibility: "Tốt - Tình bạn dựa trên sự ngưỡng mộ",
  },
  "1-9": {
    level: "challenging",
    percentage: 35,
    title: "Lãnh Đạo và Hoàn Thiện",
    description: "Sự khác biệt về ưu tiên có thể tạo ra thách thức lớn.",
    strengths: [
      "Số 1 mang lại hành động, số 9 mang lại tầm nhìn",
      "Có thể tạo ra sự cân bằng",
    ],
    challenges: [
      "Số 1 có thể thấy số 9 quá lý tưởng",
      "Số 9 có thể thấy số 1 quá ích kỷ",
      "Khác biệt về mục tiêu cuộc sống",
    ],
    advice: [
      "Học cách tôn trọng giá trị của nhau",
      "Số 1 cần học cách phục vụ người khác",
      "Số 9 cần học cách ủng hộ tham vọng cá nhân",
    ],
    loveCompatibility: "Thấp - Cần nỗ lực rất lớn",
    careerCompatibility: "Trung bình - Có thể tạo ra dự án ý nghĩa",
    friendshipCompatibility: "Khá - Có thể học hỏi từ nhau",
  },
};

// Thêm các cặp tương thích khác
export const additionalCompatibilityPairs = {
  "2-2": {
    level: "best",
    percentage: 95,
    title: "Hai Người Hợp Tác",
    description: "Một cặp đôi hòa hợp với sự hiểu biết sâu sắc về nhau.",
    strengths: [
      "Cùng có khả năng hòa giải",
      "Hiểu nhau một cách tự nhiên",
      "Tạo ra môi trường hòa bình",
    ],
    challenges: ["Có thể thiếu quyết đoán", "Cần học cách đưa ra quyết định"],
    advice: [
      "Hãy tận dụng khả năng hòa giải của nhau",
      "Học cách quyết đoán khi cần thiết",
      "Tạo ra môi trường an toàn cho nhau",
    ],
    loveCompatibility: "Rất cao - Tình yêu hòa hợp và sâu sắc",
    careerCompatibility: "Tốt - Có thể tạo ra môi trường làm việc hòa hợp",
    friendshipCompatibility: "Tuyệt vời - Tình bạn dựa trên sự hiểu biết",
  },
  "2-3": {
    level: "challenging",
    percentage: 45,
    title: "Hợp Tác và Sáng Tạo",
    description: "Sự khác biệt về cách tiếp cận có thể tạo ra thách thức.",
    strengths: [
      "Số 2 mang lại sự nhạy cảm, số 3 mang lại sự sáng tạo",
      "Có thể tạo ra sự cân bằng",
    ],
    challenges: [
      "Số 2 có thể thấy số 3 quá hời hợt",
      "Số 3 có thể thấy số 2 quá nhạy cảm",
      "Khác biệt về cách thể hiện cảm xúc",
    ],
    advice: [
      "Học cách tôn trọng phong cách của nhau",
      "Số 2 cần học cách vui vẻ hơn",
      "Số 3 cần học cách nhạy cảm hơn",
    ],
    loveCompatibility: "Trung bình - Cần nỗ lực để hiểu nhau",
    careerCompatibility: "Tốt - Có thể tạo ra dự án sáng tạo",
    friendshipCompatibility: "Khá - Có thể học hỏi từ nhau",
  },
  "3-3": {
    level: "best",
    percentage: 90,
    title: "Hai Người Sáng Tạo",
    description:
      "Một cặp đôi đầy năng lượng và sáng tạo, luôn mang lại niềm vui cho nhau.",
    strengths: [
      "Cùng có tinh thần lạc quan",
      "Tạo ra môi trường vui vẻ",
      "Hỗ trợ nhau trong sáng tạo",
    ],
    challenges: ["Có thể thiếu thực tế", "Cần học cách tập trung"],
    advice: [
      "Hãy tận dụng năng lượng tích cực của nhau",
      "Học cách hoàn thành dự án",
      "Tạo ra những trải nghiệm thú vị",
    ],
    loveCompatibility: "Rất cao - Tình yêu đầy niềm vui và sáng tạo",
    careerCompatibility: "Tốt - Có thể tạo ra những dự án sáng tạo",
    friendshipCompatibility: "Tuyệt vời - Tình bạn đầy thú vị",
  },
  "4-4": {
    level: "best",
    percentage: 95,
    title: "Hai Người Thực Tế",
    description:
      "Một cặp đôi ổn định và đáng tin cậy, có thể xây dựng tương lai vững chắc.",
    strengths: [
      "Cùng có tính cách ổn định",
      "Hiểu nhau về giá trị thực tế",
      "Có thể xây dựng nền tảng vững chắc",
    ],
    challenges: ["Có thể thiếu sự linh hoạt", "Cần học cách thích nghi"],
    advice: [
      "Hãy tận dụng sự ổn định của nhau",
      "Học cách linh hoạt khi cần thiết",
      "Xây dựng kế hoạch dài hạn",
    ],
    loveCompatibility: "Rất cao - Tình yêu ổn định và bền vững",
    careerCompatibility: "Xuất sắc - Có thể tạo ra dự án bền vững",
    friendshipCompatibility: "Tuyệt vời - Tình bạn đáng tin cậy",
  },
  "5-5": {
    level: "best",
    percentage: 85,
    title: "Hai Người Phiêu Lưu",
    description:
      "Một cặp đôi đầy năng lượng và tự do, luôn tìm kiếm những trải nghiệm mới.",
    strengths: [
      "Cùng yêu thích tự do",
      "Hỗ trợ nhau trong khám phá",
      "Tạo ra những trải nghiệm thú vị",
    ],
    challenges: ["Có thể thiếu cam kết", "Cần học cách ổn định"],
    advice: [
      "Hãy tận dụng tinh thần phiêu lưu của nhau",
      "Học cách cân bằng tự do và trách nhiệm",
      "Tạo ra những kỷ niệm đẹp",
    ],
    loveCompatibility: "Cao - Tình yêu đầy phiêu lưu và tự do",
    careerCompatibility: "Tốt - Có thể tạo ra dự án đổi mới",
    friendshipCompatibility: "Tuyệt vời - Tình bạn đầy thú vị",
  },
  "6-6": {
    level: "best",
    percentage: 95,
    title: "Hai Người Chăm Sóc",
    description:
      "Một cặp đôi đầy tình yêu thương và trách nhiệm, luôn chăm sóc lẫn nhau.",
    strengths: [
      "Cùng có tình yêu thương",
      "Hiểu nhau về trách nhiệm",
      "Tạo ra môi trường ấm áp",
    ],
    challenges: ["Có thể quá lo lắng", "Cần học cách thư giãn"],
    advice: [
      "Hãy tận dụng tình yêu thương của nhau",
      "Học cách chăm sóc bản thân",
      "Tạo ra gia đình hạnh phúc",
    ],
    loveCompatibility: "Rất cao - Tình yêu đầy tình yêu thương",
    careerCompatibility: "Tốt - Có thể tạo ra môi trường chăm sóc",
    friendshipCompatibility: "Tuyệt vời - Tình bạn đầy tình yêu thương",
  },
  "7-7": {
    level: "best",
    percentage: 90,
    title: "Hai Người Tìm Kiếm",
    description:
      "Một cặp đôi trí tuệ và sâu sắc, luôn tìm kiếm ý nghĩa cuộc sống.",
    strengths: [
      "Cùng có tinh thần tìm kiếm",
      "Hiểu nhau về trí tuệ",
      "Có thể tạo ra những cuộc trò chuyện sâu sắc",
    ],
    challenges: ["Có thể quá cô lập", "Cần học cách giao tiếp"],
    advice: [
      "Hãy tận dụng trí tuệ của nhau",
      "Học cách chia sẻ suy nghĩ",
      "Tạo ra không gian riêng nhưng vẫn kết nối",
    ],
    loveCompatibility: "Cao - Tình yêu sâu sắc và trí tuệ",
    careerCompatibility: "Xuất sắc - Có thể tạo ra dự án nghiên cứu",
    friendshipCompatibility: "Tuyệt vời - Tình bạn dựa trên trí tuệ",
  },
  "8-8": {
    level: "best",
    percentage: 85,
    title: "Hai Người Thành Công",
    description:
      "Một cặp đôi quyền lực và tham vọng, có thể tạo ra đế chế kinh doanh.",
    strengths: [
      "Cùng có tinh thần thành công",
      "Hỗ trợ nhau trong sự nghiệp",
      "Có thể tạo ra đế chế kinh doanh",
    ],
    challenges: ["Có thể cạnh tranh quyền lực", "Cần học cách chia sẻ"],
    advice: [
      "Hãy trở thành đối tác thay vì đối thủ",
      "Học cách chia sẻ thành công",
      "Tạo ra mục tiêu chung",
    ],
    loveCompatibility: "Cao - Tình yêu dựa trên thành công",
    careerCompatibility: "Xuất sắc - Có thể tạo ra đế chế kinh doanh",
    friendshipCompatibility: "Tốt - Tình bạn dựa trên sự ngưỡng mộ",
  },
  "9-9": {
    level: "best",
    percentage: 95,
    title: "Hai Người Hoàn Thiện",
    description:
      "Một cặp đôi đầy tình yêu thương và từ bi, luôn muốn giúp đỡ người khác.",
    strengths: [
      "Cùng có tình yêu thương",
      "Hiểu nhau về sứ mệnh",
      "Có thể tạo ra ảnh hưởng tích cực",
    ],
    challenges: ["Có thể quá lý tưởng", "Cần học cách thực tế"],
    advice: [
      "Hãy tận dụng tình yêu thương của nhau",
      "Học cách cân bằng lý tưởng và thực tế",
      "Tạo ra ảnh hưởng tích cực cho thế giới",
    ],
    loveCompatibility: "Rất cao - Tình yêu đầy tình yêu thương",
    careerCompatibility: "Tốt - Có thể tạo ra dự án nhân đạo",
    friendshipCompatibility: "Tuyệt vời - Tình bạn dựa trên tình yêu thương",
  },
};
