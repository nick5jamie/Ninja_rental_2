// Page components

const HomePage = ({ onNavigate, illustrations, tweaks = {} }) =>
<div className="page" data-screen-label="Home">
    {/* HERO */}
    <section className="hero container" style={{ position: "relative" }}>
      {illustrations &&
    <>
          <FloatingFruit color="#f4b8c4" top={120} left={-30} size={50} />
          <FloatingFruit color="#f8d7c2" bottom={40} right={"45%"} size={40} delay={1.4} />
        </>
    }
      <div className="hero-grid">
        <div>
          <span className="hero-eyebrow">Slushy &amp; soft-serve verhuur</span>
          <h1>
            {tweaks.heroLine1 || "Een feestje"}<br />
            {tweaks.heroLine2 || "zonder zorgen,"}<br />
            <em>{tweaks.heroLine3 || "een ijskoude twist."}</em>
          </h1>
          <p className="lead">
            {tweaks.heroLead || "Een superleuke verrassing voor ieder feestje, nu gemakkelijk te huren. Jij haalt de machine op en bepaalt de smaken. Van vrijgezellenfeest tot 21‑diner: een ijskoude verrassing waar je iedereen blij mee maakt."}
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => onNavigate("producten")}>Bekijk de apparaten <Arrow /></button>
            <button className="btn btn-ghost" onClick={() => onNavigate("contact")}>Reserveer nu</button>
          </div>
          <div className="hero-meta">
            <div>
              <div className="num">2</div>
              <div className="lbl">Machines</div>
            </div>
            <div>
              <div className="num">∞</div>
              <div className="lbl">Smaken</div>
            </div>
            <div>
              <div className="num">Flexibel</div>
              <div className="lbl">Ophalen</div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <PhotoSlot label="Hero · slushy in actie" image="images/hero-slushy.jpeg" ratio="4/5" />
          <div className="float-badge float-1">
            <span className="dot" />
            <div>
              <div style={{ fontWeight: 500 }}>Vandaag beschikbaar</div>
              <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>Ophalen vanaf 10:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FEATURES */}
    <section className="section container">
      <div className="section-head">
        <div>
          <span className="eyebrow">Waarom huren bij ons</span>
          <h2>Snelle communicatie, vriendelijk,<br /><em>gemakkelijk geregeld.</em></h2>
        </div>
        <p>We denken graag met je mee! </p>
      </div>
      <div className="features">
        <div className="feature">
          <div className="icon"><IconTruck /></div>
          <h3>Flexibel ophalen</h3>
          <p>Haal je Ninja machine flexibel bij ons op, bekijk de instructievideo en creëer in een handomdraai je ijskoude drankje of ijs op je feest of meidenavond.</p>
        </div>
        <div className="feature">
          <div className="icon"><IconHeart /></div>
          <h3>Schoonmaken</h3>
          <p>De onderdelen van de machine die vies worden bij gebruik zijn vaatwasser bestendig, geen gedoe met afwassen dus.</p>
        </div>
        <div className="feature">
          <div className="icon"><IconSpark /></div>
          <h3>Met gemak feest-klaar</h3>
          <p>De machines doen het moeilijke werk, zodat jij je bezig kunt houden met andere voorbereidingen voor je feest!</p>
        </div>
      </div>

      <div className="quote">
        <p className="q">"De slushi was écht het hoogtepunt van het diner. De bevroren cocktails waren super lekker en snel klaar."

      </p>
        <span className="who">— AMBER · 21 DINER ENSCHEDE</span>
      </div>
    </section>

    {/* PEEK products */}
    <section className="section container" style={{ paddingTop: 0 }}>
      <div className="section-head">
        <div>
          <span className="eyebrow">De machines</span>
          <h2>Twee vibes,<br /><em>één gezellige avond.</em></h2>
        </div>
        <button className="btn btn-ghost" onClick={() => onNavigate("producten")}>Alle pakketten <Arrow /></button>
      </div>
      <div className="product-grid">
        <ProductPeek tag="Pakket 01" title={<>Ninja <em>Slushi</em></>}
      desc="Met onze Ninja Slushi machine maak je in een handomdraai de lekkerste slush puppy, ijskoffie, bevroren cocktails of scropino's. Vul de machine met je favoriete dranken en laat ze ijskoud worden in +- 30 minuten. Uit één batch haal je ongeveer 12 bekertjes of 8 flinke cocktails."
      image="images/slushi.png"
      gradient="linear-gradient(150deg, #fce4ec, #f4b8c4)"
      onNavigate={() => onNavigate("producten")} />
      
        <ProductPeek
        tag="Pakket 02"
        title={<>Ninja <em>Swirl</em></>}
        desc="Met onze Ninja Swirl maak je in een handomdraai ijs in alle smaken die je maar kunt bedenken. Bevries je ingrediënten in de bijgeleverde ijsbakken en de machine maakt er in een paar minuten heerlijk ijs van. Met deze 13-in-1 ijsmachine maak je zowel heerlijk romig softijs uit de dispenser als schepijs, sorbets en milkshakes. Voeg toppings als koekjes of fruit toe om het helemaal af te maken. "
        gradient="linear-gradient(150deg, #fdeee7, #f8d7c2)"
        image="images/creami.png"
        onNavigate={() => onNavigate("producten")} />
      
      </div>
    </section>
  </div>;


const ProductPeek = ({ tag, title, desc, gradient, image, onNavigate }) =>
<div className="product-card" onClick={onNavigate} style={{ cursor: "pointer" }}>
    <div className="product-photo" style={{ background: image ? "none" : gradient, backgroundImage: image ? `url(${image})` : undefined, backgroundSize: "cover", backgroundPosition: "center" }}>
      {!image && <span className="product-photo-label">Productfoto</span>}
    </div>
    <div className="product-body">
      <span className="product-tag">{tag}</span>
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
      <div className="product-cta">
        <button className="btn btn-primary" onClick={onNavigate}>Meer info <Arrow /></button>
      </div>
    </div>
  </div>;


const ProductsPage = ({ onNavigate }) =>
<div className="page" data-screen-label="Producten">
    <section className="subhero container">
      <span className="eyebrow">Pakketten</span>
      <h1>Kies je <em>vibe.</em></h1>
      <p>Ga jij voor de Slushi of de Swirl? Lees hieronder meer over de beide opties! </p>
    </section>

    <section className="section container" style={{ paddingTop: 32 }}>
      <div className="product-grid">
        <ProductFull
        tag="Pakket 01"
        title={<>Ninja <em>Slushi</em></>}
        desc="Onze slushy machine. Vul met je favoriete smaken en laat het ijskoud worden in zo'n 30 minuten. Tot 12 glazen uit één vulling."
        price="€ 25"
        duration="Per dag"
        borg="€ 50"
        servings="80 bekertjes"
        gradient="linear-gradient(150deg, #fce4ec, #f4b8c4)"
        image="images/slushi.png"
        includes={[
        "Slushy machine met inhoud van 1,9 liter",
        "Te vullen met je favoriete smaken",
        "Ophalen en terugbrengen wanneer het jou past",
        "Vaatwasser bestendige onderdelen"]
        }
        onNavigate={onNavigate} />
      
        <ProductFull
        tag="Pakket 02"
        title={<>Ninja <em>Swirl</em></>}
        desc="Voor wie heerlijk softijs, schepijs, milkshakes of sorbets wil maken in een handomdraai is onze Ninja Swirl de ideale keuze. Per ijsbak maak je 480 ml ijs. "
        price="€ 30"
        duration="Per dag"
        borg="€ 50"
        gradient="linear-gradient(150deg, #fdeee7, #f8d7c2)"
        image="images/creami.png"
        includes={[
        "Soft serve machine met 2 ijsbakken",
        "Te vullen met je favoriete smaken",
        "Ophalen en terugbrengen wanneer het jou past",
        "Vaatwasser bestendige ijsbakken",
        "Extra ijsbakken huren tegen meerprijs mogelijk"]
        }
        onNavigate={onNavigate} />
      
      </div>

      <div className="quote">
        <p className="q">"Geen gedoe, geen stress. Ik heb in de ochtend de ingrediënten in de ijsbakken bevroren en had tijdens het feest in een paar minuten heerlijk ijs."</p>
        <span className="who">— SHARON · BABYSHOWER ENSCHEDE</span>
      </div>
    </section>
  </div>;


const ProductFull = ({ tag, title, desc, price, duration, borg, gradient, image, includes, onNavigate }) =>
<div className="product-card">
    <div className="product-photo" style={{ background: image ? "none" : gradient, backgroundImage: image ? `url(${image})` : undefined, backgroundSize: "cover", backgroundPosition: "center" }}>
      {!image && <span className="product-photo-label">Productfoto · Lifestyle</span>}
    </div>
    <div className="product-body">
      <span className="product-tag">{tag}</span>
      <h3>{title}</h3>
      <p className="desc">{desc}</p>

      <div className="product-meta-row">
        <div>
          <div className="lbl">Vanaf</div>
          <div className="val">{price}</div>
        </div>
        <div>
          <div className="lbl">Duur</div>
          <div className="val">{duration}</div>
        </div>
        <div>
          <div className="lbl">Borg</div>
          <div className="val">{borg}</div>
        </div>
      </div>

      <ul className="includes">
        {includes.map((it) =>
      <li key={it}><span className="check">✓</span><span>{it}</span></li>
      )}
      </ul>

      <div className="product-cta">
        <button className="btn btn-primary" onClick={() => onNavigate("contact")}>Aanvragen <Arrow /></button>
        <button className="btn btn-ghost" onClick={() => onNavigate("contact")}>Reserveer nu</button>
      </div>
    </div>
  </div>;


// ------- Calendar -------
const AvailabilityPage = ({ onNavigate }) => {
  const [machine, setMachine] = React.useState("both"); // "slushy" | "softserve" | "both"
  const [weekOffset, setWeekOffset] = React.useState(0);

  // Generate 4 weeks starting from Monday of current week + offset
  const today = new Date(2026, 4, 9); // May 9, 2026 (project current date)
  const startMonday = new Date(today);
  const dayOfWeek = (today.getDay() + 6) % 7; // Mon=0
  startMonday.setDate(today.getDate() - dayOfWeek + weekOffset * 7);

  const weeks = [];
  for (let w = 0; w < 4; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(startMonday);
      date.setDate(startMonday.getDate() + w * 7 + d);
      days.push(date);
    }
    weeks.push(days);
  }

  // Mock availability — deterministic by date
  const status = (date) => {
    if (date < today.setHours(0, 0, 0, 0) && new Date(date).setHours(0, 0, 0, 0) < today) return "past";
    const day = date.getDate();
    const dow = date.getDay();
    // weekends are mostly busy, weekdays mostly free, some option
    if ([0, 6].includes(dow)) {
      if ([10, 17, 24, 31, 7, 14, 21, 28].includes(day)) return "busy";
      if ([3, 9].includes(day % 7)) return "option";
      return "option";
    }
    if (day % 11 === 0) return "busy";
    if (day % 7 === 3) return "option";
    return "free";
  };

  const today2 = new Date(2026, 4, 9);
  const isToday = (d) => d.toDateString() === today2.toDateString();
  const isPast = (d) => d < new Date(2026, 4, 9, 0, 0, 0);

  const monthLabel = () => {
    const first = weeks[0][0];
    const last = weeks[3][6];
    const fm = first.toLocaleDateString("nl-NL", { month: "long" });
    const lm = last.toLocaleDateString("nl-NL", { month: "long" });
    return fm === lm ? `${fm} ${first.getFullYear()}` : `${fm} – ${lm} ${last.getFullYear()}`;
  };

  const dayHeads = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

  return (
    <div className="page" data-screen-label="Beschikbaarheid">
      <section className="subhero container">
        <span className="eyebrow">AGENDA
</span>
        <h1>Wanneer kun je <em>bij ons terecht?</em></h1>
        <p>Hieronder zie je in één oogopslag welke dagen vrij zijn. Stuur een aanvraag via het contactformulier, wij bevestigen binnen 24 uur.</p>
      </section>

      <section className="section container" style={{ paddingTop: 24 }}>
        <div className="cal-wrap">
          <div className="cal-controls">
            <div className="row" style={{ gap: 16 }}>
              <div className="cal-arrows">
                <button className="cal-arrow" onClick={() => setWeekOffset(weekOffset - 1)} aria-label="Vorige week">‹</button>
                <button className="cal-arrow" onClick={() => setWeekOffset(weekOffset + 1)} aria-label="Volgende week">›</button>
              </div>
              <span className="month">{monthLabel()}</span>
            </div>
            <div className="cal-machine-toggle">
              <button className={machine === "both" ? "on" : ""} onClick={() => setMachine("both")}>Beide machines</button>
              <button className={machine === "slushy" ? "on" : ""} onClick={() => setMachine("slushy")}>Ninja Slushi</button>
              <button className={machine === "softserve" ? "on" : ""} onClick={() => setMachine("softserve")}>Ninja Swirl</button>
            </div>
          </div>

          <div className="cal-grid">
            <div /> {/* corner */}
            {dayHeads.map((d) => <div key={d} className="cal-head">{d}</div>)}

            {weeks.map((week, wi) => <React.Fragment key={wi}>
                <div className="cal-week-label">w{getWeekNumber(week[0])}</div>
                {week.map((d, di) => {
                const past = isPast(d);
                let s;
                if (past) s = "past";else
                {
                  const day = d.getDate();
                  const dow = d.getDay();
                  if ([0, 6].includes(dow)) {
                    s = day % 3 === 0 ? "busy" : day % 5 === 0 ? "option" : "option";
                  } else {
                    s = day % 11 === 0 ? "busy" : day % 7 === 3 ? "option" : "free";
                  }
                }
                return (
                  <div
                    key={di}
                    className={`cal-cell ${s} ${isToday(d) ? "today" : ""}`}
                    title={d.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" })}>
                    
                      <span className="num">{d.getDate()}</span>
                    </div>);

              })}
              </React.Fragment>
            )}
          </div>

          <div className="cal-legend">
            <span><span className="swatch" style={{ background: "#f0f9f3" }}></span>Vrij</span>
            <span><span className="swatch" style={{ background: "var(--cream)" }}></span>Optie / nog ruimte</span>
            <span><span className="swatch" style={{ background: "#fbeeee" }}></span>Volgeboekt</span>
            <span><span className="swatch" style={{ outline: "2px solid var(--accent)", outlineOffset: -1, background: "transparent" }}></span>Vandaag</span>
            <span style={{ marginLeft: "auto", color: "var(--accent-deep)", fontStyle: "italic", fontFamily: "Instrument Serif" }}>Alleen ter informatie — boekingen via contact</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
          <div className="feature">
            <div className="icon"><IconCal /></div>
            <h3>Geen vrije dag gevonden?</h3>
            <p>Stuur ons een berichtje, soms hebben we last-minute ruimte of kunnen we schuiven.</p>
            <div style={{ marginTop: 16 }}>
              <button className="btn btn-ghost" onClick={() => onNavigate("contact")}>Stuur een bericht <Arrow /></button>
            </div>
          </div>
          <div className="feature">
            <div className="icon"><IconHeart /></div>
            <h3>Vroeg boeken loont</h3>
            <p>Zomerweekenden lopen snel vol. Reserveer 4–6 weken vooraf voor de meeste keuze.</p>
            <div style={{ marginTop: 16 }}>
              <button className="btn btn-ghost" onClick={() => onNavigate("producten")}>Bekijk pakketten <Arrow /></button>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

function getWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
}

// ------- How it works -------
const HowPage = ({ onNavigate }) =>
<div className="page" data-screen-label="Hoe het werkt">
    <section className="subhero container">
      <span className="eyebrow">Zo simpel is het</span>
      <h1>Zes stappen,<br /><em>en je feest is rond.</em></h1>
      <p>Lees hier hoe het huren van de machines werkt.</p>
    </section>

    <section className="section container" style={{ paddingTop: 32 }}>
      <div className="steps">
        <div className="step">
          <span className="step-tag">Stap één</span>
          <span className="num">01</span>
          <h3>Stuur een aanvraag</h3>
          <p>Vul het contactformulier in met je gegevens, datum en welk pakket je leuk vindt. </p>
        </div>
        <div className="step">
          <span className="step-tag">Stap twee</span>
          <span className="num">02</span>
          <h3>Wij bevestigen</h3>
          <p>Binnen 24 uur krijg je een persoonlijk bericht ter bevestiging. Vervolgens stemmen we de ophaaltijd van de machine(s) met je af.</p>
        </div>
        <div className="step">
          <span className="step-tag">Stap drie</span>
          <span className="num">03</span>
          <h3>Ophalen</h3>
          <p>Op de dag zelf haal je de machine(s) op de afgesproken tijd op. Je betaalt en krijgt een korte uitleg over de machine(s).</p>
        </div>
        <div className="step">
          <span className="step-tag">Stap vier</span>
          <span className="num">04</span>
          <h3>Feestje</h3>
          <p>Vul de machine(s) met je favoriete smaken en geniet samen met je gasten van vers, ijskoud lekkers tijdens je feest.</p>
        </div>
        <div className="step">
          <span className="step-tag">Stap vijf</span>
          <span className="num">05</span>
          <h3>Schoonmaken</h3>
          <p>Na afloop maak je de machine(s) schoon. De losse onderdelen zijn vaatwasser­bestendig en de rest is met een doek af te nemen, dus dat is zo gepiept.</p>
        </div>
        <div className="step">
          <span className="step-tag">Stap zes</span>
          <span className="num">06</span>
          <h3>Terugbrengen</h3>
          <p>Breng de machine(s) op de afgesproken tijd weer bij ons terug. Je borg krijg je netjes retour.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, marginTop: 96, alignItems: "center" }}>
        <div>
          <span className="eyebrow">Veelgestelde vragen</span>
          <h2 style={{ fontWeight: 300, fontSize: 44, letterSpacing: "-0.02em", margin: "8px 0 32px", lineHeight: 1.05 }}>
            Even het<br /><em className="serif" style={{ color: "var(--accent-deep)" }}>kleine lettertje.</em>
          </h2>
          <Faq q="Bezorgen jullie ook?" a="Op dit moment is bezorgen nog geen mogelijkheid. Mocht ophalen echt niet lukken, kunnen we de mogelijkheden voor bezorging tegen betaling met elkaar bespreken. " />
          <Faq q="Zijn de machines geschikt voor gasten met allergieën?" a="Wij maken de machines altijd grondig schoon. We zijn echter niet op de hoogte van de ingrediënten die in de machines gebruikt zijn en kunnen niet garanderen dat kleine hoeveelheden achterblijven in de machine. " />
          <Faq q="Wat als de machine kapotgaat?" a="Mocht er iets met de machines zijn, bespreek dat dan met ons. Dan kunnen we samen kijken hoe dit het beste op te lossen is. Mocht je onderdelen van de machine kapot gemaakt hebben, krijg je de vooraf betaalde borg niet meer terug. " />
          <Faq q="Hoe kan ik betalen?" a="Je kunt bij ons contant betalen. Andere betaalwijzen zijn nog niet mogelijk. " />
        </div>
        <div>
          <PhotoSlot label="Lifestyle · feestje" image="images/faq-slushi.jpeg" ratio="3/4" />
        </div>
      </div>
    </section>
  </div>;


const Faq = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderTop: "1px solid var(--line)", padding: "20px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", border: "none", background: "none", padding: 0, color: "var(--ink)", textAlign: "left" }}>
        
        <span style={{ fontSize: 17, fontWeight: 500 }}>{q}</span>
        <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic", color: "var(--accent-deep)", fontSize: 24, transform: open ? "rotate(45deg)" : "none", transition: "transform 200ms" }}>+</span>
      </button>
      {open && <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, margin: "12px 0 0", fontSize: 15 }}>{a}</p>}
    </div>);

};

// ------- Contact -------
const ContactPage = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", date: "", package: "Ninja Slushi", address: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page" data-screen-label="Contact">
      <section className="subhero container">
        <span className="eyebrow">CONTACT</span>
        <h1>Stuur ons<br /><em>een bericht.</em></h1>
        <p>Vertel ons over je feestje. Geen verplichting, geen verkoop-praatje, gewoon een vriendelijk antwoord binnen 24 uur.</p>
      </section>

      <section className="section container" style={{ paddingTop: 32 }}>
        <div className="contact-grid">
          <div className="contact-side">
            <h3>Liever direct <em>contact?</em></h3>
            <p>App ons gerust, we zijn op dagen tussen 9 en 18 uur snel terug. In het weekend reageren we als het kan.</p>
            <div className="contact-info">
              <div className="contact-info-row">
                <span className="ic"><IconMail /></span>
                <div>
                  <div className="lbl">Mail</div>
                  <div>ninja.rental.twente@gmail.com</div>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="ic"><IconPhone /></span>
                <div>
                  <div className="lbl">Telefoon &amp; WhatsApp</div>
                  <div>06 - 49 26 59 34</div>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="ic"><IconPin /></span>
                <div>
                  <div className="lbl">Bezoekadres</div>
                  <div>Op afspraak · Enschede</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel">
            {submitted ?
            <div className="submitted">
                <div className="ring">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16l5 5 11-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4>Yes, ontvangen!</h4>
                <p>We hebben je aanvraag binnen. Je hoort binnen 24 uur van ons — meestal sneller. ♡</p>
                <div style={{ marginTop: 24 }}>
                  <button className="btn btn-ghost" onClick={() => {setSubmitted(false);setForm({ name: "", email: "", date: "", package: "Ninja Slushi", address: "", message: "" });}}>Nog een aanvraag</button>
                </div>
              </div> :

            <form onSubmit={onSubmit}>
                <div className="field-row">
                  <div className="field">
                    <label>Je naam</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Lieke van der Berg" />
                  </div>
                  <div className="field">
                    <label>E-mail</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="lieke@email.nl" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Datum feestje</label>
                    <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Adres</label>
                    <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Straat 1, 1234 AB Stad" />
                  </div>
                </div>
                <div className="field">
                  <label>Welk pakket?</label>
                  <select value={form.package} onChange={(e) => setForm({ ...form, package: e.target.value })}>
                    <option>Ninja Slushi</option>
                    <option>Ninja Swirl</option>
                    <option>Allebei graag</option>
                    <option>Weet ik nog niet</option>
                  </select>
                </div>
                <div className="field">
                  <label>Vragen?</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Heb je nog vragen? Stel ze hier!" />
                </div>
                <button type="submit" className="btn btn-accent" style={{ width: "100%", justifyContent: "center" }}>
                  Stuur aanvraag <Arrow />
                </button>
                <p style={{ fontSize: 12, color: "var(--ink-soft)", textAlign: "center", margin: "16px 0 0" }}>
                  We reageren binnen 24 uur. Geen spam, beloofd.
                </p>
              </form>
            }
          </div>
        </div>
      </section>
    </div>);

};

Object.assign(window, { HomePage, ProductsPage, AvailabilityPage, HowPage, ContactPage });