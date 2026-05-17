"use client";

import { useRef, useState } from "react";
import { Link2, Clipboard, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function UrlInput({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) onChange(text.trim());
      inputRef.current?.focus();
    } catch {
      inputRef.current?.focus();
    }
  };

  const handleExample = () => {
    onChange("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

  return (
    <div className="relative">
      <motion.div
        animate={{
          boxShadow: focused
            ? "0 0 0 1px rgba(199,242,62,0.45), 0 0 60px -8px rgba(199,242,62,0.25)"
            : "0 0 0 1px rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.2 }}
        className="glass-strong relative flex items-center gap-3 rounded-2xl px-4 py-3 sm:px-5 sm:py-4"
      >
        <Link2
          className={cn(
            "h-4 w-4 shrink-0 transition-colors",
            focused ? "text-velocity" : "text-white/40",
          )}
        />
        <input
          ref={inputRef}
          type="url"
          inputMode="url"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="Paste a YouTube link…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          className="flex-1 bg-transparent text-[15px] tracking-tight text-white placeholder:text-white/30 outline-none disabled:opacity-50"
        />
        <button
          type="button"
          onClick={handlePaste}
          className="hidden shrink-0 items-center gap-1.5 rounded-lg border border-line bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] tracking-[0.18em] text-white/60 transition-colors hover:border-line-strong hover:text-white sm:inline-flex"
        >
          <Clipboard className="h-3 w-3" />
          PASTE
        </button>
      </motion.div>

      <div className="mt-2 flex items-center justify-between px-1">
        <span className="font-mono text-[10px] tracking-[0.18em] text-white/35">
          링크만 있으면 됩니다. 회원가입은 없어요.
        </span>
        <button
          type="button"
          onClick={handleExample}
          className="group inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.18em] text-white/45 transition-colors hover:text-velocity"
        >
          예시 링크로 시도
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}
