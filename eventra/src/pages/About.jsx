import { ArrowRight, CalendarRange, Compass, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  { title: 'Discover', text: 'Find events that feel aligned with your interests, your city, and your pace.' },
  { title: 'Explore', text: 'Browse thoughtful gatherings across culture, music, ideas, and rituals.' },
  { title: 'Book', text: 'Choose the right moment, ticket, and experience without friction.' },
];

export default function About() {
  return (
    <div className="page-shell container-eventra">
      <div className="page-intro">
        <p className="eyebrow">About / 01</p>
        <h1>Why <em>Eventra?</em></h1>
        <p>We built Eventra for the people who want more than a calendar — they want a point of view.</p>
      </div>

      <section className="about-grid">
        <div className="about-card about-hero-card">
          <p className="eyebrow">Our philosophy</p>
          <h2>Discover the moments worth showing up for.</h2>
          <p>Eventra curates experiences that feel personal, cinematic, and deeply lived — not just scheduled.</p>
        </div>

        <div className="about-card">
          <Compass size={20} />
          <h3>Discover</h3>
          <p>Thoughtful recommendations shaped by your interests, rhythm, and curiosity.</p>
        </div>

        <div className="about-card">
          <CalendarRange size={20} />
          <h3>Explore</h3>
          <p>From immersive nights to intimate conversations and unforgettable weekends.</p>
        </div>

        <div className="about-card">
          <Sparkles size={20} />
          <h3>Experience</h3>
          <p>Every booking is designed to move from intention to memory with ease.</p>
        </div>
      </section>

      <section className="story-strip">
        {pillars.map((item) => (
          <div key={item.title} className="story-item">
            <span>{item.title}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <div className="cta-inline">
        <p>Ready for your next unforgettable experience?</p>
        <Link className="button button-gold" to="/events">Explore events <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}