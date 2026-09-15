import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-shell container-eventra empty-state">
      <h1>404</h1>
      <p>This experience doesn't exist.</p>
      <Link className="button button-gold" to="/events">Explore events <ArrowRight size={15} /></Link>
    </div>
  );
}