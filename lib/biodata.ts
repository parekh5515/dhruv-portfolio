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
    mobile: string;
    email: string;
    whatsapp: string;
  };
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
    { icon: "MapPin", label: "Native Place", value: "Rupal, Gandhinagar, Gujarat" },
    { icon: "Home", label: "Current Residence", value: "Niagara Falls, Ontario, Canada" },
  ],
  contactInfo: {
    mobile: "+1 (437) 933-8851",
    email: "dhruvparekh6dec@gmail.com",
    whatsapp: "+14379338851",
  },
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
      role: "Hair Stylist",
      icon: "User",
    },
    {
      name: "Hetalben Alpeshkumar Parekh",
      relation: "Mother",
      role: "Homemaker",
      icon: "User",
    },
    {
      name: "Vedant Alpeshkumar Parekh",
      relation: "Younger Brother",
      role: "Younger Brother",
      icon: "User",
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
  { label: "Contact", href: "#contact" },
];
