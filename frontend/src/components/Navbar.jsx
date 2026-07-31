import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'

const links = [
  { to: '/problems', label: 'Problems' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-panel-border/70 bg-ink/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-teal shadow-glow">
            <Terminal size={18} className="text-ink" strokeWidth={2.5} />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight">
            Code<span className="text-gradient">Forge</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-ring ${
                  isActive ? 'text-ink2' : 'text-muted hover:text-ink2'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-panel-light border border-panel-border"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-medium text-muted hover:text-ink2 transition-colors px-4 py-2 focus-ring rounded-lg"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-sm font-semibold bg-violet hover:bg-violet-soft text-white px-4 py-2 rounded-lg transition-all hover:shadow-glow focus-ring"
          >
            Sign up free
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-ink2 focus-ring rounded-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-panel-border bg-ink"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-medium text-ink2 hover:bg-panel-light"
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="h-px bg-panel-border my-2" />
              <Link to="/login" onClick={() => setOpen(false)} className="px-3 py-3 text-sm font-medium text-muted">
                Log in
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="mx-3 mt-1 text-center text-sm font-semibold bg-violet text-white px-4 py-2.5 rounded-lg"
              >
                Sign up free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
