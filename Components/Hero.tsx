"use client";

export default function Home() {
  return (
    <div id="about" className="min-h-screen md:py-0 py-10 flex items-center justify-center bg-gradient-to-b from-[#000000] via-[#000000] to-[#0A2E73] text-white">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Content Section - Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <h1
      className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg bg-gradient-to-r from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent"
  >
   Nilesh Shinde
      </h1>

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-light text-blue-100">
            AI SaaS Consulting for Entrepreneurs
          </h2>
          <p className="mt-6 text-base sm:text-lg text-blue-200 leading-relaxed">
            Helping founders build and monetize AI SaaS products without code.  
            Premium one-on-one consulting at{" "}
            <span className="font-semibold text-white">$300/hr</span>.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://mellvitta.lemonsqueezy.com/buy/f0e054bf-1fbe-48dc-9c60-ee81806168fb"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-white 
                         bg-gradient-to-r from-[#0D47A1] to-[#1976D2] 
                         shadow-[0_0_25px_rgba(13,71,161,0.8)] 
                         before:absolute before:inset-0 before:rounded-2xl 
                         before:bg-gradient-to-r before:from-[#42A5F5] before:to-[#1E88E5] 
                         before:blur-2xl before:opacity-60 before:-z-10  
                         hover:before:opacity-90 hover:shadow-[0_0_40px_rgba(66,165,245,0.9)]  
                         transition-all duration-300"
            >
              Book a Call
            </a>

            <button className="px-6 py-3 rounded-2xl border border-blue-200 text-blue-100 hover:bg-blue-900/30 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Profile Image - Right Side */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/nilesh.jpg" 
            alt="Nilesh Shinde" 
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 
                       rounded-2xl object-cover shadow-2xl border-4 border-blue-800"
          />
        </div>
      </div>
    </div>
  );
}
