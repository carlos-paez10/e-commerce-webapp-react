
const productsArray=[  
{  
   "id": "price_1MbZiQIFcedB1lSSLn4Wga2x",  
   "title": "Sun Glasses",   
   "price": 19.99,  
   "category": 'fashion',   
"image": "https://cdn.shopify.com/s/files/1/1558/7305/products/Quay_HighKey_MatteBlackBlackPurple_Front.jpg?v=1675754208" 
}, 
{    
   "id": "price_1MbZQMIFcedB1lSScqOm3FiD",   
   "title": "Water Bottle",  
   "price": 9.99, 
   "category": 'personal',     
   "image": "https://contents.mediadecathlon.com/p2201854/k$a8f48801ca4ce6dc42882b2bd8505024/cantimplora-1-l-aluminio-reciclado-tapa-apertura-rapida-senderismo-mh500-azul.jpg?&f=800x800" 
}, 
{  
   "id": "price_1MbZj9IFcedB1lSSU608Ftwk",  
   "title": "Running Shoes",   
   "price": 79.99,   
   "category": 'sports',    
   "image": "https://static.nike.com/a/images/t_default/f07c8068-3696-4127-ad95-f7d9f71b21e4/zoom-fly-5-mens-road-running-shoes-2vVnL4.png" 
}, 

]

const getProductData=(id)=>{
   let productData=productsArray.find(product =>product.id===id);

   if(productData===undefined){
      console.log('Product data does not exist for ID: ' `${id}` )
      return undefined;
   }
   return productData;
}


export {productsArray, getProductData}


/**
 * 
 *
 {    "id": "4",    "title": "Smartphone",    "price": 699.99,    "image": "https://source.unsplash.com/JAQrHJ7WZtM/200x200"  },
{    "id": "5",    "title": "Headphones",    "price": 49.99,    "image": "https://source.unsplash.com/4J9QoutF_hg/200x200"  },
{    "id": "6",    "title": "Fitness Tracker",    "price": 129.99,    "image": "https://source.unsplash.com/_Z_PtmVHmkw/200x200"  }, 
{    "id": "7",    "title": "T-Shirt",    "price": 14.99,    "image": "https://source.unsplash.com/gBzsogfR6NU/200x200"  }, 
{    "id": "8",    "title": "Backpack",    "price": 39.99,    "image": "https://source.unsplash.com/fp7VZzgfgZw/200x200"  },
{    "id": "9",    "title": "Yoga Mat",    "price": 29.99,    "image": "https://source.unsplash.com/eBcKX9F0DBw/200x200"  }, 
{    "id": "10",    "title": "Desktop Computer",    "price": 999.99,    "image": "https://source.unsplash.com/2N_L6Ugnvyk/200x200"  }
 * 
 * 
 */