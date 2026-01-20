'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="/logo.png" 
              alt="Lucent Logo" 
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-display text-2xl font-bold tracking-wider text-gradient">
              LUCENT
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-[#D4AF37]' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <a
              href="https://calendly.com/lucentaiagency/lucent-ai-agency-intro-call?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] text-black font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 space-y-4">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-sm uppercase tracking-widest text-white/80 hover:text-[#D4AF37] transition-colors py-2"
              >
                {item}
              </button>
            ))}
            <a
              href="https://calendly.com/lucentaiagency/lucent-ai-agency-intro-call?month=2026-01"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B0] text-black font-semibold text-sm uppercase tracking-wider mt-4"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
