import {Button, Card, Col, Form, Row} from 'react-bootstrap';

import { CartContext } from '../CartContext';
import { productsArray } from '../productsStore';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const Navigate=useNavigate();
  const cart=useContext(CartContext);
  const { productId } = useParams();
  const productQuantity=cart.getProductQuantity(productId);

  console.log(productId)
  const product = productsArray.find((product) => product.id === productId);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
  <Card style={{ maxWidth: '700px', margin: '0 auto'}}>
    <Card.Body>
      <Card.Img variant='top' src={product.image} className='img-fluid' width='50'></Card.Img>
      <Card.Title>{product.title} </Card.Title>
      <Card.Text> ${product.price}</Card.Text>
      <Button style={{marginRight:36}}variant='primary'  onClick={() => Navigate('/')}>Back to Store</Button>


      {productQuantity>0 ? 
            <>
            <Form as={Row}>
               <Form.Label column='true' sm='6'> In Cart: {productQuantity}</Form.Label>
               <Col>
               <Button sm='6' className='mx-2' onClick={()=>{cart.addOneToCart(productId)}}>+</Button>
               <Button sm='6' className='mx-2' onClick={()=>{cart.removeOneFromCart(productId)}}>-</Button>
               </Col>
            </Form>

             <Button variant='danger' className='my-4' onClick={()=>{cart.deleteFromCart(productId)}} >Remove from cart</Button>
            </>:
            <>
           <Button variant='primary'  onClick={()=>cart.addOneToCart(productId)}>Add to Cart</Button>
             </>
            }

    </Card.Body>
  </Card>
  );
};

export default ProductPage;