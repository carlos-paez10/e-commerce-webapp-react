import {Button, Col, Row} from 'react-bootstrap'
import { compareObjects, productsArray } from '../productsStore';

import ProductCard from '../components/ProductCard';
import { useState } from 'react';

const Store = () => {

   const [categoryFilter, setCategoryFilter] = useState('all');
   const [priceFilter, setPriceFilter] = useState('all');


  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const handlePriceFilter = (price) => {
   setPriceFilter(price);
 };


// filter for just the categories return and object to be mapped and rendered 
//  const filteredProducts = categoryFilter === 'all'
//    ? productsArray
//    : productsArray.filter((product) => product.category === categoryFilter);

const filteredProducts = productsArray.filter((product) => {
   if (categoryFilter === 'all' && priceFilter === 'all') {
     return true;
   } else if (categoryFilter === 'all') {
     return product.price >= priceFilter.min && product.price <= priceFilter.max;
   } else if (priceFilter === 'all') {
     return product.category === categoryFilter;
   } else { 
     return (
       product.category === categoryFilter &&
       product.price >= priceFilter.min &&
       product.price <= priceFilter.max
     );
   }
 });

   return (
   <>
   <h1 align='center'  className='p-3'>Welcome to the store</h1>
   <div className="d-flex justify-content-center mb-3">
        <Button
          variant={categoryFilter === 'all' ? 'primary' : 'secondary'}
          className="mx-2"
          onClick={() => handleCategoryFilter('all')}
        >
          All
        </Button>
        <Button
          variant={categoryFilter === 'fashion' ? 'primary' : 'secondary'}
          className="mx-2"
          onClick={() => handleCategoryFilter('fashion')}
        >
          Fashion
        </Button>
        <Button
          variant={categoryFilter === 'personal' ? 'primary' : 'secondary'}
          className="mx-2"
          onClick={() => handleCategoryFilter('personal')}
        >
          Personal
        </Button>
        <Button
          variant={categoryFilter === 'sports' ? 'primary' : 'secondary'}
          className="mx-2"
          onClick={() => handleCategoryFilter('sports')}
        >
          Sports
        </Button>
      </div>

      <div className='d-flex justify-content-center mb-3'>
        <Button
          variant={priceFilter === 'all' ? 'primary' : 'secondary'}
          className='mx-2'
          onClick={() => handlePriceFilter('all')}>
          All Prices
        </Button>
        <Button
          variant={compareObjects(priceFilter,{min: 0, max: 50}) ? 'primary' : 'secondary'}
          className='mx-2'
          onClick={() => handlePriceFilter({ min: 0, max: 50 })}>
          $0 - $50
        </Button>
        <Button
          variant={compareObjects(priceFilter,{min: 50, max: 100}) ? 'primary' : 'secondary'}
          className='mx-2'
          onClick={() => handlePriceFilter({ min: 50, max: 100 })}>
          $50 - $100
        </Button>
        <Button
          variant={compareObjects(priceFilter,{min: 100, max: 200}) ? 'primary' : 'secondary'}
          className='mx-2'
          onClick={() => handlePriceFilter({ min: 100, max: 200 })}>
          $100 - $200
        </Button>
      </div>
   <Row xs={1} md={3} className='g-4'>
      {filteredProducts.map((product, index) => (
      <Col align='center' key={index}>
         <ProductCard product={product} categoryFilter={categoryFilter}/>
      </Col>
       )
     )}
   </Row>
   </>
   
   ); 
};

export default Store;