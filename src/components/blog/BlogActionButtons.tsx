"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogActionButtonsProps {
  title: string;
  excerpt: string;
  url: string;
}

export default function BlogActionButtons({
  title,
  excerpt,
  url,
}: BlogActionButtonsProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Đã copy link bài viết!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        variant="outline"
        onClick={handleShare}
        className="flex items-center gap-2"
      >
        <span>🔗</span>
        Chia sẻ bài viết
      </Button>

      <Button
        variant="outline"
        onClick={handlePrint}
        className="flex items-center gap-2"
      >
        <span>🖨️</span>
        In bài viết
      </Button>

      <Link href="/calculator">
        <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <span>🧮</span>
          Thử máy tính thần số học
        </Button>
      </Link>
    </div>
  );
}
