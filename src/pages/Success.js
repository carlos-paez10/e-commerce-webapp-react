import { Button, Col, Container, Row } from 'react-bootstrap';

import React from 'react';

const SuccessPage = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h2 className="mb-4">Payment Successful!</h2>
          <p className="lead">Thank you for your payment.</p>
          <p>Your payment has been processed successfully and your order will be shipped shortly. You should receive a confirmation email with your order details shortly.</p>
          <Button variant="primary" href="/">Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPage;
