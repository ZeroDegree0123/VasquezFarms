import './App.css';
import {useState, useEffect, useRef} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as categorysAPI from '../../utilities/categories-api';
import * as soapsAPI from '../../utilities/soaps-api';
import Auth from '../AuthPage/Auth';
import AdminPage from '../AdminPage/AdminPage';
import HomePage from '../HomePage/HomePage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistory from '../OrderHistoryPage/OrderHistory';
import NavBar from '../../components/NavBar/NavBar';
import SoapDetailPage from '../SoapDetailPage/SoapDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null)
  const navigate = useNavigate()
/////////////////////////////////
  const [soaps, setSoaps] = useState([]);
  const [toggleCat, setToggleCat] = useState('');
  const [cats, setCats] = useState([]);
  const categoryRef = useRef([]);
    // const [loading, setLoading] = useState(true);
    useEffect(function() {
        async function getSoaps() {
            const soapData = await soapsAPI.showSoap();
            categoryRef.current = soapData.reduce((cats, soap) => {
                const cat = soap.category.name;
                return cats.includes(cat) ? cats : [...cats, cat]; 
            }, []);
            setSoaps(soapData)
            setToggleCat(categoryRef.current.name)
        }
        getSoaps();
        async function getCat() {
            const data = await categorysAPI.showCategory();
            setCats(data);
        }
        getCat();
    }, []);
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
            <Route path="/admin" element={<AdminPage soaps={soaps}/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/soaps" element={<ProductsPage soaps={soaps} cats={cats} toggleCat={toggleCat} setToggleCat={setToggleCat} />} />
            <Route path="/soaps/:soapName" element={<SoapDetailPage soaps={soaps}/>}/>
            <Route path="/orders" element={<OrderHistory/>}/>
            <Route path="/login" element={<Auth setUser={setUser} redirect={redirect}/>} />
          </Routes>
        </>
    </main>
  );
}


