import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { AchievementsSection } from "@/components/sections/learning";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { TestimonialsSection } from "@/components/sections/testimonial";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default HomePage;
