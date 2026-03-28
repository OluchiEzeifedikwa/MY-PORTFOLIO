"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    label: "Backend",
    color: "cyan",
    techs: [
      { name: "Node.js", level: 95, icon: "⬡" },
      { name: "Express.js", level: 93, icon: "∴" },
      { name: "Python (Django)", level: 85, icon: "🐍" },
      { name: "RESTful APIs", level: 96, icon: "↔" },
    ],
  },
  {
    label: "Database",
    color: "purple",
    techs: [
      { name: "Prisma ORM", level: 92, icon: "△" },
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "DB Performance", level: 85, icon: "⚡" },
    ],
  },
  {
    label: "Security & Auth",
    color: "emerald",
    techs: [
      { name: "Passport.js", level: 90, icon: "🔐" },
      { name: "JWT", level: 92, icon: "◈" },
      { name: "OAuth2", level: 82, icon: "⟳" },
      { name: "bcrypt / Sessions", level: 88, icon: "□" },
    ],
  },
  {
    label: "Frontend & DevOps",
    color: "orange",
    techs: [
      { name: "React", level: 82, icon: "⚛" },
      { name: "Docker", level: 82, icon: "🐳" },
      { name: "CI/CD Pipelines", level: 80, icon: "⎇" },
      { name: "Vercel / Heroku", level: 85, icon: "☁" },
    ],
  },
];

const colorMap: Record<string, { bar: string; badge: string; border: string }> = {
  cyan: {
    bar: "from-cyan-500 to-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    border: "border-cyan-500/20",
  },
  purple: {
    bar: "from-purple-500 to-purple-400",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    border: "border-purple-500/20",
  },
  emerald: {
    bar: "from-emerald-500 to-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "border-emerald-500/20",
  },
  orange: {
    bar: "from-orange-500 to-orange-400",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    border: "border-orange-500/20",
  },
};

function SkillBar({
  name,
  level,
  icon,
  color,
  delay,
}: {
  name: string;
  level: number;
  icon: string;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const colors = colorMap[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono text-slate-400">{icon}</span>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-slate-600">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" ref={ref} className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Stack</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 max-w-xl">
            The tools and technologies I work with daily to build performant backend systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {techCategories.map((cat, catIndex) => {
            const colors = colorMap[cat.color];
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * catIndex, duration: 0.5 }}
                className={`glass rounded-2xl p-6 border ${colors.border} hover:bg-white/[0.02] transition-colors`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}
                  >
                    {cat.label}
                  </span>
                </div>
                <div className="space-y-5">
                  {cat.techs.map((tech, techIndex) => (
                    <SkillBar
                      key={tech.name}
                      {...tech}
                      color={cat.color}
                      delay={0.2 + catIndex * 0.1 + techIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <p className="text-xs font-mono text-slate-600 mb-4 uppercase tracking-widest">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "Render",
              "GitHub Actions",
              "Swagger / OpenAPI",
              "Postman",
              "Nodemailer",
              "Socket.io",
              "Multer",
              "Fastify",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-mono glass rounded-lg border border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
