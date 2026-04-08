import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Upload, Brain, Target, BookOpen, Play, Briefcase, Clock, CheckCircle2 } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const radarData = [
  { skill: 'React', you: 90, required: 85 },
  { skill: 'TypeScript', you: 80, required: 90 },
  { skill: 'Node.js', you: 70, required: 80 },
  { skill: 'Python', you: 60, required: 75 },
  { skill: 'SQL', you: 85, required: 70 },
  { skill: 'DevOps', you: 40, required: 65 },
];

const jobs = [
  { title: 'Senior Frontend Engineer', company: 'TechCorp', match: 94, status: 'Applied' },
  { title: 'Full Stack Developer', company: 'InnovateLabs', match: 87, status: 'Interview' },
  { title: 'React Developer', company: 'StartupXYZ', match: 91, status: 'Screening' },
];

const courses = [
  { title: 'Advanced Python for ML', platform: 'Coursera', duration: '6 weeks' },
  { title: 'Docker & Kubernetes', platform: 'Udemy', duration: '4 weeks' },
  { title: 'System Design Interview', platform: 'YouTube', duration: '3 hours' },
];

const timeline = [
  { date: 'Today', event: 'Interview scheduled with InnovateLabs', icon: Clock },
  { date: '2 days ago', event: 'Application viewed by TechCorp', icon: CheckCircle2 },
  { date: '5 days ago', event: 'Resume analyzed — 94% match', icon: Brain },
  { date: '1 week ago', event: 'Applied to Senior Frontend role', icon: Briefcase },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function ApplicantDashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-3xl font-bold">Welcome back, <span className="gradient-text">Alex</span></h1>
          <p className="text-muted-foreground mt-1">Your AI-powered career assistant is ready.</p>
        </motion.div>

        {/* Top Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upload */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>
            <GlassCard hover={false} className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                <Upload className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Upload Resume</h3>
              <p className="text-sm text-muted-foreground mb-4">PDF or DOCX, up to 10MB</p>
              <Button className="gradient-primary text-primary-foreground">Choose File</Button>
            </GlassCard>
          </motion.div>

          {/* Match Score */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}>
            <GlassCard hover={false} className="h-full flex flex-col items-center justify-center text-center">
              <h3 className="font-semibold mb-4">AI Match Score</h3>
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" className="stroke-muted" />
                  <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" strokeDasharray="327" strokeDashoffset="20" strokeLinecap="round" className="stroke-primary" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-black gradient-text">94%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">Excellent match for 3 positions</p>
            </GlassCard>
          </motion.div>

          {/* Skill Radar */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}>
            <GlassCard hover={false} className="h-full">
              <h3 className="font-semibold mb-2">Skills Overview</h3>
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                  <Radar name="You" dataKey="you" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                  <Radar name="Required" dataKey="required" stroke="hsl(var(--muted-foreground))" fill="hsl(var(--muted-foreground))" fillOpacity={0.05} />
                </RadarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>
        </div>

        {/* Job Recommendations + Timeline */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}>
            <GlassCard hover={false}>
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" /> Job Recommendations</h3>
              <div className="space-y-3">
                {jobs.map(j => (
                  <div key={j.title} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                    <div>
                      <div className="font-medium text-sm">{j.title}</div>
                      <div className="text-xs text-muted-foreground">{j.company}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">{j.match}%</Badge>
                      <Badge variant="outline">{j.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }}>
            <GlassCard hover={false}>
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Activity Timeline</h3>
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <t.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.event}</div>
                      <div className="text-xs text-muted-foreground">{t.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Learning Recommendations */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.6 }}>
          <GlassCard hover={false}>
            <h3 className="font-semibold mb-4 flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> Recommended Learning</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {courses.map(c => (
                <div key={c.title} className="p-4 rounded-xl bg-muted/50 space-y-2">
                  <div className="font-medium text-sm">{c.title}</div>
                  <div className="text-xs text-muted-foreground">{c.platform} · {c.duration}</div>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Play className="h-3 w-3 mr-1" /> Start
                  </Button>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
