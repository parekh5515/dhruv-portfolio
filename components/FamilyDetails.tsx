"use client";

import { motion } from "framer-motion";
import { biodata } from "@/lib/biodata";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import NextImage from "next/image";

export default function FamilyDetails() {
  return (
    <SectionWrapper id="family" className="section-warm">
      <SectionTitle title="Family" subtitle="The pillars of my life" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
        {biodata.family.map((member, index) => {
          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card-glass rounded-2xl p-6 md:p-8 text-center group cursor-default"
            >
              <div
                className="w-36 h-36 mx-auto rounded-full overflow-hidden flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{ border: "3px solid #D4AF37", padding: "4px", background: "rgba(122,31,61,0.05)" }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <NextImage
                    src={member.image || "/dhruv.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_10%]"
                  />
                </div>
              </div>
              <p className="label-caps mb-2" style={{ color: "#D4AF37" }}>{member.relation}</p>
              <h3 className="font-display text-lg md:text-xl font-semibold leading-snug mb-2" style={{ color: "#7A1F3D" }}>
                {member.name}
              </h3>
              <p className="font-body text-sm" style={{ color: "#554245" }}>{member.role}</p>
              <div className="mt-5 mx-auto w-12 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" }} />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
