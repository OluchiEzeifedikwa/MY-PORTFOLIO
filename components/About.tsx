"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Code2, Coffee, Zap } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "15+", label: "APIs Designed" },
  { value: "1", label: "Open Source Contrib." },
];

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    desc: "React frontends, Node.js/Python backends — end-to-end delivery",
  },
  {
    icon: Zap,
    title: "Security & Auth",
    desc: "Passport.js (LocalStrategy, JWT), OAuth2, session management",
  },
  {
    icon: Coffee,
    title: "API Design & DevOps",
    desc: "RESTful APIs, Docker, CI/CD pipelines on Vercel, Heroku & Render",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Terminal card */}
            <div className="glass rounded-2xl p-6 mb-8 border border-white/5">
              {/* Terminal top bar */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-slate-500 ml-2">about.json</span>
              </div>
              <pre className="font-mono text-sm leading-relaxed">
                <span className="text-slate-500">{"{"}</span>
                {"\n"}
                <span className="text-slate-500">{"  "}</span>
                <span className="text-cyan-400">&quot;name&quot;</span>
                <span className="text-slate-500">: </span>
                <span className="text-green-400">&quot;Oluchi Ezeifedikwa&quot;</span>
                <span className="text-slate-500">,</span>
                {"\n"}
                <span className="text-slate-500">{"  "}</span>
                <span className="text-cyan-400">&quot;role&quot;</span>
                <span className="text-slate-500">: </span>
                <span className="text-green-400">&quot;Full-Stack Developer&quot;</span>
                <span className="text-slate-500">,</span>
                {"\n"}
                <span className="text-slate-500">{"  "}</span>
                <span className="text-cyan-400">&quot;stack&quot;</span>
                <span className="text-slate-500">: [</span>
                <span className="text-yellow-400">&quot;Node.js&quot;</span>
                <span className="text-slate-500">, </span>
                <span className="text-yellow-400">&quot;Express&quot;</span>
                <span className="text-slate-500">, </span>
                <span className="text-yellow-400">&quot;Prisma&quot;</span>
                <span className="text-slate-500">, </span>
                <span className="text-yellow-400">&quot;Python&quot;</span>
                <span className="text-slate-500">, </span>
                <span className="text-yellow-400">&quot;React&quot;</span>
                <span className="text-slate-500">],</span>
                {"\n"}
                <span className="text-slate-500">{"  "}</span>
                <span className="text-cyan-400">&quot;available&quot;</span>
                <span className="text-slate-500">: </span>
                <span className="text-purple-400">true</span>
                {"\n"}
                <span className="text-slate-500">{"}"}</span>
              </pre>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a full-stack developer with a strong backend focus, crafting{" "}
                <span className="text-white">scalable, secure applications</span> from API design
                to database modeling and deployment. I thrive at the intersection of clean
                architecture and real-world performance.
              </p>
              <p>
                My backend toolkit centers on{" "}
                <span className="text-cyan-400">Node.js + Express</span> and{" "}
                <span className="text-cyan-400">Python (Django)</span>, with{" "}
                <span className="text-cyan-400">Prisma ORM</span> and PostgreSQL for data. On
                the frontend I build dynamic, responsive UIs with{" "}
                <span className="text-cyan-400">React</span>, HTML5, and CSS3.
                Auth flows are my specialty — I&apos;ve implemented{" "}
                <span className="text-white">Passport.js</span> (LocalStrategy &amp; JWT),
                OAuth2, and secure session management across multiple projects.
              </p>
              <p>
                I deploy on <span className="text-white">Vercel, Heroku, and Render</span>,
                containerize with Docker, and maintain CI/CD pipelines for streamlined delivery.
                I&apos;m also an open-source contributor — I contributed to the{" "}
                <span className="text-white">Fastify</span> ecosystem by improving docs and
                fixing broken links.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-6 text-sm text-slate-500">
              <MapPin size={14} className="text-cyan-400" />
              <span>Nigeria — Open to Remote</span>
            </div>
          </motion.div>

          {/* Right — Stats + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-5 border border-white/5 text-center group hover:border-cyan-500/20 transition-colors"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-5 border border-white/5 flex items-start gap-4 glass-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
