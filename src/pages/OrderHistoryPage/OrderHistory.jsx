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
        <div className="new-orders-link-container">
          <Link to="/orders/new" className="new-orders-link"> <strong>NEW ORDER</strong></Link>
        </div>
        <OrderHistoryList orders={orders}/>
        <OrderDetail/>
      </main>
    </>
  );
}