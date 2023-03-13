import {Button, Card} from 'react-bootstrap';

import { Link } from 'react-router-dom';

const ProductCard = ({product, categoryFilter}) => { 
   return (
      <>
      {(categoryFilter==='all' || categoryFilter === product.category) && (
      <Link to={`/products/${product.id}`}>
      <Card>
         <Card.Body>
            <Card.Img variant='top' src={product.image} height="270"   ></Card.Img>
            <Card.Title>{product.title} </Card.Title>
            <Card.Text> ${product.price}</Card.Text>
            <Button variant='primary' >View Product</Button>
         </Card.Body>
      </Card>
      </Link>

)}
</>

   );
};

export default ProductCard;