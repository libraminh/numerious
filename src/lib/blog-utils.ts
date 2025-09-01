/**
 * Utility functions for blog integration with numerology
 */

/**
 * Get blog post URL for a specific number
 * @param number - The numerology number (1-9, 11, 22, 33)
 * @returns Blog post URL or null if no post exists
 */
export function getBlogPostUrlForNumber(number: number): string | null {
  const numberToBlogMap: Record<number, string> = {
    1: "/blog/y-nghia-than-so-hoc-so-1",
    2: "/blog/y-nghia-than-so-hoc-so-2",
    3: "/blog/y-nghia-than-so-hoc-so-3",
    4: "/blog/y-nghia-than-so-hoc-so-4",
    5: "/blog/y-nghia-than-so-hoc-so-5",
    6: "/blog/y-nghia-than-so-hoc-so-6",
    7: "/blog/y-nghia-than-so-hoc-so-7",
    8: "/blog/y-nghia-than-so-hoc-so-8",
    9: "/blog/y-nghia-than-so-hoc-so-9",
    10: "/blog/y-nghia-than-so-hoc-so-10",
    11: "/blog/master-numbers-11-22-33",
    22: "/blog/master-numbers-11-22-33",
    33: "/blog/master-numbers-11-22-33",
  };

  return numberToBlogMap[number] || null;
}

/**
 * Check if a number has a corresponding blog post
 * @param number - The numerology number
 * @returns True if blog post exists
 */
export function hasBlogPostForNumber(number: number): boolean {
  return getBlogPostUrlForNumber(number) !== null;
}

/**
 * Get the blog post title for a specific number
 * @param number - The numerology number
 * @returns Blog post title or null
 */
export function getBlogPostTitleForNumber(number: number): string | null {
  const numberToTitleMap: Record<number, string> = {
    1: "Ý nghĩa thần số học số 1: Bé có tố chất lãnh đạo bẩm sinh",
    2: "Ý nghĩa thần số học số 2: Tính cách hòa hợp và hợp tác",
    3: "Ý nghĩa thần số học số 3: Đứa trẻ sáng tạo và giao tiếp tốt",
    4: "Ý nghĩa thần số học số 4: Tính cách thực tế và có tổ chức",
    5: "Ý nghĩa thần số học số 5: Tự do và phiêu lưu",
    6: "Ý nghĩa thần số học số 6: Số chủ đạo của những người nuôi dưỡng",
    7: "Bé nhà bạn có số chủ đạo là số 7 trong thần số học",
    8: "Ý nghĩa thần số học số 8: Bé có tố chất quản lý và thành công",
    9: "Ý nghĩa thần số học số 9: Tác động tới các bé có số chủ đạo",
    10: "Ý nghĩa thần số học số 10: Giải mã tính cách của bé",
    11: "Master Numbers 11, 22, 33: Những con số đặc biệt",
    22: "Master Numbers 11, 22, 33: Những con số đặc biệt",
    33: "Master Numbers 11, 22, 33: Những con số đặc biệt",
  };

  return numberToTitleMap[number] || null;
}
