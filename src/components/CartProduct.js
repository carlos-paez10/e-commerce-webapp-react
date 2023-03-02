import  Button  from "react-bootstrap/Button"
import { CartContext } from "../CartContext"
import { getProductData } from "../productsStore"
import { useContext } from "react"

const CartProduct = ({id, quantity}) =>{
   const cart =useContext(CartContext);
   const productData=getProductData(id);

   return (
      <>
      <h3>{productData.title}</h3>
      <img width={125} src={productData.image} alt={productData.id}></img>
      <p>Quantity: {quantity}</p>
      <p>${(quantity*productData.price).toFixed(2)}</p>
      <Button size='sm' onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
      <hr></hr>   
      </>


   )

}

export default CartProduct;