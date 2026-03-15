"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  title: string;
  text?: string;
  url?: string;
  className?: string;
}

export default function ShareButton({ title, text, url, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: text || title,
          url: shareUrl,
        });
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error("Error sharing:", err);
        }
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={cn(
        "flex h-10 w-10 items-center justify-center border-2 border-slate-900 bg-white transition-all hover:bg-slate-100 dark:border-slate-100 dark:bg-slate-800",
        copied && "border-teal-500 bg-teal-50 dark:bg-teal-900/20",
        className
      )}
      title={copied ? "Link Tersalin!" : "Bagikan"}
    >
      {copied ? (
        <Check className="h-5 w-5 text-teal-600" />
      ) : (
        <Share2 className="h-5 w-5" />
      )}
    </button>
  );
}
