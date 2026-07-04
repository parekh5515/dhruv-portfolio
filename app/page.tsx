"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import PersonalDetails from "@/components/PersonalDetails";
import ContactInfo from "@/components/ContactInfo";
import EducationTimeline from "@/components/EducationTimeline";
import Occupation from "@/components/Occupation";
import FamilyDetails from "@/components/FamilyDetails";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-mandala-pattern">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <PersonalDetails />
        <ContactInfo />
        <EducationTimeline />
        <Occupation />
        <FamilyDetails />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}
