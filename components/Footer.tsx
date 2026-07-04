"use client";

import { motion } from "framer-motion";
import { biodata } from "@/lib/biodata";
import OrnamentalDivider from "./OrnamentalDivider";
import { Heart, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative py-16 md:py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #5C0427 0%, #3f0018 100%)" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="fp" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
              <circle cx="100" cy="100" r="60" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
              <circle cx="100" cy="100" r="40" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fp)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <OrnamentalDivider className="mb-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Heart size={28} className="mx-auto mb-5" style={{ color: "#D4AF37" }} fill="#D4AF37" strokeWidth={0} />
          <p className="font-display text-xl md:text-2xl lg:text-3xl italic leading-relaxed max-w-lg mx-auto" style={{ color: "rgba(255,248,240,0.9)" }}>
            &ldquo;{biodata.closingNote}&rdquo;
          </p>
        </motion.div>

        {/* Contact icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {[
            { icon: Phone, href: `tel:${biodata.contactInfo.mobile.replace(/\s|\(|\)|-/g, "")}`, label: "Call" },
            { icon: Mail, href: `mailto:${biodata.contactInfo.email}`, label: "Email" },
            { icon: MessageCircle, href: `https://wa.me/${biodata.contactInfo.whatsapp}`, label: "WhatsApp" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "WhatsApp" ? "_blank" : undefined}
              rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ border: "1px solid rgba(212,175,55,0.35)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212,175,55,0.15)";
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)";
              }}
              aria-label={item.label}
            >
              <item.icon size={16} style={{ color: "#D4AF37" }} />
            </a>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="pt-6" style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}>
          <p className="font-display text-lg" style={{ color: "rgba(212,175,55,0.8)" }}>{biodata.name}</p>
          <p className="font-body text-xs mt-2" style={{ color: "rgba(255,248,240,0.35)" }}>
            Made with <Heart size={10} className="inline-block" style={{ color: "#D4AF37" }} fill="#D4AF37" /> &middot; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
