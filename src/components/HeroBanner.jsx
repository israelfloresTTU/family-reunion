import { Container } from 'rsuite';

const HeroBanner = () => {
  return (
    <div style={{ background: 'linear-gradient(90deg, #3498db, #2ecc71)', color: 'white', padding: '50px 0' }}>
      <Container>
        <h1 style={{ textAlign: 'center', margin: 0, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Flores Family Reunion</h1>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>Lubbock, Texas - June 18-22, 2025</p>
      </Container>
    </div>
  );
};

export default HeroBanner;