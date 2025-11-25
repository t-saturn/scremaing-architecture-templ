import { APP_CONFIG } from '@config/app';
import { Button } from '@shared/components/ui/button';
import { JSX } from 'react';

export const InitHero = ({}: InitHeroProps): JSX.Element => {
  return (
    <header className="space-y-4 mb-8">
      <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1 border border-border rounded-full text-muted-foreground text-xs">
        <span className="bg-primary rounded-full w-2 h-2" />
        <span>Plantilla base con Screaming Architecture</span>
      </div>

      <h1 className="font-bold text-foreground text-3xl md:text-4xl">{APP_CONFIG.name}</h1>

      <p className="max-w-xl text-muted-foreground text-sm md:text-base">
        {APP_CONFIG.description}. Esta plantilla está organizada por features para que el dominio del proyecto sea lo primero que se entiende al abrir el repositorio.
      </p>

      <div className="flex flex-wrap gap-3 text-sm">
        <Button asChild>
          <a href="https://github.com/robertmartin/clean-architecture" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            Ver concepto de Screaming Architecture
          </a>
        </Button>

        <Button asChild variant="outline">
          <a href="#estructura" className="inline-flex items-center gap-2">
            Ver estructura del proyecto
          </a>
        </Button>
      </div>
    </header>
  );
};
