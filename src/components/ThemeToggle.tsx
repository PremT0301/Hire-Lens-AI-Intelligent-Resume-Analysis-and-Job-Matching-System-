import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/lib/store';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, toggle } = useThemeStore();
  return (
    <Button variant="ghost" size="icon" onClick={toggle} className="relative">
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
