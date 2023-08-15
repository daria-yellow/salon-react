import React, { Suspense } from "react";
import { IntlProvider } from "react-intl";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Footer, Header } from "./components";
import { textInfo } from "./info/TextInfo";

const Landing = React.lazy(() => import("./pages/Landing/index"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/index"));
const Services = React.lazy(() => import("./pages/Services/index"));
const Staff = React.lazy(() => import("./pages/Staff/index"));
const Contacts = React.lazy(() => import("./pages/Contacts/index"));
const Gallery = React.lazy(() => import("./pages/Gallery/index"));

export const App: React.FC = () => {
  return (
    <IntlProvider locale={"en"} messages={textInfo}>
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
