import { Search, ArrowUpRight, CalendarDays, MapPin, SlidersHorizontal } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { events } from '../data/events.js';

const dateFilters = ['All', 'Today', 'This Week', 'This Month', 'Upcoming'];
const categories = ['All', 'Music', 'Technology', 'Business', 'Sports', 'Workshops', 'Art', 'Conference'];
const priceFilters = ['All', 'Free', 'Under $25', '$25-$50', '$50+'];

function isInDateRange(date, filter) {
  if (filter === 'All') return true;
  const eventDate = new Date(`${date}T12:00:00`);
  const now = new Date();
  const day = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = eventDate - day;
  if (filter === 'Today') return diff >= 0 && diff < 86400000;
  if (filter === 'This Week') return diff >= 0 && diff < 7 * 86400000;
  if (filter === 'This Month') return eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
  return diff >= 0;
}

function matchesPrice(event, filter) {
  const price = Math.min(...event.tickets.map((ticket) => ticket.price));
  if (filter === 'All') return true;
  if (filter === 'Free') return price === 0;
  if (filter === 'Under $25') return price > 0 && price < 25;
  if (filter === '$25-$50') return price >= 25 && price <= 50;
  return price > 50;
}

export default function Events() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get('search') || '');
  const category = params.get('category') || 'All';
  const [type, setType] = useState('All');
  const [date, setDate] = useState('All');
  const [price, setPrice] = useState('All');
  const filtered = useMemo(() => events.filter((event) => `${event.title} ${event.category} ${event.location.city} ${event.description}`.toLowerCase().includes(search.toLowerCase()) && (category === 'All' || event.category === category) && (type === 'All' || event.type === type) && isInDateRange(event.date, date) && matchesPrice(event, price)), [search, category, type, date, price]);
  const clearFilters = () => { setSearch(''); setType('All'); setDate('All'); setPrice('All'); setParams({}); };
  return <div className="page-shell container-eventra"><div className="page-intro"><p className="eyebrow">Explore / 01</p><h1>Find your next <em>experience.</em></h1><p>Curated events for curious people. Search less, show up more.</p></div><div className="events-toolbar"><label className="big-search"><Search size={20} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search events, artists, topics..." /></label><span className="event-count">{filtered.length.toString().padStart(2, '0')} EVENTS</span></div><div className="filter-row"><SlidersHorizontal size={16} /><div className="filter-pills">{categories.map((item) => <button key={item} className={category === item ? 'selected' : ''} onClick={() => setParams(item === 'All' ? {} : { category: item })}>{item}</button>)}</div><select value={date} onChange={(e) => setDate(e.target.value)} aria-label="Filter by date">{dateFilters.map((item) => <option key={item}>{item}</option>)}</select><select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filter by type"><option>All</option><option>In Person</option><option>Online</option><option>Hybrid</option></select><select value={price} onChange={(e) => setPrice(e.target.value)} aria-label="Filter by price">{priceFilters.map((item) => <option key={item}>{item}</option>)}</select></div>{filtered.length ? <div className="events-grid">{filtered.map((event) => { const from = Math.min(...event.tickets.map((ticket) => ticket.price)); return <Link className="listing-card" to={`/events/${event.id}`} key={event.id}><div className="listing-image" style={{ backgroundImage: `url(${event.image})` }}><span>{new Date(`${event.date}T12:00:00`).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}</span></div><div className="listing-copy"><span className="card-tag">{event.category} · {event.type}</span><h3>{event.title}</h3><p>{event.description}</p><p><CalendarDays size={14} /> {event.date} <MapPin size={14} /> {event.location.city}<strong className="price-label">{from ? `From $${from}` : 'Free'} </strong><ArrowUpRight className="card-arrow" size={18} /></p></div></Link>; })}</div> : <div className="empty-state"><h2>NO EVENTS FOUND</h2><p>We couldn't find anything matching your current filters.</p><button className="button button-outline" onClick={clearFilters}>Clear filters</button></div>}</div>;
}
