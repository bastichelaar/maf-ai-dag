// MAF UI Kit — stat block

const STATS = [
  { n: "130", label: "Vliegtuigen", sub: "in 30+ landen wereldwijd" },
  { n: "1.500+", label: "Partners", sub: "kerken en hulporganisaties" },
  { n: "189K", label: "Passagiers", sub: "vervoerd per jaar" },
  { n: "7 mln", label: "Kilo vracht", sub: "per jaar in de lucht" },
];

function StatsSection({ variant = "tint" }) {
  return (
    <section className={`section ${variant}`}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="bar"></span> MAF in cijfers</div>
          <h2>Levenslijnen, in cijfers</h2>
        </div>
        <div className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.n}>
              <div className="n">{s.n}</div>
              <div className="l"><strong>{s.label}</strong>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.StatsSection = StatsSection;
