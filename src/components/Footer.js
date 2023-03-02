import '../styles/footer.css'

import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import React from 'react';

const Footer =()=>{

   return (
    <>
       <footer className="footer">
      <Container className='footer-container'>
        <Row>
          <Col md={4}>
          <h5>Escape with style!</h5>
            <div className='div-footer'>
            <p className='message-footer'>
            Step up your style with our collection of trendy and comfortable clothing,
             shoes, and accessories, perfect for every occasion. Escape into fashion with us!
            </p>
            </div>
           
          </Col>
          <Col md={4}>
          <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4}>
          <h5>Follow Us</h5>
         <div className="social-icons">
              <a href="#" ><FaFacebook size={30}/></a>
              <a href="#"><FaTwitter size={30}/></a>
              <a href="#"><FaInstagram size={30}/></a>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; 2023 Escape Store. All Rights Reserved.</p>
      </Container>
    </footer>
    </>
    );
  };

export default Footer;
