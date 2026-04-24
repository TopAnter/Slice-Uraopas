// Navbar.tsx — Yläpalkki
// Näyttää sivun otsikon ja SLICE.FI-merkin

interface NavbarProps {
  title: string; // Sivun otsikko, esim. "Uravalmennus"
}
export function Navbar({ title }: NavbarProps) {
  return (
    <header className="px-5 pt-5 pb-3 flex items-start justify-between">
      {/* Sivun pääotsikko */}
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      {/* SLICE.FI -merkki oikeassa yläkulmassa */}
      <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-lg tracking-wide mt-1">
        SLICE.FI
      </div>
    </header>
  );
}