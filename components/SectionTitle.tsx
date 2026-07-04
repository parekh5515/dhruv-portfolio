"use client";

import { motion } from "framer-motion";
import OrnamentalDivider from "./OrnamentalDivider";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight"
        style={{ color: "#7A1F3D" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 font-body text-base md:text-lg"
          style={{ color: "#554245" }}
        >
          {subtitle}
        </motion.p>
      )}
      <OrnamentalDivider className="mt-6" />
    </div>
  );
}
