import { Container } from 'rsuite';

const HeroBanner = () => {
  return (
    <div style={{ background: '#3498db', color: 'white', padding: '50px 0' }}>
      <Container>
        <h1 style={{ textAlign: 'center', margin: 0 }}>Flores Family Reunion</h1>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>Lubbock, Texas - June 18-22, 2025</p>
      </Container>
    </div>
  );
};

export default HeroBanner;