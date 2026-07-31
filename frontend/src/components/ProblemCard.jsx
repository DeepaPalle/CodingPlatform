import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Dot } from 'lucide-react'
import { difficultyColor, statusMeta } from '../data/problems.js'

export default function ProblemCard({ problem, index }) {
  const meta = statusMeta[problem.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
    >
      <Link
        to={`/problems/${problem.id}`}
        className="group relative flex items-center gap-4 rounded-xl border border-panel-border bg-panel/70 hover:bg-panel-light/80 hover:border-violet/40 transition-all pl-0 pr-4 sm:pr-5 py-4 focus-ring"
      >
        <span
          className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${meta.color} opacity-80 group-hover:opacity-100`}
        />
        <div className="pl-4 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {problem.status === 'solved' ? (
              <CheckCircle2 size={15} className="text-teal shrink-0" />
            ) : (
              <Circle size={15} className="text-muted2 shrink-0" />
            )}
            <h3 className="font-medium text-ink2 group-hover:text-white transition-colors truncate">
              {problem.title}
            </h3>
          </div>
          <div className="flex items-center flex-wrap gap-x-1 gap-y-1 mt-1.5 text-xs text-muted">
            {problem.tags.map((t, i) => (
              <span key={t} className="flex items-center">
                {i > 0 && <Dot size={12} className="text-muted2" />}
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden sm:block text-right shrink-0">
          <span className="text-xs font-mono text-muted">{problem.acceptance}% acc.</span>
        </div>
        <span
          className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-md border ${difficultyColor[problem.difficulty]}`}
        >
          {problem.difficulty}
        </span>
      </Link>
    </motion.div>
  )
}
