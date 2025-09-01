"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div id='contact' className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A2E73] via-[#000000] to-[#0A2E73] text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg relative rounded-3xl overflow-hidden"
      >
        {/* Premium glowing backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/30 via-[#1976D2]/20 to-[#0A2E73]/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(13,71,161,0.4)]" />

        <div className="relative z-10 p-8">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] mb-8">
            Contact Me
          </h1>

          <form
            action="https://formspree.io/f/mblayzvg" // replace with your Formspree ID
            method="POST"
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl bg-black/40 border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl bg-black/40 border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-xl bg-black/40 border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70"
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
              className="relative w-full px-8 py-3 text-white font-semibold rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Glowing gradient aura */}
              <motion.div
                className="absolute -inset-8 rounded-2xl blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(66,165,245,0.8), rgba(13,71,161,0.5), rgba(10,46,115,0) 80%)",
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Main gradient button */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0D47A1] via-[#1976D2] to-[#42A5F5]" />

              {/* Subtle glossy highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-40" />

              <span className="relative z-10 tracking-wide text-base">
                Send Message
              </span>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
