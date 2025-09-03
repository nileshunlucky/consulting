"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What exactly do you help with in AI SaaS consulting?",
    answer:
      "I provide end-to-end guidance — from validating your SaaS idea, creating a profitable roadmap, choosing the right AI tech stack, to scaling your product with proven growth strategies.",
  },
  {
    question: "Who is this consulting best suited for?",
    answer:
      "Entrepreneurs, creators, and businesses who want to build AI-powered SaaS products fast, avoid costly mistakes, without learning Coding skill that actually work in today’s market.",
  },
{
question: "Do you also provide technical implementation?",
answer:
"I do not provide done-for-you technical implementation. However, as a Software developer, I guide you on the right tools, frameworks, and best practices so your team or hired developers can execute with clarity and confidence.",
},
  {
    question: "What makes your consulting different?",
    answer:
      "I combine AI product development expertise with real business strategy — not just coding. You get a roadmap that’s aligned with market demand and monetization opportunities.",
  },
  {
    question: "Can you help me scale my AI SaaS?",
    answer:
      "Absolutely. I’ll guide you through user acquisition, pricing models, automation, and leveraging AI trends so your SaaS grows sustainably and profitably.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="FAQ" className="w-full py-16 px-6 bg-gradient-to-b from-[#0A2E73] via-black to-[#0A2E73] text-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-300">
          Everything you need to know about my AI SaaS consulting roadmap & strategy.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-lg"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
