import HeroBanner from './components/HeroBanner';
import InfoRow from './components/InfoRow';

import dna from './assets/img/dna.jpg'
import ffrshirtlogo from './assets/img/ffrshirtlogo.png'
import hotel from './assets/img/hotel.png'
import lubbockLogo from './assets/img/city-of-lubbock-logo.png';
import stj from './assets/img/stj.jpg'

import './App.css';

const App = () => {
  return (
    <div style={{ maxWidth: '80%', margin: '0 auto', padding: '20px' }}>
      <HeroBanner />
      <InfoRow
        reverse={false}
        title="Registration"
        content="Join us for a memorable gathering of the Flores family in Lubbock, Texas."
        imageUrl="https://via.placeholder.com/300"
        buttonText="Register Now"
      />
      <InfoRow
        reverse={true}
        title="Family Reunion Shirts"
        content="Enjoy games, food, and fun events planned for all ages."
        imageUrl={ffrshirtlogo}
        buttonText="Order Shirts"
      />
      <InfoRow
        reverse={false}
        title="Accommodations"
        content="Discover local hotels and lodging options near the venue."
        imageUrl={hotel}
        buttonText="Learn More"
      />
      <InfoRow
        reverse={true}
        title="Genealogy"
        content="Reach out for more information or any special requests."
        imageUrl={dna}
        buttonText="View Geneaology"
      />
      <InfoRow
        reverse={false}
        title="St. John Neumann Catholic Church"
        content="Discover local hotels and lodging options near the venue."
        imageUrl={stj}
        buttonText="Learn More"
      />
      <InfoRow
        reverse={true}
        title="About Lubbock"
        content="Reach out for more information or any special requests."
        imageUrl={lubbockLogo}
        buttonText="Learn More"
      />
    </div>
  );
};

export default App;