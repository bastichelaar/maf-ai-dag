// MAF UI Kit — story cards grid

const STORIES = [
  {
    country: "Oeganda",
    eyebrow: "Verhaal uit het veld",
    title: "Een vlucht van 45 minuten in plaats van een rit van 9 uur",
    body: "Pastor Clement bezoekt 25 kerken die hij zelf stichtte. Dankzij MAF kan hij weer reizen — ondanks zijn leeftijd.",
    slotId: "story-1",
    photo: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=85&auto=format&fit=crop",
    bg: "linear-gradient(135deg,#5BA4D1,#2E7AAB)",
  },
  {
    country: "Zuid-Soedan",
    eyebrow: "Noodhulp",
    title: "Voedsel en medicijnen waar de wegen verdwenen zijn",
    body: "Na overstromingen liggen hele regio's weken geïsoleerd. Wij vliegen hulpgoederen in voor onze partners.",
    slotId: "story-2",
    photo: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=1200&q=85&auto=format&fit=crop",
    bg: "linear-gradient(135deg,#6A8F3D,#4F6F2A)",
  },
  {
    country: "Papoea",
    eyebrow: "Medische evacuatie",
    title: "Een jongen van tien, ver weg in de bergen",
    body: "Op 31 december landde piloot Sutter in Wawoi Falls. Een gebroken been, een grasbaan, en op tijd thuis.",
    slotId: "story-3",
    photo: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=85&auto=format&fit=crop",
    bg: "linear-gradient(135deg,#450003,#2A0002)",
  },
];

function StoryCard({ story }) {
  return (
    <a className="story-card" href="#">
      <div className="frame">
        <image-slot
          id={story.slotId}
          placeholder={`Photo — ${story.country}`}
          src={story.photo}
          style={{ "--image-slot-bg": story.bg, "--image-slot-fg": "rgba(255,255,255,.7)" }}
        ></image-slot>
        <div className="country">{story.country}</div>
      </div>
      <div className="body">
        <div className="eyebrow">{story.eyebrow}</div>
        <h3>{story.title}</h3>
        <p>{story.body}</p>
        <span className="more">Lees verder</span>
      </div>
    </a>
  );
}

function StoriesSection() {
  return (
    <section className="section" id="stories">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="bar"></span> Uit het veld</div>
          <h2>Verhalen van mensen die er waren</h2>
          <p>Achter elke vlucht zit een mens — een patiënt, een pastor, een familie die weer thuis kan zijn.</p>
        </div>
        <div className="story-grid">
          {STORIES.map((s) => <StoryCard key={s.slotId} story={s} />)}
        </div>
      </div>
    </section>
  );
}

window.StoriesSection = StoriesSection;
