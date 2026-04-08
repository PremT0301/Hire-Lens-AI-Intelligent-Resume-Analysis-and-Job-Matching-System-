import { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { GlassCard } from '@/components/GlassCard';
import { Badge } from '@/components/ui/badge';
import { Kanban } from 'lucide-react';

interface Candidate { id: string; name: string; role: string; match: number; }

const initialColumns: Record<string, Candidate[]> = {
  Applied: [
    { id: '1', name: 'David Kim', role: 'ML Engineer', match: 85 },
    { id: '2', name: 'Frank Lee', role: 'React Dev', match: 79 },
  ],
  Screened: [
    { id: '3', name: 'Bob Johnson', role: 'Full Stack', match: 91 },
    { id: '4', name: 'Eva Martinez', role: 'DevOps', match: 82 },
  ],
  Interview: [
    { id: '5', name: 'Alice Chen', role: 'Sr. Frontend', match: 96 },
  ],
  Hired: [],
};

const columnColors: Record<string, string> = {
  Applied: 'bg-muted',
  Screened: 'bg-yellow-500/10',
  Interview: 'bg-primary/10',
  Hired: 'bg-green-500/10',
};

export default function Pipeline() {
  const [columns, setColumns] = useState(initialColumns);
  const [dragging, setDragging] = useState<{ col: string; idx: number } | null>(null);

  const handleDragStart = (col: string, idx: number) => setDragging({ col, idx });
  const handleDrop = (targetCol: string) => {
    if (!dragging) return;
    const newCols = { ...columns };
    const [item] = newCols[dragging.col].splice(dragging.idx, 1);
    newCols[targetCol] = [...newCols[targetCol], item];
    setColumns(newCols);
    setDragging(null);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Kanban className="h-7 w-7 text-primary" /> Pipeline Management</h1>
          <p className="text-muted-foreground mt-1">Drag and drop candidates through your hiring pipeline.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(columns).map(([col, items]) => (
            <div
              key={col}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleDrop(col)}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${col === 'Applied' ? 'bg-muted-foreground' : col === 'Screened' ? 'bg-yellow-500' : col === 'Interview' ? 'bg-primary' : 'bg-green-500'}`} />
                  <span className="font-semibold text-sm">{col}</span>
                </div>
                <Badge variant="secondary">{items.length}</Badge>
              </div>
              <div className="min-h-[300px] rounded-xl border border-dashed border-border p-2 space-y-2">
                {items.map((c, idx) => (
                  <motion.div
                    key={c.id}
                    draggable
                    onDragStart={() => handleDragStart(col, idx)}
                    layout
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <GlassCard className="!p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-xs">
                          {c.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{c.name}</div>
                          <div className="text-xs text-muted-foreground">{c.role}</div>
                        </div>
                        <span className="text-sm font-bold text-primary">{c.match}%</span>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
