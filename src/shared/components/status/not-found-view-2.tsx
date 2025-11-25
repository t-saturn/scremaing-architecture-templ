import Link from 'next/link';

export const NotFoundView2 = () => {
  return (
    <div className="flex bg-background w-screen h-screen">
      <div className="flex flex-col justify-between p-6 md:p-10 lg:p-16 w-full h-full">
        <div>
          <div className="font-sans font-semibold text-5xl md:text-6xl lg:text-7xl tracking-[0.25em]">OS°</div>

          <div className="mt-8 font-mono text-[10px] uppercase leading-4 tracking-[0.35em]">
            <p>error 404 error 404 error 404</p>
            <p>error 404 error 404 error 404</p>
            <p>error 404 error 404 error 404</p>
          </div>

          <div className="mt-10 font-mono text-xs uppercase tracking-[0.28em]">
            <Link href="/" className="pb-1 border-transparent border-b transition-colors">
              return to safety
            </Link>
          </div>
        </div>

        <div className="font-mono text-[10px] uppercase leading-4 tracking-[0.25em]">
          <p>#cdc9b9</p>
          <p className="mt-4">errorday 404·04·04</p>

          <p className="mt-6">error</p>
          <p>error</p>
          <p>error@error.error</p>

          <p className="mt-6">earn a 15% referral fee</p>
        </div>
      </div>
    </div>
  );
};
