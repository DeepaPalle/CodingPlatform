import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal } from 'lucide-react'
import ProblemCard from '../components/ProblemCard.jsx'
import { problems } from '../data/problems.js'

const difficulties = ['All', 'Easy', 'Medium', 'Hard']
const statuses = ['All', 'solved', 'attempted', 'unsolved']
const statusLabels = { All: 'All', solved: 'Solved', attempted: 'Attempted', unsolved: 'Unsolved' }

export default function Problems() {
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState('All')
  const [status, setStatus] = useState('All')

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
      const matchesDiff = difficulty === 'All' || p.difficulty === difficulty
      const matchesStatus = status === 'All' || p.status === status
      return matchesQuery && matchesDiff && matchesStatus
    })
  }, [query, difficulty, status])

  const solvedCount = problems.filter((p) => p.status === 'solved').length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display font-semibold text-3xl text-white">Problem set</h1>
          <p className="text-muted mt-2">
            {solvedCount} of {problems.length} solved · keep the streak alive
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <SlidersHorizontal size={14} />
          {filtered.length} shown
        </div>
      </div>

      <div className="rounded-xl border border-panel-border bg-panel/60 p-4 mb-8">
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search problems..."
            className="w-full bg-ink border border-panel-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-ink2 placeholder:text-muted2 focus:outline-none focus:border-violet/60 focus:ring-1 focus:ring-violet/40 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-6 mt-4">
          <FilterGroup label="Difficulty" options={difficulties} value={difficulty} onChange={setDifficulty} />
          <FilterGroup
            label="Status"
            options={statuses}
            value={status}
            onChange={setStatus}
            labels={statusLabels}
          />
        </div>
      </div>

      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((p, i) => <ProblemCard key={p.id} problem={p} index={i} />)
        ) : (
          <div className="text-center py-16 text-muted">
            <p className="font-medium text-ink2">No problems match those filters.</p>
            <p className="text-sm mt-1">Try widening your search or clearing a filter.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function FilterGroup({ label, options, value, onChange, labels }) {
  return (
    <div>
      <p className="text-xs font-medium text-muted2 uppercase tracking-wide mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors focus-ring ${
              value === opt
                ? 'bg-violet/15 border-violet/50 text-violet-soft'
                : 'border-panel-border text-muted hover:text-ink2 hover:border-muted2'
            }`}
          >
            {labels ? labels[opt] : opt}
          </button>
        ))}
      </div>
    </div>
  )
}
