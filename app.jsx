// Main app — routing, palette tweaks, illustrations toggle

const PALETTES = {
  blush: {
    label: "Blush",
    bg: "#fff7f4", bgSoft: "#fdeee7", ink: "#3a2a2e", inkSoft: "#6f5b60",
    line: "#f1d9d4", accent: "#e89aa8", accentDeep: "#c8657a",
    peach: "#f8d7c2", blush: "#f4b8c4", cream: "#fbeadf",
  },
  mint: {
    label: "Mint",
    bg: "#f4faf6", bgSoft: "#e8f3ec", ink: "#26342c", inkSoft: "#5b6e63",
    line: "#dceae0", accent: "#7fbf9c", accentDeep: "#4d8a6a",
    peach: "#f5e6c2", blush: "#bfe3cf", cream: "#e7f1ea",
  },
  cream: {
    label: "Cream",
    bg: "#fdf6ef", bgSoft: "#f5e9d8", ink: "#3a2f25", inkSoft: "#6f5d4c",
    line: "#ecdcc5", accent: "#d4a574", accentDeep: "#a87545",
    peach: "#f5c6a5", blush: "#e8d4b8", cream: "#f5e9d8",
  },
  multi: {
    label: "Pastel mix",
    bg: "#fdf4f7", bgSoft: "#f5e8ee", ink: "#33282e", inkSoft: "#6e5a63",
    line: "#ecd9e0", accent: "#d486a0", accentDeep: "#9e5573",
    peach: "#a7c4e0", blush: "#e89aa8", cream: "#bfe3cf",
  },
};

function applyPalette(p) {
  const r = document.documentElement.style;
  r.setProperty("--bg", p.bg);
  r.setProperty("--bg-soft", p.bgSoft);
  r.setProperty("--ink", p.ink);
  r.setProperty("--ink-soft", p.inkSoft);
  r.setProperty("--line", p.line);
  r.setProperty("--accent", p.accent);
  r.setProperty("--accent-deep", p.accentDeep);
  r.setProperty("--peach", p.peach);
  r.setProperty("--blush", p.blush);
  r.setProperty("--cream", p.cream);
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "blush",
  "illustrations": true,
  "heroLine1": "Een feestje",
  "heroLine2": "zonder zorgen,",
  "heroLine3": "een ijskoude twist.",
  "heroLead": "Een superleuke verrassing voor ieder feestje, nu gemakkelijk te huren. Jij haalt de machine op en bepaalt de smaken. Van vrijgezellenfeest tot 21\u2011diner: een ijskoude verrassing waar je iedereen blij mee maakt.",
  "brandName": "Ninja",
  "brandSuffix": "rental"
}/*EDITMODE-END*/;

function App() {
  const initialPage = (() => {
    try {
      const p = new URLSearchParams(window.location.search).get("page");
      if (["home", "producten", "hoe", "contact"].includes(p)) return p;
    } catch (e) {}
    return "home";
  })();
  const [page, setPage] = React.useState(initialPage);
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  // Apply palette
  React.useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES.blush;
    applyPalette(p);
  }, [tweaks.palette]);

  // Illustrations body class
  React.useEffect(() => {
    document.body.classList.toggle("no-illu", !tweaks.illustrations);
  }, [tweaks.illustrations]);

  // Expose navigate for cross-component links
  React.useEffect(() => {
    window.__navigate = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
    return () => { delete window.__navigate; };
  }, []);

  const onNavigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let content = null;
  switch (page) {
    case "producten": content = <ProductsPage onNavigate={onNavigate} />; break;
case "hoe": content = <HowPage onNavigate={onNavigate} />; break;
    case "contact": content = <ContactPage />; break;
    default: content = <HomePage onNavigate={onNavigate} illustrations={tweaks.illustrations} tweaks={tweaks} />;
  }

  return (
    <div className="app">
      <Nav active={page} onNavigate={onNavigate} brandName={tweaks.brandName} brandSuffix={tweaks.brandSuffix} />
      <div className="shell-inner">{content}</div>
      <Footer />

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Palet">
            <window.TweakColor
              label="Kleurpalet"
              value={tweaks.palette}
              options={[
                ["#fff7f4", "#e89aa8", "#f4b8c4", "#f8d7c2"],
                ["#f4faf6", "#7fbf9c", "#bfe3cf", "#f5e6c2"],
                ["#fdf6ef", "#d4a574", "#e8d4b8", "#f5c6a5"],
                ["#fdf4f7", "#d486a0", "#bfe3cf", "#a7c4e0"],
              ]}
              onChange={(v) => {
                const map = [["#fff7f4","blush"],["#f4faf6","mint"],["#fdf6ef","cream"],["#fdf4f7","multi"]];
                const found = map.find(([c]) => Array.isArray(v) ? v[0] === c : v === c);
                setTweak("palette", found ? found[1] : "blush");
              }}
            />
          </window.TweakSection>
          <window.TweakSection title="Sfeer">
            <window.TweakToggle
              label="Speelse illustraties"
              value={tweaks.illustrations}
              onChange={(v) => setTweak("illustrations", v)}
            />
          </window.TweakSection>
          <window.TweakSection title="Tekst — Merk">
            <window.TweakText label="Bedrijfsnaam" value={tweaks.brandName} onChange={(v) => setTweak("brandName", v)} />
            <window.TweakText label="Naam-suffix" value={tweaks.brandSuffix} onChange={(v) => setTweak("brandSuffix", v)} />
          </window.TweakSection>
          <window.TweakSection title="Tekst — Hero">
            <window.TweakText label="Titel regel 1" value={tweaks.heroLine1} onChange={(v) => setTweak("heroLine1", v)} />
            <window.TweakText label="Titel regel 2" value={tweaks.heroLine2} onChange={(v) => setTweak("heroLine2", v)} />
            <window.TweakText label="Titel regel 3 (cursief)" value={tweaks.heroLine3} onChange={(v) => setTweak("heroLine3", v)} />
            <window.TweakText label="Intro tekst" value={tweaks.heroLead} onChange={(v) => setTweak("heroLead", v)} />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
