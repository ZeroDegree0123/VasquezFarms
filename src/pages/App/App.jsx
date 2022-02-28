import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../AuthPage/Auth';
import NewOrder from '../NewOrderPage/NewOrder';
import OrderHistory from '../OrderHistoryPage/OrderHistory';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      { user ?
        <>
          <NavBar/>
          <Routes>
            {/* route components in here */}
            <Route path="/orders/new" element={<NewOrder/>} />
            <Route path="/orders" element={<OrderHistory/>}/>
          </Routes>
        </>
          :
          <Auth/>

      }
    </main>
  );
}


