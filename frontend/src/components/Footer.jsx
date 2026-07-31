import { Link } from 'react-router-dom'
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-panel-border/70 bg-ink-soft mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-teal">
              <Terminal size={18} className="text-ink" strokeWidth={2.5} />
            </span>
            <span className="font-display font-semibold text-lg">
              Code<span className="text-gradient">Forge</span>
            </span>
          </Link>
          <p className="text-sm text-muted max-w-xs leading-relaxed">
            Practice real interview problems, get instant performance feedback, and track your growth
            problem by problem.
          </p>
          <div className="flex gap-3 mt-5">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-panel-border text-muted hover:text-ink2 hover:border-violet/50 transition-colors focus-ring"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Practice" items={['Problems', 'Contests', 'Study Plans', 'Mock Interviews']} />
        <FooterCol title="Company" items={['About', 'Careers', 'Blog', 'Contact']} />
        <FooterCol title="Resources" items={['Docs', 'Community', 'Support', 'Status']} />
      </div>
      <div className="border-t border-panel-border/70 py-6">
        <p className="text-center text-xs text-muted2">
          © {new Date().getFullYear()} CodeForge. Built for practice, not production. All problems are for
          demo purposes.
        </p>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink2 mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm text-muted hover:text-ink2 transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
