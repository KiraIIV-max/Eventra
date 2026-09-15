import { createContext, useContext, useMemo, useState } from 'react';

const BookingContext = createContext({ bookings: [], addBooking: () => {} });

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('eventra-bookings') || '[]');
    } catch {
      return [];
    }
  });

  const value = useMemo(() => ({
    bookings,
    addBooking: (booking) => {
      const next = [...bookings, booking];
      setBookings(next);
      localStorage.setItem('eventra-bookings', JSON.stringify(next));
    },
  }), [bookings]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export const useBookings = () => useContext(BookingContext);