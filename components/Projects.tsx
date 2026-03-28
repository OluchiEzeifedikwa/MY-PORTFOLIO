"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Server, Database, Lock, Zap } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const projects = [
  {
    title: "Odin Book",
    description:
      "A full-stack social media platform built with Node.js, Express, and React. Features user authentication with Passport.js, friend requests, posts, comments, likes, and a real-time feed powered by PostgreSQL and Prisma ORM.",
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL", "Passport.js", "React"],
    icon: Server,
    iconColor: "cyan",
    github: "https://github.com",
    live: null,
    featured: true,
    highlights: ["Passport.js Auth", "Friend Requests", "Post & Comment Feed", "Prisma ORM"],
  },
  {
    title: "E-Commerce Backend",
    description:
      "Scalable e-commerce backend supporting product catalog, cart management, order processing, payment webhook integration, and email notifications via Nodemailer.",
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL", "Stripe", "Nodemailer"],
    icon: Database,
    iconColor: "purple",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    highlights: ["Order Pipeline", "Stripe Webhooks", "Email Notifications", "File Uploads"],
  },
  {
    title: "Auth Microservice",
    description:
      "Standalone authentication service using Passport.js (LocalStrategy + JWT). Supports OAuth2 social login, password reset, email verification, refresh token rotation, and secure session management.",
    tags: ["Node.js", "Express", "Passport.js", "JWT", "OAuth2", "Prisma", "PostgreSQL"],
    icon: Lock,
    iconColor: "emerald",
    github: "https://github.com",
    live: null,
    featured: false,
    highlights: ["Passport.js LocalStrategy", "OAuth2 Social Login", "Token Rotation", "Email Verification"],
  },
  {
    title: "Real-Time Chat API",
    description:
      "WebSocket-powered chat API using Socket.io with rooms, direct messages, message history persistence, online presence tracking, and media upload support.",
    tags: ["Node.js", "Socket.io", "Express", "Prisma", "PostgreSQL", "Multer"],
    icon: Zap,
    iconColor: "orange",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    highlights: ["Socket.io Rooms", "Message History", "Presence Tracking", "Media Upload"],
  },
];

const iconColorMap: Record<string, string> = {
  cyan: "from-cyan-500/20 to-cyan-600/20 text-cyan-400",
  purple: "from-purple-500/20 to-purple-600/20 text-purple-400",
  emerald: "from-emerald-500/20 to-emerald-600/20 text-emerald-400",
  orange: "from-orange-500/20 to-orange-600/20 text-orange-400",
};

const tagColorMap: Record<string, string> = {
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  Express: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  Prisma: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  PostgreSQL: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  JWT: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Redis: "bg-red-500/10 text-red-400 border-red-500/20",
  Stripe: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Nodemailer: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Socket.io": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Multer: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  OAuth2: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative glass rounded-2xl p-6 border transition-all duration-300 group ${
        hovered ? "border-white/10 -translate-y-1" : "border-white/5"
      } ${project.featured ? "md:col-span-1" : ""}`}
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-0.5 text-xs font-mono bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full border border-cyan-500/20">
            featured
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconColorMap[project.iconColor]} flex items-center justify-center mb-4`}
      >
        <project.icon size={22} />
      </div>

      {/* Title + description */}
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-1.5 mb-4">
        {project.highlights.map((h) => (
          <div key={h} className="flex items-center gap-1.5 text-xs text-slate-600">
            <div className="w-1 h-1 rounded-full bg-cyan-500" />
            {h}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-0.5 text-xs font-mono rounded-full border ${
              tagColorMap[tag] || "bg-white/5 text-slate-400 border-white/10"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"
        >
          <GithubIcon size={14} />
          Source
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 max-w-xl">
            A selection of backend projects I&apos;ve built — focused on reliability,
            performance, and clean API design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20 rounded-xl text-sm font-medium transition-all"
          >
            <GithubIcon size={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
