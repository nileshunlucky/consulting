"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Sparkles, Rocket, Headphones } from "lucide-react";

export default function Consulting() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-gradient-to-t from-[#0A2E73] via-[#000000] to-[#0A2E73] text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <h2
  className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight  bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
>
  Our Services
</h2>


      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card className="rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-black border border-blue-500/30 shadow-lg shadow-blue-500/20">
          <CardHeader>
            <Sparkles className="w-10 h-10 text-blue-400" />
            <CardTitle className="text-xl font-semibold text-white">
              No-Code AI SaaS Development
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-sm leading-relaxed">
            Build powerful AI SaaS products without writing a single line of
            code. We’ll guide you through the tools and frameworks to launch
            faster and smarter.
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="rounded-2xl bg-gradient-to-br from-blue-800 via-blue-700 to-black border border-blue-400/30 shadow-lg shadow-blue-400/20">
          <CardHeader>
            <Rocket className="w-10 h-10 text-blue-300" />
            <CardTitle className="text-xl font-semibold text-white">
              Monetization Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-sm leading-relaxed">
            Turn your AI SaaS into a profitable business. From pricing models
            to customer acquisition strategies, we help you grow revenue with
            confidence.
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-black border border-blue-300/30 shadow-lg shadow-blue-300/20 ">
          <CardHeader>
            <Headphones className="w-10 h-10 text-blue-200" />
            <CardTitle className="text-xl font-semibold text-white">
              1:1 Premium Consulting
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-sm leading-relaxed">
            Work directly with Nilesh Shinde to validate your ideas, design
            systems, and scale your AI SaaS with personalized expert guidance.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
