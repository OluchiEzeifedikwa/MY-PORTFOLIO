"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, ChevronRight } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const roles = [
  "Full-Stack Developer",
  "Backend Developer",
  "Node.js Engineer",
  "API Architect",
];

const codeSnippets = [
  `const app = express()`,
  `await prisma.user.create({})`,
  `router.get('/api/v1', ...)`,
  `SELECT * FROM users`,
  `npm run dev`,
  `git push origin main`,
  `const jwt = sign(payload)`,
  `db.transaction(async tx => {})`,
];

function FloatingCode({ text, style }: { text: string; style: React.CSSProperties }) {
  return (
    <div
      className="absolute font-mono text-xs text-cyan-500/20 pointer-events-none whitespace-nowrap select-none"
      style={style}
    >
      {text}
    </div>
  );
}

function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!deleting && charIndex < currentRole.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === currentRole.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, deleting, roleIndex]);

  const floatingPositions = [
    { top: "15%", left: "5%", opacity: 0.6 },
    { top: "25%", right: "8%", opacity: 0.5 },
    { top: "55%", left: "3%", opacity: 0.4 },
    { top: "70%", right: "5%", opacity: 0.6 },
    { top: "40%", left: "8%", opacity: 0.3 },
    { top: "80%", left: "15%", opacity: 0.5 },
    { top: "20%", right: "20%", opacity: 0.4 },
    { top: "65%", right: "15%", opacity: 0.3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* Particle field */}
      <ParticleField />

      {/* Floating code */}
      {codeSnippets.map((snippet, i) => (
        <FloatingCode
          key={i}
          text={snippet}
          style={{
            ...floatingPositions[i],
            animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-white">Oluchi</span>{" "}
          <span className="gradient-text">Ezeifedikwa</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-14 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-2xl md:text-3xl text-slate-300">
            <span className="text-cyan-400">&gt;</span>{" "}
            <span className="text-white">{displayText}</span>
            <span className="text-cyan-400 cursor-blink">_</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build{" "}
          <span className="text-white font-medium">scalable, secure full-stack applications</span>{" "}
          — Node.js/Express &amp; Python backends, React frontends, Passport.js auth, Prisma ORM,
          and Docker-powered deployments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all glow-cyan"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 glass border border-white/10 text-white font-semibold rounded-xl hover:border-cyan-500/40 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={18} />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { href: "https://github.com", icon: GithubIcon, label: "GitHub" },
            { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
            { href: "mailto:oluchi@email.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Icon size={20} />
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
