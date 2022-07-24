import './App.css';
import {useState, useEffect, useRef} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as categorysAPI from '../../utilities/categories-api';
import * as soapsAPI from '../../utilities/soaps-api';
import * as ordersAPI from '../../utilities/orders-api';
import Auth from '../AuthPage/Auth';
import AboutPage from '../AboutPage/AboutPage';
import AdminPage from '../AdminPage/AdminPage';
import Footer from '../../components/Footer/Footer';
import HelpPage from '../HelpPage/HelpPage';
import HomePage from '../HomePage/HomePage';
import IngredientsPage from '../IngredientsPage/IngredientsPage';
import NavBar from '../../components/NavBar/NavBar';
import OrderPage from '../OrderPage/OrderPage';
import OrderHistory from '../OrderHistoryPage/OrderHistory';
import ProductsPage from '../ProductsPage/ProductsPage';
import SoapDetailPage from '../SoapDetailPage/SoapDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null)
  const navigate = useNavigate()
/////////////////////////////////
  const [soaps, setSoaps] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cats, setCats] = useState([]);
  const categoryRef = useRef([]);
    // const [loading, setLoading] = useState(true);
  useEffect(function() {
      async function getSoaps() {
          const soapData = await soapsAPI.allSoaps();
          categoryRef.current = soapData.reduce((cats, soap) => {
              const cat = soap.category.name;// turns into string
              return cats.includes(cat) ? cats : [...cats, cat]; 
          }, []);
          setSoaps(soapData)
          setActiveCat(categoryRef.current[0]);// COME BACKTO
      }
      getSoaps();
      //////////
      async function getCart() {
        const cartData = await ordersAPI.getCart();
        setCart(cartData);
      }
      getCart();
      //////////
      async function getCat() {
          const data = await categorysAPI.showCategory();
          setCats(data);
      }
      getCat();
  }, []);

  async function handleAddToOrder(soapId) {
      const updatedCart = await ordersAPI.addSoapToCart(soapId);
      setCart(updatedCart);
    }
  
    async function handleChangeQty(soapId, newQty) {
      const updatedCart = await ordersAPI.setSoapQtyInCart(soapId, newQty);
      setCart(updatedCart);
    }
  
    async function handleCheckout() {
      await ordersAPI.checkout();
      navigate('/orders');
    }
/////////////////////////////////
  function redirect() {
    let path = `/soaps`;
    navigate(path);
  };

  return (
    <main className="App">
        <>
          <NavBar setUser={setUser} user={ user }/>
          <Routes>
            {/* route components in here */}
            {/* <Route path="/admin" element={<AdminPage user={user} soaps={soaps}/>}/> */}
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/soaps" 
              element={<ProductsPage
                user={user} 
                setUser={setUser}
                cart={setCart} 
                categories={categoryRef.current} 
                soaps={soaps} 
                cats={cats} 
                activeCat={activeCat} 
                setActiveCat={setActiveCat}
                handleAddToOrder={handleAddToOrder}/>}/>
            <Route path="/soaps/:soapId" element={<SoapDetailPage soap={soaps}/>}/>
            <Route path="/orders/new" 
              element={<OrderPage
                soaps={soaps}
                cart={cart} 
                user={user} 
                setUser={setUser} 
                handleChangeQty={handleChangeQty} 
                handleCheckout={handleCheckout}/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/help" element={<HelpPage/>}/>
            <Route path="/ingredients" element={<IngredientsPage/>}/>
            <Route path="/orders" element={<OrderHistory order={cart} user={user} setUser={setUser}/>}/>
            <Route path="/login" element={<Auth setUser={setUser} redirect={redirect}/>} />
          </Routes>
          <Footer/>
        </>
    </main>
  );
}


