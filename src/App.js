import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // converted my button cart right up to blue and my NavBar Brand bigger

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Cancel from './pages/Cancel';
import CartProvider from './CartContext';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import NavbarComponent from './components/NavBar';
//import ProducdCard from './components/ProductCard';
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
      <Route path='success' element={<Success/>} />
      <Route path='cancel' element={<Cancel/>} />
     </Routes>
     </BrowserRouter>
     <Footer/>
   </Container>
  </CartProvider>

  );
}

export default App;
