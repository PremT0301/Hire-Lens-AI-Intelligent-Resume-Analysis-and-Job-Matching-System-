import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { GlassCard } from '@/components/GlassCard';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Settings, Activity, Server, Brain, CheckCircle2, AlertCircle } from 'lucide-react';

const logs = [
  { time: '14:32:01', level: 'INFO', msg: 'Resume processed: alice_chen_resume.pdf' },
  { time: '14:31:58', level: 'INFO', msg: 'Match score computed: 96% for position #1042' },
  { time: '14:31:45', level: 'WARN', msg: 'High latency on NLP service: 2.3s' },
  { time: '14:31:30', level: 'INFO', msg: 'Skill gap analysis completed for user #2847' },
  { time: '14:31:12', level: 'INFO', msg: 'New candidate registered: bob_johnson' },
];

const services = [
  { name: 'API Gateway', status: 'Operational', uptime: '99.98%' },
  { name: 'NLP Service', status: 'Operational', uptime: '99.95%' },
  { name: 'Match Engine', status: 'Operational', uptime: '99.99%' },
  { name: 'Interview AI', status: 'Degraded', uptime: '98.2%' },
];

const models = [
  { name: 'BERT Resume Parser', version: 'v2.4.1', accuracy: 97.3, status: 'Active' },
  { name: 'LSTM Job Matcher', version: 'v3.1.0', accuracy: 94.8, status: 'Active' },
  { name: 'Skill Gap Analyzer', version: 'v1.8.2', accuracy: 91.5, status: 'Active' },
  { name: 'Interview NLP', version: 'v1.2.0', accuracy: 88.7, status: 'Training' },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Settings className="h-7 w-7 text-primary" /> System Health</h1>
          <p className="text-muted-foreground mt-1">Monitor services, models, and system logs.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <GlassCard hover={false}>
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Server className="h-4 w-4 text-primary" /> Services</h3>
              <div className="space-y-3">
                {services.map(s => (
                  <div key={s.name} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                    {s.status === 'Operational' ?
                        <CheckCircle2 className="h-4 w-4 text-primary" /> :
                        <AlertCircle className="h-4 w-4 text-destructive" />
                      }
                      <span className="font-medium text-sm">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className={s.status === 'Operational' ? 'bg-green-500/10 text-green-600' : 'bg-yellow-500/10 text-yellow-600'}>
                        {s.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground w-14 text-right">{s.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* AI Models */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <GlassCard hover={false}>
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Brain className="h-4 w-4 text-primary" /> AI Models</h3>
              <div className="space-y-4">
                {models.map(m => (
                  <div key={m.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-sm">{m.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">{m.version}</span>
                      </div>
                      <Badge variant="secondary" className={m.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-yellow-500/10 text-yellow-600'}>
                        {m.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={m.accuracy} className="h-2 flex-1" />
                      <span className="text-xs font-mono text-muted-foreground w-12 text-right">{m.accuracy}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Logs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <GlassCard hover={false}>
            <h3 className="font-semibold mb-4 flex items-center gap-2"><Activity className="h-4 w-4 text-primary" /> Recent Logs</h3>
            <div className="space-y-1 font-mono text-xs">
              {logs.map((l, i) => (
                <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-muted-foreground shrink-0">{l.time}</span>
                  <Badge variant="secondary" className={`text-[10px] ${l.level === 'WARN' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-primary/10 text-primary'}`}>
                    {l.level}
                  </Badge>
                  <span className="text-foreground">{l.msg}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
