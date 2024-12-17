import React from 'react';
import { Button, Form, Input } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';

const Genealogy = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '80%', margin: '0 auto', padding: '20px' }}>
      <h1>Geneology</h1>
      <p>Order your custom Flores Family Reunion shirts here!</p>
      <Form fluid>
        <Form.Group>
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Input name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Input name="email" type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Shirt Size</Form.ControlLabel>
          <Input name="size" placeholder="Enter your shirt size (e.g., S, M, L, XL)" />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Quantity</Form.ControlLabel>
          <Input name="quantity" type="number" placeholder="Enter quantity" />
        </Form.Group>
        <Form.Group style={{ display: 'flex', gap: '10px' }}>
          <Button appearance="primary" type="submit">
            Submit Order
          </Button>
          <Button appearance="ghost" onClick={handleBackToHome}>
            Back to Home
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Genealogy;