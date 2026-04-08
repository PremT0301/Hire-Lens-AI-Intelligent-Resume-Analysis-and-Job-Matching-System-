import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; email: string; role: 'applicant' | 'recruiter' } | null;
  login: (email: string, role: 'applicant' | 'recruiter') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (email, role) => set({
        isAuthenticated: true,
        user: { name: email.split('@')[0], email, role },
      }),
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    { name: 'hirelens-auth' }
  )
);

interface ThemeState {
  theme: 'light' | 'dark';
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      toggle: () => {
        const next = get().theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', next === 'dark');
        set({ theme: next });
      },
    }),
    { name: 'hirelens-theme' }
  )
);
