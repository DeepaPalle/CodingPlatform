import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Circle, CheckCircle2 } from 'lucide-react'

const LINES = [
  { tokens: [['function', 'kw'], [' twoSum', 'fn'], ['(nums, target) {', 'pl']] },
  { tokens: [['  const', 'kw'], [' seen', 'var'], [' = new Map();', 'pl']] },
  { tokens: [['  for', 'kw'], [' (let i = 0; i < nums.length; i++) {', 'pl']] },
  { tokens: [['    const', 'kw'], [' need', 'var'], [' = target - nums[i];', 'pl']] },
  { tokens: [['    if', 'kw'], [' (seen.has(need))', 'pl'], [' return', 'kw'], [' [seen.get(need), i];', 'pl']] },
  { tokens: [['    seen.set(nums[i], i);', 'pl']] },
  { tokens: [['  }', 'pl']] },
  { tokens: [['}', 'pl']] },
]

const tokenColor = {
  kw: 'text-violet-soft',
  fn: 'text-teal-soft',
  var: 'text-amber-soft',
  pl: 'text-ink2/90',
}

export default function CodeEditorPreview() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    if (phase !== 'typing') return
    const currentLine = LINES[visibleLines]
    if (!currentLine) {
      const t = setTimeout(() => setPhase('done'), 500)
      return () => clearTimeout(t)
    }
    const fullText = currentLine.tokens.map((t) => t[0]).join('')
    if (charCount < fullText.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18 + Math.random() * 22)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1)
      setCharCount(0)
    }, 120)
    return () => clearTimeout(t)
  }, [charCount, visibleLines, phase])

  useEffect(() => {
    if (phase === 'done') {
      const t = setTimeout(() => {
        setVisibleLines(0)
        setCharCount(0)
        setPhase('typing')
      }, 2800)
      return () => clearTimeout(t)
    }
  }, [phase])

  function renderLine(line, isCurrent) {
    let remaining = isCurrent ? charCount : Infinity
    return line.tokens.map(([text, type], idx) => {
      if (remaining <= 0) return null
      const shown = text.slice(0, remaining)
      remaining -= text.length
      return (
        <span key={idx} className={tokenColor[type]}>
          {shown}
        </span>
      )
    })
  }

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute -inset-6 bg-gradient-to-br from-violet/20 via-transparent to-teal/10 blur-3xl rounded-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative rounded-2xl border border-panel-border bg-panel/95 shadow-card overflow-hidden animate-floaty"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-panel-border bg-panel-light/60">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-coral/70" />
            <span className="h-3 w-3 rounded-full bg-amber/70" />
            <span className="h-3 w-3 rounded-full bg-teal/70" />
          </div>
          <span className="text-xs font-mono text-muted">two_sum.js</span>
          <div className="flex items-center gap-1.5 text-xs font-mono">
            {phase === 'done' ? (
              <span className="flex items-center gap-1 text-teal">
                <CheckCircle2 size={13} /> Passed
              </span>
            ) : (
              <span className="flex items-center gap-1 text-muted">
                <Circle size={9} className="fill-amber text-amber animate-pulseSoft" /> Running
              </span>
            )}
          </div>
        </div>
        <div className="p-4 font-mono text-[13px] leading-6 min-h-[220px]">
          {LINES.map((line, i) => {
            if (i > visibleLines) return null
            const isCurrent = i === visibleLines
            return (
              <div key={i} className="flex">
                <span className="w-6 text-right pr-3 select-none text-muted2/60">{i + 1}</span>
                <span className="whitespace-pre">
                  {renderLine(line, isCurrent)}
                  {isCurrent && phase === 'typing' && (
                    <span className="inline-block w-[7px] h-[15px] bg-teal ml-0.5 animate-blink align-middle" />
                  )}
                </span>
              </div>
            )
          })}
        </div>
        <div className="px-4 py-3 border-t border-panel-border bg-panel-light/40 flex items-center justify-between">
          <span className="text-xs font-mono text-muted">Runtime: 56ms · beats 92%</span>
          <span className="text-xs font-mono px-2 py-1 rounded-md bg-teal/10 text-teal border border-teal/30">
            Easy
          </span>
        </div>
      </motion.div>
    </div>
  )
}
