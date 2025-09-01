import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background/95">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <h3 className="text-lg font-bold">Numerious</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Khám phá bí ẩn của các con số và hiểu rõ hơn về bản thân thông qua
              thần số học.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Tính năng</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/calculator"
                  className="hover:text-primary transition-colors"
                >
                  Tra cứu thần số học
                </Link>
              </li>
              <li>
                <Link
                  href="/meanings"
                  className="hover:text-primary transition-colors"
                >
                  Ý nghĩa các con số
                </Link>
              </li>
              <li>
                <Link
                  href="/compatibility"
                  className="hover:text-primary transition-colors"
                >
                  Tương thích số học
                </Link>
              </li>
              <li>
                <Link
                  href="/name-finder"
                  className="hover:text-primary transition-colors"
                >
                  Tìm tên phù hợp
                </Link>
              </li>
              <li>
                <Link
                  href="/pyramid"
                  className="hover:text-primary transition-colors"
                >
                  Kim tự tháp cuộc đời
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Tài nguyên</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog thần số học
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@numerious.vn</li>
              <li>Điện thoại: +84 123 456 789</li>
              <li>Địa chỉ: Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Numerious. Tất cả quyền được bảo lưu.</p>
          <p className="mt-2">Được xây dựng với ❤️ tại Việt Nam</p>
        </div>
      </div>
    </footer>
  );
}
