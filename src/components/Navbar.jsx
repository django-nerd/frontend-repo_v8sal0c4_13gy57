import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500" />
          <span className="text-white font-semibold">Vaelin</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-blue-100">
          <a href="#how-it-works" className="hover:text-white">How it works</a>
          <a href="#get-started" className="hover:text-white">Pricing</a>
          <a href="#get-started" className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white">Start free</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-blue-100">
          <a href="#how-it-works" className="block">How it works</a>
          <a href="#get-started" className="block">Pricing</a>
          <a href="#get-started" className="block">Start free</a>
        </div>
      )}
    </header>
  )
}
