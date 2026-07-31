import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Terminal, Mail, Lock, Eye, EyeOff, Github } from 'lucide-react'

export default function Login() {
  const [showPw, setShowPw] = useState(false)

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative bg-panel border-r border-panel-border items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet/20 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal/10 blur-[100px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-sm px-10 text-center"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-teal shadow-glow mb-6">
            <Terminal size={26} className="text-ink" strokeWidth={2.5} />
          </span>
          <h2 className="font-display font-semibold text-2xl text-white">Welcome back, builder.</h2>
          <p className="text-muted mt-3 text-sm leading-relaxed">
            Pick up your streak, check today's contest, and keep climbing the leaderboard.
          </p>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
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

          <h1 className="font-display font-semibold text-2xl text-white">Log in</h1>
          <p className="text-muted text-sm mt-2">
            New here?{' '}
            <Link to="/signup" className="text-violet-soft hover:text-violet font-medium">
              Create an account
            </Link>
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field icon={Mail} type="email" placeholder="you@example.com" label="Email" />
            <div>
              <label className="text-xs font-medium text-muted mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted2" />
                <input
                  type={showPw ? 'text' : 'password'}
                  placeholder="••••••••"
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

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted cursor-pointer">
                <input type="checkbox" className="accent-violet h-3.5 w-3.5" />
                Remember me
              </label>
              <a href="#" className="text-violet-soft hover:text-violet font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-violet hover:bg-violet-soft text-white font-semibold py-3 rounded-lg transition-all hover:shadow-glow focus-ring"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-panel-border flex-1" />
            <span className="text-xs text-muted2">or continue with</span>
            <div className="h-px bg-panel-border flex-1" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-panel-border hover:border-muted2 text-ink2 font-medium py-3 rounded-lg transition-colors">
            <Github size={16} /> Continue with GitHub
          </button>
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
