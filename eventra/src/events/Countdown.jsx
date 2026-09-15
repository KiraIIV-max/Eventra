import { useEffect, useState } from 'react';

function toDate(date, time) {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return new Date(`${date}T12:00:00`);
  let hours = Number(match[1]);
  if (match[3].toUpperCase() === 'PM' && hours !== 12) hours += 12;
  if (match[3].toUpperCase() === 'AM' && hours === 12) hours = 0;
  return new Date(`${date}T${String(hours).padStart(2, '0')}:${match[2]}:00`);
}

export default function Countdown({ date, time }) {
  const [status, setStatus] = useState({ label: 'Event starts in', values: null });
  useEffect(() => {
    const target = toDate(date, time);
    const update = () => {
      const diff = target.getTime() - Date.now();
      if (diff < -86400000) { setStatus({ label: 'Event ended', values: null }); return; } if (diff <= 0) { setStatus({ label: 'Event in progress', values: null }); return; }
      const seconds = Math.floor(diff / 1000);
      setStatus({ label: 'Event starts in', values: [Math.floor(seconds / 86400), Math.floor((seconds % 86400) / 3600), Math.floor((seconds % 3600) / 60), seconds % 60] });
    };
    update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer);
  }, [date, time]);
  return <div className="countdown"><span className="eyebrow">{status.label}</span>{status.values ? <div>{status.values.map((value, index) => <span key={index}><strong>{String(value).padStart(2, '0')}</strong><small>{['Days', 'Hours', 'Min', 'Sec'][index]}</small></span>)}</div> : <strong className="countdown-status">{status.label}</strong>}</div>;
}

