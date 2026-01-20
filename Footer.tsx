'use client'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Lucent Logo" 
              className="h-8 w-8"
            />
            <span className="font-display text-xl font-bold text-gradient">
              LUCENT
            </span>
          </div>
          
          <div className="text-sm text-white/40">
            © 2026 Lucent AI Agency. Intelligence where there is friction.
          </div>
        </div>
      </div>
    </footer>
  )
}
