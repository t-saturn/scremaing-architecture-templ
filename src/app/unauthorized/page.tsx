import type { JSX } from 'react';
import Link from 'next/link';
import { Button } from '@shared/components/ui/button';

const UnauthorizedPage = ({}: UnauthorizedPageProps): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-background min-h-screen">
      <div className="bg-card mx-4 p-6 border border-border rounded-xl max-w-md text-card-foreground text-center">
        <p className="font-medium text-muted-foreground text-xs">Error 401</p>

        <h1 className="mt-2 font-semibold text-2xl">Acceso no autorizado</h1>

        <p className="mt-2 text-muted-foreground text-sm">No tienes permisos para ver esta página. Inicia sesión con una cuenta autorizada o regresa al inicio.</p>

        <div className="flex sm:flex-row flex-col sm:justify-center items-center gap-3 mt-6">
          <Button asChild variant="outline">
            <Link href="/">Volver al inicio</Link>
          </Button>

          <Button asChild>
            <Link href="/login">Ir a iniciar sesión</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default UnauthorizedPage;
