import './OrderHistory.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderHistoryList from '../../components/OrderHistoryList/OrderHistoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function listOrders() {
      const orderData = await ordersAPI.getOrders();
      setOrders(orderData)
    };
    listOrders();
  }, [])


  return (
    <>
      <main className="order-history-page-container">
        <OrderHistoryList orders={orders}/>
        <OrderDetail/>
        <aside className='aside'>
          <Link to="/orders/new" className="btn btn-sm btn-outline-dark"> <strong>NEW ORDER</strong></Link>
        </aside>
      </main>
    </>
  );
}