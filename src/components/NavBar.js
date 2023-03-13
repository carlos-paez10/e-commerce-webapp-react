import  '../styles/styles.css'

import {Button, Container, Modal, Nav, Navbar} from 'react-bootstrap'
import {React, useContext} from 'react'

import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'
import ClientForm from './ClientForm'
import { useState } from 'react'

const NavbarComponent=()=>{

   const cart=useContext(CartContext);
  
   const [currentStep, setCurrentStep] = useState(1);

   function handleContinueClick() {
     setCurrentStep(2);
   }

   const [show, setShow]=useState(false);
   const handleClose=()=>{
      setShow(false)
   }
   const HandleShow=()=>{
      setShow(true)
   }
   
   const productCount=cart.items.reduce((accum, curr)=>accum+curr.quantity,0)
// pass handle checkout as props functions other module exercise
   return (
      <>
      <Navbar expand='sm'>
      <Navbar.Brand href="">
        <img
          src="https://i.ibb.co/tXcgNDq/escape-logo.png"
          width="240"
          height="80"
          className="d-inline-block align-top"
          alt="store-logo"
        />
      </Navbar.Brand>
         <Navbar.Toggle/>
         <Navbar.Collapse className='justify-content-end'>
         <Nav className="mr-auto">
         <Nav.Link href="/" className='nav-link'>Buy Now</Nav.Link>
         <Nav.Link href="/about-us" className='nav-link'>About Us</Nav.Link>
         <Nav.Link href="/contact" className='nav-link'>Contact</Nav.Link>
         </Nav>
      <Button  style={{ marginLeft: '80px' }}  onClick={HandleShow}>Cart with {productCount} Items</Button>
         </Navbar.Collapse>
      </Navbar>


        {currentStep===1 && (<Modal show={show} onHide={handleClose} >
         <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            <Modal.Body>
            { productCount>0 ?
               <>
               <p>Items in your cart:</p>
               {cart.items.map((currProduct,index)=>(
                  <CartProduct key={index} id={currProduct.id} quantity={currProduct.quantity}></CartProduct>
               ))}
               <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
               <Button variant='success' onClick={handleContinueClick}>Continue with Purchase</Button>
               </>
               :
               <h1>No products in your cart</h1>
               
            }
               </Modal.Body>
         </Modal.Header>
      </Modal>)}
      {currentStep === 2 && (<Modal show={show} onHide={handleClose} >
         <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            <Modal.Body>
            { productCount>0 ? <ClientForm/>:
            <>
            </>
            }
               </Modal.Body>
         </Modal.Header>
      </Modal>
      )}
      </>
      
   )


}

export default NavbarComponent;