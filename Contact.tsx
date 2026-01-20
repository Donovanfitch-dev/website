'use client'

import { Calendar, Mail, Linkedin, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gradient">Let's Talk</span>
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Ready to bring clarity to your operations? Book a call or reach out directly.
        </p>

        <div className="space-y-6 mb-12">
          <a
            href="https://calendly.com/lucentaiagency/lucent-ai-agency-intro-call?month=2026-01"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] text-black font-bold text-base uppercase tracking-wider hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            <Calendar size={20} />
            Book a Discovery Call
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8 border-t border-white/10">
          <a
            href="mailto:lucentaiagency@gmail.com"
            className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors group"
          >
            <Mail size={20} />
            <span className="text-sm">lucentaiagency@gmail.com</span>
          </a>
          
          <a
            href="https://www.linkedin.com/company/lucent-ai-agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors group"
          >
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
