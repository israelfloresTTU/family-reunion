import { Button, Card, Col, Grid, Row } from 'rsuite';
import { useNavigate } from 'react-router-dom';

const InfoRow = ({ reverse, title, content, imageUrl, buttonText, buttonId }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonId === 'reg') {
      navigate('/registration');
    } else if (buttonId === 'shirts') {
      navigate('/shirt-order');
    } else if (buttonId === 'gen') {
      navigate('/genealogy');
    } else if (buttonId === 'accom') {
      navigate('/accommodations');
    } else if (buttonId === 'stj') {
      navigate('/stj');
    } else if (buttonId === 'lbk') {
      navigate('/lubbock');
    } else {
      console.log(`Button clicked: ${buttonId}`);
    }
  };

  return (
    <Grid>
      <Row
        className="info-row"
        style={{
          flexDirection: reverse ? 'row-reverse' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Card bordered style={{ width: '80%' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{title}</h3>
            <p>{content}</p>
          </Card>
        </Col>
        <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Button
            id={buttonId}
            appearance="primary"
            size="lg"
            style={{ width: '80%' }}
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default InfoRow;