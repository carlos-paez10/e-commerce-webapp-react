import { Button, Col, Container, Row } from 'react-bootstrap';

import React from 'react';

const CancelPage = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h2 className="mb-4">Payment Canceled!</h2>
          <p className="lead">Your payment could not be processed at this time.</p>
          <p>Please contact customer support if you have any questions or concerns.</p>
          <Button variant="primary" href="/">Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CancelPage;
