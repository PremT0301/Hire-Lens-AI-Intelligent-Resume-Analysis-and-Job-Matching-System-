import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import {
  Zap, Brain, Target, Mic, BarChart3, Users,
  ArrowRight, CheckCircle2, Star
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const stats = [
  { value: '97.3%', label: 'Match Accuracy' },
  { value: '2.5M+', label: 'Profiles Analyzed' },
  { value: '150K+', label: 'Successful Hires' },
  { value: '<3s', label: 'Processing Time' },
];

const features = [
  { icon: Brain, title: 'AI Resume Analysis', desc: 'Deep NLP parsing extracts skills, experience, and education with 97% accuracy.' },
  { icon: Target, title: 'Smart Job Matching', desc: 'LSTM-powered matching engine computes multi-dimensional fit scores.' },
  { icon: Zap, title: 'Skill Gap Analysis', desc: 'Identify missing skills and get personalized upskilling recommendations.' },
  { icon: Mic, title: 'Interview Co-Pilot', desc: 'AI-powered voice interview prep with real-time feedback and STAR guidance.' },
  { icon: BarChart3, title: 'Recruiter Analytics', desc: 'Full hiring pipeline visibility with velocity metrics and candidate funnels.' },
  { icon: Users, title: 'Candidate Ranking', desc: 'Auto-rank candidates by match score, skills, and cultural fit indicators.' },
];

const pricing = [
  { name: 'Starter', price: '$0', period: '/month', features: ['5 Resume Analyses', 'Basic Matching', 'Skill Gap Report', 'Community Support'], cta: 'Get Started Free', popular: false },
  { name: 'Professional', price: '$49', period: '/month', features: ['Unlimited Analyses', 'Deep Match Engine', 'Interview Co-Pilot', 'Course Recommendations', 'Priority Support'], cta: 'Start Free Trial', popular: true },
  { name: 'Enterprise', price: 'Custom', period: '', features: ['Everything in Pro', 'API Access', 'Custom Integrations', 'Dedicated Account Manager', 'SLA Guarantee'], cta: 'Contact Sales', popular: false },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Zap className="h-3.5 w-3.5" /> Powered by Deep Learning & NLP
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
            Hire Smarter with{' '}
            <span className="gradient-text">AI-Powered</span>{' '}
            Intelligence
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Analyze resumes, match candidates, identify skill gaps, and prepare for interviews — all powered by cutting-edge AI.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="flex items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="gradient-primary text-primary-foreground px-8 h-12 text-base glow">
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                Sign In
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="text-center">
              <div className="text-3xl md:text-4xl font-black gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to <span className="gradient-text">Hire Better</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">End-to-end AI recruitment platform that transforms how you find, evaluate, and hire talent.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <GlassCard className="h-full">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
            <p className="text-muted-foreground">Start free. Scale as you grow.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <GlassCard hover={false} className={p.popular ? 'border-primary/30 glow relative' : ''}>
                  {p.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full gradient-primary text-xs font-semibold text-primary-foreground flex items-center gap-1">
                      <Star className="h-3 w-3" /> Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-black">{p.price}</span>
                    <span className="text-muted-foreground text-sm">{p.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup">
                    <Button className={p.popular ? 'w-full gradient-primary text-primary-foreground' : 'w-full'} variant={p.popular ? 'default' : 'outline'}>
                      {p.cta}
                    </Button>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Join thousands of companies using HireLens AI to find the perfect candidates faster.</p>
            <Link to="/signup">
              <Button size="lg" className="gradient-primary text-primary-foreground px-10 h-12 glow">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> HireLens AI</span>
          <span>© 2026 HireLens AI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
