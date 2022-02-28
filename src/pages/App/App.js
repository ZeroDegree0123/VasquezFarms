import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../AuthPage/Auth'
import NewOrder from '../NewOrderPage/NewOrder'
import OrderHistory from '../OrderHistoryPage/OrderHistory'

export default function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      { user ?
          <Routes>
            {/* route components in here */}
            <Route path="/orders/new" element={<NewOrder/>} />
            <Route path="/orders" element={<OrderHistory/>}/>
          </Routes>
          :
          <Auth/>

      }
    </main>
  );
}


