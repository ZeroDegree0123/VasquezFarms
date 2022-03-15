import './OrderHistory.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistory({user, setUser}) {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function listOrders() {
      const orderData = await ordersAPI.getOrders();
      setOrders(orderData)
    };
    listOrders();
  }, [])


  return (
    <main className="OrderHistoryPage">
      <aside className='aside'>
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
      </aside>
      <OrderList orders={orders}/>
      <OrderDetail/>
      {/* Render an OrderList component (needs to be coded) */}
      {/* Render the existing OrderDetail component */}
    </main>
  );
}