import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  Play,
  UploadCloud,
  Loader2,
  CheckCircle2,
  XCircle,
  Clock,
  Cpu,
  ThumbsUp,
  MessageSquare,
} from 'lucide-react'
import { problems, difficultyColor } from '../data/problems.js'

const languages = ['JavaScript', 'Python', 'Java', 'C++']

export default function ProblemDetail() {
  const { id } = useParams()
  const problem = useMemo(() => problems.find((p) => String(p.id) === id) ?? problems[0], [id])

  const [code, setCode] = useState(problem.starter)
  const [lang, setLang] = useState('JavaScript')
  const [tab, setTab] = useState('description')
  const [runState, setRunState] = useState('idle') // idle | running | passed | failed
  const [result, setResult] = useState(null)

  function handleRun(isSubmit) {
    setRunState('running')
    setResult(null)
    setTimeout(() => {
      const pass = Math.random() > 0.25
      setRunState(pass ? 'passed' : 'failed')
      setResult({
        submit: isSubmit,
        runtime: `${(Math.random() * 80 + 20).toFixed(0)}ms`,
        memory: `${(Math.random() * 4 + 41).toFixed(1)}MB`,
        beats: `${(Math.random() * 40 + 55).toFixed(0)}%`,
        testsPassed: pass ? 24 : Math.floor(Math.random() * 20) + 1,
        testsTotal: 24,
      })
    }, 1100)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-6">
        <Link to="/problems" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink2 mb-5">
          <ChevronLeft size={15} /> Back to problems
        </Link>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* LEFT PANEL */}
          <div className="rounded-2xl border border-panel-border bg-panel/60 overflow-hidden lg:sticky lg:top-24">
            <div className="flex border-b border-panel-border">
              {['description', 'submissions', 'discussion'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 capitalize text-sm font-medium py-3.5 transition-colors border-b-2 ${
                    tab === t
                      ? 'text-ink2 border-violet'
                      : 'text-muted border-transparent hover:text-ink2'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {tab === 'description' && (
                <>
                  <div className="flex items-center gap-3 flex-wrap mb-4">
                    <h1 className="font-display font-semibold text-xl text-white">{problem.title}</h1>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${difficultyColor[problem.difficulty]}`}
                    >
                      {problem.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted mb-6">
                    <span className="flex items-center gap-1.5">
                      <ThumbsUp size={13} /> 4.2k
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare size={13} /> 312 discussions
                    </span>
                    <span>{problem.acceptance}% acceptance</span>
                  </div>

                  <p className="text-sm text-ink2/90 leading-relaxed">{problem.statement}</p>

                  <div className="mt-6 space-y-4">
                    {problem.examples.map((ex, i) => (
                      <div key={i} className="rounded-lg bg-ink border border-panel-border p-4">
                        <p className="text-xs font-semibold text-muted mb-2">Example {i + 1}</p>
                        <p className="text-xs font-mono text-ink2/90">
                          <span className="text-muted2">Input:</span> {ex.input}
                        </p>
                        <p className="text-xs font-mono text-ink2/90 mt-1">
                          <span className="text-muted2">Output:</span> {ex.output}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold text-muted mb-2">Constraints</p>
                    <ul className="space-y-1.5">
                      {problem.constraints.map((c, i) => (
                        <li key={i} className="text-xs font-mono text-ink2/80 flex gap-2">
                          <span className="text-violet-soft">•</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {problem.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-panel-light border border-panel-border text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {tab === 'submissions' && (
                <div className="space-y-2.5">
                  {[
                    { status: 'Accepted', lang: 'JavaScript', time: '2 hours ago', runtime: '56ms' },
                    { status: 'Wrong Answer', lang: 'JavaScript', time: '1 day ago', runtime: '—' },
                    { status: 'Accepted', lang: 'Python', time: '3 days ago', runtime: '112ms' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border border-panel-border bg-ink px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        {s.status === 'Accepted' ? (
                          <CheckCircle2 size={15} className="text-teal" />
                        ) : (
                          <XCircle size={15} className="text-coral" />
                        )}
                        <span className="text-sm text-ink2">{s.status}</span>
                      </div>
                      <span className="text-xs font-mono text-muted">{s.lang}</span>
                      <span className="text-xs font-mono text-muted">{s.runtime}</span>
                      <span className="text-xs text-muted2">{s.time}</span>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'discussion' && (
                <div className="text-center py-10 text-muted text-sm">
                  Discussion threads for this problem will show up here.
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL — EDITOR */}
          <div className="rounded-2xl border border-panel-border bg-panel/95 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-panel-border bg-panel-light/50">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              </div>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-panel border border-panel-border rounded-md text-xs font-mono text-ink2 px-2.5 py-1.5 focus:outline-none focus:border-violet/60"
              >
                {languages.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="w-full min-h-[340px] bg-transparent font-mono text-[13px] leading-6 text-ink2 p-5 resize-none focus:outline-none"
            />

            <div className="flex items-center gap-3 px-4 py-3 border-t border-panel-border bg-panel-light/30">
              <button
                onClick={() => handleRun(false)}
                disabled={runState === 'running'}
                className="flex items-center gap-1.5 text-sm font-medium border border-panel-border hover:border-muted2 text-ink2 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                {runState === 'running' ? <Loader2 size={15} className="animate-spin" /> : <Play size={15} />}
                Run
              </button>
              <button
                onClick={() => handleRun(true)}
                disabled={runState === 'running'}
                className="flex items-center gap-1.5 text-sm font-semibold bg-violet hover:bg-violet-soft text-white px-4 py-2 rounded-lg transition-all hover:shadow-glow disabled:opacity-50"
              >
                <UploadCloud size={15} /> Submit
              </button>
            </div>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-panel-border overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      {runState === 'passed' ? (
                        <CheckCircle2 size={18} className="text-teal" />
                      ) : (
                        <XCircle size={18} className="text-coral" />
                      )}
                      <span className={`font-semibold ${runState === 'passed' ? 'text-teal' : 'text-coral'}`}>
                        {runState === 'passed' ? (result.submit ? 'Accepted' : 'All tests passed') : 'Tests failed'}
                      </span>
                      <span className="text-xs text-muted ml-auto">
                        {result.testsPassed}/{result.testsTotal} cases
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <MetricPill icon={Clock} label="Runtime" value={result.runtime} />
                      <MetricPill icon={Cpu} label="Memory" value={result.memory} />
                      <MetricPill icon={CheckCircle2} label="Beats" value={result.beats} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MetricPill({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg bg-ink border border-panel-border px-3 py-2.5">
      <p className="flex items-center gap-1.5 text-xs text-muted mb-1">
        <Icon size={12} /> {label}
      </p>
      <p className="font-mono text-sm text-ink2">{value}</p>
    </div>
  )
}
