// MAF UI Kit — footer

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="columns">
          <div>
            <div className="brand"><img src="../../assets/logo-maf-official-reverse.png" alt="MAF" /></div>
            <p className="blurb">
              MAF is een christelijke hulporganisatie die met vliegtuigen mensen
              bereikbaar maakt voor hulp en het Evangelie. Vliegen voor Leven.
            </p>
          </div>
          <div>
            <h6>Ons werk</h6>
            <ul>
              <li><a href="#">Waar wij vliegen</a></li>
              <li><a href="#">Medische hulp</a></li>
              <li><a href="#">Zending</a></li>
              <li><a href="#">Noodhulp</a></li>
            </ul>
          </div>
          <div>
            <h6>Steun MAF</h6>
            <ul>
              <li><a href="#">Doneer</a></li>
              <li><a href="#">Periodiek schenken</a></li>
              <li><a href="#">Nalaten</a></li>
              <li><a href="#">Business Club</a></li>
            </ul>
          </div>
          <div>
            <h6>Contact</h6>
            <ul>
              <li><a href="#">+31 (0)55 303 6000</a></li>
              <li><a href="#">info@maf.nl</a></li>
              <li><a href="#">Vacatures</a></li>
              <li><a href="#">Pers</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div>© {new Date().getFullYear()} Stichting MAF Nederland · RSIN 805245352 · NL40 ABNA 0558 3458 08</div>
          <div className="marks">
            <span className="mark">CBF ERKEND</span>
            <span className="mark">ANBI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
