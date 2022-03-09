import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Auth from '../AuthPage/Auth';
import HomePage from '../HomePage/HomePage';
import SoapList from '../SoapListPage/SoapList';
import OrderHistory from '../OrderHistoryPage/OrderHistory';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate()

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
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/soaps" element={<SoapList/>} />
            <Route path="/orders" element={<OrderHistory/>}/>
            <Route path="/login" element={<Auth setUser={setUser} redirect={redirect}/>} />
          </Routes>
        </>
    </main>
  );
}


