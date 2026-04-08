import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Users, Search, Filter, ArrowUpDown } from 'lucide-react';

const candidates = [
  { name: 'Alice Chen', role: 'Senior Frontend', match: 96, skills: ['React', 'TypeScript', 'Node.js'], experience: '7 years', status: 'Interview' },
  { name: 'Bob Johnson', role: 'Full Stack Dev', match: 91, skills: ['React', 'Python', 'PostgreSQL'], experience: '5 years', status: 'Screened' },
  { name: 'Carol Smith', role: 'Backend Engineer', match: 88, skills: ['Node.js', 'AWS', 'Docker'], experience: '6 years', status: 'Applied' },
  { name: 'David Kim', role: 'ML Engineer', match: 85, skills: ['Python', 'TensorFlow', 'SQL'], experience: '4 years', status: 'Applied' },
  { name: 'Eva Martinez', role: 'DevOps Engineer', match: 82, skills: ['Docker', 'K8s', 'Terraform'], experience: '5 years', status: 'Screened' },
  { name: 'Frank Lee', role: 'React Developer', match: 79, skills: ['React', 'JavaScript', 'CSS'], experience: '3 years', status: 'Applied' },
];

const statusColor: Record<string, string> = {
  Applied: 'bg-muted text-muted-foreground',
  Screened: 'bg-yellow-500/10 text-yellow-600',
  Interview: 'bg-primary/10 text-primary',
};

export default function RecruiterDashboard() {
  const [search, setSearch] = useState('');
  const filtered = candidates.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.skills.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Users className="h-7 w-7 text-primary" /> Recruiter Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage and rank your candidate pipeline.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Candidates', value: '248' },
            { label: 'Screened', value: '86' },
            { label: 'Interviews', value: '24' },
            { label: 'Avg Match', value: '87%' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
              <GlassCard hover={false} className="text-center py-4">
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Search + Candidates */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <GlassCard hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search candidates or skills..." className="pl-9" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon"><ArrowUpDown className="h-4 w-4" /></Button>
            </div>

            <div className="space-y-3">
              {filtered.map((c, i) => (
                <motion.div key={c.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {c.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.role} · {c.experience}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-1.5">
                      {c.skills.map(s => <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>)}
                    </div>
                    <Badge className={statusColor[c.status]} variant="secondary">{c.status}</Badge>
                    <div className="w-12 text-right font-bold text-primary">{c.match}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
