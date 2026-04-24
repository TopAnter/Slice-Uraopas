
// StepOneView.tsx — Vaiheen 1 näkymä
// Kaksi vaihetta: intro (video + tehtävä-nappi) ja itse tehtävä (tekstikenttä)


import { useState } from "react";
import { ArrowLeft, Play, FileText } from "lucide-react";
import { currentUser, stepOneContent } from "@/data/stepData";

interface StepOneViewProps {
  onBack: () => void; // Palataan takaisin kotinäkymään
}

// Sisäinen näkymätila: intro-näkymä tai tehtävänäkymä
type Phase = "intro" | "task";

export function StepOneView({ onBack }: StepOneViewProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answer, setAnswer] = useState("");            // Käyttäjän kirjoittama vastaus
  const [saved, setSaved] = useState(false);           // Onko vastaus tallennettu
  const [videoWatched, setVideoWatched] = useState(false); // Onko video katsottu

  // Tallennetaan vastaus (myöhemmin voidaan lähettää backendiin)
  function handleSave() {
    if (!answer.trim()) return;
    setSaved(true);
  }

  // ---- TEHTÄVÄNÄKYMÄ ----
  if (phase === "task") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Yläpalkki — takaisin-nappi + SLICE.FI */}
        <div className="px-5 pt-5 pb-2 flex items-center justify-between">
          <button
            onClick={() => setPhase("intro")}
            className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Takaisin
          </button>
          <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-lg tracking-wide">
            SLICE.FI
          </div>
        </div>

        <div className="px-5 pb-8 space-y-4">
          {/* Vaiheen numero ja kysymys */}
          <div>
            <p className="text-xs text-muted-foreground mb-1">
              Vaihe {stepOneContent.stepNumber} / {currentUser.totalSteps}
            </p>
            <h2 className="text-xl font-bold text-foreground">
              {stepOneContent.task.question}
            </h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {stepOneContent.task.description}
          </p>

          {/* Jos tallennettu: näytetään vastaus lukutilassa */}
          {saved ? (
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {answer}
              </p>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="text-emerald-400 text-base">✓</span>
                <span className="text-xs font-medium text-emerald-400">Tallennettu!</span>
                {/* Muokkausnappi */}
                <button
                  onClick={() => setSaved(false)}
                  className="ml-auto text-xs text-muted-foreground underline"
                >
                  Muokkaa
                </button>
              </div>
            </div>
          ) : (
            /* Tekstikenttä vastaukselle */
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder={stepOneContent.task.placeholder}
              rows={6}
              className="w-full bg-card border border-border rounded-2xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:border-primary/50 transition-colors"
            />
          )}

          {/* Tallenna tai palaa kotiin */}
          <button
            onClick={saved ? onBack : handleSave}
            disabled={!saved && !answer.trim()}
            className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {saved ? "Valmis — palaa takaisin" : "TALLENNA"}
          </button>
        </div>
      </div>
    );
  }

  // ---- INTRO-NÄKYMÄ ----
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Yläpalkki — takaisin-nappi + SLICE.FI */}
      <div className="px-5 pt-5 pb-2 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Takaisin
        </button>
        <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-lg tracking-wide">
          SLICE.FI
        </div>
      </div>

      <div className="px-5 space-y-5 pb-8">
        {/* Vaiheen numero + pääotsikko */}
        <div>
          <p className="text-xs text-muted-foreground mb-1">
            Vaihe {stepOneContent.stepNumber} / {currentUser.totalSteps}
          </p>
          <h1 className="text-2xl font-bold text-foreground">{stepOneContent.title}</h1>
        </div>

        {/* Video-placeholder — klikkauksella merkitään video katsotuksi */}
        <div
          className="bg-card border border-border rounded-2xl flex items-center justify-center cursor-pointer hover:border-primary/40 transition-colors"
          style={{ height: "220px" }}
          onClick={() => setVideoWatched(true)}
        >
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
              videoWatched ? "bg-primary/70" : "bg-primary"
            }`}
          >
            {/* Näytetään checkmark jos video on katsottu */}
            {videoWatched ? (
              <span className="text-primary-foreground text-2xl">✓</span>
            ) : (
              <FileText size={32} className="text-primary-foreground" />
            )}
          </div>
        </div>

        {/* Alaotsikko ja kuvaus */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-2">
            {stepOneContent.subtitle}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {stepOneContent.description}
          </p>
        </div>

        {/* KATSO VIDEO -nappi (outline-tyyli) */}
        <button
          onClick={() => setVideoWatched(true)}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full border border-border text-foreground font-bold text-sm tracking-wider hover:border-primary/50 transition-colors"
        >
          <Play size={14} className="text-primary" fill="currentColor" />
          KATSO VIDEO
        </button>

        {/* ALOITA TEHTÄVÄ -nappi (syaani) */}
        <button
          onClick={() => setPhase("task")}
          className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-wider hover:brightness-105 active:scale-[0.98] transition-all duration-150"
        >
          ALOITA TEHTÄVÄ
        </button>
      </div>
    </div>
  );
}