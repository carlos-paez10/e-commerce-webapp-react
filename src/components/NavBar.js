import  '../styles/styles.css'

import {Button, Container, Modal, Nav, Navbar} from 'react-bootstrap'
import {React, useContext} from 'react'

import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'
import { useState } from 'react'

const NavbarComponent=()=>{
   const cart=useContext(CartContext);

   const [show, setShow]=useState(false);
   const handleClose=()=>{
      setShow(false)
   }
   const HandleShow=()=>{
      setShow(true)
   }
   
   const productCount=cart.items.reduce((accum, curr)=>accum+curr.quantity,0)

   const handleCheckout= async()=>{
   const url = 'https://pine-miniature-wish.glitch.me/checkout';
   //   const url='https://localhost:3003/checkout';
      await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type':'application/json'
         },
         body:JSON.stringify({
            items:cart.items
         })
      }).then((response)=>{
         return response.json();
      }).then((response)=>{
         if (response.url) {
            window.location.assign(response.url);
         }
      })
   }
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
          <Nav.Link href="" className='nav-link'>Shoes</Nav.Link>
          <Nav.Link href="#" className='nav-link'>Clothing</Nav.Link>
          <Nav.Link href="#" className='nav-link'>Sports</Nav.Link>
          <Nav.Link href="#" className='nav-link'>Technology</Nav.Link>
          <Nav.Link href="#" className='nav-link'>Accessories</Nav.Link>
          <Nav.Link href="#" className='nav-link'>Bags</Nav.Link>
          <Nav.Link href="#" className='nav-link'>Contact</Nav.Link>
        </Nav>

            
            <Button  style={{ marginLeft: '170px' }}  onClick={HandleShow}>Cart with {productCount} Items</Button>

         </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose} >
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
               <Button variant='success' onClick={handleCheckout}>Purchase</Button>
               </>
               :
               <h1>No products in your cart</h1>
               
            }
               </Modal.Body>

         </Modal.Header>


      </Modal>
      </>
      
   )


}

export default NavbarComponent;