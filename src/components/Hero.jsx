import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
        >
          Vaelin
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">.org</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto"
        >
          The simplest way to launch AI-powered workflows for your business. Build, automate, and scale without managing infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#get-started" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition">Start free</a>
          <a href="#how-it-works" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur border border-white/10 transition">See how it works</a>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-blue-200/80 text-sm">
          <div>✓ No credit card</div>
          <div>✓ API-first</div>
          <div>✓ SOC2-ready</div>
          <div>✓ Fast, global edge</div>
        </div>
      </div>
    </section>
  )
}
