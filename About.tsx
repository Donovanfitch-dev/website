'use client'

export default function About() {
  const differentiators = [
    {
      title: 'Automation with intent',
      description: 'We build systems that remove real bottlenecks—not flashy demos that stall in production.'
    },
    {
      title: 'Agentic workflows',
      description: 'Multi-step AI agents that think, act, and adapt across tools and processes.'
    },
    {
      title: 'Built for scale',
      description: 'Architectures designed to grow with your business, not break under it.'
    },
    {
      title: 'Business-first AI',
      description: 'Every implementation ties directly to efficiency, output, and measurable ROI.'
    }
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden noise-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Mission */}
        <div className="text-center mb-24">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient gold-glow">Clarity where there is noise</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/70 mb-8 font-light">
            Intelligence where there is friction.
          </p>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Most organizations aren't broken—they're operating in the dark. Data is fragmented. Processes are manual. Teams are stretched thin maintaining systems instead of improving them. Lucent exists to bring clarity.
          </p>
        </div>

        {/* Why Lucent */}
        <div className="mb-24">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">What sets us apart</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {differentiators.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 border border-white/10 bg-white/5 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <h4 className="text-[#D4AF37] font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl text-white/70 mt-12 font-light italic">
            Lucent doesn't replace teams. We give them leverage.
          </p>
        </div>

        {/* Founder Story */}
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">Founder</p>
            <h3 className="font-display text-3xl font-bold mb-6">Donovan Fitch</h3>
            
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Lucent was founded by a GTM leader who saw firsthand where modern businesses struggle with AI adoption.
              </p>
              <p>
                As a GTM Lead at an AI startup, I work daily at the intersection of sales operations, automation, and applied AI. I integrate LLM APIs into production systems, design multi-step agentic workflows, and architect scalable AI solutions for go-to-market teams.
              </p>
              <p>
                I've built internal GTM workflows and AI agents—including a company-wide GTM Assistant—to automate research, prospecting, and operational tasks. I've also led internal enablement, teaching teams how AI fits into real sales operations.
              </p>
              <p className="text-white/80 font-medium">
                Lucent was created to bring that same level of execution to other organizations. Not as consultants handing over slides, but as builders delivering systems that work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
