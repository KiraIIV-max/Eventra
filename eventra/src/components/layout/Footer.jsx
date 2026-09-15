import { Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-eventra footer-top">
        <div>
          <div className="footer-brand">EVENTRA<span>Â®</span></div>
          <p>Experiences worth remembering.<br />Curated for the curious.</p>
        </div>
        <div className="footer-links"><Link to="/events">Explore events</Link><Link to="/about">Our story</Link><Link to="/contact">Get in touch</Link></div>
        <div className="footer-social"><span>Follow the feeling</span><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Heart size={17} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe size={17} /></a></div>
      </div>
      <div className="container-eventra footer-bottom"><span>Â© 2026 Eventra. All rights reserved.</span><span>Made for the moments in between.</span></div>
    </footer>
  );
}
