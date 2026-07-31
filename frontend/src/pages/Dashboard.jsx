import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  CartesianGrid,
} from 'recharts'
import { CheckCircle2, Flame, Target, TrendingUp } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import ProblemCard from '../components/ProblemCard.jsx'
import { problems } from '../data/problems.js'
import { activityData, skillData } from '../data/leaderboard.js'

export default function Dashboard() {
  const recent = problems.slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16"
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-violet to-teal flex items-center justify-center font-display font-semibold text-ink text-lg">
          YU
        </div>
        <div>
          <h1 className="font-display font-semibold text-2xl text-white">Welcome back, You</h1>
          <p className="text-muted text-sm mt-0.5">Rank #8 globally · 9-day streak</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard label="Problems solved" value="312" sub="of 1,200 total" icon={CheckCircle2} accent="teal" />
        <StatCard label="Current streak" value="9 days" sub="Best: 61 days" icon={Flame} accent="amber" />
        <StatCard label="Accuracy" value="87%" sub="Last 50 submissions" icon={Target} accent="violet" />
        <StatCard label="Global rank" value="#8" sub="Top 0.2%" icon={TrendingUp} accent="coral" />
      </div>

      <div className="grid lg:grid-cols-5 gap-5 mb-10">
        <div className="lg:col-span-3 rounded-xl border border-panel-border bg-panel/60 p-6">
          <h3 className="font-semibold text-ink2 mb-1">Weekly activity</h3>
          <p className="text-xs text-muted mb-5">Problems solved per day, last 7 days</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#232A3B" vertical={false} />
              <XAxis dataKey="day" stroke="#5C6479" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#5C6479" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ background: '#131722', border: '1px solid #232A3B', borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: '#E6E8F0' }}
                cursor={{ fill: 'rgba(124,92,255,0.08)' }}
              />
              <Bar dataKey="solved" fill="#7C5CFF" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:col-span-2 rounded-xl border border-panel-border bg-panel/60 p-6">
          <h3 className="font-semibold text-ink2 mb-1">Skill breakdown</h3>
          <p className="text-xs text-muted mb-5">Mastery by topic</p>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={skillData}>
              <PolarGrid stroke="#232A3B" />
              <PolarAngleAxis dataKey="skill" stroke="#8B93A7" fontSize={11} />
              <Radar dataKey="value" stroke="#2DD4BF" fill="#2DD4BF" fillOpacity={0.25} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-ink2 mb-4">Recent problems</h3>
        <div className="space-y-3">
          {recent.map((p, i) => (
            <ProblemCard key={p.id} problem={p} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
