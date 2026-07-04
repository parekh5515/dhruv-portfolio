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

export default function PersonalDetails() {
  return (
    <SectionWrapper id="details" className="section-warm">
      <SectionTitle title="Personal Details" subtitle="Know me a little better" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {biodata.personalDetails.map((detail, index) => {
          const Icon = getIcon(detail.icon);
          return (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-5 md:p-6 group cursor-default transition-all duration-300"
              style={{
                background: "rgba(255, 252, 247, 0.9)",
                border: "1px solid rgba(212, 175, 55, 0.15)",
                boxShadow: "0 2px 12px rgba(122, 31, 61, 0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.45)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(212, 175, 55, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.15)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(122, 31, 61, 0.04)";
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ background: "rgba(122, 31, 61, 0.08)" }}
                >
                  <Icon size={20} style={{ color: "#7A1F3D" }} className="group-hover:!text-gold-400 transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="label-caps mb-1.5">{detail.label}</p>
                  <p className="font-body text-sm md:text-[15px] font-semibold leading-snug" style={{ color: "#2B2B2B" }}>
                    {detail.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
