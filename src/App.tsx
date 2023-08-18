import React, { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Footer, Header } from './components';
import { textInfo } from './info/TextInfo';

const Landing = React.lazy(async () => await import('./pages/Landing/index'));
const AboutUs = React.lazy(async () => await import('./pages/AboutUs/index'));
const Services = React.lazy(async () => await import('./pages/Services/index'));
const Staff = React.lazy(async () => await import('./pages/Staff/index'));
const Contacts = React.lazy(async () => await import('./pages/Contacts/index'));
const Gallery = React.lazy(async () => await import('./pages/Gallery/index'));

export const App: React.FC = () => {
  return (
    <IntlProvider locale={'en'} messages={textInfo}>
      <Router>
        <Suspense>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </IntlProvider>
  );
};

export default App;
