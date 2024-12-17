import React from 'react';
import { Button, Form, Input } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';

const Registration = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '80%', margin: '0 auto', padding: '20px' }}>
      <h1>Registration</h1>
      <p>Join us for a memorable gathering of the Flores family in Lubbock, Texas!</p>
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
          <Form.ControlLabel>Number of Guests</Form.ControlLabel>
          <Input name="guests" type="number" placeholder="Enter number of guests" />
        </Form.Group>
        <Form.Group style={{ display: 'flex', gap: '10px' }}>
          <Button appearance="primary" type="submit">
            Submit
          </Button>
          <Button appearance="ghost" onClick={handleBackToHome}>
            Back to Home
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Registration;