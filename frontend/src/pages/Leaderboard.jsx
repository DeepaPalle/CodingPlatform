import { motion } from 'framer-motion'
import { Trophy, Flame, Medal } from 'lucide-react'
import { leaderboard } from '../data/leaderboard.js'

const medalColor = {
  1: 'text-amber',
  2: 'text-muted',
  3: 'text-[#C08552]',
}

export default function Leaderboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16"
    >
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-panel-border bg-panel/60 px-3.5 py-1.5 text-xs font-medium text-muted mb-4">
          <Trophy size={13} className="text-amber" /> Season 4 · resets in 6 days
        </span>
        <h1 className="font-display font-semibold text-3xl text-white">Global leaderboard</h1>
        <p className="text-muted mt-2">Ranked by contest score, accuracy, and solve streak.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {leaderboard.slice(0, 3).map((u, i) => (
          <motion.div
            key={u.rank}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-xl border bg-panel/70 p-5 text-center ${
              u.rank === 1 ? 'border-amber/50 shadow-glow' : 'border-panel-border'
            } ${u.rank === 1 ? 'sm:order-2' : u.rank === 2 ? 'sm:order-1' : 'sm:order-3'}`}
          >
            <Medal size={22} className={`mx-auto mb-2 ${medalColor[u.rank]}`} />
            <div className="h-12 w-12 mx-auto rounded-full bg-gradient-to-br from-violet to-teal flex items-center justify-center font-display font-semibold text-ink mb-3">
              {u.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <p className="font-semibold text-ink2 text-sm truncate">{u.name}</p>
            <p className="text-xs text-muted2">{u.handle}</p>
            <p className="font-display font-semibold text-xl text-white mt-2">{u.score.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl border border-panel-border bg-panel/60 overflow-hidden">
        <div className="grid grid-cols-[3rem_1fr_5rem_5rem] sm:grid-cols-[3rem_1fr_6rem_6rem_6rem] gap-2 px-5 py-3 text-xs font-semibold text-muted uppercase tracking-wide border-b border-panel-border">
          <span>Rank</span>
          <span>User</span>
          <span className="hidden sm:block text-right">Solved</span>
          <span className="text-right">Streak</span>
          <span className="text-right">Score</span>
        </div>
        {leaderboard.map((u, i) => (
          <motion.div
            key={u.rank}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className={`grid grid-cols-[3rem_1fr_5rem_5rem] sm:grid-cols-[3rem_1fr_6rem_6rem_6rem] gap-2 px-5 py-4 items-center border-b border-panel-border/60 last:border-b-0 ${
              u.isSelf ? 'bg-violet/10' : 'hover:bg-panel-light/40'
            } transition-colors`}
          >
            <span className={`font-mono text-sm ${u.rank <= 3 ? medalColor[u.rank] : 'text-muted'}`}>
              #{u.rank}
            </span>
            <div className="min-w-0">
              <p className={`text-sm font-medium truncate ${u.isSelf ? 'text-violet-soft' : 'text-ink2'}`}>
                {u.name} {u.isSelf && <span className="text-xs text-muted2">(you)</span>}
              </p>
              <p className="text-xs text-muted2 truncate">{u.handle}</p>
            </div>
            <span className="hidden sm:block text-right text-sm font-mono text-muted">{u.solved}</span>
            <span className="text-right text-sm font-mono text-muted flex items-center justify-end gap-1">
              <Flame size={12} className="text-amber" /> {u.streak}
            </span>
            <span className="text-right text-sm font-mono font-semibold text-ink2">{u.score.toLocaleString()}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
