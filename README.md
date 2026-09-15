# EVENTRA

> **Discover experiences worth remembering.**

EVENTRA is a modern event discovery and booking platform built with React. It helps users discover upcoming experiences, search and filter events, view detailed event information, select tickets, complete a registration form, and access a digital ticket after booking.

The project combines a luxury dark editorial visual direction with cinematic photography, warm accent colors, responsive layouts, local browser persistence, and restrained motion.

## Live Demo

[Open the deployed Eventra website](https://eventra-xi-five.vercel.app/)

## Project Goals

This project demonstrates practical frontend development skills through a realistic event-booking user journey:

```text
Discover
  -> Search
  -> Filter
  -> Explore
  -> View details
  -> Choose tickets
  -> Register
  -> Confirm booking
  -> Get digital ticket
  -> View booking history
```

## Features

### Core Features

- Editorial homepage with cinematic hero section
- Featured events section
- Event categories and category navigation
- Upcoming events section
- Event listing page
- Search by event name, category, city, or description
- Filter by:
  - Category
  - Date range
  - Event type
  - Price range
- Empty state with clear filters action
- Event details page with:
  - Full event description
  - Date and time
  - Venue and location
  - Organizer information
  - Schedule
  - Website and email contact
  - Google Maps location link
  - Countdown timer
- Ticket booking flow
- Ticket type selection
- Quantity controls with a maximum of 5 tickets
- Customer information form
- Field-level validation for name, email, and phone
- Dynamic subtotal, service fee, and total calculation
- Booking confirmation page
- Generated booking ID
- Digital ticket view
- Print/save ticket action
- Booking history page
- Responsive navigation bar and footer

### Bonus Features

- Dark mode and warm editorial light mode
- Theme persistence with LocalStorage
- Simulated Login and Signup flows
- LocalStorage booking persistence
- Animated hero startup reveal
- Animated gradients and cinematic background glow
- Image scale and hover transitions
- Responsive mobile menu
- 404 page for invalid routes
- Reduced-motion accessibility support
- Contact form simulation

## Technology Stack

- React 19
- React Router
- Vite
- JavaScript / JSX
- CSS with custom design tokens
- Tailwind CSS Vite integration
- Lucide React icons
- Fontsource:
  - Cormorant Garamond for editorial headings
  - Manrope for interface text
- LocalStorage for demo persistence
- Vercel for deployment

## Design Direction

EVENTRA follows a **Luxury Dark x Editorial x Cinematic** visual language.

### Color System

| Token | Value | Usage |
|---|---|---|
| Primary background | `#0D0D0E` | Main page background and hero |
| Surface | `#151516` | Cards, panels, navigation surfaces |
| Elevated surface | `#1D1D1F` | Hover, modal, and selected states |
| Primary text | `#F2EEE7` | Headings and important information |
| Secondary text | `#9B968D` | Descriptions and metadata |
| Bronze | `#B88A5A` | Labels, dates, separators, active states |
| Gold | `#D2AA72` | Primary actions and important highlights |
| Border | `#292827` | Dividers, cards, fields, and sections |

The project also includes an editorial warm light theme with persistent theme selection.

## Application Routes

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/events` | Searchable and filterable event listing |
| `/events/:id` | Event details and countdown |
| `/book/:id` | Ticket booking form |
| `/booking-success` | Confirmation and digital ticket |
| `/bookings` | Booking history |
| `/login` | Simulated login page |
| `/signup` | Simulated account creation |
| `/about` | Eventra story and philosophy |
| `/contact` | Contact form simulation |
| `*` | 404 page |

## Project Structure

```text
src/
├── components/
│   └── layout/
│       ├── Footer.jsx
│       └── Navbar.jsx
├── context/
│   ├── BookingContext.jsx
│   └── ThemeContext.jsx
├── data/
│   └── events.js
├── events/
│   └── Countdown.jsx
├── pages/
│   ├── About.jsx
│   ├── Booking.jsx
│   ├── BookingSuccess.jsx
│   ├── Bookings.jsx
│   ├── Contact.jsx
│   ├── EventDetails.jsx
│   ├── Events.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   └── Signup.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## LocalStorage Data

The demo uses browser LocalStorage because there is no backend in this version.

### Theme

```text
eventra-theme
```

Stores the selected `dark` or `light` theme.

### Bookings

```text
eventra-bookings
```

Stores confirmed booking objects so bookings remain available after refresh.

### User

```text
eventra-user
```

Stores the simulated signup account used by the demo login flow.

> This is a frontend demonstration only. Authentication data is not suitable for production use because there is no backend or password hashing.

## Booking Calculation

The booking total is calculated dynamically:

```text
subtotal = ticket price x quantity
service fee = max(5, subtotal x 5%)
total = subtotal + service fee
```

Each booking receives an ID in the following format:

```text
EVT-XXXXX
```

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will provide a local URL in the terminal, usually:

```text
http://localhost:5173
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run lint

```bash
npm run lint
```

## Accessibility and Responsive Behavior

- Semantic buttons and links are used for interactions
- Form controls have visible labels
- Keyboard focus states are included
- Images use cinematic background treatments without hiding interaction content
- Layouts adapt for desktop, tablet, and mobile screens
- Mobile navigation uses a collapsible menu
- `prefers-reduced-motion` disables decorative animation for users who request reduced motion
- Warm accent colors are kept restrained to preserve contrast and hierarchy

## Scope and Limitations

This is a V1 frontend project. The following items are intentionally simulated:

- No real payment gateway
- No backend API
- No real authentication
- No database
- No admin dashboard
- Contact form does not send messages to a server
- Event data is static JavaScript data
- Social links are presentation/demo links

## Future Improvements

- Add a Node.js API and database
- Add real authentication and secure sessions
- Add payment processing
- Add an admin dashboard for events and bookings
- Add server-side search and pagination
- Add email booking confirmation
- Add QR-code ticket generation
- Add seat selection
- Add user profile management
- Add automated component and end-to-end tests

## Deployment

The current production deployment is hosted on Vercel:

[https://eventra-xi-five.vercel.app/](https://eventra-xi-five.vercel.app/)

## License

This project was created as an educational and portfolio project.
