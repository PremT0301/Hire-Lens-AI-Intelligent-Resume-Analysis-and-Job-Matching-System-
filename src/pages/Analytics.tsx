import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { GlassCard } from '@/components/GlassCard';
import { BarChart3, TrendingUp } from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, FunnelChart, Funnel, LabelList, Cell
} from 'recharts';

const velocityData = [
  { month: 'Jan', hires: 12 }, { month: 'Feb', hires: 18 }, { month: 'Mar', hires: 15 },
  { month: 'Apr', hires: 22 }, { month: 'May', hires: 28 }, { month: 'Jun', hires: 35 },
];

const funnelData = [
  { name: 'Applied', value: 248, fill: 'hsl(var(--muted-foreground))' },
  { name: 'Screened', value: 86, fill: 'hsl(174 72% 46% / 0.6)' },
  { name: 'Interview', value: 24, fill: 'hsl(174 72% 46% / 0.8)' },
  { name: 'Hired', value: 8, fill: 'hsl(var(--primary))' },
];

const metricsData = [
  { metric: 'Avg Time to Hire', value: '18 days', trend: '-3 days' },
  { metric: 'Offer Acceptance', value: '89%', trend: '+5%' },
  { metric: 'Quality of Hire', value: '4.2/5', trend: '+0.3' },
  { metric: 'Cost per Hire', value: '$2,400', trend: '-$200' },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold flex items-center gap-3"><BarChart3 className="h-7 w-7 text-primary" /> Analytics</h1>
          <p className="text-muted-foreground mt-1">Hiring metrics and pipeline performance.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metricsData.map((m, i) => (
            <motion.div key={m.metric} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
              <GlassCard hover={false} className="text-center py-4">
                <div className="text-2xl font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.metric}</div>
                <div className="text-xs text-primary mt-1 flex items-center justify-center gap-1">
                  <TrendingUp className="h-3 w-3" /> {m.trend}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <GlassCard hover={false}>
              <h3 className="font-semibold mb-4">Hiring Velocity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={velocityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                  <Area type="monotone" dataKey="hires" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.15} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <GlassCard hover={false}>
              <h3 className="font-semibold mb-4">Candidate Funnel</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={funnelData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                  <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} width={80} />
                  <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                    {funnelData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
