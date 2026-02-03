"use client";

import { motion } from "framer-motion";
import { Code2, Users, Lightbulb, Target } from "lucide-react";
import { SectionWrapper } from "../section-wrapper";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with clients and team members",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Analytical thinking and creative solutions to complex challenges",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results and continuous improvement",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      className="bg-linear-to-b dark:from-blue-900/9 dark:to-blue-500/9"
    >
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a{" "}
                <span className="text-foreground font-semibold">
                  Junior Software Developer
                </span>{" "}
                specializing in the{" "}
                <span className="text-foreground font-semibold">
                  MERN Stack
                </span>{" "}
                (MongoDB, Express.js, React, Node.js). My journey in web
                development has been driven by a passion for creating impactful
                digital solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I&apos;ve gained practical experience through{" "}
                <span className="text-foreground font-semibold">
                  freelance work on Fiverr
                </span>
                , where I&apos;ve successfully delivered projects for clients
                worldwide. This experience has taught me the importance of clear
                communication, meeting deadlines, and exceeding client
                expectations.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I&apos;m currently seeking opportunities to join a dynamic team
                where I can contribute my skills, learn from experienced
                developers, and grow as a professional. I believe in writing
                clean, efficient code and staying updated with the latest
                technologies and best practices.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me solving problems
                on LeetCode, exploring new frameworks, or contributing to
                open-source projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-xl border border-gray-200 dark:border-blue-950 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
