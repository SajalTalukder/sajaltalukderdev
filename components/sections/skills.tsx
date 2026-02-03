"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../section-wrapper";
import {
  Code2,
  Zap,
  Database,
  GitBranch,
  Terminal,
  Layout,
  Shield,
  Layers,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const skillIcons: Record<string, React.ComponentType<any>> = {
  React: Code2,
  "Next.js": Zap,
  TypeScript: Code2,
  "Tailwind CSS": Layout,
  "JavaScript (ES6+)": Code2,
  "Node.js": Terminal,
  "Express.js": Layers,
  MongoDB: Database,
  "REST APIs": Database,
  "Authentication (JWT)": Shield,
  "Git & GitHub": GitBranch,
  "VS Code": Code2,
  Postman: Terminal,
  "Responsive Design": Layout,
  "Problem Solving": Zap,
};

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Authentication (JWT)", level: 75 },
      ],
    },
    {
      category: "Tools & Other",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Problem Solving", level: 80 },
      ],
    },
  ];

  return (
    <SectionWrapper
      id="skills"
      className="bg-linear-to-b from-blue-500/5 to-gray-700/5 dark:to-blue-900/9 dark:form-blue-500/9"
    >
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web
            applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-blue-950  transition-all duration-300"
            >
              <h3 className="text-xl mb-6 font-semibold flex items-center gap-2">
                <div className="h-1 w-8 bg-linear-to-r from-blue-400 to-blue-600 rounded-full" />
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill.name] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      whileHover={{ x: 5 }}
                      className="space-y-2 group"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                            <Icon className="h-4 w-4 text-blue-500" />
                          </div>
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full bg-linear-to-r from-blue-400 via-blue-600 to-cyan-600 rounded-full relative overflow-hidden shadow-lg shadow-blue-500/20"
                        >
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-8 rounded-2xl border border-blue-500/30 bg-linear-to-br from-blue-500/10 via-blue-500/5 to-background hover:border-blue-500/60 transition-all duration-300"
        >
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Always Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m constantly expanding my skill set and staying up-to-date
              with the latest web development trends. Currently exploring
              advanced React patterns, system design, and cloud technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
