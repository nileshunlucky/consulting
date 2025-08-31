"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger + Close icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between backdrop-blur-lg shadow-lg bg-black">
      {/* Left Side - Brand */}
      <motion.h1
        className="text-white text-xl font-semibold tracking-wide"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        NILESH SHINDE
      </motion.h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="#services" className="text-gray-300 hover:text-white text-sm">
          Services
        </Link>
        <Link href="#about" className="text-gray-300 hover:text-white text-sm">
          About
        </Link>
        <Link href="#contact" className="text-gray-300 hover:text-white text-sm">
          Contact
        </Link>

        {/* CTA Button */}
        <Link
          href="https://mellvitta.lemonsqueezy.com/buy/f0e054bf-1fbe-48dc-9c60-ee81806168fb"
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative px-8 py-2 text-white font-semibold rounded-full overflow-hidden"
          >
            {/* 🔥 Glow */}
            <motion.div
              className="absolute -inset-6 rounded-full blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(33,150,243,0.9), rgba(13,71,161,0.6), rgba(10,46,115,0) 80%)",
              }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Inner Gradient */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #0D47A1, #1976D2, #0A2E73)",
              }}
            />

            {/* Gloss */}
            <div className="absolute top-0 left-0 w-full h-1/2 rounded-full bg-white/20 blur-md opacity-40" />

            <span className="relative z-10 text-sm tracking-wide">
              Book a Call
            </span>
          </motion.button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-lg shadow-lg flex flex-col items-center gap-6 py-6 md:hidden"
        >
          <Link href="#services" className="text-gray-300 hover:text-white text-lg">
            Services
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white text-lg">
            About
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white text-lg">
            Contact
          </Link>

          {/* CTA Button (mobile) */}
          <Link
            href="https://mellvitta.lemonsqueezy.com/buy/f0e054bf-1fbe-48dc-9c60-ee81806168fb"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative px-8 py-2 text-white font-semibold rounded-full overflow-hidden"
            >
              <motion.div
                className="absolute -inset-6 rounded-full blur-3xl opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(33,150,243,0.9), rgba(13,71,161,0.6), rgba(10,46,115,0) 80%)",
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #0D47A1, #1976D2, #0A2E73)",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-1/2 rounded-full bg-white/20 blur-md opacity-40" />
              <span className="relative z-10 text-sm tracking-wide">
                Book a Call
              </span>
            </motion.button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
