import './App.css';
import {useState, useEffect, useRef} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
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
import ProfilePage from '../ProfilePage/ProfilePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null)
  const [soaps, setSoaps] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cats, setCats] = useState([]);

  const categoryRef = useRef([]);
  const navigate = useNavigate()

  useEffect(function() {
    // GETS SOAP DATA
    async function getSoaps() {
      const soapData = await soapsAPI.allSoaps();
      categoryRef.current = soapData.reduce((cats, soap) => {
          const cat = soap.category.name;// turns into string
          return cats.includes(cat) ? cats : [...cats, cat]; 
      }, []);
      setSoaps(soapData)
      setActiveCat(categoryRef.current[0]);
    }
    getSoaps();

    // GETS CATEGORY DATA
    async function getCat() {
      const catData = await categorysAPI.showCategory();
      setCats(catData);
    }
    getCat();

  }, []);

  // HANDLE FUNCTIONS
  async function handleAddToOrder(soapId) {
    const updatedCart = await ordersAPI.addSoapToCart(soapId);
    setCart(updatedCart);
    }

  // NAVIGATE FUNCTIONS
  function redirect() {
    let path = `/soaps`;
    navigate(path);
  };

  window.scrollTo(0, 0);
  
  return (
    <main className="App">
      <Helmet>
        <title>VasquezFarms</title>
      </Helmet>
      <Routes>
        {/* //ADMIN */}
        {/* <Route path="/admin" 
          element={<AdminPage 
            user={user} 
            soaps={soaps} 
          cats={cats}/>}/> */}
        <Route path="/" 
          element={<HomePage 
            cart={cart} 
            setUser={setUser} 
            user={user}
            redirect={redirect} />}/>
        {/* //PRODUCTS */}
        <Route path="/soaps" 
          element={<ProductsPage
            user={user} 
            categories={categoryRef.current} 
            soaps={soaps} 
            cats={cats} 
            activeCat={activeCat} 
            setActiveCat={setActiveCat}
            handleAddToOrder={handleAddToOrder}/>}/>
        {/* //SOAPDETAIL */}
        <Route path="/soaps/:soapId/*" 
          element={<SoapDetailPage
            user={user}
            handleAddToOrder={handleAddToOrder}/>}/>
        {/* //NEWORDER */}
        <Route path="/orders/new/*" 
          element={<OrderPage
            user={user}
            soaps={soaps}/>}/>
        {/* //LOGIN/SIGNUP */}
        <Route path="/login"
          element={<Auth 
            setUser={setUser} 
            redirect={redirect}/>}/>
        {/* //Profile */}
        <Route path="/profile/*" 
          element={<ProfilePage
            setUser={setUser}
            cart={cart}
            user={user}/>}/>

        <Route path="/about" element={<AboutPage user={user}/>}/>
        <Route path="/help" element={<HelpPage/>}/>
        <Route path="/ingredients" element={<IngredientsPage user={user}/>}/>
        <Route path="/orders" element={<OrderHistory user={user}/>}/>
        {/* <Route path={`/soaps/:id/review-form`} element={<ReviewForm user={user}/>}/> */}
      </Routes>
      <Footer/>
    </main>
  );
}


