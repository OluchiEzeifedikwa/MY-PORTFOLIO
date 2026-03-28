"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react";

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

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    handle: "@ouchi-eze",
    href: "https://github.com",
    color: "hover:text-white hover:border-white/20",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "Oluchi Ezeifedikwa",
    href: "https://linkedin.com",
    color: "hover:text-blue-400 hover:border-blue-500/30",
  },
  {
    icon: Twitter,
    label: "Twitter",
    handle: "@oluchi_dev",
    href: "https://twitter.com",
    color: "hover:text-sky-400 hover:border-sky-500/30",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "oluchi@email.com",
    href: "mailto:oluchi@email.com",
    color: "hover:text-cyan-400 hover:border-cyan-500/30",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with your actual email API
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-cyan-400 text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 max-w-xl">
            Have a project in mind or want to collaborate? Drop me a message — I&apos;m
            always open to interesting backend challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* CTA text */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-mono text-cyan-400">Available for work</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Let&apos;s build something great</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                I&apos;m currently looking for new opportunities — freelance projects, full-time
                roles, or open source collaborations. If you have a backend problem that needs
                solving, I&apos;d love to hear about it.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className={`flex items-center gap-4 p-4 glass rounded-xl border border-white/5 text-slate-500 transition-all ${link.color} group`}
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <link.icon size={17} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 font-mono">{link.label}</div>
                    <div className="text-sm font-medium">{link.handle}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                  placeholder="Project inquiry / collaboration"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  status === "sent"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : status === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 glow-cyan"
                }`}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={16} />
                    Failed to send
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
