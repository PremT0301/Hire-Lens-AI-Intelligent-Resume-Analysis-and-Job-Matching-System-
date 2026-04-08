import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useAuthStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import {
  Zap, LayoutDashboard, Target, Users, Kanban, BarChart3,
  Mic, Settings, LogOut, ChevronLeft, BrainCircuit
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const applicantLinks = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/skill-gap', icon: Target, label: 'Skill Gap' },
  { to: '/interview', icon: Mic, label: 'Interview Co-Pilot' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

const recruiterLinks = [
  { to: '/recruiter', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/pipeline', icon: Kanban, label: 'Pipeline' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const links = user?.role === 'recruiter' ? recruiterLinks : applicantLinks;

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 surface-elevated border-r border-border flex flex-col fixed h-full">
        <div className="p-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Zap className="h-5 w-5 text-primary" />
            <span className="gradient-text">HireLens AI</span>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {links.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
                location.pathname === to
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-border space-y-1">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={() => { logout(); navigate('/'); }}>
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
