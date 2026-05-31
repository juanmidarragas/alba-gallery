export default function Home() {
  return (
    <main>
      <nav>
        <h1>ALBA</h1>
        <a href="#contact">Inquire</a>
      </nav>

      <section className="hero">
        <p className="eyebrow">Arte · Luz · Búsqueda · Alma</p>
        <h2>Contemporary art shaped by memory, emotion, and light.</h2>
        <a className="button" href="#collection">View Collection</a>
      </section>

      <section className="about">
        <p>
          ALBA is a contemporary gallery dedicated to works that explore memory,
          atmosphere, and human connection through abstraction.
        </p>
      </section>

      <section id="collection" className="collection">
        <h3>Collection I</h3>

        <div className="grid">
          <article>
            <div className="art red"></div>
            <h4>Memory Field</h4>
            <p>2026 · Price on request</p>
          </article>

          <article>
            <div className="art dark"></div>
            <h4>After Light</h4>
            <p>2026 · Price on request</p>
          </article>

          <article>
            <div className="art ivory"></div>
            <h4>Quiet Room</h4>
            <p>2026 · Price on request</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact">
        <h3>Private Inquiries</h3>
        <p>
          For acquisitions, commissions, collaborations, and private viewings.
        </p>

        <a href="mailto:juanmanuelidarraga@gmail.com">
          Contact ALBA
        </a>
      </section>
    </main>
  );
}
