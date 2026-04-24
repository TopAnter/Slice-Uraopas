// Käyttäjän tietotyyppi
export interface UserData {
  name: string;
  title: string;
  initials: string;
  graduation: string;
  completedSteps: number; // Kuinka monta vaihetta suoritettu
  totalSteps: number;     // Vaiheita yhteensä
}
// Yksittäisen kurssivaiheen tietotyyppi
export interface CourseStep {
  id: number;
  title: string;
  completed: boolean; // Onko vaihe suoritettu
  locked: boolean;    // Onko vaihe lukittu
  active?: boolean;   // Onko vaihe seuraavana vuorossa
}
// Materiaalin tietotyyppi (profiilisivu)
export interface Material {
  id: string;
  name: string;
  status: "valmis" | "kesken";
}
// Kirjautuneen käyttäjän tiedot
export const currentUser: UserData = {
  name: "Matti Meikäläinen",
  title: "Lähihoitaja",
  initials: "M",
  graduation: "Toukokuu 2026",
  completedSteps: 1, // 1/10 valmis
  totalSteps: 10,
};
// Kaikki 10 kurssivaihetta järjestyksessä
export const courseSteps: CourseStep[] = [
  { id: 1,  title: "MINÄ TYÖNHAKIJANA", completed: true,  locked: false },
  { id: 2,  title: "OMAT TAIDOT",       completed: false, locked: false, active: true },
  { id: 3,  title: "CV",                completed: false, locked: true  },
  { id: 4,  title: "TYÖHAKEMUS",        completed: false, locked: true  },
  { id: 5,  title: "HISSIPUHE",         completed: false, locked: true  },
  { id: 6,  title: "ITSEVARMUUS",       completed: false, locked: true  },
  { id: 7,  title: "HAASTATTELU",       completed: false, locked: true  },
  { id: 8,  title: "TYÖELÄMÄTAIDOT",    completed: false, locked: true  },
  { id: 9,  title: "URASUUNNITELMA",    completed: false, locked: true  },
  { id: 10, title: "VALMIS TYÖNHAKUUN", completed: false, locked: true  },
];
// Käyttäjän materiaalit — näkyy profiilisivulla
export const materials: Material[] = [
  { id: "cv",       name: "CV",               status: "kesken" },
  { id: "hakemus",  name: "Työhakemus",        status: "kesken" },
  { id: "hissi",    name: "Hissipuhe",         status: "kesken" },
  { id: "linkedin", name: "LinkedIn-profiili", status: "kesken" },
];
// Vaiheen 1 sisältö — teksti ja tehtävänanto
export const stepOneContent = {
  stepNumber: 1,
  title: "Minä työnhakijana",
  subtitle: "Tunnista omat vahvuutesi",
  description:
    "Tässä vaiheessa opit tunnistamaan ja ilmaisemaan tärkeimmät vahvuutesi työnhakijana. Kun ymmärrät, mikä tekee sinusta ainutlaatuisen, erotut paremmin työnantajien silmissä.",
  task: {
    question: "Kuvaile itseäsi työnhakijana",
    description:
      "Kirjoita lyhyesti: mitkä ovat vahvuutesi, kiinnostuksen kohteesi ja mitä osaat tehdä hyvin?",
    placeholder:
      "Esimerkiksi: Olen ahkera ja pidän ihmisten kanssa työskentelystä. Opin nopeasti uusia asioita...",
  },
};