"use client";

import { motion } from "framer-motion";
import { biodata } from "@/lib/biodata";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Quote } from "lucide-react";

export default function AboutMe() {
  return (
    <SectionWrapper id="about">
      <SectionTitle title="About Me" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div
          className="rounded-2xl p-8 md:p-12 relative"
          style={{
            background: "linear-gradient(135deg, rgba(255,252,247,0.95) 0%, rgba(245,230,211,0.6) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.25)",
            boxShadow: "0 8px 32px rgba(122, 31, 61, 0.06), 0 2px 8px rgba(43, 43, 43, 0.03)",
          }}
        >
          {/* Decorative quote marks */}
          <Quote size={36} className="absolute top-5 left-5 rotate-180" style={{ color: "rgba(212, 175, 55, 0.35)" }} />
          <Quote size={36} className="absolute bottom-5 right-5" style={{ color: "rgba(212, 175, 55, 0.35)" }} />

          {/* Top gold accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] rounded-b-full" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

          <p className="font-body text-base md:text-lg leading-[1.8] text-center relative z-10 italic" style={{ color: "#2B2B2B" }}>
            &ldquo;{biodata.about}&rdquo;
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
