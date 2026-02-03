"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink, CheckCircle2 } from "lucide-react";
import { SectionWrapper } from "../section-wrapper";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Freelance Web Developer",
      company: "Fiverr",
      period: "2021 - 2023",
      type: "Freelance",
      description: "Building custom web applications for clients worldwide",
      achievements: [
        "Successfully delivered 15+ projects with 5-star ratings",
        "Developed full-stack MERN applications for various business needs",
        "Created responsive and user-friendly interfaces using React and Tailwind CSS",
        "Implemented secure authentication and authorization systems",
        "Integrated third-party APIs and payment gateways",
        "Maintained clear communication and met project deadlines consistently",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      role: "Technical Instructor",
      company: "Youtube",
      period: "2023 - Present",
      type: "Part-time",
      description: "Creating educational content on web development topics",
      achievements: [
        "Grew channel to 6,000+ subscribers and 400,000+ views",
        "Produced 50+ high-quality tutorials on MERN stack development",
        "Explained complex concepts in an easy-to-understand manner",
        "Engaged with the developer community through comments and live sessions",
        "Provided practical coding examples and project walkthroughs",
        "Encouraged best practices and modern development techniques",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
  ];

  return (
    <SectionWrapper
      id="experience"
      className="bg-linear-to-b from-cyan-500/5 to-background"
    >
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in web development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div
                  className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-blue-950  hover:bg-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                          <Briefcase className="h-5 w-5 text-blue-500" />
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                      <a
                        href="#_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-500 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center border-4 border-gray-200 dark:border-gray-800 shadow-lg"
                  >
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
