import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Zap } from 'lucide-react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'applicant' | 'recruiter'>('applicant');
  const login = useAuthStore(s => s.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || 'demo@hirelens.ai', role);
    navigate(role === 'recruiter' ? '/recruiter' : '/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass-card p-8 rounded-2xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-xl mb-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="gradient-text">HireLens AI</span>
          </Link>
          <p className="text-muted-foreground text-sm">Create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Full Name</Label>
            <Input placeholder="John Doe" className="mt-1" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" className="mt-1" />
          </div>
          <div>
            <Label>I am a</Label>
            <div className="flex gap-2 mt-1">
              {(['applicant', 'recruiter'] as const).map(r => (
                <Button key={r} type="button" variant={role === r ? 'default' : 'outline'}
                  className={role === r ? 'flex-1 gradient-primary text-primary-foreground' : 'flex-1'}
                  onClick={() => setRole(r)}>
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full gradient-primary text-primary-foreground h-11">Create Account</Button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
