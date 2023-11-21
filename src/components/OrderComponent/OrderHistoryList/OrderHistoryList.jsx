import './OrderHistoryList.css'
import OrderHistoryCard from "../OrderHistoryCard/OrderHistoryCard";

export default function OrderList({ orders }) {
    const allOrders = orders.map(order =>
        <OrderHistoryCard
            key={order._id}
            order={order}
        />
    );

    return (
        <div className="order-list">
            {allOrders.length ?
                allOrders
                :
                <span>You havn't made any orders yet</span>}
        </div>
    )
} 