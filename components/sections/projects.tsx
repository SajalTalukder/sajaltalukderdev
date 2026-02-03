/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "../section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export function ProjectsSection() {
  const projects = [
    {
      title: "PhotoFlow – Social Media Platform",
      description:
        "A full-stack Instagram-style social media application with secure authentication and responsive UI. Features include signup/login, email verification, password reset, profile management, image uploads, posts, likes, comments, bookmarks, and follow/unfollow functionality.",
      image: "/images/p3.png",
      technologies: [
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      liveUrl: "https://photoflow-three.vercel.app/",
      githubUrl: "https://github.com/SajalTalukder/photoflow_frontend.git",
      featured: true,
    },
    {
      title: "Event Management System",
      description:
        "A web-based event management system that allows users to create, manage, and register for events. Includes user authentication, event listing, booking functionality, and admin control for event management.",
      image: "/images/p1.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://eventify-woad-seven.vercel.app/",
      githubUrl: "https://github.com/SajalTalukder/event_frontend.git",
      featured: true,
    },
    {
      title: "Bank Review System",
      description:
        "A review and rating platform where users can share feedback and ratings for different banks. Features include user authentication, review submission, rating system, and searchable bank listings.",
      image: "/images/p2.png",
      technologies: [
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/SajalTalukder/bank_frontend.git",
      featured: false,
    },
    {
      title: "Travel Landing Page",
      description:
        "A modern and responsive travel landing page designed to showcase destinations and travel services. Focused on clean UI, smooth layouts, and performance using modern frontend technologies.",
      image: "/images/p4.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://stravel-phi.vercel.app/",
      githubUrl: "https://github.com/SajalTalukder/travel.git",
      featured: false,
    },
  ];

  return (
    <SectionWrapper
      id="projects"
      className="bg-linear-to-b from-background to-green-500/5"
    >
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in
            full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-blue-950  hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 z-20">
                    Featured
                  </Badge>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="flex-1 group/btn" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/SajalTalukder"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaGithub className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
