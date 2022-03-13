import { Link } from 'react-router-dom';

export default function OrderHistory({ user, setUser }) {
  return (
    <main className="OrderHistoryPage">
      <aside>

        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
      </aside>
      {/* Render an OrderList component (needs to be coded) */}

      {/* Render the existing OrderDetail component */}

    </main>
  );
}