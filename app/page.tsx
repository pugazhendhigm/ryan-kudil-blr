'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Flower2,
  Heart,
  Home,
  MapPin,
  Phone,
  Sparkles,
  UserRound,
  UsersRound,
} from 'lucide-react';

const details = [
  { icon: CalendarDays, label: 'Friday, 27 November 2026' },
  { icon: Clock3, label: 'From 4:00 AM onwards' },
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="invitation-shell">
      <header className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
        <a className="nav-mark" href="#top" aria-label="Ryan's Kudil home">
          <span className="mark-icon"><Home size={15} strokeWidth={1.5} /></span>
          <span className="nav-name">Ryan&apos;s Kudil</span>
        </a>
        <a className="nav-link" href="#details">The Details <ArrowDown size={14} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <BotanicalCorner className="botanical botanical--top-left" />
        <BotanicalCorner className="botanical botanical--top-right botanical--flipped" />
        <div className="hero-inner">
          <div className="eyebrow reveal-up">A new beginning · A warm welcome</div>
          <div className="home-emblem reveal-up reveal-delay-1">
            <span className="emblem-line" />
            <Home size={24} strokeWidth={1.2} />
            <span className="emblem-line" />
          </div>
          <p className="blessing reveal-up reveal-delay-1">With the blessings of the Almighty<br />and the grace of our elders</p>
          <h1 className="hero-script reveal-up reveal-delay-2">Griha Pravesh</h1>
          <p className="ceremony reveal-up reveal-delay-2"><span /> Ceremony <span /></p>
          <p className="subhead reveal-up reveal-delay-2">of our new home</p>
          <div className="house-name reveal-up reveal-delay-3">
            <span className="ornament">❧</span>
            <span>Ryan&apos;s Kudil</span>
            <span className="ornament ornament--right">❧</span>
          </div>
          <a className="scroll-cue reveal-up reveal-delay-4" href="#welcome">
            <span>Scroll to explore</span>
            <ChevronDown size={18} strokeWidth={1.5} />
          </a>
        </div>
        <div className="hero-stem hero-stem--left" />
        <div className="hero-stem hero-stem--right" /> 
      </section>

      <section className="welcome-section" id="welcome">
        <FloralSprig className="sprig sprig--left" />
        <div className="section-inner welcome-inner" data-reveal>
          <div className="section-kicker"><Flower2 size={15} /> You are warmly invited</div>
          <h2 className="display-title">Come celebrate<br /><em>with us.</em></h2>
          <div className="thin-rule" />
          <p className="welcome-copy">As we open the doors to our new home, we invite you to share in our joy and bless this beautiful beginning.</p>
          <div className="family-feature">
            <div className="family-feature-heading">
              <div>
                <span className="family-feature-kicker">The family behind the home</span>
                <span className="family-feature-note">A house made beautiful by love</span>
              </div>
              <Sparkles size={17} />
            </div>
            <div className="family-profile family-profile--parents">
              <div className="family-profile-icon"><UsersRound size={23} /></div>
              <div className="family-profile-copy">
                <span className="family-card-label">The hosts</span>
                <strong>Saravanan <b>&amp;</b> Kamatchi</strong>
                <small>With the blessings of our elders</small>
              </div>
            </div>
            <div className="family-connector"><span /> <Heart size={15} fill="currentColor" /> <span /></div>
            <div className="family-profile family-profile--son">
              <div className="family-profile-icon"><UserRound size={23} /></div>
              <div className="family-profile-copy">
                <span className="family-card-label">Their son</span>
                <strong>Ryan</strong>
                <small>The heart of Ryan&apos;s Kudil</small>
              </div>
            </div>
          </div>
        </div>
        <FloralSprig className="sprig sprig--right" />
      </section>

      <section className="details-section" id="details">
        <div className="section-inner">
          <div className="details-heading" data-reveal>
            <div className="section-kicker"><Sparkles size={14} /> Mark your calendar</div>
            <h2 className="display-title display-title--small">The <em>gathering</em></h2>
          </div>
          <div className="details-card" data-reveal>
            <div className="details-card-top">
              {details.map(({ icon: Icon, label }) => (
                <div className="detail-item" key={label}>
                  <span className="detail-icon"><Icon size={19} strokeWidth={1.4} /></span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="card-divider" />
            <a className="venue-block venue-link" href="https://share.google/knt294roCFa0K7mqD" target="_blank" rel="noreferrer" aria-label="Open Ryan's Kudil address in Google Maps">
              <div className="venue-icon"><MapPin size={20} strokeWidth={1.3} /></div>
              <div>
                <span className="detail-label">Address</span>
                <p>408, SGK Sai Sonna Koodam,<br />Daddy&apos;s Garden Layout,<br />Kammasandra Road,<br />Bangalore</p>
                <span className="map-cta">Open in Google Maps <ArrowUpRight size={14} /></span>
              </div>
            </a>
            <a className="phone-link" href="tel:7200024264"><Phone size={16} strokeWidth={1.5} /> 7200024264</a>
          </div>
        </div>
      </section>

      <section className="closing-section" data-reveal>
        <BotanicalCorner className="botanical botanical--bottom-left" />
        <BotanicalCorner className="botanical botanical--bottom-right botanical--flipped" />
        <div className="closing-inner">
          <div className="lamp-illustration"><div className="lamp-flame" /><div className="lamp-bowl" /><div className="lamp-stand" /><div className="lamp-base" /></div>
          <p className="closing-quote">Your presence and blessings will<br />make this occasion truly special.</p>
          <div className="closing-rule"><span /> <Flower2 size={16} /> <span /></div>
          <p className="closing-name">We look forward to welcoming you</p>
          <a className="back-top" href="#top">Back to the beginning <ChevronDown size={15} className="back-top-icon" /></a>
        </div>
      </section>

      <footer className="site-footer">Ryan&apos;s Kudil <span>·</span> A home filled with love</footer>
    </main>
  );
}

function BotanicalCorner({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 250 280" aria-hidden="true">
      <path className="leaf-stem" d="M4 276C46 200 84 134 185 4" />
      <path className="leaf leaf-1" d="M82 151C48 144 34 121 35 92c30 8 49 29 47 59Z" />
      <path className="leaf leaf-2" d="M119 103c-6-32 8-57 34-75 10 28-2 54-34 75Z" />
      <path className="leaf leaf-3" d="M47 215c-30-6-44-26-43-51 27 5 44 22 43 51Z" />
      <path className="leaf leaf-4" d="M160 48c-2-25 12-40 34-48 3 22-9 39-34 48Z" />
      <path className="leaf leaf-5" d="M85 159c24-22 50-23 74-10-19 23-45 27-74 10Z" />
      <circle className="bud" cx="194" cy="10" r="9" />
      <circle className="bud bud--small" cx="31" cy="91" r="5" />
    </svg>
  );
}

function FloralSprig({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 180 300" aria-hidden="true">
      <path className="sprig-stem" d="M24 292C58 208 93 107 154 10" />
      <path className="sprig-leaf" d="M62 206c-28-9-41-28-38-55 26 5 40 24 38 55Z" />
      <path className="sprig-leaf" d="M92 151c-2-29 12-48 38-59 3 25-10 45-38 59Z" />
      <path className="sprig-leaf" d="M43 253c20-23 43-28 66-19-15 23-38 30-66 19Z" />
      <circle className="sprig-bloom" cx="150" cy="14" r="14" />
      <circle className="sprig-bloom sprig-bloom--small" cx="124" cy="48" r="8" />
    </svg>
  );
}
