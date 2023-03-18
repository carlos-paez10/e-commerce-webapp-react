import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaMobileAlt, FaPhone, FaTiktok, FaTwitter } from 'react-icons/fa';

import React from 'react';

const ContactUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} sm={12} md={4}>
          <h2>Contact Us</h2>
          <p>Get in touch with us via:</p>
          <ul className="list-unstyled">
            <li><FaPhone /> +123 456 7890</li>
            <li><FaMobileAlt /> +123 456 7890</li>
            <li><FaEnvelope /> info@escapestore.com</li>
            <li><FaFacebook /> EscapeStoreFB</li>
            <li><FaInstagram /> EscapeStoreIG</li>
            <li><FaTwitter /> EscapeStoreTW</li>
            <li><FaTiktok /> EscapeStoreTT</li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={8}>
          <h2>Send Us a Message</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter message" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
