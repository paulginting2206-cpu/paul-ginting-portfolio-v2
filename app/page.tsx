'use client';

import { useState } from 'react';

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-bg" />
        <header className="nav">
          <a className="brand" href="#home">PAUL<span>.</span></a>
          <button className="menu-btn" aria-label="Open menu" onClick={() => setMenu(!menu)}>
            <i></i><i></i><i></i>
          </button>
          <nav className={menu ? 'nav-links open' : 'nav-links'}>
            <a href="#home" onClick={() => setMenu(false)}>Home</a>
            <a href="#about" onClick={() => setMenu(false)}>About</a>
            <a href="#music" onClick={() => setMenu(false)}>Music</a>
            <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
          </nav>
        </header>

        <div className="hero-content">
          <p className="eyebrow">MUSICIAN · PIANIST · CREATOR</p>
          <h1>Paul<br/><span>Ginting</span></h1>
          <p className="intro">Musician, piano teacher, worship musician and music creator sharing performances, projects and moments from my musical journey.</p>
          <div className="actions">
            <a className="primary" href="#music">Watch My Music <span>→</span></a>
            <a className="secondary" href="#about">About Me</a>
          </div>
        </div>
        <div className="scroll">SCROLL <span>↓</span></div>
      </section>

      <section className="section about-modern" id="about">
        <div className="about-modern-inner">
          <div className="about-modern-heading">
            <p className="eyebrow dark">ABOUT ME</p>
            <h2>Music is how I tell<br/><em>my story.</em></h2>
          </div>

          <div className="about-modern-copy">
            <p>Halo, saya <strong>Paul Ginting.</strong></p>
            <p>
              Seorang musician, piano player, music producer, worship musician,
              dan private music teacher yang suka membagikan musik, performance,
              serta perjalanan saya di dunia musik.
            </p>
            <p>
              Lewat musik, saya belajar untuk terus berkembang, menciptakan
              sesuatu yang bermakna, dan membagikan apa yang saya miliki kepada
              orang lain.
            </p>

            <a className="about-modern-button" href="#contact">
              More About Me <span>→</span>
            </a>
          </div>
        </div>

        <div className="about-modern-stats">
          <div className="about-stat">
            <span className="about-stat-icon">♪</span>
            <div><strong>Musician</strong><small>Profession</small></div>
          </div>
          <div className="about-stat">
            <span className="about-stat-icon">♬</span>
            <div><strong>Piano</strong><small>Performance</small></div>
          </div>
          <div className="about-stat">
            <span className="about-stat-icon">◉</span>
            <div><strong>Creator</strong><small>Music & Content</small></div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .about-modern {
          position: relative;
          overflow: hidden;
        }

        .about-modern-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(40px, 8vw, 120px);
          align-items: start;
          position: relative;
          padding-left: 36px;
          border-left: 1px solid rgba(255,255,255,.16);
        }

        .about-modern-heading .eyebrow {
          letter-spacing: .28em;
          margin-bottom: 32px;
        }

        .about-modern-heading h2 {
          font-size: clamp(48px, 7vw, 92px);
          line-height: .98;
          letter-spacing: -.055em;
          margin: 0;
          max-width: 760px;
        }

        .about-modern-heading h2 em {
          font-style: normal;
          opacity: .5;
        }

        .about-modern-copy {
          max-width: 620px;
          padding-top: 38px;
          color: rgba(255,255,255,.72);
          font-size: 18px;
          line-height: 1.8;
        }

        .about-modern-copy p {
          margin: 0 0 24px;
        }

        .about-modern-copy strong {
          color: #fff;
        }

        .about-modern-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 42px;
          margin-top: 18px;
          padding: 18px 24px;
          min-width: 210px;
          border-radius: 999px;
          background: #f5f5f5;
          color: #111;
          text-decoration: none;
          font-weight: 700;
          transition: transform .25s ease, gap .25s ease;
        }

        .about-modern-button span {
          font-size: 25px;
          line-height: 1;
        }

        .about-modern-button:hover {
          transform: translateY(-3px);
          gap: 52px;
        }

        .about-modern-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 70px;
          padding: 26px 0 0 36px;
          border-top: 1px solid rgba(255,255,255,.16);
        }

        .about-stat {
          display: flex;
          align-items: center;
          gap: 16px;
          min-height: 64px;
          padding: 0 28px;
          border-right: 1px solid rgba(255,255,255,.16);
        }

        .about-stat:first-child {
          padding-left: 0;
        }

        .about-stat:last-child {
          border-right: 0;
        }

        .about-stat-icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 50%;
          font-size: 19px;
        }

        .about-stat strong,
        .about-stat small {
          display: block;
        }

        .about-stat strong {
          color: #fff;
          font-size: 19px;
        }

        .about-stat small {
          margin-top: 3px;
          color: rgba(255,255,255,.48);
          font-size: 12px;
        }

        @media (max-width: 760px) {
          .about-modern-inner {
            grid-template-columns: 1fr;
            gap: 8px;
            padding-left: 22px;
          }

          .about-modern-heading h2 {
            font-size: clamp(48px, 14vw, 70px);
          }

          .about-modern-copy {
            padding-top: 18px;
            font-size: 16px;
            line-height: 1.75;
          }

          .about-modern-stats {
            grid-template-columns: 1fr;
            gap: 0;
            padding-left: 22px;
            margin-top: 50px;
          }

          .about-stat,
          .about-stat:first-child {
            padding: 18px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.16);
          }

          .about-stat:last-child {
            border-bottom: 0;
          }
        }
      `}</style>

      <section className="music" id="music">
        <div className="section-head"><div><p className="eyebrow">SELECTED WORK</p><h2>My <em>Music</em></h2></div><a className="outline" href="https://www.youtube.com/" target="_blank">YouTube ↗</a></div>
        <div className="cards">
          <article className="card"><div className="play">▶</div><div><small>PERFORMANCE</small><h3>Live Music</h3></div></article>
          <article className="card card-2"><div className="play">▶</div><div><small>WORSHIP</small><h3>Worship Sessions</h3></div></article>
          <article className="card card-3"><div className="play">▶</div><div><small>EDUCATION</small><h3>Piano & Music</h3></div></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow dark">LET'S CONNECT</p>
        <h2>Let’s make<br/><em>something musical.</em></h2>
        <div className="contact-links">
          <a href="https://instagram.com/thy.paul22" target="_blank">Instagram <span>↗</span></a>
          <a href="mailto:paulginting@gmail.com">Email <span>↗</span></a>
          <a href="https://wa.me/6280000000000" target="_blank">WhatsApp <span>↗</span></a>
        </div>
      </section>

      <footer><span>PAUL.</span><span>© 2026 Paul Ginting</span></footer>
    </main>
  );
}
