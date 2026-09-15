import { ArrowRight, Mail, MapPin, MessageSquareText } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-shell container-eventra">
      <div className="page-intro">
        <p className="eyebrow">Contact / 01</p>
        <h1>Get in <em>touch.</em></h1>
        <p>Tell us what kind of experience you’re chasing, and we’ll help you find it.</p>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Subject
            <input type="text" placeholder="Inquiry about an event" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell us a bit more..." />
          </label>
          <button className="button button-gold" type="submit">Send message <ArrowRight size={15} /></button>
          {sent && <p className="success-note">Message sent — we’ll get back to you soon.</p>}
        </form>

        <aside className="contact-side">
          <div className="contact-card">
            <Mail size={18} />
            <div>
              <span>Email</span>
              <a href="mailto:hello@eventra.co">hello@eventra.co</a>
            </div>
          </div>
          <div className="contact-card">
            <MapPin size={18} />
            <div>
              <span>Location</span>
              <p>Cairo, Egypt</p>
            </div>
          </div>
          <div className="contact-card">
            <MessageSquareText size={18} />
            <div>
              <span>Response time</span>
              <p>Within 24 hours</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}