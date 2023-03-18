
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
{
   "id": "price_1Mn3kmIFcedB1lSS8C1idnMQ",
   "title": "Wireless Earbuds",
   "price": 59.99,
   "category": 'electronics',
   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQv0VOTPqxGgKgRfGXkCZPQR87r4A6eJeBQ&usqp=CAU"
},
{
   "id": "price_1Mn3mLIFcedB1lSSABe683rd",
   "title": "Leather Wallet",
   "price": 29.99,
   "category": 'fashion',
   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9p-QAPyqT8G0Z-H5i_irkeOVcWdZYPYaH6aU2XDjtxlhDfkVoyuWWGys0xqKEFqYCHUA&usqp=CAU"
},
{
   "id": "price_1Mn3prIFcedB1lSSAFOkg01x",
   "title": "Smartwatch",
   "price": 149.99,
   "category": 'electronics',
   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpv-xMyIXCCVNxEec2xPQwQQqbGoN6Dysltg&usqp=CAU"
},
{
   "id": "price_1Mn3thIFcedB1lSSgrfqioM3",
   "title": "Yoga Mat",
   "price": 39.99,
   "category": 'sports',
   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3NBiBNDlIvj6tRwAkOCjByWXXh_kgsR72w&usqp=CAU"
},
{
   "id": "price_1Mn3ubIFcedB1lSSN0bCEwty",
   "title": "Smart Thermostat",
   "price": 129.99,
   "category": 'home',
   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoh0uCNMqS6a15NyfXcIyPMVgZxOMQu2bHQ&usqp=CAU"
},
{
   "id": "price_1Mn3yqIFcedB1lSS3nVkb9Cb",
   "title": "Robot Vacuum Cleaner",
   "price": 299.99,
   "category": 'home',
   "image": "http://web-usa.oss-us-west-1.aliyuncs.com/batch/20210805/e736dc6afd3fd975cbcf6433ba0d5e05.jpg?v=798525"
}
]

const getProductData=(id)=>{
   let productData=productsArray.find(product =>product.id===id);

   if(productData===undefined){
      console.log('Product data does not exist for ID: ' `${id}` )
      return undefined;
   }
   return productData;
}

function compareObjects(obj1, obj2) {
   // get the keys of the objects
   const keys1 = Object.keys(obj1);
   const keys2 = Object.keys(obj2);
 
   // if the objects have different numbers of keys, they are not equal
   if (keys1.length !== keys2.length) {
     return false;
   }
 
   // iterate over each key and compare the values
   for (let key of keys1) {
     // if the second object does not have the same key, they are not equal
     if (!obj2.hasOwnProperty(key)) {
       return false;
     }
 
     // if the values of the keys are not equal, they are not equal
     if (obj1[key] !== obj2[key]) {
       return false;
     }
   }
 
   // if all keys and values are equal, the objects are equal
   return true;
 }


export {productsArray, getProductData, compareObjects}
