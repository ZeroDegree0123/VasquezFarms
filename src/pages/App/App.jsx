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
import ProfilePage from '../ProfilePage/ProfilePage'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null)
  const [soaps, setSoaps] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cats, setCats] = useState([]);
  const categoryRef = useRef([]);
  const navigate = useNavigate()
  // const [loading, setLoading] = useState(true);

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
      alert('Added to cart')
      const updatedCart = await ordersAPI.addSoapToCart(soapId);
      setCart(updatedCart);
    }

  // NAVIGATE FUNCTIONS
  function redirect() {
    let path = `/soaps`;
    navigate(path);
  };
  
  return (
    <main className="App">
        <>
          <NavBar setUser={setUser} user={ user }/>
          <Routes>
            //ADMIN
            {/* <Route path="/admin" 
              element={<AdminPage 
              user={user} 
              soaps={soaps} 
              cats={cats}/>}/> */}
            //PRODUCTS
            <Route path="/soaps" 
              element={<ProductsPage
                user={user} 
                categories={categoryRef.current} 
                soaps={soaps} 
                cats={cats} 
                activeCat={activeCat} 
                setActiveCat={setActiveCat}
                handleAddToOrder={handleAddToOrder}/>}/>
            //SOAPDETAIL
            <Route path="/soaps/:soapId" 
              element={<SoapDetailPage/>}/>
            //NEWORDER
            <Route path="/orders/new" 
              element={<OrderPage
                soaps={soaps}/>}/>
            //LOGIN/SIGNUP
            <Route path="/login"
              element={<Auth 
                setUser={setUser} 
                redirect={redirect}/>}/>
            //Profile
            <Route path="/profile" 
              element={<ProfilePage
                user={user}/>}/>

            //
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/help" element={<HelpPage/>}/>
            <Route path="/ingredients" element={<IngredientsPage/>}/>
            <Route path="/orders" element={<OrderHistory/>}/>
          </Routes>
          <Footer/>
        </>
    </main>
  );
}


