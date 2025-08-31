"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0A2E73] via-[#0B3C91] to-[#081F45] text-white ">
      {/* Glow backdrop */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:rounded-t-3xl before:bg-gradient-to-r before:from-[#42A5F5]/20 before:to-[#1E88E5]/20 before:blur-3xl before:opacity-70 -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold tracking-tight">Nilesh Shinde</h2>
          <p className="mt-2 text-sm text-gray-300">
            AI SaaS Consulting — Helping creators & entrepreneurs build profitable AI SaaS.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-3 text-sm">
          <a href="#services" className="hover:text-[#42A5F5] transition">
            Services
          </a>
          <a href="#about" className="hover:text-[#42A5F5] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[#42A5F5] transition">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex space-x-6 items-start">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://instagram.com/nileshxshinde"
            target="_blank"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/in/nilesh-shinde-169287380"
            target="_blank"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://youtube.com/@nileshxshinde"
            target="_blank"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <Youtube className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-8 p-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Nilesh Shinde — All Rights Reserved.
      </div>
    </footer>
  );
}
