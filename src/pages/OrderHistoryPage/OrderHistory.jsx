import './OrderHistory.css'
import { Link } from 'react-router-dom';
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'

export default function OrderHistory({ user, setUser, order }) {
  return (
    <main className="OrderHistoryPage">
      <aside className='aside'>
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
      </aside>
      {/* Render an OrderList component (needs to be coded) */}
      <OrderList order={order}/>
      {/* Render the existing OrderDetail component */}
      <OrderDetail/>
    </main>
  );
}