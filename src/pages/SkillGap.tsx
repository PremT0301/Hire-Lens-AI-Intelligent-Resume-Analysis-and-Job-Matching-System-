import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Target, ArrowRight, BookOpen, Play } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const radarData = [
  { skill: 'React', you: 90, required: 85 },
  { skill: 'TypeScript', you: 80, required: 90 },
  { skill: 'Node.js', you: 70, required: 80 },
  { skill: 'Python', you: 60, required: 75 },
  { skill: 'SQL', you: 85, required: 70 },
  { skill: 'DevOps', you: 40, required: 65 },
  { skill: 'Testing', you: 55, required: 70 },
  { skill: 'AWS', you: 45, required: 60 },
];

const gaps = [
  { skill: 'DevOps', gap: 25, priority: 'High', you: 40, required: 65, courses: ['Docker Mastery', 'CI/CD with GitHub Actions'] },
  { skill: 'Python', gap: 15, priority: 'High', you: 60, required: 75, courses: ['Python for Data Science', 'FastAPI Bootcamp'] },
  { skill: 'Testing', gap: 15, priority: 'Medium', you: 55, required: 70, courses: ['Testing JavaScript Applications', 'Cypress E2E'] },
  { skill: 'AWS', gap: 15, priority: 'Medium', you: 45, required: 60, courses: ['AWS Solutions Architect', 'Serverless Framework'] },
  { skill: 'TypeScript', gap: 10, priority: 'Low', you: 80, required: 90, courses: ['Advanced TypeScript Patterns'] },
  { skill: 'Node.js', gap: 10, priority: 'Low', you: 70, required: 80, courses: ['Node.js Performance Tuning'] },
];

const priorityColor = { High: 'bg-destructive/10 text-destructive', Medium: 'bg-yellow-500/10 text-yellow-600', Low: 'bg-primary/10 text-primary' };

export default function SkillGap() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Target className="h-7 w-7 text-primary" /> Skill Gap Analysis</h1>
          <p className="text-muted-foreground mt-1">See where you stand and what to learn next.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <GlassCard hover={false} className="h-full">
              <h3 className="font-semibold mb-4">Skills Radar</h3>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Radar name="Your Skills" dataKey="you" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.25} strokeWidth={2} />
                  <Radar name="Required" dataKey="required" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" fillOpacity={0.05} strokeWidth={2} strokeDasharray="4 4" />
                </RadarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-6 justify-center mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-primary rounded" /> Your Skills</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-destructive rounded border-dashed" /> Required</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <GlassCard hover={false} className="h-full">
              <h3 className="font-semibold mb-4">Missing Skills</h3>
              <div className="space-y-4">
                {gaps.map(g => (
                  <div key={g.skill} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{g.skill}</span>
                        <Badge className={priorityColor[g.priority as keyof typeof priorityColor]} variant="secondary">{g.priority}</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{g.you}% → {g.required}%</span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div className="absolute h-full bg-primary/30 rounded-full" style={{ width: `${g.required}%` }} />
                      <div className="absolute h-full gradient-primary rounded-full" style={{ width: `${g.you}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Course Recommendations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <GlassCard hover={false}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> Recommended Courses</h3>
              <Button className="gradient-primary text-primary-foreground">Start Upskilling <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gaps.flatMap(g => g.courses.map(c => ({ course: c, skill: g.skill, priority: g.priority }))).slice(0, 6).map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-muted/50 space-y-2">
                  <Badge className={priorityColor[item.priority as keyof typeof priorityColor]} variant="secondary">{item.skill}</Badge>
                  <div className="font-medium text-sm">{item.course}</div>
                  <Button variant="outline" size="sm"><Play className="h-3 w-3 mr-1" /> Enroll</Button>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
