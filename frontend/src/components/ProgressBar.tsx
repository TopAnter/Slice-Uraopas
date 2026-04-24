// ProgressBar.tsx — Edistymispalkki
// Näyttää käyttäjälle kuinka monta vaihetta on suoritettu

interface ProgressBarProps {
  current: number; // Suoritettujen vaiheiden määrä
  total: number;   // Vaiheiden kokonaismäärä
}
export function ProgressBar({ current, total }: ProgressBarProps) {
  // Lasketaan prosenttiosuus edistymiselle
  const percent = Math.round((current / total) * 100);
  return (
    <div className="bg-card border border-border rounded-2xl px-5 py-4 mx-5">
      {/* Otsikkorivi: "Edistymisesi" + "X/10 valmis" */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">Edistymisesi</span>
        <span className="text-sm font-bold text-primary">
          {current}/{total} valmis
        </span>
      </div>
      {/* Visuaalinen edistymispalkki */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700"
          style={{ width: `${Math.max(percent, 3)}%` }} // Vähintään 3% näkyvissä
        />
      </div>
    </div>
  );
}