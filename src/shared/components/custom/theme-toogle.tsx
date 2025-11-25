'use client';

import type { JSX, MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@shared/components/ui/button';

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className }: ThemeToggleProps): JSX.Element => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleToggle: MouseEventHandler<HTMLButtonElement> = () => {
    const current = (resolvedTheme ?? theme ?? 'light') as 'light' | 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  // mientras no está montado, mostramos un estado neutro y ESTABLE
  if (!mounted) {
    return (
      <Button type="button" variant="ghost" size="icon" className={`hover:bg-transparent hover:scale-95 transition-transform ${className ?? ''}`} aria-label="Cambiar tema" disabled>
        <Sun className="w-[1.2rem] h-[1.2rem]" />
        <span className="sr-only">Cambiar tema</span>
      </Button>
    );
  }

  const current = (resolvedTheme ?? theme ?? 'light') as 'light' | 'dark';
  const isDark = current === 'dark';

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className={`hover:bg-transparent hover:scale-95 transition-transform cursor-pointer`}
      aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
    >
      {isDark ? <Sun className="w-[1.2rem] h-[1.2rem]" /> : <Moon className="w-[1.2rem] h-[1.2rem]" />}
      <span className="sr-only">Cambiar a tema {isDark ? 'claro' : 'oscuro'}</span>
    </Button>
  );
};
