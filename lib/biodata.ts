export interface PersonalDetail {
  icon: string;
  label: string;
  value: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
}

export interface FamilyMember {
  name: string;
  relation: string;
  role: string;
  icon: string;
  image?: string;
}

export interface Hobby {
  name: string;
  icon: string;
}

export interface Biodata {
  name: string;
  tagline: string;
  about: string;
  personalDetails: PersonalDetail[];
  contactInfo: {
    name: string;
    mobile: string;
    email: string;
    whatsapp: string;
  }[];
  education: EducationEntry[];
  occupation: string;
  family: FamilyMember[];
  hobbies: Hobby[];
  closingNote: string;
}

export const biodata: Biodata = {
  name: "Dhruv Alpeshkumar Parekh",
  tagline: "Building a future rooted in family, ambition & love",
  about:
    "I am a sincere, ambitious, and family-oriented individual currently residing in Canada. I value honesty, respect, and strong family relationships while maintaining a modern outlook on life. I am focused on building a successful professional career and creating a happy and supportive future with my life partner.",
  personalDetails: [
    { icon: "Calendar", label: "Date of Birth", value: "06 December 2002" },
    { icon: "Clock", label: "Age", value: "23 Years" },
    { icon: "Ruler", label: "Height", value: "5'4\"" },
    { icon: "User", label: "Gender", value: "Male" },
    { icon: "Heart", label: "Marital Status", value: "Single" },
    { icon: "Sparkles", label: "Religion", value: "Hindu" },
    { icon: "Users", label: "Caste", value: "Valand" },
    { icon: "Flag", label: "Citizenship", value: "Indian" },
    { icon: "BadgeCheck", label: "Current Status", value: "Work Permit Holder (Canada)" },
    { icon: "Languages", label: "Languages Known", value: "English, Gujarati, Hindi" },
    { icon: "MapPin", label: "Native Place", value: "Kalol, Gandhinagar" },
    { icon: "Map", label: "Maternal Native (Mosal)", value: "Rupal, Gandhinagar" },
    { icon: "Home", label: "Current Residence", value: "Niagara Falls, Ontario, Canada" },
  ],
  contactInfo: [
    {
      name: "Dhruv Parekh (Self)",
      mobile: "+1 (437) 933-8851",
      email: "dhruvparekh6dec@gmail.com",
      whatsapp: "+1 (437) 933-8851",
    },
    {
      name: "Alpeshkumar Parekh (Father)",
      mobile: "+91 9998033450", // Placeholder
      email: "alpeshkumar@example.com", // Placeholder
      whatsapp: "+919998033450",
    }
  ],
  education: [
    {
      degree: "Post Graduate Certificates",
      institution: "Niagara College",
      location: "Canada",
      year: "2025 – 2026",
      description:
        "Supply Chain Management & Hospitality and Tourism Management",
    },
    {
      degree: "Bachelor of Commerce (B.Com.)",
      institution: "Gujarat University",
      location: "India",
      year: "2023",
    },
  ],
  occupation:
    "Currently residing and working in Canada while pursuing career opportunities in the Supply Chain and Logistics industry.",
  family: [
    {
      name: "Alpeshkumar Pravinchandra Parekh",
      relation: "Father",
      role: "Hair Stylist & Owner of Visat Hair & Beauty Salon, Kalol",
      icon: "User",
      image: "/alpesh.svg",
    },
    {
      name: "Hetalben Alpeshkumar Parekh",
      relation: "Mother",
      role: "Homemaker",
      icon: "User",
      image: "/hetal.svg",
    },
    {
      name: "Vedant Alpeshkumar Parekh",
      relation: "Younger Brother",
      role: "Younger Brother",
      icon: "User",
      image: "/vedant.svg",
    },
  ],
  hobbies: [
    { name: "Travelling", icon: "Plane" },
    { name: "Fitness", icon: "Dumbbell" },
    { name: "Learning New Skills", icon: "BookOpen" },
  ],
  closingNote: "Looking forward to building a beautiful journey together",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Details", href: "#details" },
  { label: "Education", href: "#education" },
  { label: "Family", href: "#family" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
