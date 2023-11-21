import './OrderHistory.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderHistoryList from '../../components/OrderComponent/OrderHistoryList/OrderHistoryList';
import OrderDetail from '../../components/OrderComponent/OrderDetail/OrderDetail';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(function () {
    async function listOrders() {
      const orderData = await ordersAPI.getOrders();
      setOrders(orderData)
    };
    listOrders();
  }, [])


  return (
    <main className="order-history-page-container">
      <Link className="new-orders-link" to="/orders/new"> <strong>NEW ORDER</strong></Link>
      <OrderHistoryList orders={orders} />
    </main>
  );
}