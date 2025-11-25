import Link from 'next/link';
import { Button } from '@shared/components/ui/button';

export const NotFoundView1 = () => {
  return (
    <div className="relative flex justify-center items-center bg-background w-screen h-screen overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-[url('/images/404-bg.jpg')] bg-cover bg-center blur-sm scale-105 pointer-events-none" />

      <div aria-hidden="true" className="absolute inset-0 bg-accent" />

      <div className="z-10 relative flex flex-col items-center px-4 text-card-foreground text-center">
        <p className="mb-4 font-medium text-foreground text-xs">Page was not found</p>

        <h1 className="font-semibold md:text-[160px] text-7xl sm:text-8xl leading-none tracking-tight">404</h1>

        <p className="mt-6 max-w-md text-foreground text-sm">La página que estás buscando no existe o fue movida. Verifica la URL o regresa al inicio.</p>

        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
