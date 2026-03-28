"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, GitMerge } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Full-Stack Developer",
    company: "",
    location: "Remote",
    period: "2023 — Present",
    description:
      "Building scalable full-stack applications with Node.js/Express backends and React frontends. Implementing robust auth flows with Passport.js, designing Prisma ORM schemas, and deploying containerized services via Docker and CI/CD pipelines.",
    highlights: [
      "Implemented Passport.js LocalStrategy + JWT auth with refresh token rotation",
      "Designed PostgreSQL schemas with Prisma ORM for multi-tenant SaaS platform",
      "Built dynamic React UIs with responsive design and RESTful API integration",
      "Set up CI/CD pipelines and Docker containerization deployed on Render & Heroku",
    ],
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL", "Passport.js", "React", "Docker"],
  },
  {
    type: "work",
    role: "Backend Developer",
    company: "",
    location: "Lagos, Nigeria",
    period: "2022 — 2023",
    description:
      "Developed RESTful APIs and backend services using Node.js and Python (Django). Focused on secure authentication, database performance tuning, and API design with full OpenAPI documentation.",
    highlights: [
      "Built RESTful APIs with Node.js/Express and Python Django for web applications",
      "Implemented JWT and session-based auth ensuring data protection best practices",
      "Optimized PostgreSQL queries and database schemas for improved throughput",
      "Wrote Swagger/OpenAPI documentation and deployed services to Vercel and Heroku",
    ],
    tags: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "JWT", "Swagger"],
  },
  {
    type: "opensource",
    role: "Open-Source Contributor",
    company: "Fastify",
    location: "GitHub",
    period: "2023",
    description:
      "Contributed to the Fastify Node.js web framework — one of the fastest HTTP servers in the Node.js ecosystem. Focused on documentation quality and developer experience improvements.",
    highlights: [
      "Improved official documentation clarity and structure",
      "Fixed broken links across the Fastify docs site",
      "Engaged with the community through pull requests and code review",
    ],
    tags: ["Node.js", "Fastify", "Open Source", "Technical Writing"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 relative">
      <div className="absolute top-0 left-1/2 w-80 h-80 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 max-w-xl">
            My professional journey in backend development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 rounded-full bg-[#050510] border-2 border-cyan-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            exp.type === "work"
                              ? "bg-cyan-500/10 text-cyan-400"
                              : exp.type === "opensource"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-purple-500/10 text-purple-400"
                          }`}
                        >
                          {exp.type === "work" ? (
                            <Briefcase size={14} />
                          ) : exp.type === "opensource" ? (
                            <GitMerge size={14} />
                          ) : (
                            <GraduationCap size={14} />
                          )}
                        </div>
                        <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-slate-400 text-sm font-medium">
                        {exp.company ? `${exp.company} · ` : ""}{exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono bg-white/5 text-slate-500 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
