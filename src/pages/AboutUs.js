import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} sm={12} md={4}>
          <img src="https://i.ibb.co/tXcgNDq/escape-logo.png" alt="Escape Store Logo" className="img-fluid" />
        </Col>
        <Col xs={12} sm={12} md={8}>
          <h2>About Us</h2>
          <p>Escape Store is an ecommerce platform that offers a wide range of products for home, sports, fashion, personal care, and more. We started our journey two years ago with a mission to provide high-quality products at affordable prices and exceptional customer service.</p>
          <p>At Escape Store, we believe in creating a seamless shopping experience for our customers. We carefully curate our product selection to ensure that we offer only the best products that meet our standards for quality and value. We also prioritize customer satisfaction, and our team is always ready to assist with any questions or concerns.</p>
          <p>Whether you're looking for home decor, sports equipment, fashion accessories, or personal care products, you can find it all at Escape Store. Shop with us today and experience the Escape Store difference.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
