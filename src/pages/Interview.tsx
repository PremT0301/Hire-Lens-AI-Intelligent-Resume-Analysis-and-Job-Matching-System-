import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Mic, MicOff, Brain, MessageSquare, Lightbulb, BarChart2 } from 'lucide-react';

const questions = [
  'Tell me about a time you led a complex technical project.',
  'How do you approach debugging a production issue?',
  'Describe your experience with distributed systems.',
  'Walk me through your ideal CI/CD pipeline.',
];

const starTips = [
  { label: 'Situation', desc: 'Set the scene — describe the context.' },
  { label: 'Task', desc: 'Explain your responsibility.' },
  { label: 'Action', desc: 'Detail the steps you took.' },
  { label: 'Result', desc: 'Share the outcome and impact.' },
];

export default function Interview() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Mic className="h-7 w-7 text-primary" /> AI Interview Co-Pilot</h1>
          <p className="text-muted-foreground mt-1">Practice with AI-generated questions and get real-time feedback.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Interview Area */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <GlassCard hover={false}>
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Question {currentQ + 1} of {questions.length}</span>
                </div>
                <h2 className="text-xl font-semibold mb-6">{questions[currentQ]}</h2>

                {/* Voice UI */}
                <div className="flex flex-col items-center py-8">
                  <motion.button
                    onClick={() => setIsRecording(!isRecording)}
                    whileTap={{ scale: 0.95 }}
                    className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                      isRecording ? 'gradient-primary glow animate-pulse-glow' : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {isRecording ? <MicOff className="h-8 w-8 text-primary-foreground" /> : <Mic className="h-8 w-8 text-muted-foreground" />}
                  </motion.button>
                  <p className="text-sm text-muted-foreground mt-4">
                    {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" disabled={currentQ === 0} onClick={() => setCurrentQ(p => p - 1)}>Previous</Button>
                  <Button className="gradient-primary text-primary-foreground" disabled={currentQ === questions.length - 1} onClick={() => setCurrentQ(p => p + 1)}>Next Question</Button>
                </div>
              </GlassCard>
            </motion.div>

            {/* Live Feedback */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <GlassCard hover={false}>
                <h3 className="font-semibold mb-4 flex items-center gap-2"><BarChart2 className="h-4 w-4 text-primary" /> Live Feedback</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Speaking Pace</span>
                      <span className="text-primary">Good</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Confidence</span>
                      <span className="text-primary">High</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Clarity</span>
                      <span className="text-yellow-500 dark:text-yellow-400">Medium</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Relevance</span>
                      <span className="text-primary">High</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* STAR Method Tips */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <GlassCard hover={false} className="h-fit">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Lightbulb className="h-4 w-4 text-primary" /> STAR Method Guide</h3>
              <div className="space-y-4">
                {starTips.map((tip, i) => (
                  <div key={tip.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                      {tip.label[0]}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{tip.label}</div>
                      <div className="text-xs text-muted-foreground">{tip.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">AI Suggestion</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Try to quantify your results. Instead of "improved performance," say "reduced load time by 40%, serving 2M users."
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
