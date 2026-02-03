"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  const education = [
    {
      school: "University Of Rajshahi",
      degree: "Bachelor of Science",
      field: "Electrical and Electronic Engineering",
      year: "2020 - 2025",
      description:
        "Pursuing a degree in Electrical and Electronic Engineering and self-studying web development technologies.",
      achievements: [
        "GPA: 3.65/4.0",

        "Relevant Coursework: Data Structures, Computer Networking, Algorithms, Microprocessors and Microcontrollers",
      ],
    },
    {
      school: "Udemy",
      degree: "Professional Certification",
      field: "MERN Stack Development",
      year: "2020 - 2022",
      description:
        "Completed comprehensive courses on modern web development and full-stack JavaScript.",
      achievements: [
        "Completed 50+ hours of advanced React and Next.js training",
        "Node.js & Express.js Mastery Program",
        "MongoDB & Database Design Certification",
      ],
    },
  ];

  const expertise = [
    {
      title: "Full Stack Development",
      description:
        "End-to-end development from frontend UI/UX to backend API design and database management.",
      icon: BookOpen,
    },
    {
      title: "Web Technologies",
      description:
        "Proficient in modern JavaScript frameworks, responsive design, and real-time applications.",
      icon: Award,
    },
    {
      title: "Problem Solving",
      description:
        "Strong analytical skills with experience in debugging, optimization, and system design.",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-500/5 to-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Education Section */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-gray-200 dark:border-blue-950  hover:border-blue-500/50 dark:bg-blue-950/8 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-blue-500" />
                  </div>
                  <Badge variant="secondary">{edu.year}</Badge>
                </div>

                <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-blue-500 font-semibold mb-2">{edu.school}</p>
                <p className="text-muted-foreground mb-4">{edu.field}</p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Core Expertise
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-2xl border border-gray-200 dark:border-blue-950 bg-linear-to-br from-blue-500/10 to-cyan-500/10 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors w-fit mb-4">
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
