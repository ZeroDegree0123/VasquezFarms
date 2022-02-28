import './App.css';
import { useState } from 'react';
import Auth from '../AuthPage/Auth'
import NewOrder from '../NewOrderPage/NewOrder'
import OrderHistory from '../OrderHistoryPage/OrderHistory'

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      { user ?
          <NewOrder/>
          :
          <Auth/>

      }
    </main>
  );
}


