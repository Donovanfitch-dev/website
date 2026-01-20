'use client'

import { Check, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'AI Website Design',
      description: 'Modern, conversion-focused websites built with intelligent design systems. We create digital experiences that scale with your business and convert visitors into customers.',
      features: [
        'Custom design & development',
        'AI-enhanced user flows',
        'Content systems that scale',
        'Add on: Performance & SEO optimization'
      ]
    },
    {
      title: 'AI Automation',
      description: 'Production-grade automation for sales, operations, and workflows. Multi-step AI agents that integrate with your existing tools—not flashy demos that stall.',
      features: [
        'Workflow automation (n8n, custom)',
        'LLM API integrations',
        'Agentic multi-step workflows',
        'Sales & GTM automation'
      ]
    }
  ]

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Production-grade AI solutions that drive real business outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative p-8 lg:p-12 border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[#D4AF37]/30 transition-all duration-500 card-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gradient">
                  {service.title}
                </h3>
                
                <p className="text-white/70 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="text-sm uppercase tracking-wider text-[#D4AF37] font-semibold">What's Included</p>
                  {service.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check className="text-[#D4AF37] flex-shrink-0 mt-1" size={18} />
                      <span className="text-white/60 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://calendly.com/lucentaiagency/lucent-ai-agency-intro-call?month=2026-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4E5B0] transition-colors group/link"
                >
                  <span className="text-sm uppercase tracking-wider font-semibold">Learn More</span>
                  <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
