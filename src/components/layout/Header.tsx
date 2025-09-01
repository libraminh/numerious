"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Numerious
              </h1>
              <p className="text-xs text-muted-foreground">
                Thần số học Việt Nam
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              href="/calculator"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Máy tính
            </Link>
            <Link
              href="/meanings"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Ý nghĩa số
            </Link>
            <Link
              href="/compatibility"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Tương thích
            </Link>
            <Link
              href="/name-finder"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Tìm tên
            </Link>
            <Link
              href="/pyramid"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Kim tự tháp
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="hidden sm:inline-flex">
              ✨ Miễn phí
            </Badge>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Bắt đầu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
