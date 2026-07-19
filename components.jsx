// Shared UI components

const Logo = ({ name = "Ninja", suffix = "rental" }) =>
<a href="#home" className="brand" onClick={(e) => {e.preventDefault();window.__navigate && window.__navigate("home");}}>
    <span className="brand-mark">n</span>
    <span className="brand-name">{name} <em>{suffix}</em></span>
  </a>;


const Nav = ({ active, onNavigate, brandName, brandSuffix }) => {
  const tabs = [
  { id: "home", label: "Home" },
  { id: "producten", label: "Producten" },
{ id: "hoe", label: "Hoe het werkt" },
  { id: "contact", label: "Contact" }];

  return (
    <header className="nav">
      <div className="nav-inner">
        <Logo name={brandName} suffix={brandSuffix} />
        <nav className="nav-tabs" role="tablist">
          {tabs.map((t) =>
          <button
            key={t.id}
            className={`nav-tab ${active === t.id ? "active" : ""}`}
            onClick={() => onNavigate(t.id)}>
            
              {t.label}
            </button>
          )}
        </nav>
        <a className="nav-cta" href="#contact" onClick={(e) => {e.preventDefault();onNavigate("contact");}}>
          Reserveren <Arrow />
        </a>
      </div>
    </header>);

};

const Arrow = ({ size = 14 }) =>
<svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


const IconTikTok = () =>
<svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M13 2v9.5a3 3 0 11-3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M13 2c0 2.5 2 4.5 4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>;

const IconFacebook = () =>
<svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M12 6h2V3h-2.5A3.5 3.5 0 008 6.5V9H6v3h2v6h3v-6h2.5L14 9h-3V7c0-.6.4-1 1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>;

const IconInstagram = () =>
<svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="14.4" cy="5.6" r="0.9" fill="currentColor" />
  </svg>;


const Footer = () =>
<footer className="footer">
    <div className="footer-inner">
      <div>
        <Logo />
        <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6, margin: "16px 0 0", maxWidth: 320 }}>Een gezellige slushy of soft-serve op jouw feestje?  Ninja rental is de keuze voor jou!

      </p>
        <div className="socials">
          <a href="https://www.tiktok.com/@ninja_rental?_r=1&_t=ZG-98ADvSXbet6" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link"><IconTikTok /><span>TikTok</span></a>
          <a href="https://www.instagram.com/ninja.rental.twente/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><IconInstagram /><span>Instagram</span></a>
          <a href="https://www.facebook.com/profile.php?id=61592166358578&locale=nl_NL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link"><IconFacebook /><span>Facebook</span></a>
        </div>
      </div>
      <div>
        <h5>Bezoeken</h5>
        <ul>
          <li><a onClick={(e) => {e.preventDefault();window.__navigate("producten");}} href="#">Producten</a></li>
<li><a onClick={(e) => {e.preventDefault();window.__navigate("hoe");}} href="#">Hoe het werkt</a></li>
          <li><a onClick={(e) => {e.preventDefault();window.__navigate("contact");}} href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Voor</h5>
        <ul>
          <li>Verjaardagen</li>
          <li>Vrijgezellenfeesten</li>
          <li>Sweet 16 &amp; 21 diners</li>
          <li>Babyshowers</li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li>ninja.rental.twente@gmail.com</li>
          <li>06 - 49 26 59 34</li>
          <li>Ma–Zo · 9:00–18:00</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Ninja rental </span>
      <span>Gemaakt met liefde &amp; aardbeien</span>
    </div>
  </footer>;


// Small SVG icons for features
const IconSpark = () =>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2v5M10 13v5M2 10h5M13 10h5M4.5 4.5l3.5 3.5M12 12l3.5 3.5M4.5 15.5L8 12M12 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>;

const IconCup = () =>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 6h10l-1 10a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7 3.5c0 1 1.5 1 1.5 2.5M11 3.5c0 1 1.5 1 1.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>;

const IconCal = () =>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3 9h14M7 3v3M13 3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>;

const IconHeart = () =>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 16s-6-3.5-6-8a3.5 3.5 0 016-2.5A3.5 3.5 0 0116 8c0 4.5-6 8-6 8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>;

const IconTruck = () =>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2 6h9v8H2V6zM11 9h4l2 3v2h-6V9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="6" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="14" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>;

const IconPhone = () =>
<svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M5 3h3l1.5 4-2 1a8 8 0 004.5 4.5l1-2 4 1.5v3a2 2 0 01-2 2A12 12 0 013 5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>;

const IconMail = () =>
<svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>;

const IconPin = () =>
<svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M10 17s5-4.5 5-9a5 5 0 10-10 0c0 4.5 5 9 5 9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
  </svg>;


// Decorative illustrations (used when illustrations are on)
const FloatingFruit = ({ color, top, left, right, bottom, size = 60, delay = 0 }) =>
<span
  className="floating-fruit"
  style={{
    top, left, right, bottom,
    width: size, height: size,
    background: `radial-gradient(circle at 35% 30%, white, ${color} 70%)`,
    animation: `bobble 6s ease-in-out ${delay}s infinite`
  }} />;



// Slot placeholders for imagery the user supplies later
const PhotoSlot = ({ label, gradient, image, ratio = "4/3", radius = 28 }) =>
<div
  className="photo-slot"
  style={{
    position: "relative",
    aspectRatio: ratio,
    borderRadius: radius,
    background: gradient || "linear-gradient(160deg, var(--cream), var(--blush))",
    overflow: "hidden"
  }}>
  
    {image ?
  <img src={image} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> :

  <span>{label}</span>
  }
  </div>;


Object.assign(window, {
  Logo, Nav, Footer, Arrow,
  IconSpark, IconCup, IconCal, IconHeart, IconTruck, IconPhone, IconMail, IconPin,
  IconTikTok, IconFacebook, IconInstagram,
  FloatingFruit, PhotoSlot
});