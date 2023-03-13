import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // converted my button cart right up to blue and my NavBar Brand bigger

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AboutUs from './pages/AboutUs';
import Cancel from './pages/Cancel';
import CartProvider from './CartContext';
import Contact from './pages/Contact'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import NavbarComponent from './components/NavBar';
import ProductPage from './pages/ProductPage'
import Store from './pages/Store';
import Success from './pages/Success';

function App() {
  return (
 <CartProvider>
   <Container >
     <NavbarComponent> </NavbarComponent>
     <BrowserRouter>
     <Routes>
      <Route index element={<Store/>} />
      <Route path='/success' element={<Success/>} />
      <Route path='/cancel' element={<Cancel/>} />
      <Route path='/products/:productId' element={<ProductPage/>} />
      {/* Routes for navbar links*/}
      <Route index element={<Store />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     </BrowserRouter>
     <Footer/>  
   </Container>
  </CartProvider>

  );
}

export default App;


//      <Route path='products/:productId' element={<ProductPage/>} />