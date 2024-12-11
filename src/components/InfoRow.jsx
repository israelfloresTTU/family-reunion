import { Button, Card, Col, Grid, Row } from 'rsuite';

const InfoRow = ({ reverse, title, content, imageUrl, buttonText }) => {
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
            <img src={imageUrl} alt="placeholder" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{title}</h3>
            <p>{content}</p>
          </Card>
        </Col>
        <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Button appearance="primary" size="lg" style={{ width: '80%' }}>
            {buttonText}
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default InfoRow;