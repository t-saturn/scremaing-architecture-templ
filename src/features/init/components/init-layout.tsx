import { InitHero } from './init-hero';
import { InitSectionCard } from './init-sections-card';
import { JSX } from 'react';
import { Section } from '../types/interface';
import { ThemeToggle } from '@/shared/components/custom/theme-toogle';
import { getInitSections } from '../actions/get-init-sections';

export const InitLayout = async ({}: InitLayoutProps): Promise<JSX.Element> => {
  const sections = await getInitSections();

  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto px-4 py-10 max-w-5xl">
        <div className="flex justify-end items-center mb-4">
          <ThemeToggle />
        </div>

        <InitHero />

        <div className="gap-4 grid md:grid-cols-2 mt-4">
          {sections.map((section: Section) => (
            <div key={section.id} id={section.id}>
              <InitSectionCard title={section.title} description={section.description} items={section.items} />
            </div>
          ))}
        </div>
        <section className="bg-card mt-8 p-5 border border-border rounded-xl text-card-foreground text-sm">
          <h2 className="mb-2 font-semibold text-base">Ejemplo de imports con esta arquitectura</h2>
          <pre className="bg-muted/60 mt-2 p-3 rounded overflow-x-auto text-muted-foreground text-xs">
            {`// página usando la feature de auth
import { LoginForm } from "@features/auth/components/login-form";

// componente UI compartido
import { Button } from "@shared/components/ui/button";

// helper de API
import { apiFetch } from "@config/api";`}
          </pre>
        </section>
      </div>
    </main>
  );
};
