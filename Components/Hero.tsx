"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div
      id="about"
      className="relative min-h-screen md:py-0 py-10 flex items-center justify-center 
                 bg-gradient-to-b from-[#000000] via-[#000000] to-[#0A2E73] text-white"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight 
                       drop-shadow-lg bg-gradient-to-r from-white via-zinc-400 to-zinc-800 
                       bg-clip-text text-transparent"
          >
            Nilesh Shinde
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-light text-blue-100">
            AI SaaS Consulting for Entrepreneurs
          </h2>

          <p className="mt-6 text-base sm:text-lg text-blue-200 leading-relaxed">
            Helping founders build and monetize AI SaaS products without code.  
            Premium one-on-one consulting at{" "}
            <span className="font-semibold text-white">$97/hr</span>.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://mellvitta.lemonsqueezy.com/buy/73ca5ede-afc7-4e90-a011-a65ea8ada81b"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-white 
                         bg-gradient-to-r from-[#0D47A1] to-[#1976D2] 
                         shadow-[0_0_25px_rgba(13,71,161,0.8)] 
                         before:absolute before:inset-0 before:rounded-2xl 
                         before:bg-gradient-to-r before:from-[#42A5F5] before:to-[#1E88E5] 
                         before:blur-2xl before:opacity-60 before:-z-10  
                         hover:before:opacity-90 
                         transition-all duration-300"
            >
              Book a Call
            </a>

            <button
              onClick={() => setShowAbout(true)}
              className="px-6 py-3 rounded-2xl border border-blue-200 text-blue-100 hover:bg-blue-900/30 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/nilesh.jpg"
            alt="Nilesh Shinde"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 
                       rounded-2xl object-cover shadow-2xl border-4 border-blue-800"
          />
        </div>
      </div>

      {/* Fullscreen About Me Modal */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          >
            {/* Grid background (Apple-style subtle lines) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Glass Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative max-w-2xl mx-auto p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-center"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#42A5F5] via-[#1E88E5] to-[#0D47A1] bg-clip-text text-transparent ">
                About Me
              </h3>

              <p className="mt-4 text-blue-100 leading-relaxed">
                Hey, I’m <span className="font-semibold">Nilesh Shinde</span>, {" "}
                <span className="font-semibold">19 year old high school dropout </span> 
                 who chose the path of Entrepreneurship instead of the traditional route.
              </p>

              <p className="mt-3 text-blue-200 leading-relaxed">
                Today, I help <span className="font-semibold">Entrepreneurs</span> and{" "}
                <span className="font-semibold">Creators</span> launch AI SaaS Businesses 
                — with no coding required.
              </p>

              <p className="mt-3 text-blue-200 leading-relaxed">
  My consulting focuses on{" "}
  <span className="font-semibold">Business Models</span>,{" "}
  <span className="font-semibold">Scaling strategies</span>, and
  Monetization frameworks — giving you clarity in the{" "}
  <span className="font-extrabold bg-gradient-to-r from-[#ffcc00] via-[#fffacd] to-[#ffcc00] bg-clip-text text-transparent ">
    AI GOLD RUSH
  </span>.
</p>



              <p className="mt-3 text-blue-200 leading-relaxed">
                If you want to skip trial & error, I’ll help you{" "}
                <span className="font-semibold">turn ideas into profitable SaaS ventures</span>.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowAbout(false)}
                className="mt-6 px-6 py-2 rounded-xl bg-gradient-to-r from-[#0D47A1] to-[#1976D2] 
                           transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
