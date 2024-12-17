import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import InfoRow from './components/InfoRow';

import Accommodations from './components/Accommodations';
import Genealogy from './components/Genealogy';
import Lubbock from './components/Lubbock';
import Registration from './components/Registration';
import ShirtOrder from './components/ShirtOrder';
import Stj from './components/Stj';

import dna from './assets/img/dna.jpg';
import ffrshirtlogo from './assets/img/ffrshirtlogo.png';
import hotel from './assets/img/hotel.png';
import lubbockLogo from './assets/img/city-of-lubbock-logo.png';
import register from './assets/img/register.jpeg';
import stj from './assets/img/stj.jpg';

import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <InfoRow
                  reverse={false}
                  title="Registration"
                  content="Join us for a memorable gathering of the Flores family in Lubbock, Texas."
                  imageUrl={register}
                  buttonText="Register Now"
                  buttonId="reg"
                />
                <hr className="divider" />
                <InfoRow
                  reverse={true}
                  title="Family Reunion Shirts"
                  content="Enjoy games, food, and fun events planned for all ages."
                  imageUrl={ffrshirtlogo}
                  buttonText="Order Shirts"
                  buttonId="shirts"
                />
                <hr className="divider" />
                <InfoRow
                  reverse={false}
                  title="Accommodations"
                  content="Discover local hotels and lodging options near the venue."
                  imageUrl={hotel}
                  buttonText="Learn More"
                  buttonId="accom"
                />
                <hr className="divider" />
                <InfoRow
                  reverse={true}
                  title="Genealogy"
                  content="Reach out for more information or any special requests."
                  imageUrl={dna}
                  buttonText="View Genealogy"
                  buttonId="gen"
                />
                <hr className="divider" />
                <InfoRow
                  reverse={false}
                  title="St. John Neumann Catholic Church"
                  content="Discover local hotels and lodging options near the venue."
                  imageUrl={stj}
                  buttonText="Learn More"
                  buttonId="stj"
                />
                <hr className="divider" />
                <InfoRow
                  reverse={true}
                  title="About Lubbock"
                  content="Reach out for more information or any special requests."
                  imageUrl={lubbockLogo}
                  buttonText="Learn More"
                  buttonId="lbk"
                />
              </>
            }
          />
          {/* Registration Page */}
          <Route path="/registration" element={<Registration />} />
           {/* Shirt Order Page */}
           <Route path="/shirt-order" element={<ShirtOrder />} />
           {/* Genealogy Page */}
           <Route path="/genealogy" element={<Genealogy />} />
           {/* Genealogy Page */}
           <Route path="/accommodations" element={<Accommodations />} />
           {/* Genealogy Page */}
           <Route path="/stj" element={<Stj />} />
           {/* Genealogy Page */}
           <Route path="/lubbock" element={<Lubbock />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;