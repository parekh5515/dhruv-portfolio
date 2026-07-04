"use client";

import { motion } from "framer-motion";

interface OrnamentalDividerProps {
  className?: string;
}

export default function OrnamentalDivider({ className = "" }: OrnamentalDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1.5px] w-20 md:w-32 origin-right"
        style={{ background: "linear-gradient(90deg, transparent 0%, #D4AF37 100%)" }}
      />
      {/* Mandala ornament */}
      <motion.svg
        initial={{ opacity: 0, rotate: -90, scale: 0 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="0.75" />
        <circle cx="12" cy="12" r="6" stroke="#D4AF37" strokeWidth="0.75" />
        <circle cx="12" cy="12" r="2" fill="#D4AF37" />
        <path d="M12 2 L12 22 M2 12 L22 12" stroke="#D4AF37" strokeWidth="0.5" />
        <path d="M4.93 4.93 L19.07 19.07 M19.07 4.93 L4.93 19.07" stroke="#D4AF37" strokeWidth="0.5" />
      </motion.svg>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1.5px] w-20 md:w-32 origin-left"
        style={{ background: "linear-gradient(90deg, #D4AF37 0%, transparent 100%)" }}
      />
    </div>
  );
}
