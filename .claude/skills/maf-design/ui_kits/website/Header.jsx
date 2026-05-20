// MAF UI Kit — site header / nav

function Header({ active = "Ons werk", onDonate }) {
  const links = ["Ons werk", "Verhalen", "Over MAF", "Werken bij", "Contact"];
  return (
    <header className="site-header">
      <div className="container row">
        <div className="brand">
          <a href="#">
            <img src="../../assets/logo-maf-official.png" alt="MAF — Vliegen voor Leven" />
          </a>
        </div>
        <nav>
          {links.map((l) => (
            <a key={l} href="#" className={l === active ? "active" : ""}>{l}</a>
          ))}
        </nav>
        <div className="actions">
          <span className="lang">NL · EN</span>
          <button className="icon-btn" aria-label="Zoeken"><Icon.Search /></button>
          <button className="btn btn-primary" onClick={onDonate}>
            <Icon.Heart size={16} /> Doneer
          </button>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
