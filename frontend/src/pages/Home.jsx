import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Gauge,
  GitBranch,
  Trophy,
  Timer,
  Sparkles,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'
import CodeEditorPreview from '../components/CodeEditorPreview.jsx'
import ProblemCard from '../components/ProblemCard.jsx'
import { problems } from '../data/problems.js'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-panel-border bg-panel/60 px-3.5 py-1.5 text-xs font-medium text-muted mb-6"
            >
              <Sparkles size={13} className="text-amber" />
              1,200+ problems · live performance scoring
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-white"
            >
              Practice code that
              <br />
              behaves like a <span className="text-gradient">real interview.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-lg">
              Solve curated problems, run against hidden test cases, and get a runtime + complexity
              breakdown the moment you submit — not a guess, an actual assessment.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/problems"
                className="group inline-flex items-center gap-2 bg-violet hover:bg-violet-soft text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-glow focus-ring"
              >
                Start solving
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/leaderboard"
                className="inline-flex items-center gap-2 border border-panel-border hover:border-muted2 text-ink2 font-medium px-6 py-3.5 rounded-xl transition-colors focus-ring"
              >
                View leaderboard
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-8 text-sm">
              <Stat n="1,200+" l="problems" />
              <Stat n="48ms" l="avg. judge time" />
              <Stat n="120k+" l="developers" />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <CodeEditorPreview />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-xl mb-14">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white">
            Built like a real judge, not a quiz app
          </h2>
          <p className="text-muted mt-3">
            Every submission runs through the same pipeline a technical interview would use — correctness,
            edge cases, and performance, scored together.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Gauge, title: 'Runtime scoring', desc: 'See exact runtime and memory against percentile benchmarks the instant you submit.', accent: 'violet' },
            { icon: GitBranch, title: 'Hidden test suites', desc: 'Each problem ships with edge-case tests you never see until you run them.', accent: 'teal' },
            { icon: Trophy, title: 'Ranked contests', desc: 'Weekly timed contests that feed directly into your global ranking.', accent: 'amber' },
            { icon: Timer, title: 'Mock interviews', desc: 'Simulate a 45-minute interview loop with a countdown and follow-up prompts.', accent: 'coral' },
            { icon: BarChart3, title: 'Skill breakdown', desc: 'A radar of your strengths across arrays, graphs, DP, and more — updated per submission.', accent: 'violet' },
            { icon: ShieldCheck, title: 'Plagiarism-aware judge', desc: 'Solutions are checked for structural similarity before they count toward your score.', accent: 'teal' },
          ].map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </section>

      {/* PROBLEM PREVIEW */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white">Jump back in</h2>
            <p className="text-muted mt-2">A slice of what's waiting in the problem set.</p>
          </div>
          <Link to="/problems" className="text-sm font-semibold text-violet-soft hover:text-violet flex items-center gap-1.5">
            Browse all problems <ArrowRight size={15} />
          </Link>
        </div>
        <div className="space-y-3">
          {problems.slice(0, 5).map((p, i) => (
            <ProblemCard key={p.id} problem={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-panel-border bg-gradient-to-br from-panel via-panel to-violet/10 px-8 py-16 sm:py-20 text-center"
        >
          <div className="absolute inset-0 bg-grid-fade opacity-60 pointer-events-none" />
          <h2 className="relative font-display font-semibold text-3xl sm:text-4xl text-white max-w-xl mx-auto">
            Your next offer starts with your next submission.
          </h2>
          <p className="relative text-muted mt-4 max-w-md mx-auto">
            Create a free account and get a personalized problem set based on your first assessment.
          </p>
          <Link
            to="/signup"
            className="relative inline-flex items-center gap-2 mt-8 bg-violet hover:bg-violet-soft text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-glow focus-ring"
          >
            Create free account <ArrowRight size={17} />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  )
}

function Stat({ n, l }) {
  return (
    <div>
      <p className="font-display font-semibold text-xl text-white">{n}</p>
      <p className="text-xs text-muted2 mt-0.5">{l}</p>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, desc, accent, index }) {
  const accentMap = {
    violet: 'text-violet bg-violet/10 border-violet/30',
    teal: 'text-teal bg-teal/10 border-teal/30',
    amber: 'text-amber bg-amber/10 border-amber/30',
    coral: 'text-coral bg-coral/10 border-coral/30',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="rounded-xl border border-panel-border bg-panel/60 p-6 hover:border-panel-border hover:bg-panel-light/60 transition-colors"
    >
      <span className={`h-10 w-10 rounded-lg border flex items-center justify-center ${accentMap[accent]}`}>
        <Icon size={18} />
      </span>
      <h3 className="font-semibold text-ink2 mt-4">{title}</h3>
      <p className="text-sm text-muted mt-2 leading-relaxed">{desc}</p>
    </motion.div>
  )
}
