import { Check, Download, Ticket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function BookingSuccess() {
  const location = useLocation();
  const [booking, setBooking] = useState(location.state?.booking || null);
  useEffect(() => { if (!booking) { const saved = JSON.parse(localStorage.getItem('eventra-bookings') || '[]'); setBooking(saved.at(-1) || null); } }, [booking]);
  if (!booking) return <div className="page-shell container-eventra empty-state"><h1>No ticket found</h1><Link className="button button-gold" to="/events">Explore events</Link></div>;
  return <div className="page-shell container-eventra success-page"><div className="success-heading"><div className="success-icon"><Check /></div><p className="eyebrow">Booking confirmed</p><h1>You&apos;re all <em>set.</em></h1><p>Your experience awaits. Keep this digital ticket handy at the door.</p></div><div className="digital-ticket"><div className="ticket-top"><span>EVENTRA</span><span>01</span></div><Ticket className="ticket-symbol" size={24} /><h2>{booking.eventTitle}</h2><p>{new Date(booking.eventDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })} · {booking.tickets[0].type} × {booking.tickets[0].quantity}</p><div className="ticket-location">BOOKING ID <strong>{booking.id}</strong></div><div className="barcode" /></div><div className="success-actions"><Link className="button button-gold" to="/bookings">View my bookings</Link><button className="button button-outline" onClick={() => window.print()}><Download size={15} /> Save ticket</button></div></div>;
}
