import {Button, Card, Col, Form, Row} from 'react-bootstrap';

import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

// categoryFilter==='all' || categoryFilter === product.category
const ProductCard = ({product, categoryFilter}) => { 
   const cart=useContext(CartContext);
   const productQuantity=cart.getProductQuantity(product.id);
   return (
      <>
      {(true) && (
  
      <Card>
         <Card.Body>
         <Link to={`/products/${product.id}`}>
            <Card.Img variant='top' src={product.image} height="270"   ></Card.Img>
            <Card.Title>{product.title} </Card.Title>
            <Card.Text> ${product.price}</Card.Text>
            <Button variant='primary' >View Product</Button>
         </Link>
            <>
            {productQuantity>0 ? 
            <>
            <Form style={{marginTop:36}} as={Row}>
               <Form.Label column='true' sm='6'> In Cart: {productQuantity}</Form.Label>
               <Col>
               <Button sm='6' className='mx-2' onClick={()=>{cart.addOneToCart(product.id)}}>+</Button>
               <Button sm='6' className='mx-2' onClick={()=>{cart.removeOneFromCart(product.id)}}>-</Button>
               </Col>
            </Form>

             <Button variant='danger' className='my-4' onClick={()=>{cart.deleteFromCart(product.id)}} >Remove from cart</Button>
            </>:
            <>
           <Button style={{ marginLeft:25}} variant='primary'  onClick={()=>cart.addOneToCart(product.id)}>Add to Cart</Button>
             </>
            }
            </>
        
         </Card.Body>
      </Card>


)}
</>

   );
};

export default ProductCard;