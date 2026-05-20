// MAF UI Kit — donation strip CTA band

function DonationStrip({ onDonate }) {
  return (
    <section className="donation-strip">
      <div className="container row">
        <div>
          <h3>Steun ons werk in afgelegen gebieden</h3>
          <p>Uw bijdrage maakt elke vlucht mogelijk — een levenslijn voor mensen in nood.</p>
        </div>
        <button className="btn btn-outline-white btn-lg btn-pill" onClick={onDonate}>
          Doneer vandaag <Icon.Arrow size={18} />
        </button>
      </div>
    </section>
  );
}

window.DonationStrip = DonationStrip;
