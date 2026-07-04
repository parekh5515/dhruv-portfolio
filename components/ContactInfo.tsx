"use client";

import { motion } from "framer-motion";
import { biodata } from "@/lib/biodata";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Phone, Mail, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Mobile",
    value: biodata.contactInfo.mobile,
    href: `tel:${biodata.contactInfo.mobile.replace(/\s|\(|\)|-/g, "")}`,
    bg: "rgba(122,31,61,0.1)",
    iconColor: "#7A1F3D",
  },
  {
    icon: Mail,
    label: "Email",
    value: biodata.contactInfo.email,
    href: `mailto:${biodata.contactInfo.email}`,
    bg: "rgba(212,175,55,0.12)",
    iconColor: "#C19A2E",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send a message",
    href: `https://wa.me/${biodata.contactInfo.whatsapp}`,
    bg: "rgba(34,139,34,0.08)",
    iconColor: "#228B22",
  },
];

export default function ContactInfo() {
  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get in Touch" subtitle="Let&rsquo;s start a conversation" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "WhatsApp" ? "_blank" : undefined}
              rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card-glass rounded-2xl p-6 md:p-8 text-center group cursor-pointer"
            >
              <div
                className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: item.bg }}
              >
                <Icon size={24} style={{ color: item.iconColor }} />
              </div>
              <p className="label-caps mb-2" style={{ color: "#D4AF37" }}>{item.label}</p>
              <p className="font-body text-sm md:text-[15px] font-semibold break-all" style={{ color: "#2B2B2B" }}>{item.value}</p>
            </motion.a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
