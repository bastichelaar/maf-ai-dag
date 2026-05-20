// MAF UI Kit — hero unit

function Hero({ onDonate }) {
  return (
    <section className="hero">
      <div className="photo">
        <image-slot
          id="hero-photo"
          placeholder="Drop a hero photograph here — pilot, aircraft, or field scene"
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2000&q=85&auto=format&fit=crop"
          style={{ "--image-slot-bg": "#1F2A3A", "--image-slot-fg": "rgba(255,255,255,.55)" }}
        ></image-slot>
      </div>
      <div className="container">
        <div className="eyebrow"><span className="bar"></span> Vliegen voor Leven</div>
        <h1>Wij vliegen waar wegen eindigen.</h1>
        <p className="lead">
          Met 130 vliegtuigen in de 30 armste landen ter wereld brengt MAF hulp,
          hoop en herstel naar mensen in de meest afgelegen gebieden.
        </p>
        <div className="actions">
          <button className="btn btn-primary btn-lg" onClick={onDonate}>
            Doneer vandaag <Icon.Arrow size={18} />
          </button>
          <a href="#stories" className="btn btn-outline-white btn-lg">Bekijk verhalen</a>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
