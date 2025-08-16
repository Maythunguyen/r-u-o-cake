"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HighlightProps = {
  children: React.ReactNode;
  className?: string;
  /** start color (hex, rgb, or css var). Use same as `to` for solid. */
  from?: string;
  /** end color (hex, rgb, or css var). Use same as `from` for solid. */
  to?: string;
};

export const Highlight = ({
  children,
  className,
  from = "#c7d2fe", // default (indigo-200-ish)
  to = "#ddd6fe",   // default
}: HighlightProps) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 1, ease: "linear", delay: 0.5 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline-block",
        // the actual color(s):
        backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
      }}
      className={cn("rounded-md px-1.5 py-0.5", className)}
    >
      {children}
    </motion.span>
  );
};
