// main.tsx — React-sovelluksen käynnistyspiste

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Tyylit (Tailwind + SLICE.FI tumma teema)
createRoot(document.getElementById("root")!).render(<App />);