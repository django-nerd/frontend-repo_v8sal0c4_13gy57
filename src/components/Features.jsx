import { Zap, Shield, Plug, Gauge } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Workflow Builder',
    desc: 'Compose AI agents, tools, and human steps into reliable flows with versioning and audit logs.'
  },
  {
    icon: Plug,
    title: 'Integrations',
    desc: 'Connect with your stack: Slack, Gmail, Notion, HubSpot, and custom webhooks in minutes.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'SSO, RBAC, encryption at rest, and data residency ensure your compliance boxes are checked.'
  },
  {
    icon: Gauge,
    title: 'Observability',
    desc: 'Real-time tracing, retries, and cost controls keep your automations fast and affordable.'
  }
]

export default function Features() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Why teams choose Vaelin</h2>
        <p className="text-blue-200/80 text-center mt-3 max-w-2xl mx-auto">Everything you need to move from prototype to production—without glue code or brittle scripts.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
              <Icon className="text-blue-300" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
