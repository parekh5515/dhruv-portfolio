"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { biodata } from "@/lib/biodata";
import { ChevronDown, Download } from "lucide-react";

const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const handleDownloadPdf = async () => {
    try {
      // Dynamically import the PDF generator to avoid SSR window issues
      const { generateBiodataPdf } = await import('@/lib/generatePdf');
      await generateBiodataPdf();
    } catch (err) {
      console.error("Failed to generate PDF", err);
      alert("Failed to download PDF. Please try again.");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5E6D3 40%, #FFF0E0 70%, #FFF8F0 100%)" }}
    >
      {/* Background decorative mandala elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left mandala */}
        <motion.svg
          variants={floatingVariants}
          animate="animate"
          className="absolute top-16 left-4 md:left-12 w-32 md:w-52 h-32 md:h-52 opacity-[0.08]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="70" stroke="#D4AF37" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="50" stroke="#7A1F3D" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="#D4AF37" strokeWidth="0.5" />
          <path d="M100 10 L100 190 M10 100 L190 100" stroke="#D4AF37" strokeWidth="0.4" />
          <path d="M29.3 29.3 L170.7 170.7 M170.7 29.3 L29.3 170.7" stroke="#D4AF37" strokeWidth="0.3" />
          <ellipse cx="100" cy="100" rx="80" ry="35" transform="rotate(45 100 100)" stroke="#D4AF37" strokeWidth="0.4" />
          <ellipse cx="100" cy="100" rx="80" ry="35" transform="rotate(-45 100 100)" stroke="#D4AF37" strokeWidth="0.4" />
        </motion.svg>

        {/* Bottom-right mandala */}
        <motion.svg
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-24 right-4 md:right-12 w-36 md:w-56 h-36 md:h-56 opacity-[0.07]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="#7A1F3D" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="70" stroke="#D4AF37" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="50" stroke="#7A1F3D" strokeWidth="0.5" />
          <path d="M100 10 Q130 50 100 100 Q70 50 100 10" stroke="#D4AF37" strokeWidth="0.5" />
          <path d="M190 100 Q150 130 100 100 Q150 70 190 100" stroke="#D4AF37" strokeWidth="0.5" />
          <path d="M100 190 Q70 150 100 100 Q130 150 100 190" stroke="#D4AF37" strokeWidth="0.5" />
          <path d="M10 100 Q50 70 100 100 Q50 130 10 100" stroke="#D4AF37" strokeWidth="0.5" />
        </motion.svg>

        {/* Floating gold particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              background: i % 2 === 0 ? "rgba(212, 175, 55, 0.2)" : "rgba(122, 31, 61, 0.1)",
              left: `${10 + i * 7}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Photo Frame */}
        <motion.div variants={fadeUp} className="mx-auto mb-8 md:mb-10">
          <div className="relative inline-block">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full"
              style={{ border: "1px solid rgba(212, 175, 55, 0.25)" }}
            />
            {/* Second ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-7 rounded-full"
              style={{ border: "1px dashed rgba(212, 175, 55, 0.12)" }}
            />
            {/* Photo circle with strong gold border */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                boxShadow: [
                  "0 0 40px rgba(212, 175, 55, 0.2), 0 0 80px rgba(212, 175, 55, 0.08)",
                  "0 0 60px rgba(212, 175, 55, 0.4), 0 0 100px rgba(212, 175, 55, 0.15)",
                  "0 0 40px rgba(212, 175, 55, 0.2), 0 0 80px rgba(212, 175, 55, 0.08)"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center overflow-hidden relative z-10"
              style={{
                border: "3px solid #D4AF37",
              }}
            >
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <NextImage
                  src="/dhruv.svg"
                  alt="Dhruv Alpeshkumar Parekh"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
            {/* Corner ornaments — gold */}
            <div style={{ borderColor: "#D4AF37" }} className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl-sm" />
            <div style={{ borderColor: "#D4AF37" }} className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 rounded-tr-sm" />
            <div style={{ borderColor: "#D4AF37" }} className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 rounded-bl-sm" />
            <div style={{ borderColor: "#D4AF37" }} className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 rounded-br-sm" />
          </div>
        </motion.div>

        {/* Name — strong maroon */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight tracking-tight"
          style={{ color: "#7A1F3D" }}
        >
          {biodata.name}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-6 mb-6 flex items-center justify-center gap-3"
        >
          <div className="h-[2px] w-14 md:w-24" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#D4AF37" />
          </svg>
          <div className="h-[2px] w-14 md:w-24" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="font-body text-lg md:text-xl max-w-lg mx-auto italic"
          style={{ color: "#554245" }}
        >
          &ldquo;{biodata.tagline}&rdquo;
        </motion.p>

        {/* Download PDF Button */}
        <motion.div variants={fadeUp} className="mt-8 flex justify-center no-print">
          <button
            onClick={handleDownloadPdf}
            className="group relative inline-flex items-center gap-2 px-8 py-3 overflow-hidden rounded-full font-body font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer"
            style={{ 
              backgroundColor: "#7A1F3D", 
              color: "#FFF8F0",
              boxShadow: "0 10px 30px -10px rgba(122, 31, 61, 0.5)"
            }}
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
            <span className="relative flex items-center gap-2">
              <Download size={18} />
              Download PDF
            </span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={fadeUp} className="mt-12 md:mt-16 no-print">
          <motion.button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex flex-col items-center gap-2 cursor-pointer transition-colors"
            style={{ color: "#D4AF37" }}
          >
            <span className="label-caps text-[10px]" style={{ color: "#D4AF37" }}>Scroll Down</span>
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
