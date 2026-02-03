"use client";

import { motion } from "framer-motion";
import { Code2, Trophy, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

export function AchievementsSection() {
  const stats = [
    {
      icon: Code2,
      value: "200+",
      label: "Problems Solved",
      description: "LeetCode & HackerRank",
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Projects Completed",
      description: "For satisfied clients",
    },
    {
      icon: Award,
      value: "5-Star",
      label: "Rating",
      description: "Consistent excellence",
    },
    {
      icon: BookOpen,
      value: "10+",
      label: "Courses Completed",
      description: "Online platforms",
    },
  ];

  const achievements = [
    {
      title: "Technical Mastery",
      items: [
        "Expert in MERN Stack development",
        "Advanced JavaScript & TypeScript",
        "Database design & optimization",
        "RESTful API architecture",
      ],
    },
    {
      title: "Professional Growth",
      items: [
        "Consistent 5-star Fiverr ratings",
        "50+ successful project deliveries",
        "Industry best practices implementation",
        "Agile development methodology",
      ],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-blue-500/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Achievements & Milestones
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition of professional accomplishments and continuous growth
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl border border-gray-200 dark:border-blue-950  hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold bg-linear-to-r from-blue-500 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl border border-gray-200 dark:border-blue-950  space-y-6 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold flex items-center gap-2">
                <div className="h-1 w-8 bg-linear-to-r from-blue-500 to-blue-600 rounded-full" />
                {achievement.title}
              </h3>
              <ul className="space-y-3">
                {achievement.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* YouTube Channel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="mt-12 p-8 sm:p-12 rounded-3xl bg-linear-to-r from-red-500/10 via-blue-500/10 to-blue-600/10 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 group"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-red-600/20 group-hover:bg-red-600/30 transition-colors">
                  <FaYoutube className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold">YouTube Channel</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I create educational content on web development, coding
                tutorials, and tech insights. Subscribe to learn about MERN
                Stack development, JavaScript tips, and best practices.
              </p>
              <div className="flex gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-red-600 hover:bg-red-700 text-white group/btn"
                  >
                    <a
                      href="https://www.youtube.com/@WebDevWarriors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Subscribe
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "6K+", value: "Subscribers" },
                { label: "80+", value: "Videos" },
                { label: "400K+", value: "Views" },
                { label: "98%", value: "Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-xl border border-blue-500/20 bg-background/50 text-center"
                >
                  <div className="text-2xl font-bold text-blue-500">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-linear-to-br from-blue-500/10 via-blue-500/5 to-background border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Commitment to Excellence</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every project is an opportunity to deliver exceptional results. I
              focus on writing clean, efficient code while continuously learning
              new technologies and sharing knowledge with the community. My goal
              is to create impactful solutions that make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
