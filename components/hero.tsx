"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
// import { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [stars] = useState<Star[]>(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5,
      duration: 3 + Math.random() * 4,
    })),
  );

  const planets = [
    {
      name: "mercury",
      size: 20,
      distance: 80,
      duration: 15,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "venus",
      size: 28,
      distance: 130,
      duration: 20,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "mars",
      size: 24,
      distance: 180,
      duration: 25,
      color: "from-red-400 to-red-600",
    },
  ];

  return (
    <section
      id="home"
      className="relative dark:bg-[hsl(222.2_84%_4.9%)] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-primary/5" />

      {/* Animated stars background */}
      <div className="absolute inset-0 hidden lg:block">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-sm sm:text-base font-medium text-primary mb-2">
                Welcome to my digital space
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:h-auto">
                <span className="bg-linear-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  SAJAL TALUKDER
                </span>
              </h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6"
              >
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "Tech Instructor",
                    2000,
                    "Software Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-mono"
                />
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Crafting elegant solutions with React, Node.js, and MongoDB. I
              specialize in building scalable MERN Stack applications with a
              focus on performance and user experience. Let&apos;s transform
              ideas into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  className="group bg-linear-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 cursor-pointer"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <Link
                href="/cv/MD_Sajal_Talukder_Junior_MERN_Developer.pdf"
                download
                className="inline-block"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="group hover:bg-primary/10 hover:border-primary cursor-pointer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex gap-4 "
            >
              <motion.a
                href="https://github.com/SajalTalukder"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-border bg-background/50 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <FaGithub className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sajal-talukder/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-border bg-background/50 hover:border-blue-600 hover:bg-blue-600/10 hover:text-blue-600 transition-all duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Space animation with orbiting planets */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-125 flex items-center justify-center">
              {/* Central sun/core */}
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-linear-to-br from-yellow-400 to-orange-600 shadow-2xl shadow-orange-500/50"
                animate={{
                  boxShadow: [
                    "0 0 20px 10px rgba(249, 115, 22, 0.5)",
                    "0 0 40px 15px rgba(249, 115, 22, 0.3)",
                    "0 0 20px 10px rgba(249, 115, 22, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Orbiting planets */}
              {planets.map((planet) => (
                <motion.div
                  key={planet.name}
                  className="absolute"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: planet.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    style={{
                      width: planet.distance * 2,
                      height: planet.distance * 2,
                    }}
                    className="relative rounded-full border border-primary/20"
                  >
                    <motion.div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-${planet.size} h-${planet.size} rounded-full bg-linear-to-br ${planet.color} shadow-lg`}
                      style={{
                        width: planet.size,
                        height: planet.size,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 10px 5px ${planet.color.split(" ")[1]}`,
                          `0 0 20px 8px ${planet.color.split(" ")[1]}`,
                          `0 0 10px 5px ${planet.color.split(" ")[1]}`,
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Decorative rings */}
              <motion.div
                className="absolute w-96 h-96 rounded-full border-2 border-primary/10"
                animate={{
                  rotate: [0, 360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute w-80 h-80 rounded-full border border-blue-500/10"
                animate={{
                  rotate: [360, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
