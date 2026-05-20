// MAF UI Kit — App composition

function App() {
  const [donateOpen, setDonateOpen] = React.useState(false);
  const open = () => setDonateOpen(true);
  const close = () => setDonateOpen(false);

  return (
    <>
      <Header onDonate={open} />
      <Hero onDonate={open} />
      <StoriesSection />
      <StatsSection variant="tint" />
      <DonationStrip onDonate={open} />
      <Footer />
      <DonateModal open={donateOpen} onClose={close} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
