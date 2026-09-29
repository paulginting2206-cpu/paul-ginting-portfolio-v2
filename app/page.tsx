export default function Home() {
  return (
    <main className="hero">
      <nav className="nav">
        <div className="logo">Paul.</div>
        <div className="menu">☰</div>
      </nav>

      <section className="content">
        <p className="subtitle">MUSICIAN • CREATOR • PIANIST</p>

        <h1>
          Paul
          <br />
          Ginting
        </h1>

        <p className="description">
          Musician and content creator sharing music performances,
          worship music, piano, and moments from my journey.
        </p>

        <div className="buttons">
          <a href="#music" className="primary">
            Watch My Music →
          </a>

          <a href="#about" className="secondary">
            About Me
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Welcome to my personal portfolio. I am a musician, pianist,
          music creator, and performer.
        </p>
      </section>

      <section id="music" className="music">
        <h2>My Music</h2>
        <p>Music performances, worship, covers and creative projects.</p>
      </section>
    </main>
  );
}
