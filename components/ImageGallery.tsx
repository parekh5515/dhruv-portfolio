"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const images = [
  "/dhruv1.svg",
  "/dhruv2.svg",
  "/dhruv3.svg",
  "/dhruv4.svg",
  "/dhruv5.svg",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Handle keyboard navigation for the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <SectionWrapper id="gallery" className="pt-20 pb-20">
        <SectionTitle title="Gallery" subtitle="Memories & Moments" />
        
      {/* Auto-scrolling horizontal slider */}
      <div className="relative w-full overflow-hidden mt-12 py-8 group/slider">
        {/* Fading edges for the slider */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #FFF8F0, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #FFF8F0, transparent)" }} />

        {/* The marquee container */}
        <div className="animate-marquee gap-8">
           {[...images, ...images].map((src, idx) => (
             <div 
               key={idx} 
               className="flex-shrink-0 cursor-pointer group"
               onClick={() => openLightbox(idx % images.length)}
             >
               <div className="relative w-64 h-80 md:w-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(122,31,61,0.12)] border-[3px] border-transparent group-hover:border-[#D4AF37] transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)]">
                 <NextImage
                   src={src}
                   alt={`Gallery image ${idx + 1}`}
                   fill
                   className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
                 />
                 {/* Premium overlay gradient on hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F3D]/60 via-[#7A1F3D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               </div>
             </div>
           ))}
        </div>
      </div>
    </SectionWrapper>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1a1a]/95 backdrop-blur-md p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-[#D4AF37] transition-colors z-[110] p-2"
              onClick={closeLightbox}
            >
              <X size={40} strokeWidth={1.5} />
            </button>

            <button 
              className="absolute left-2 md:left-10 text-white/70 hover:text-[#D4AF37] transition-all z-[110] p-3 rounded-full hover:bg-white/10 hover:scale-110"
              onClick={prevImage}
            >
              <ChevronLeft size={48} strokeWidth={1.5} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-[90vw] h-[80vh] md:h-[90vh] z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              <NextImage
                src={images[selectedImage]}
                alt={`Gallery image full`}
                fill
                className="object-contain"
              />
            </motion.div>

            <button 
              className="absolute right-2 md:right-10 text-white/70 hover:text-[#D4AF37] transition-all z-[110] p-3 rounded-full hover:bg-white/10 hover:scale-110"
              onClick={nextImage}
            >
              <ChevronRight size={48} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
