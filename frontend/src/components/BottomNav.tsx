// BottomNav.tsx — Alanavigaatio
// Kolme välilehteä: Koti, Valmennus, Profiili

import { Home, BookOpen, User } from "lucide-react";
// Välilehden tunniste — käytetään App.tsx:ssä navigointiin
export type TabId = "home" | "coaching" | "profile";
interface BottomNavProps {
  active: TabId;                  // Aktiivinen välilehti
  onChange: (tab: TabId) => void; // Kutsutaan kun käyttäjä vaihtaa välilehteä
}
// Navigaation välilehdet
const tabs = [
  { id: "home"     as const, label: "Koti",      Icon: Home     },
  { id: "coaching" as const, label: "Valmennus", Icon: BookOpen },
  { id: "profile"  as const, label: "Profiili",  Icon: User     },
];
export function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-lg mx-auto flex justify-around px-2 py-2">
        {tabs.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              // Aktiivinen välilehti näytetään päävärillä (syaani)
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-colors duration-150 ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={21} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}