"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-[var(--spacing-section)] px-6 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 mx-auto max-w-[var(--container-max)] ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
