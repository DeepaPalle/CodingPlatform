import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Terminal, Mail, Lock, User, Eye, EyeOff, CheckCircle2 } from 'lucide-react'

const perks = [
  'Instant runtime & memory scoring',
  'Personalized problem recommendations',
  'Weekly ranked contests',
  'Full submission history & analytics',
]

export default function Signup() {
  const [showPw, setShowPw] = useState(false)

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center px-6 py-16 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <Link to="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-teal">
              <Terminal size={18} className="text-ink" strokeWidth={2.5} />
            </span>
            <span className="font-display font-semibold text-lg">
              Code<span className="text-gradient">Forge</span>
            </span>
          </Link>

          <h1 className="font-display font-semibold text-2xl text-white">Create your account</h1>
          <p className="text-muted text-sm mt-2">
            Already have one?{' '}
            <Link to="/login" className="text-violet-soft hover:text-violet font-medium">
              Log in
            </Link>
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field icon={User} type="text" placeholder="Ada Lovelace" label="Full name" />
            <Field icon={Mail} type="email" placeholder="you@example.com" label="Email" />
            <div>
              <label className="text-xs font-medium text-muted mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted2" />
                <input
                  type={showPw ? 'text' : 'password'}
                  placeholder="At least 8 characters"
                  className="w-full bg-panel border border-panel-border rounded-lg pl-10 pr-10 py-3 text-sm text-ink2 placeholder:text-muted2 focus:outline-none focus:border-violet/60 focus:ring-1 focus:ring-violet/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted2 hover:text-muted"
                  aria-label="Toggle password visibility"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 text-xs text-muted cursor-pointer pt-1">
              <input type="checkbox" className="accent-violet h-3.5 w-3.5 mt-0.5" />
              I agree to the Terms of Service and Privacy Policy
            </label>

            <button
              type="submit"
              className="w-full bg-violet hover:bg-violet-soft text-white font-semibold py-3 rounded-lg transition-all hover:shadow-glow focus-ring"
            >
              Create account
            </button>
          </form>
        </motion.div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 relative bg-panel border-l border-panel-border items-center justify-center overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal/15 blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-violet/20 blur-[100px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-sm px-10"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-teal shadow-glow mb-6">
            <Terminal size={26} className="text-ink" strokeWidth={2.5} />
          </span>
          <h2 className="font-display font-semibold text-2xl text-white">Start assessing your skills today.</h2>
          <ul className="mt-6 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-muted">
                <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

function Field({ icon: Icon, label, ...props }) {
  return (
    <div>
      <label className="text-xs font-medium text-muted mb-1.5 block">{label}</label>
      <div className="relative">
        <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted2" />
        <input
          {...props}
          className="w-full bg-panel border border-panel-border rounded-lg pl-10 pr-4 py-3 text-sm text-ink2 placeholder:text-muted2 focus:outline-none focus:border-violet/60 focus:ring-1 focus:ring-violet/40 transition-colors"
        />
      </div>
    </div>
  )
}
