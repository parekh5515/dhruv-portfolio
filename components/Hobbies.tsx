"use client";

import { motion } from "framer-motion";
import { biodata } from "@/lib/biodata";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

function getIcon(iconName: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[iconName] || LucideIcons.Circle;
}

export default function Hobbies() {
  return (
    <SectionWrapper id="hobbies">
      <SectionTitle title="Hobbies & Interests" subtitle="What keeps me going" />
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-2xl mx-auto">
        {biodata.hobbies.map((hobby, index) => {
          const Icon = getIcon(hobby.icon);
          return (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-full cursor-default group transition-all duration-300"
              style={{
                background: "#FFFCF7",
                border: "1.5px solid rgba(122, 31, 61, 0.2)",
                boxShadow: "0 2px 10px rgba(122, 31, 61, 0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D4AF37";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(212, 175, 55, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(122, 31, 61, 0.2)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(122, 31, 61, 0.04)";
              }}
            >
              <Icon size={20} style={{ color: "#7A1F3D" }} />
              <span className="font-body text-sm md:text-base font-semibold" style={{ color: "#2B2B2B" }}>{hobby.name}</span>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
