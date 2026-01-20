'use client'

import { ArrowRight, ChevronRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden noise-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center space-y-8">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight animate-fadeInUp">
            <span className="text-gradient gold-glow">LUCENT</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed animate-fadeInUp delay-100">
            Intelligence where there is friction.
            <br />
            Clarity where there is noise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fadeInUp delay-200">
            <a
              href="https://calendly.com/lucentaiagency/lucent-ai-agency-intro-call?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] text-black font-bold text-sm uppercase tracking-wider hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center gap-2"
            >
              Book a Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 border border-[#D4AF37]/30 text-white font-semibold text-sm uppercase tracking-wider hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="rotate-90 text-[#D4AF37]/40" size={32} />
      </div>
    </section>
  )
}
