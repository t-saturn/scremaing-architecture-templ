import { JSX } from 'react';

export const InitSectionCard = ({ title, description, items }: InitSectionCardProps): JSX.Element => {
  return (
    <section className="bg-card shadow-sm p-5 border border-border rounded-xl">
      <h2 className="mb-1 font-semibold text-card-foreground text-lg">{title}</h2>
      <p className="mb-3 text-muted-foreground text-sm">{description}</p>

      {items && items.length > 0 && (
        <ul className="space-y-1 text-foreground text-sm list-disc list-inside">
          {items.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
