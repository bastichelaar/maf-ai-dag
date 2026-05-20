// MAF UI Kit — Donate modal (interactive)

function DonateModal({ open, onClose }) {
  const [amount, setAmount] = React.useState(25);
  const [custom, setCustom] = React.useState("");
  const [frequency, setFrequency] = React.useState("once");
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (!open) { setSubmitted(false); }
  }, [open]);

  if (!open) return null;

  const amounts = [10, 25, 50, 100, 250];

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-wrap" onClick={(e) => e.stopPropagation()}>
        <div className="modal">
          <button className="close" onClick={onClose} aria-label="Sluiten">×</button>
          {!submitted ? (
            <form onSubmit={submit}>
              <div className="eyebrow"><span className="bar"></span> Doneer</div>
              <h2 style={{ marginTop: 14 }}>Maak een vlucht mogelijk</h2>
              <p className="lead">Uw gift gaat rechtstreeks naar onze inzet in de meest afgelegen gebieden.</p>

              <div className="freq" role="tablist" aria-label="Frequentie">
                <button type="button" className={frequency === "once" ? "active" : ""} onClick={() => setFrequency("once")}>Eenmalig</button>
                <button type="button" className={frequency === "monthly" ? "active" : ""} onClick={() => setFrequency("monthly")}>Maandelijks</button>
              </div>

              <label>Bedrag</label>
              <div className="amounts">
                {amounts.map((a) => (
                  <button type="button" key={a}
                    className={`pill ${amount === a && !custom ? "selected" : ""}`}
                    onClick={() => { setAmount(a); setCustom(""); }}>
                    €{a}
                  </button>
                ))}
                <input
                  type="number" placeholder="Anders…" className="field"
                  style={{ maxWidth: 110 }} value={custom}
                  onChange={(e) => { setCustom(e.target.value); setAmount(0); }}
                />
              </div>

              <label>E-mailadres</label>
              <input type="email" className="field" placeholder="naam@voorbeeld.nl" required />

              <div className="actions" style={{ marginTop: 22 }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Doneer €{custom || amount} {frequency === "monthly" ? "per maand" : ""}
                </button>
              </div>
              <div style={{ fontSize: 12, color: "rgba(31,42,58,.55)", marginTop: 14, lineHeight: 1.5 }}>
                MAF Nederland is een CBF Erkend goed doel met ANBI-status. Giften zijn fiscaal aftrekbaar.
              </div>
            </form>
          ) : (
            <div className="thanks">
              <div className="check"><Icon.Check size={32} /></div>
              <h2>Hartelijk dank!</h2>
              <p className="lead">
                Uw gift van €{custom || amount}{frequency === "monthly" ? " per maand" : ""} draagt direct bij aan
                onze missie. U ontvangt een bevestiging per e-mail.
              </p>
              <button className="btn btn-ghost" onClick={onClose}>Sluiten</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

window.DonateModal = DonateModal;
