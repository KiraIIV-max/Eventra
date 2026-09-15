import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Fonts — import الأول عشان تتحمل قبل أي render
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/700.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';

// Global styles
import './index.css';

// Providers
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BookingProvider } from './context/BookingContext.jsx';

// App
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);