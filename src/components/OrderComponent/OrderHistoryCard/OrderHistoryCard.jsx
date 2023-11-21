import "./OrderHistoryCard.css"

export default function OrderCard({ order }) {
    return (
        <div className="order-history-card">
            <h5 className="order-history-card-id">Order ID: {order.orderId}</h5>
            <h5 className="order-history-card-id">Shipping Address: {order.user.address}</h5>
            <div className="order-history-card-body">Total Paid: ${order.orderTotal.toFixed(2)}</div>
            <div className="order-history-card-body">For: {order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
            <h6 className="order-history-card-date">Date Of Purchase: {new Date(order.updatedAt).toLocaleDateString()}</h6>
        </div>
    )
}