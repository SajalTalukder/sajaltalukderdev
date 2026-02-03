"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/SajalTalukder",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sajal-talukder/",
      color: "hover:text-blue-600",
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@WebDevWarriors",
      color: "hover:text-red-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:sajaltalukder01@gmail.com",
      color: "hover:text-indigo-600",
    },
  ];

  return (
    <footer className="bg-linear-to-t from-blue-500/10 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground p-2 rounded-lg border border-border hover:border-blur-500/50 bg-background/50 hover:bg-blur-500/10 transition-all ${link.color}`}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-2 pt-4 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground">
              {currentYear} • Built with Next.js, TypeScript, and Tailwind CSS
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & Developed with care
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
