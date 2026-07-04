"use client";

import { motion } from "framer-motion";
import { biodata } from "@/lib/biodata";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  const contactCategories = [
    {
      icon: Phone,
      label: "Mobile",
      bg: "rgba(122,31,61,0.1)",
      iconColor: "#7A1F3D",
      items: biodata.contactInfo.map((contact) => ({
        name: contact.name.includes("Self") ? "Dhruv" : "Alpeshkumar",
        value: contact.mobile,
        href: `tel:${contact.mobile.replace(/\s|\(|\)|-/g, "")}`,
      })),
    },
    {
      icon: Mail,
      label: "Email",
      bg: "rgba(212,175,55,0.12)",
      iconColor: "#C19A2E",
      items: biodata.contactInfo
        .filter(contact => contact.name.includes("Self"))
        .map((contact) => ({
          name: contact.name.includes("Self") ? "Dhruv" : "Alpeshkumar",
          value: contact.email,
          href: `mailto:${contact.email}`,
      })),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      bg: "rgba(34,139,34,0.08)",
      iconColor: "#228B22",
      items: biodata.contactInfo.map((contact) => ({
        name: contact.name.includes("Self") ? "Dhruv" : "Alpeshkumar",
        value: "Send Message",
        href: `https://wa.me/${contact.whatsapp}`,
        external: true,
      })),
    },
  ];

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get in Touch" subtitle="Let&rsquo;s start a conversation" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        {contactCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card-glass rounded-3xl p-6 md:p-8 text-center flex flex-col items-center group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: category.bg }}
              >
                <Icon size={28} style={{ color: category.iconColor }} />
              </div>
              <h3 className="label-caps mb-6 text-lg" style={{ color: "#D4AF37" }}>{category.label}</h3>
              
              <div className="flex flex-col gap-3 w-full">
                {category.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={(item as any).external ? "_blank" : undefined}
                    rel={(item as any).external ? "noopener noreferrer" : undefined}
                    className="flex flex-col items-center justify-center py-3 px-2 rounded-xl hover:bg-white/40 transition-all border border-transparent hover:border-[#D4AF37]/30 hover:shadow-sm"
                  >
                    <span className="text-[11px] font-bold text-[#7A1F3D] mb-1 uppercase tracking-widest">{item.name}</span>
                    <span className="font-body text-[15px] font-semibold text-[#2B2B2B] break-all">{item.value}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
