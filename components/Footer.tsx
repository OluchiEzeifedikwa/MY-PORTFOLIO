"use client";

import { motion } from "framer-motion";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <Terminal size={13} className="text-white" />
          </div>
          <span className="font-mono text-sm text-slate-600">
            <span className="text-cyan-400/60">~/</span>oluchi
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-mono text-slate-700 flex items-center gap-1.5"
        >
          Built with
          <Heart size={10} className="text-red-500/60 fill-red-500/60" />
          using Next.js & Tailwind CSS
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-mono text-slate-700"
        >
          © {new Date().getFullYear()} Oluchi Ezeifedikwa
        </motion.p>
      </div>
    </footer>
  );
}
