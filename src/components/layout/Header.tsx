"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Trang chủ"
          >
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
          </Link>

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
            <Badge variant="secondary" className="hidden md:inline-flex">
              ✨ Miễn phí
            </Badge>
            <Button
              size="sm"
              className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Bắt đầu
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Mở menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-4">
                  <Link
                    href="/"
                    className="px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                  >
                    Trang chủ
                  </Link>
                  <Link
                    href="/calculator"
                    className="px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                  >
                    Máy tính
                  </Link>
                  <Link
                    href="/meanings"
                    className="px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                  >
                    Ý nghĩa số
                  </Link>
                  <Link
                    href="/compatibility"
                    className="px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                  >
                    Tương thích
                  </Link>
                  <Link
                    href="/name-finder"
                    className="px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                  >
                    Tìm tên
                  </Link>
                  <Link
                    href="/pyramid"
                    className="px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                  >
                    Kim tự tháp
                  </Link>
                  <Link
                    href="/blog"
                    className="px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                  >
                    Blog
                  </Link>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Bắt đầu
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
