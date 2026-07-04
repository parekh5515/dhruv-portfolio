"use client";

import { motion } from "framer-motion";
import { biodata } from "@/lib/biodata";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { GraduationCap, MapPin } from "lucide-react";

export default function EducationTimeline() {
  return (
    <SectionWrapper id="education" className="section-warm">
      <SectionTitle title="Education" subtitle="My academic journey" />
      <div className="max-w-2xl mx-auto relative">
        {/* Gold connecting line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] origin-top"
          style={{ background: "linear-gradient(180deg, #D4AF37 0%, #D4AF37 80%, transparent 100%)" }}
        />
        <div className="space-y-8 md:space-y-12">
          {biodata.education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                className="absolute left-[14px] md:left-[22px] top-6 w-6 h-6 rounded-full flex items-center justify-center z-10"
                style={{
                  background: "#FFF8F0",
                  border: "3px solid #D4AF37",
                  boxShadow: "0 0 16px rgba(212, 175, 55, 0.35)",
                }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: "#D4AF37" }} />
              </motion.div>

              {/* Card */}
              <div
                className="card-glass rounded-2xl p-6 md:p-8 group"
              >
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3" style={{ background: "rgba(122,31,61,0.08)" }}>
                  <span className="label-caps text-[11px]" style={{ color: "#7A1F3D" }}>{edu.year}</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <GraduationCap size={22} style={{ color: "#D4AF37" }} className="flex-shrink-0 mt-1" />
                  <h3 className="font-display text-lg md:text-xl font-semibold leading-snug" style={{ color: "#7A1F3D" }}>
                    {edu.degree}
                  </h3>
                </div>
                {edu.description && (
                  <p className="font-body text-sm ml-[34px] mb-2" style={{ color: "#554245" }}>{edu.description}</p>
                )}
                <div className="flex items-center gap-1.5 ml-[34px]">
                  <MapPin size={14} style={{ color: "#D4AF37" }} />
                  <span className="font-body text-sm" style={{ color: "#554245" }}>{edu.institution}, {edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
