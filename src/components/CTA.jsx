import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const submit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'vaelin-landing' })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setEmail('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Get early access</h3>
        <p className="text-blue-200/80 mt-3">Join the waitlist and be first to launch your AI workflows on Vaelin.</p>

        <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={status==='loading'}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-medium shadow-lg shadow-blue-600/30 transition"
          >
            {status==='loading' ? 'Submitting…' : 'Join waitlist'}
          </button>
        </form>

        {status==='success' && (
          <p className="mt-4 text-green-300">Thanks! Well be in touch soon.</p>
        )}
        {status==='error' && (
          <p className="mt-4 text-red-300">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  )
}
