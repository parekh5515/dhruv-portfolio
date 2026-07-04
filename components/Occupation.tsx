"use client";

import { motion } from "framer-motion";
import { biodata } from "@/lib/biodata";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Briefcase, MapPin, TrendingUp } from "lucide-react";

export default function Occupation() {
  return (
    <SectionWrapper id="occupation">
      <SectionTitle title="Career" subtitle="Professional journey" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="card-glass rounded-2xl p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full" style={{ background: "linear-gradient(225deg, rgba(212,175,55,0.08), transparent)" }} />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(122,31,61,0.08)" }}>
                <Briefcase size={22} style={{ color: "#7A1F3D" }} />
              </div>
              <div>
                <p className="label-caps">Current Position</p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin size={14} style={{ color: "#D4AF37" }} />
                  <span className="font-body text-sm font-medium" style={{ color: "#554245" }}>Canada</span>
                </div>
              </div>
            </div>
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>{biodata.occupation}</p>
            <div className="mt-6 flex items-center gap-2">
              <TrendingUp size={16} style={{ color: "#D4AF37" }} />
              <span className="label-caps text-[11px]" style={{ color: "#D4AF37" }}>Supply Chain & Logistics</span>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
