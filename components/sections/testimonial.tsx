"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      company: "TechStartup Inc",
      feedback:
        "Delivered an exceptional e-commerce platform. The code quality is outstanding and the developer was responsive to all requirements. Highly recommended!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      company: "Digital Agency Pro",
      feedback:
        "Great communication and attention to detail. The website built exceeded our expectations. The developer stayed within timeline and delivered above quality standards.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emma Davis",
      role: "CEO",
      company: "Creative Solutions",
      feedback:
        "Extremely professional and knowledgeable. Built a complex dashboard application with real-time updates. Excellent problem-solving skills throughout the project.",
      rating: 5,
      avatar: "ED",
    },
    {
      name: "James Wilson",
      role: "Business Owner",
      company: "E-Commerce Store",
      feedback:
        "Outstanding work on our mobile-responsive design. The developer implemented features we didn't even think were possible. Would definitely work with them again!",
      rating: 5,
      avatar: "JW",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-blue-500/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-2xl border border-gray-200 dark:border-blue-950 bg-linear-to-br hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Quote mark background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-blue-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.05 }}
                  >
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                &quot;{testimonial.feedback}&quot;
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-blue-950">
                <Avatar className="h-12 w-12 border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-all">
                  <AvatarFallback className="bg-blue-500/10 text-blue-500 font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Confidence message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center p-8 rounded-2xl bg-linear-to-r from-blue-500/10 via-blue-500/10 to-cyan-500/10 border border-blue-500/20"
        >
          <p className="text-lg text-muted-foreground">
            Trusted by{" "}
            <span className="font-bold text-foreground">
              50+ satisfied clients
            </span>{" "}
            on Fiverr with consistent 5-star ratings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
