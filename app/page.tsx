"use client"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4FC3F7] via-[#1976D2] to-[#0D47A1] text-white">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
          Nilesh Shinde
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-light text-blue-100">
          AI SaaS Consulting for Entrepreneurs
        </h2>
        <p className="mt-6 text-lg text-blue-200 leading-relaxed">
          Helping founders build and monetize AI SaaS products without code.  
          Premium one-on-one consulting at <span className="font-semibold text-white">$300/hr</span>.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#42A5F5] to-[#1E88E5] text-white font-semibold shadow-lg hover:opacity-90 transition">
            Book a Call
          </button>
          <button className="px-6 py-3 rounded-2xl  border border-blue-200 text-blue-100 hover:bg-blue-900/30 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
