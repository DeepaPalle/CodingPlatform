import { motion } from 'framer-motion'

export default function StatCard({ label, value, sub, icon: Icon, accent = 'violet' }) {
  const accentMap = {
    violet: 'text-violet bg-violet/10 border-violet/30',
    teal: 'text-teal bg-teal/10 border-teal/30',
    amber: 'text-amber bg-amber/10 border-amber/30',
    coral: 'text-coral bg-coral/10 border-coral/30',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-panel-border bg-panel/70 p-5 flex items-start justify-between hover:border-panel-border/100 transition-colors"
    >
      <div>
        <p className="text-xs font-medium text-muted uppercase tracking-wide">{label}</p>
        <p className="font-display text-2xl sm:text-3xl font-semibold mt-1.5 text-ink2">{value}</p>
        {sub && <p className="text-xs text-muted2 mt-1">{sub}</p>}
      </div>
      {Icon && (
        <span className={`h-10 w-10 shrink-0 rounded-lg border flex items-center justify-center ${accentMap[accent]}`}>
          <Icon size={18} />
        </span>
      )}
    </motion.div>
  )
}
