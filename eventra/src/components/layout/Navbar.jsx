import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [['Events', '/events'], ['Categories', '/#categories'], ['About', '/about'], ['Contact', '/contact']];

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">E</span>
          <span>EVENTRA</span>
        </Link>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => <NavLink key={label} to={href} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <Link className="mobile-bookings" to="/bookings" onClick={() => setOpen(false)}>My bookings <ArrowUpRight size={14} /></Link>
        </nav>
        <div className="nav-actions">
          <Link className="booking-link" to="/bookings">My bookings <ArrowUpRight size={14} /></Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}